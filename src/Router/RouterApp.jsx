import { Route, Routes } from "react-router-dom";
import Main from "../Pages/Main/Main";
import ListLig from "../Pages/ListLig/ListLig";
import ListCom from "../Pages/ListCom/ListCom";
import ProfilePlayer from "../Pages/ProfilePlayer/ProfilePlayer";
import ProfileComm from "../Pages/ProfileCom/ProfileCom";
import ListMatchComr from "../Pages/ListMatchCom/ListMatchCom";
import ListMatchLiga from "../Pages/ListMatchLiga/ListMatchLiga";

export default function RouterApp(){
    return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/listlig" element={<ListLig />} />
            <Route path="/listcom" element={<ListCom />} />
            <Route path="/profileplayer/*" element={<ProfilePlayer />} />
            <Route path="/profilecomm/*" element={<ProfileComm />} />
            <Route path="/listmatchlig" element={<ListMatchLiga />} />
            <Route path="/listmatchcomm" element={<ListMatchComr />} />
            <Route path="/*" element={<ListMatchComr />} />
        </Routes>
    )
}