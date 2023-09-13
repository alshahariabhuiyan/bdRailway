import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Instruntion = () => {
    return (
        <section className="mt-20">
            <div className="">
                <div className="hero-content flex flex-col lg:flex-row justify-around mx-auto">
                    <div>
                        <img className="" src="	https://eticket.railway.gov.bd/v2/assets/img/home/instruction-secion-image.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-xl">
                        <h2 className="text-3xl text-green-950">Instructions to Purchase Tickets</h2>
                        <span className="text-justify">
                            <p className="text-green-900 mt-6"><FaArrowAltCircleRight className=" text-3xl inline me-3" />Tickets can be bought online ten days in advance.</p>
                            <p className="text-green-900 mt-6"><FaArrowAltCircleRight className=" text-3xl inline me-3" />You can pay for the tickets using mobile financial services: bKash, Nagad, Rocket or debit/credit cards: Mastercard, Visa, DBBL Nexus. Other payment options will be available soon.</p>
                            <p className="text-green-900 mt-6"><FaArrowAltCircleRight className=" text-3xl inline me-3" />In case of payment or transaction failure, the deducted amount would be refunded by your bank or MFS provider within 8 business days.</p>
                            <p className="text-green-900 mt-6"><FaArrowAltCircleRight className=" text-3xl inline me-3" />In case money has been deducted from your card / mobile wallet but you have not received a ticket confirmation, the deducted amount would be refunded by your bank or MFS provider within 8 business days.</p>
                            <p className="text-green-900 mt-6"><FaArrowAltCircleRight className=" text-3xl inline me-3" />If you have not received your ticket copy in email, kindly check your Spam / Junk folder. You can also download your ticket copy from the purchase history of your account after you login.</p>
                            <p className="text-green-900 mt-6"><FaArrowAltCircleRight className=" text-3xl inline me-3" />Download the official <Link className="underline text-blue-900 font-bold" to='https://play.google.com/store/apps/details?id=com.shohoz.dtrainpwa'>Rail Sheba</Link> app published by Bangladesh Railway from <Link className="underline text-blue-900 font-bold" to='https://play.google.com/store/apps/details?id=com.shohoz.dtrainpwa&pli=1'>Google Play</Link>.</p>
                            <p className="text-green-900 mt-6"><FaArrowAltCircleRight className=" text-3xl inline me-3" />In case of passengers downloading fake apps or any other app from Google Play which claim to sell train tickets of Bangladesh Railway, the authorities will not take any liability.</p>
                        </span>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Instruntion;