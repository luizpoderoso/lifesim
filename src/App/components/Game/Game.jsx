import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Game = ({ profile }) => {
    const [log, setLog] = useState([`nasceu`]);

    return (
        <>
            <Header />
            <Body profile={profile} log={log} />
            <Footer profile={profile} />
        </>
    );
};

export default Game;
