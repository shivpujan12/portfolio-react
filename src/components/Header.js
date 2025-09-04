import '../styles/Header.scoped.css';

const Header = ({activeSection})=> {

    return (
        <nav className={`navbar inter-regular`}>
            <div className={'nav-logo inter-bold'}>{`<CodeByShiv/>`}</div>
            <div className={'nav-links mobile-display-none'}>
                <a href={'#about-me'}>About</a>
                <a href={'#experienc'}>Experience</a>
            </div>
        </nav>
    )
}

export default Header;