import { useEffect, useState } from "react";
import "./ListCom.scss"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TOKEN } from "../../../config";

export default function ListCom(){
    const [listComm,setLL] = useState([]);
    const [CountComm, setCL] = useState();
    const nav = useNavigate();
    const config =   {headers: {
        'X-Auth-Token': TOKEN,  
      }}
   useEffect(()=>{axios.get(`https://api.football-data.org/v4/teams/`, config )
    .then((req)=>{
        console.log(req);
        setLL(req.data.teams);
        setCL(req.data.count);
    })
},[])

    return(
        <div className="ListCom">
            <h2>Список Команд</h2>
            <h3>Количество команд: {CountComm}</h3>
            <table>
                <tr>
                    <th>
                        Эмблема
                    </th>
                    <th>
                        Наименование Команды
                    </th>
                    <th>
                        Адрес Команды
                    </th>
                    <th>
                    </th>
                </tr>
                {
                    listComm.map((oneComm)=>{
                        return(
                            <tr key={oneComm.id}>
                                <td><img src={oneComm.crest}/></td>
                                <td>{oneComm.name}</td>
                                <td>{oneComm.address}</td>
                                <td><button onClick={()=>{nav(`/profilecomm/${oneComm.id}`);}}>👁️</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}