import { useRef } from "react";
import { validChange } from "../../../js/auxStat";

const Modal = ({ modal, setModal, stat, setStat }) => {
    const background = useRef();
    const container = useRef();
    const header = useRef();
    const subtitle = useRef();
    const dvText = useRef();
    const yesButton = useRef();
    const noButton = useRef();

    const closeModal = () => {
        const TIME_FOR_CLOSE_IN_MS = 1200;

        setTimeout(() => {
            setModal({});
        }, TIME_FOR_CLOSE_IN_MS);

        background.current.className = "absolute bottom-0 w-screen h-screen z-10 opacity-80 animate-fadeOutModalBackground bg-transparent";
        container.current.className = "w-[750px] h-[600px] z-30 py-3 px-6 rounded-xl animate-fadeOutModal bg-transparent text-transparent";
        header.current.className = "relative w-full inline-flex animate-fadeOu tModalText";
        if (modal.subtitle) subtitle.current.className = "mt-2 animate-fadeOutModalText";
        dvText.current.className = "mt-40 animate-fadeOutModalText";
        if (modal.buttons) {
            yesButton.current.className = "w-5/12 h-[32px] bg-zinc-800 rounded-md text-lg animate-fadeOutModalButton";
            noButton.current.className = "w-5/12 h-[32px] bg-zinc-800 rounded-md text-lg animate-fadeOutModalButton";
        }
    }

    const handleYes = () => {
        const yes = modal.buttons.yes;
        const changeStat = modal["stat-change"];
        const positiveRate = (yes["positive-rate"] > Math.random());

        let changeValue =  Math.floor(Math.random() * yes["max-change"] + 1);
        changeValue = positiveRate ? changeValue : -changeValue;
        
        const newStat = stat;
        newStat[changeStat] = validChange(stat[changeStat], changeValue);
        setStat(newStat);
        closeModal();
    }

    const handleNo = () => {
        const no = modal.buttons.no;
        const changeStat = modal["stat-change"];
        const positiveRate = (no["positive-rate"] > Math.random());

        let changeValue =  Math.floor(Math.random() * no["max-change"] + 1);
        changeValue = positiveRate ? changeValue : -changeValue;
        
        const newStat = stat;
        newStat[changeStat] = validChange(stat[changeStat], changeValue);
        setStat(newStat);
        closeModal();
    }

    return (
        <>
            <div ref={background} className="absolute bottom-0 w-screen h-screen z-10 opacity-80 animate-fadeInModalBackground bg-black">
            </div>
            <div className="absolute bottom-0 w-screen h-screen z-20 flex items-center justify-center bg-transparent">
                <div ref={container} className="w-[750px] h-[600px] z-30 flex flex-col py-3 px-6 rounded-xl animate-fadeInModal bg-zinc-900 text-zinc-500">
                    <div ref={header} className="relative w-full inline-flex animate-fadeInModalText">
                        {modal.title && <h5 className="text-xl uppercase tracking-widest text-center">{modal.title}</h5>}
                        {!modal.buttons && <button onClick={closeModal} className="absolute right-0 text-xl">X</button>}
                    </div>
                    <div ref={subtitle} className="mt-2 animate-fadeInModalText">
                        {modal.subtitle && <p>{modal.subtitle}</p>}
                    </div>
                    <div ref={dvText} className="mt-40 flex-grow animate-fadeInModalText">
                        {modal.stats && modal.stats.split('{break}').map((stat, index) => (
                            <p key={index} className="text-2xl">{stat}</p>
                        ))}
                        {modal.text && <p className="text-justify text-lg">{modal.text}</p>}
                    </div>
                    {modal.buttons && (
                        <div className="w-full inline-flex justify-between [&>button]:w-5/12 [&>button]:h-[32px]
                        [&>button]:bg-zinc-800 [&>button]:rounded-md [&>button]:text-lg [&>button]:animate-fadeInModalButton">
                            <button ref={yesButton} onClick={handleYes} className="transition duration-300 hover:bg-zinc-700 active:bg-zinc-600">{modal.buttons.yes.text}</button>
                            <button ref={noButton} onClick={handleNo} className="transition duration-300 hover:bg-zinc-700 active:bg-zinc-600">{modal.buttons.no.text}</button>
                        </div>
                    )}
                </div>
            </div>
        </>

    );
};

export default Modal;