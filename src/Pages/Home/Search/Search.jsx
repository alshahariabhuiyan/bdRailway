const Search = () => {
    return (
        <section className="lg:flex md:flex items-center justify-between max-w-screen-xl mx-auto px-5 mt-20">
            <div className="card w-96">
                <figure><img className="h-[183px]" src="https://eticket.railway.gov.bd/v2/assets/img/home/search.svg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Search</h2>
                    <p>Choose your origin, destination, journey dates and search for trains</p>
                </div>
            </div>
            <div className="card w-96">
                <figure><img className="h-[183px]" src="https://eticket.railway.gov.bd/v2/assets/img/home/select.svg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Select</h2>
                    <p>Select your desired trip and choose your seats</p>
                </div>
            </div>
            <div className="card w-96">
                <figure><img className="h-[183px]" src="https://eticket.railway.gov.bd/v2/assets/img/home/pay.svg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Pay</h2>
                    <p>Pay for the tickets via Debit / Credit Cards or MFS</p>
                </div>
            </div>
        </section>
    );
};

export default Search;