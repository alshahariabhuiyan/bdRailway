import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Destination from '../Destinattion/Destination';
import Instruntion from '../Instruntion/Instruntion';
import Search from '../Search/Search';
import Welcome from '../WelcomeMessage/Welcome';
import Sponser from '../sponser/Sponser';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Welcome></Welcome>
            <Destination></Destination>
            <Search></Search>
            <Instruntion></Instruntion>
            <Sponser></Sponser>
            <Footer></Footer>

        </div>
    );
};

export default Home;