import { useState } from "react";
import Modal from "./Modal";

const Footer = ({ profile, age, setAge, stat, setStat, log, setLog, requireLog }) => {
    const texts = require('../../../api/texts/footer.json');
    const [modal, setModal] = useState({});

    const handleAgeClick = () => {
        setAge(age + 1);
        setStat(statChange(stat));
        setLog([requireLog.event(age + 1), ...log]);
    }

    const handleNameClick = () => {
        setModal({
            title: texts["modal-title"],
            stats: `${texts["modal-healthiness"]}: ${stat.healthiness}{break}
                   ${texts["modal-hapiness"]}: ${stat.hapiness}{break}
                   ${texts["modal-smartness"]}: ${stat.smartness}{break}
                   ${texts["modal-lookness"]}: ${stat.lookness}{break}`
        })
    }

    return (
        <footer className="container flex justify-center items-center py-2 bg-zinc-800">
            <button onClick={handleAgeClick} className="w-[48px] h-[48px] rounded-md flex items-center justify-center text-4xl bg-zinc-900">+</button>
            <button onClick={handleNameClick} className="ml-2 text-2xl">{profile.name} {profile.surname}</button>
            {Object.keys(modal).length !== 0 && <Modal modal={modal} setModal={setModal} />}
        </footer>
    );
};

export default Footer;

const statChange = (stat) => {
    const newStat = {};
    for (const [key, value] of Object.entries(stat)) {
        const isNegative = Math.floor(Math.random() * 2);
        let ADD_OR_SUBTRACT = (Math.floor(Math.random() * 3));
        ADD_OR_SUBTRACT = isNegative ? -ADD_OR_SUBTRACT : ADD_OR_SUBTRACT;

        newStat[key] = ((value + ADD_OR_SUBTRACT < 0) || (value + ADD_OR_SUBTRACT > 100))
            ? value + ADD_OR_SUBTRACT
            : value;
    }
    return newStat;
}