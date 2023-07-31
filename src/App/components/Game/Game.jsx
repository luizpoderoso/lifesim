import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Log from "../../../api/log/js/LogRequires";

const Game = ({ profile }) => {
    const requireLog = new Log(profile.gender);
    const [log, setLog] = useState([requireLog.birth(89)]);

    return (
        <>
            <Header />
            <Body profile={profile} log={log} />
            <Footer profile={profile} />
        </>
    );
};

export default Game;
