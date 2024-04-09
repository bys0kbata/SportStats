import { useEffect, useState } from "react";
import "./ProfileCom.scss"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProfileComm(){
    const href = window.location.href;
    const idCom= href.match(/\d+$/);
    const [data, setData]= useState([]);
    const [squad, setSquad]= useState([]);
    const nav = useNavigate();
    const config =   {headers: {
        'X-Auth-Token':'1fe2051c3808448ca25c9cae41e88191'  
      }}
    useEffect( ()=>{
        axios.get("https://api.football-data.org/v4/teams/"+idCom, config)
        .then((req)=>{
            setData(req.data);
            console.log(data);
            setSquad(req.data.squad);
        })
    },[])
    return(
        <div className="ProfilePlayer">
            <div className="ProfileCom">
            <img src={data.crest}  />
                <div><h4>Название: {data.name}</h4>
                <h4>Адрес: {data.address}</h4>
                <h4>Тренер: {data.coach?.name}</h4>
                <h4>Веб-сайт: {data.website}</h4>
                <h4>Цвета команды: {data.clubColors}</h4></div>
            </div>
            <table>
                <thead>Игроки команды</thead>
                <tr>
                    <th> ФИО</th>
                    <th> Позиция</th>
                    <th></th>
                </tr>
                    {squad.map((one)=>{
                        return(
                            <tr key={squad.id}>
                                <td>{one.name}</td>
                                <td>{one.position}</td>
                                <td><button onClick={()=>{nav(`/profileplayer/${one.id}`);}}>👁️</button></td>
                            </tr>
                        )
                    })}
                    
            </table>
        </div>
    )


}