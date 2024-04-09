import { useNavigate } from "react-router-dom"
import "./Main.scss"

export default function Main(){
    const nav = useNavigate();
    return(<div className="Main">
        <div>
            <h3>Смотри статистику матчей только у нас!!!!</h3>
            <button onClick={()=>{nav("/listlig");}}>Смотреть список лиг</button>
            <button onClick={()=>{nav("/listcom");}}>Смотреть список команд</button>
        </div>
        <img />
    </div>)
}