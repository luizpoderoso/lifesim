const Modal = ({ modal, setModal }) => {
    return (
        <>
            <div className="absolute bottom-0 w-screen h-screen z-10 opacity-80 bg-black">
            </div>
            <div className="absolute bottom-0 w-screen h-screen z-20 flex items-center justify-center bg-transparent">
                <div className="relative w-[750px] h-[600px] z-30 rounded-xl bg-zinc-900 text-zinc-500">
                    <div className="inline-flex">
                        {modal.title && <h5 className="text-center"></h5>}
                        <button onClick={() => setModal({})} className="absolute right-6 text-xl">X</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Modal;