import { useEffect, useState } from "react"
import "./ProfilePlayer.scss"
import axios from "axios";
import { TOKEN } from "../../../config";
import { useNavigate } from "react-router-dom";

export default function ProfilePlayer(){
    const href = window.location.href;
    const idPers= href.match(/\d+$/);
    const [data, setData]= useState([]);
    const nav = useNavigate();
    const config =   {headers: {
        'X-Auth-Token':TOKEN 
      }}
    useEffect( ()=>{
        axios.get("https://api.football-data.org/v4/persons/"+idPers, config)
        .then((req)=>{
            setData(req.data);
            console.log(data);
        })
    },[])
    return(
        <div className="ProfilePlayer">
            <div className="Profile">
                <h4>Имя: {data.name}</h4>
                <h4>Фамилия: {data.firstName}</h4>
                <h4>Отчество: {data.lastName}</h4>
                <h4>Позиция: {data.position}</h4>
            </div>
            <div className="Com">
                <img src="" />
                <h4>Название: {data.currentTeam?.name}</h4>
                <h4>Адрес: {data.currentTeam?.address}</h4>
            
                <button onClick={()=>{nav(`/profilecomm/${data.currentTeam?.id}`);}}>Посмотреть</button>
            </div>

        </div>
    )

}