import '../styles/Header.scoped.css';

const Header = ({activeSection})=> {

    const color = activeSection==="about-me" ? "white-navbar" : "black-navbar";

    return (
        <nav id={'navbar'} className={`navbar inter-regular ${color}`}
        >
            <div className={'nav-logo inter-bold'}>{`<CodeByShiv/>`}</div>
            <div className={'nav-items'}>
                <a href={'#hero'}>Home</a>
                <a href={'#about-me'}>About</a>
                <a href={'#experienc'}>Experience</a>
                <a href={'#projects'}>Projects</a>
                <a href={'#skills'}>Skills</a>
                <a href={'#contact'}>Contact</a>
            </div>
        </nav>
    )
}

export default Header;