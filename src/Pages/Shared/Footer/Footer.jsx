import logo from '../../../assets/images/logo/logo.png'
const Footer = () => {
    return (
        <footer className='sm:flex sm:items-center sm:justify-center sm:text-center'>
            <div className="w-full mt-20 lg:border-t-4 lg:border-green-600 lg:h-32 lg:flex lg:justify-between items-center lg:px-36">
                <div className='flex items-center'>
                    <img className='h-20' src={logo} alt="" />
                    <span>
                        <span className="text-[#DA924E] font-bold text-xl block">Bangladesh Railway</span>
                        <span className='text-sm text-green-600'>নিরাপদ . আরামদায়ক . সাশ্রয়ী</span>
                    </span>
                </div>
                <div className='text-green-700 text-sm'>
                    Terms and Conditions | Privacy Policy
                </div>
                <div>
                    <p>Powered by</p>
                    <p className='text-2xl font-semibold text-green-900'>Shohoz-Synesis-Vincen JV</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;