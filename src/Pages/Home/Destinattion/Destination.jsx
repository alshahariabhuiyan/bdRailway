import train from '../../../assets/images/train/train.jpg'
import './Destination.css'
import bkash from '../../../assets/images/logo/bkash.png'
import dbbl from '../../../assets/images/logo/dbbl.png'
import nogod from '../../../assets/images/logo/nogod.png'
import rocket from '../../../assets/images/logo/rocket.png'
import visa from '../../../assets/images/logo/visa.png'
import moment from 'moment/moment'
const Destination = () => {
    const handleSearch = event => {
        console.log('clicked')
        event.preventDefault()

        const form = event.target;

        const From = form.from.value;
        const To = form.to.value;
        const Date = moment(form.date.value).format("D MMMM, YYYY")
        const Train = form.trainClass.value;

        const info = { From, To, Date, Train }
        localStorage.setItem('trainCart', JSON.stringify(info))
        console.log(info)
    }

    return (
        <section className='mt-10'>
            <div className="hero w-full">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <div className='relative'>
                        <img
                            src={train}
                            alt='Railway Home Page Bkash Nagad VISA Mastercard DBBL'
                            className="max-w-full rounded-lg shadow-2xl" // Remove the w-[500px] class
                            style={{ width: '100%' }} // Use inline style to set the width to 100%
                        />
                        <span className='absolute bottom-0 right-1 text-white'>
                            <p className='text-end text-sky-500'>Easy <span className='text-white'>purchase</span> of <span className='text-white'>tickets</span> using <br />
                                online payment method</p>
                            <span className='flex items-center gap-5'>
                                <img className='h-12' src={bkash} alt="" />
                                <img className='h-10' src={nogod} alt="" />
                                <img className='h-16' src={rocket} alt="" />
                                <img className='h-7' src={visa} alt="" />
                                <img className='h-14' src={dbbl} alt="" />
                            </span>
                        </span>
                    </div>
                    <form onSubmit={handleSearch} className="card flex-shrink-0 w-full max-w-xl">
                        <div className="card-body grid lg:grid-cols-2 grid-cols-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">From</span>
                                </label>
                                <input type="text" placeholder="From Station" name='from' className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">To</span>
                                </label>
                                <input type="text" placeholder="To Station" name='to' className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date of Journey</span>
                                </label>
                                <input type="date" placeholder="Pick a Date" name='date' className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Choose a Class</span>
                                </label>
                                <select
                                    name='trainClass'
                                    className='home form-control h-12 px-4 py-3'
                                    defaultValue='Select a Class'
                                    required
                                >
                                    <option value='Select a Class' disabled>Select a Class</option>
                                    <option value="AC_B">AC_B</option>
                                    <option value="AC_S">AC_S</option>
                                    <option value="SNIGDHA">SNIGDHA</option>
                                    <option value="F_BERTH">F_BERTH</option>
                                    <option value="F_SEAT">F_SEAT</option>
                                    <option value="F_CHAIR">F_CHAIR</option>
                                    <option value="S_CHAIR">S_CHAIR</option>
                                    <option value="SHOVAN">SHOVAN</option>
                                    <option value="SHULOV">SHULOV</option>
                                    <option value="AC_CHAIR">AC_CHAIR</option>
                                </select>
                            </div>
                        </div>
                        <input className='btn bg-[#064840] text-white hover:text-gray-700' type="submit" value='Search Train' />
                    </form>
                </div>
            </div>
        </section >
    );
};

export default Destination;