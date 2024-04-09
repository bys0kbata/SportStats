import { useNavigate } from "react-router-dom"
import "./NotFound.scss"
export default function NotFound(){
    const nav = useNavigate();
    return(
        <div className="NotFound">
            <h1>Страница не найдена</h1>
            <h2>Error 404</h2>
            <button onClick={()=>{nav("/");}}>Вернуться на главную страницу</button>
        </div>
    )
}