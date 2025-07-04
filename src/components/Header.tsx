import { Link } from 'react-router'

interface HeaderProps {
    showWorksLink?: boolean
}

function Header({ showWorksLink = true }: HeaderProps) {
    return (
        <header>
            <Link to="/" id="logo">LM</Link>
            <nav className="font-regular text-[20px]">
                <a href="/">Home</a>
                <a
                    href="#"
                    onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('about');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                >About</a>
                <a
                    href="#"
                    onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('contacts');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                >Contacts</a>
                {showWorksLink && <Link to="/works">Works</Link>}
            </nav>
        </header>
    )
}

export default Header 