import { Link } from 'react-router'

interface HeaderProps {
    showWorksLink?: boolean
}

function Header({ showWorksLink = true }: HeaderProps) {
    return (
        <header>
            <Link to="/" id="logo">LM</Link>
            <nav className="font-regular text-[20px]">
                <a href="/#about">About</a>
                <a href="/#contacts">Contacts</a>
                {showWorksLink && <Link to="/work">Works</Link>}
            </nav>
        </header>
    )
}

export default Header 