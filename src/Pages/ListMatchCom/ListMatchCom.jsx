import { useEffect, useState } from "react"
import "./ListMatchCom.scss"
import axios from "axios"
import { TOKEN } from "../../../config";
import Loader from "../Loader/Loader";

export default function ListMatchComr(){
    const href = window.location.href;
    const idCom= href.match(/\d+$/);
    //const [DateFrom, setDF]= useState();
    //const [DateTo, setDT]= useState();
    const [name,setname] = useState();
    const [dataMatch,setDM] = useState(null);
   // const [Vis, setVis]=useState(false);
    const config =   {headers: {
        'X-Auth-Token':TOKEN
      }}
    useEffect(()=>{
        axios.get(`https://api.football-data.org/v4/teams/${idCom}`,config)
        .then((req)=>{
            setname(req.data.name);
        })
        axios.get(`https://api.football-data.org/v4/teams/${idCom}/matches`,config)
        .then((req)=>{
            setDM(req.data.matches);
        })
      },[])
    return(
        <div>
            {dataMatch ?
        <div className="ListMatchCom">
            <h1>Матчи Команды {name}</h1>
            {/* <div className="TimeData">
                <h2>Временной промежуток</h2>
                <h3>Выберите начало</h3>
                <input type="date" onChange={(e)=>{setDF(e.target.value)}} />
                <h3>Выберите конец</h3>
                <input type="date" onChange={(e)=>{setDT(e.target.value)}} />
                {Vis && <h3>Сначало выберите временной промежуток</h3>}
                <button onClick={(e)=>{e.preventDefault(); onBtn();}}>Выбрать</button>
            </div> */}
            <table>
                <tr>
                    <th>Домашняя команда</th>
                    <th>Гостевая команда</th>
                    <th>Счет</th>
                    <th>Даты проведения</th>
                </tr>
                {
                    dataMatch.map((one)=>{
                        return(
                            <tr key={one.id}>
                                <td>{one.homeTeam?.name}</td>
                                <td>{one.awayTeam?.name}</td>
                                <td>{one.score.fullTime.home}-{one.score.fullTime.away}</td>
                                <td>{one.utcDate}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
        : <Loader />}</div>
    )
}