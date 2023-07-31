import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Log from "../../../api/log/js/LogRequires";

const Game = ({ profile }) => {
    const [age, setAge] = useState(0);
    const [stat, setStat] = useState({
        hapiness: Math.ceil(Math.random() * 100), healthiness: Math.ceil(Math.random() * 100),
        lookness: Math.ceil(Math.random() * 100), smartness: Math.ceil(Math.random() * 100)
    });
    const requireLog = new Log(profile.gender);
    const [log, setLog] = useState([requireLog.birth(stat.hapiness)]);

    return (
        <>
            <Header />
            <Body profile={profile} log={log} />
            <Footer profile={profile} age={age} setAge={setAge} stat={stat} setStat={setStat} log={log} setLog={setLog} requireLog={requireLog} />
        </>
    );
};

export default Game;
