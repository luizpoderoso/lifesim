const Footer = ({ profile }) => {
    return (
        <footer className="container flex justify-center items-center py-2 bg-zinc-800">
            <div className="w-[48px] h-[48px] rounded-md bg-zinc-900"></div>
            <span className="ml-2 text-2xl">{profile.name} {profile.surname}</span>
        </footer>
    );
};

export default Footer;