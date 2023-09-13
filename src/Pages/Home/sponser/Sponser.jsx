import Marquee from 'react-fast-marquee'
import bkash from '../../../assets/images/logo/bkash.png'
import dbbl from '../../../assets/images/logo/dbbl.png'
import nogod from '../../../assets/images/logo/nogod.png'
import rocket from '../../../assets/images/logo/rocket.png'
import visa from '../../../assets/images/logo/visa.png'
const Sponser = () => {
    return (
        <section>
            <div className="divider"></div>
            <Marquee>
                <span className='flex items-center gap-20'>
                    <img className='h-12' src={bkash} alt="" />
                    <img className='h-10' src={nogod} alt="" />
                    <img className='h-16' src={rocket} alt="" />
                    <img className='h-7' src={visa} alt="" />
                    <img className='h-14' src={dbbl} alt="" />
                </span>
            </Marquee>
            <div className="divider"></div>
            <p className='text-center mt-20 text-sm font-semibold'>* The Tickets are issued by Bangladesh Railway's Centrally Computerized Seat Reservation & Ticketing System (CCSRTS) and Shohoz-Synesis-Vincen JV is responsible for designing, development, implementation, technical operation & maintenance of the system.</p>
        </section>
    );
};

export default Sponser;