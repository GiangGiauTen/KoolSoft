import Header from '../../components/Header/Header.js';
import SwiperImage from '../../components/Swipper/SwiperImage.js';
import Count from '../../components/Count/Count.js';
import Category from '../../components/Category/Category';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import Vid from '../../components/Vid/Vid.js';
import Feedback from '../../components/Feedback/Feedback';
import Social from '../../components/Social/Social';
import System from '../../components/System/System.js';
import Activity from '../../components/Activity/Activity.js';
import Footer from '../../components/Footer/Footer.js';
import './Home.css';
function Home() {
  return (
    <div className="Home">
      <Header />
      <SwiperImage />
      <Count />
      <Category />
      <WhyChoose />
      <div className="under-ground">
        <Vid />
        <Feedback />
        <Social />
        <System />
        <Activity />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
