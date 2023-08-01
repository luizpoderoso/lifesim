import { useRef } from "react";

const Modal = ({ modal, setModal }) => {
    const background = useRef();
    const container = useRef();
    const header = useRef();
    const subtitle = useRef();
    const dvText = useRef();

    const closeModal = () => {
        const TIME_FOR_CLOSE_IN_MS = 1200;

        setTimeout(() => {
            setModal({});
        }, TIME_FOR_CLOSE_IN_MS);

        background.current.className = "absolute bottom-0 w-screen h-screen z-10 opacity-80 animate-fadeOutModalBackground bg-transparent";
        container.current.className = "w-[750px] h-[600px] z-30 py-3 px-6 rounded-xl animate-fadeOutModal bg-transparent text-transparent";
        header.current.className = "relative w-full inline-flex animate-fadeOu tModalText";
        subtitle.current.className = "mt-2 animate-fadeOutModalText";
        dvText.current.className = "mt-40 animate-fadeOutModalText";
    }

    return (
        <>
            <div ref={background} className="absolute bottom-0 w-screen h-screen z-10 opacity-80 animate-fadeInModalBackground bg-black">
            </div>
            <div className="absolute bottom-0 w-screen h-screen z-20 flex items-center justify-center bg-transparent">
                <div ref={container} className="w-[750px] h-[600px] z-30 py-3 px-6 rounded-xl animate-fadeInModal bg-zinc-900 text-zinc-500">
                    <div ref={header} className="relative w-full inline-flex animate-fadeInModalText">
                        {modal.title && <h5 className="text-xl uppercase tracking-widest text-center">{modal.title}</h5>}
                        <button onClick={closeModal} className="absolute right-0 text-xl">X</button>
                    </div>
                    <div ref={subtitle} className="mt-2 animate-fadeInModalText">
                        {modal.subtitle && <p>{modal.subtitle}</p>}
                    </div>
                    <div ref={dvText} className="mt-40 animate-fadeInModalText">
                        {modal.stats && modal.stats.split('{break}').map((stat, index) => (
                            <p key={index} className="text-2xl">{stat}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Modal;