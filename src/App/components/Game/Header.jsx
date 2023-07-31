import { NavLink } from 'react-router-dom';

const Header = () => {
    const texts = require('../../../api/texts/header.json');
    const classNames = {
        active: "text-zinc-50",
        link: "transition hover:text-zinc-200"
    }

    return(
        <header className="container w-full h-[64px] flex items-center justify-center text-xl bg-zinc-800">
            <nav className="inline-flex space-x-8">
                <NavLink to="/settings" className={({isActive}) => isActive ? classNames.active : classNames.link}>{texts.settings}</NavLink>
                <NavLink to="/relationships" className={({isActive}) => isActive ? classNames.active : classNames.link}>{texts.relations}</NavLink>
                <NavLink to="/" className={({isActive}) => isActive ? classNames.active : classNames.link}>{texts.home}</NavLink>
                <NavLink to="/work" className={({isActive}) => isActive ? classNames.active : classNames.link}>{texts.work}</NavLink>
                <NavLink to="/other" className={({isActive}) => isActive ? classNames.active : classNames.link}>{texts.other}</NavLink>
            </nav>
        </header>
    );
}

export default Header;
