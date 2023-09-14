import { useState } from 'react';
import logo from '../../../assets/images/train/logo1.png'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import moment from 'moment';
const AvailableBanner = () => {
    const trainCart = localStorage.getItem('trainCart')
    const searchInfo = JSON.parse(trainCart) || { from: '', to: '', date: '', trainClass: '' };
    
    const [modify, setModify] = useState(false);
    const handleSearch = event => {
        event.preventDefault();

        const form = event.target;
        const From = form.from.value;
        const To = form.to.value;
        const Date = moment(form.date.value).format("D MMMM, YYYY");
        const Train = form.trainClass.value;

        const newInfo = { from: From, to: To, date: Date, trainClass: Train };
        localStorage.setItem('trainCart', JSON.stringify(newInfo));
    
    }
    return (
        <section className="h-44 bg-slate-200 mt-32 flex justify-between items-center px-32">
            {modify ?
                <>
                    <div className="card flex flex-row items-center mx-auto">
                        <form onSubmit={handleSearch} className="card-body flex lg:flex-row items-end">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">From</span>
                                </label>
                                <input type="text" placeholder="From Station" name='from' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">To</span>
                                </label>
                                <input type="text" placeholder="To Station" name='to' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date of Journey</span>
                                </label>
                                <input type="date" placeholder="Pick a Date" name='date' className="input input-bordered" required />
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
                            <input className='btn bg-[#006747] text-white hover:text-gray-700' type="submit" value='Search Train' />
                                <button onClick={() => setModify(false)} className="flex border rounded-full bg-red-900 text-lg p-1 animate-bounce text-white items-center">
                                <FaXmark />
                                </button>
                            
                        </form>
                    </div>
                </> :
                <>
                    <div className='flex items-center gap-5'>
                        <img className='w-24 ' src={logo} alt="" />
                        <span>
                            <p className='text-[#DA924E]'>{searchInfo.from} - {searchInfo.to}</p>
                            <p>{searchInfo.date}</p>
                        </span>
                    </div>
                    <div className='flex gap-5'>
                        <div style={{ borderBottom: '3px solid rgb(218 146 78)' }} className="btn bg-transparent border-none text-[#DA924E]">
                            <FaAngleDoubleLeft />PREV.DAY
                        </div>
                        <div style={{ borderBottom: '3px solid rgb(218 146 78)' }} className="btn bg-transparent border-none text-[#DA924E]">
                            NEXT.DAY<FaAngleDoubleRight />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => setModify(!modify)} className="btn bg-[#DA924E] text-white">MODIFY SEARCH</button>
                    </div>
                </>
            }
        </section>
    );
};

export default AvailableBanner;