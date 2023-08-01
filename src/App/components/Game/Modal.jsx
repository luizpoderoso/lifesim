const Modal = ({ modal, setModal }) => {
    const closeModal = () => {
        const TIME_FOR_CLOSE_IN_MS = 1000;

        setTimeout(() => {
            setModal({});
        }, TIME_FOR_CLOSE_IN_MS);

        
    }
    
    return (
        <>
            <div className="absolute bottom-0 w-screen h-screen z-10 opacity-80 animate-fadeInModalBackground bg-black">
            </div>
            <div className="absolute bottom-0 w-screen h-screen z-20 flex items-center justify-center bg-transparent">
                <div className="w-[750px] h-[600px] z-30 py-3 px-6 rounded-xl animate-fadeInModal bg-zinc-900 text-zinc-500">
                    <div className="relative w-full inline-flex">
                        {modal.title && <h5 className="text-xl uppercase tracking-widest text-center animate-fadeInModalText">{modal.title}</h5>}
                        <button onClick={closeModal} className="absolute right-0 text-xl animate-fadeInModalText">X</button>
                    </div>
                    {modal.subtitle && <p className="mt-2 animate-fadeInModalText">{modal.subtitle}</p>}
                    <div className="mt-40">
                        {modal.stats && modal.stats.split('{break}').map((stat, index) => (
                            <p key={index} className="animate-fadeInModalText text-2xl">{stat}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Modal;