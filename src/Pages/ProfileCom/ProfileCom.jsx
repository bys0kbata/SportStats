import { useEffect, useState } from "react";
import "./ProfileCom.scss"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProfileComm(){
    const href = window.location.href;
    const idCom= href.match(/\d+$/);
    const [data, setData]= useState([]);
    const nav = useNavigate();
    const config =   {headers: {
        'X-Auth-Token':'1fe2051c3808448ca25c9cae41e88191'  
      }}
    useEffect( ()=>{
        axios.get("https://api.football-data.org/v4/teams/"+idCom, config)
        .then((req)=>{
            setData(req.data);
            console.log(data);
        })
    },[])
    return(
        <div className="ProfilePlayer">
            <div className="ProfileCom">
                <img  />
                <h4>Название: {data.name}</h4>
                <h4>Адрес: {data.address}</h4>
                <h4>Тренер: {data}</h4>
                <h4>Веб-сайт: {data.website}</h4>
                <h4>Цвета команды: {data.clubcolor}</h4>
            </div>

        </div>
    )


}