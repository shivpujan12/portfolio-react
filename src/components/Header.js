import '../styles/Header.scoped.css';

const Header = ({activeSection})=> {

    return (
        <nav className={`navbar inter-regular`}>
            <div className={'nav-logo inter-bold'}>{`<CodeByShiv/>`}</div>
            <div className={'nav-links'}>
                <a href={'#about-me'}>About</a>
                <a href={'#experienc'}>Experience</a>
                <a href={'#projects'}>Projects</a>
            </div>
        </nav>
    )
}

export default Header;