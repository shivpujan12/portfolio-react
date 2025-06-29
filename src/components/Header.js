import '../styles/Header.scoped.css';

const Header = ()=> {

    return (
        <nav className={'navbar inter-regular'}>
            <div className={'nav-logo inter-bold'}>{`<CodeByShiv/>`}</div>
            <div className={'nav-items'}>
                <li className={'active'}>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
            </div>
        </nav>
    )
}

export default Header;