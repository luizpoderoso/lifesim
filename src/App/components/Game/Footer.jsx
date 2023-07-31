const Footer = ({ profile, age, setAge, stat, setStat, log, setLog, requireLog }) => {
    const handleAgeClick = () => {
        setAge(age + 1);
        setStat(statChange(stat));
        setLog([requireLog.event(age + 1), ...log]);
    }

    return (
        <footer className="container flex justify-center items-center py-2 bg-zinc-800">
            <button onClick={handleAgeClick} className="w-[48px] h-[48px] rounded-md flex items-center justify-center text-4xl bg-zinc-900">+</button>
            <span className="ml-2 text-2xl">{profile.name} {profile.surname}</span>
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