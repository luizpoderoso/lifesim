import { useEffect, useRef } from "react";

const Home = ({ log }) => {
    const container = useRef();

    useEffect(() => {
        container.current.scrollIntoView({ behavior: "auto" });
    }, [log])

    return (
        <div className="w-full min-h-[770px] max-h-[770px] bg-zinc-950 rounded-xl my-[2%] flex items-center justify-center overflow-y-auto scroll-smooth">
            <div ref={container} id="container" className="w-full overscroll-y-auto min-h-[770px] max-h-[770px] p-8 rounded-xl text-zinc-100 bg-zinc-950">
                {log.map((line, index) => {
                    const lines = line.split('{break}');
                    return (
                        <div key={index}>
                            {index !== 0 ? <><br /><br /></> : null}
                            <span>{lines[0]}</span> <br />
                            <span>{lines[1]}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;