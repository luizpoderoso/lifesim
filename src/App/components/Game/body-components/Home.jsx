const Home = ({ log }) => {
    return (
        <div className="w-full h-full p-8">
            <p className="w-full h-full px-12 py-8 text-zinc-200 bg-zinc-950">{log.join('\n')}</p>
        </div>
    );
};

export default Home;