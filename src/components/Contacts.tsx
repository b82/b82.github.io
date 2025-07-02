import linkedin from '../assets/linkedin.svg'
import dribble from '../assets/dribble.svg'
import { Link } from 'react-router';

function Contacts() {
    return (
        <section id="contacts" className="w-full grid grid-cols-1 md:grid-cols-10 gap-5 justify-between text-white pt-10 pb-10 relative">
            <div className="contacts-bg-full w-full h-[336px] md:h-[180px]"></div>
            <div className="md:col-span-5 text-center md:text-left">
                <p className="md:text-[24px] text-[20px] font-medium">LUCA MORMILE</p>
                <p className="md:text-[20px] text-[16px] font-regular text-light-gray">UI/UX Designer, Product Designer, Developer</p>
                <p className="md:text-[20px] text-[16px] font-regular text-light-gray">2025</p>
            </div>
            <div className="md:col-span-5 text-center md:text-right">
                <p className="md:text-[20px] text-[16px] font-regular">CONTACTS</p>
                <p className="contact-mail md:text-[20px] text-[16px] font-regular text-light-gray mb-[10px]">mormileluca [@] gmail [.] com</p>
                <div className="flex justify-center md:justify-end h-[30px] ">
                    <Link to="https://www.linkedin.com/in/luca-mormile" target="_blank">
                        <img src={linkedin} alt="LinkedIn" className="self-end" />
                    </Link>
                    <Link to="https://dribbble.com/luca_mormile" target="_blank">
                        <img src={dribble} alt="Dribble" className="ml-3 self-end" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Contacts;