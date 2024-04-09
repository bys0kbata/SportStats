import { useEffect, useState } from "react"
import "./ListMatchLiga.scss"
import axios from "axios"

export default function ListMatchLiga(){
    const href = window.location.href;
    const idCom= href.match(/\d+$/);
    const [DateFrom, setDF]= useState();
    const [DateTo, setDT]= useState();
    const [data,setData] = useState();
    const [dataMatch,setDM] = useState([]);
    const [Vis, setVis]=useState(false);
    const config =   {headers: {
        'X-Auth-Token':'1fe2051c3808448ca25c9cae41e88191'  
      }}
    useEffect(()=>{
        axios.get(`https://api.football-data.org/v4/competitions/${idCom}`,config)
        .then((req)=>{
            setData(req.data.name);
        })
      },[])
    const onBtn = ()=>{
        if(DateTo && DateFrom){
        axios.get(`https://api.football-data.org/v4/competitions/${idCom}/matches?dateFrom=${DateFrom}&dateTo=${DateTo}`,config)
        .then((req)=>{
            setDM(req.data.matches);
        })}
        else{
            setVis(true)
        }
    }
    return(
        <div className="ListMatchLiga">
            <h1>Матчи Лиги {data}</h1>
            <div className="TimeData">
                <h2>Временной промежуток</h2>
                <h3>Выберите начало</h3>
                <input type="date" onChange={(e)=>{setDF(e.target.value)}} />
                <h3>Выберите конец</h3>
                <input type="date" onChange={(e)=>{setDT(e.target.value)}} />
                {Vis && <h3>Сначало выберите временной промежуток</h3>}
                <button onClick={(e)=>{e.preventDefault(); onBtn();}}>Выбрать</button>
            </div>
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
                                <td>{one.score.fullTime.home}:{one.score.fullTime.away}</td>
                                <td>{one.utcDate}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}