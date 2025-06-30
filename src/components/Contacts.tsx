import linkedin from '../assets/linkedin.svg'
import dribble from '../assets/dribble.svg'

function Contacts() {
    return (
        <section id="contacts" className="w-full grid grid-cols-1 md:grid-cols-10 gap-5 justify-between text-white pt-10 pb-10 relative">
            <div className="contacts-bg-full w-full h-[176px]"></div>
            <div className="md:col-span-5 text-left">
                <p className="text-[24px] font-medium">LUCA MORMILE</p>
                <p className="text-[20px] font-regular text-light-gray">UI/UX Designer, Product Designer, Developer</p>
                <p className="text-[20px] font-regular text-left text-light-gray">2025</p>
            </div>
            <div className="md:col-span-5 text-right">
                <p className="text-[20px] font-regular text-right">CONTACTS</p>
                <p className="text-[20px] font-regular text-right">mormileluca [@] gmail [.] com</p>
                <div className="flex justify-end h-[30px]">
                    <img src={linkedin} alt="LinkedIn" className="self-end" />
                    <img src={dribble} alt="Dribble" className="ml-3 self-end" />
                </div>
            </div>
        </section>
    )
}

export default Contacts;