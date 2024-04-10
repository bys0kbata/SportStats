import { useEffect } from "react"
import "./ListLig.scss"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../../../config";
import Loader from "../Loader/Loader";

export default function ListLig(){
    const [listLigs,setLL] = useState(null);
    const [CountLigs, setCL] = useState();
    const nav = useNavigate();
    const config =   {headers: {
        'X-Auth-Token': TOKEN,  
      }}
   useEffect(()=>{axios.get(`https://api.football-data.org/v4/competitions`, config )
    .then((req)=>{
        console.log(req);
        setLL(req.data.competitions);
        setCL(req.data.count);
    })
},[])

    return(
        <div>
            {listLigs ?
        <div className="ListLig">
            <h2>Список Лиг</h2>
            <h3>Количество лиг:{CountLigs}</h3>
            <table>
                <tr>
                    <th>
                        Наименование Лиги
                    </th>
                    <th>
                        Страна Лиги
                    </th>
                    <th>
                    </th>
                </tr>
                {
                    listLigs.map((oneLig)=>{
                        return(
                            <tr key={oneLig.id}>
                                <td>{oneLig.name}</td>
                                <td>{oneLig.area.name}</td>
                                <td><button onClick={()=>{nav(`/listmatchlig/${oneLig.id}`);}}>👁️</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
        : <Loader />}</div>
    )

}