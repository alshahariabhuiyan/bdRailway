import { Helmet } from "react-helmet";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AvailableBanner from "../AvailableBanner/AvailableBanner";

const AvailableHome = () => {
    return (
        <section>
            <Helmet>
                <title>Available | BD RAILWAY</title>
            </Helmet>
            <Navbar></Navbar>
            <AvailableBanner></AvailableBanner>
            <Footer></Footer>
        </section>
    );
};

export default AvailableHome;