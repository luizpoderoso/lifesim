import { Route, Routes } from "react-router-dom";
import Home from "./body-components/Home";

const Body = ({ profile, log }) => {
    return (
        <main className="flex-grow container bg-zinc-900">
            <Routes>
                <Route path="/" element={<Home log={log} />} />
            </Routes>
        </main>
    );
}

export default Body;