import logo from './logo.svg';
import './App.css';
import Header from './components/mobileview/Header';
import FirstNav from './components/mobileview/FirstNav';
import Carousel from './components/mobileview/Carousel';
import ThreeImages from './components/mobileview/ThreeImages';
import TwoImages from './components/mobileview/TwoImages';
import ElectronicList from './components/mobileview/ElectronicList';
import InterestingFind from './components/mobileview/InterestingFind';
import Whishlist from './components/mobileview/Whishlist';
import DesktopHeader from './components/desktopview/DesktopHeader';
import MobileDesktop from './MobileDesktop';

function App() {
  return (
    <div className="App" >
      <MobileDesktop/>
 
    </div>
  );
}

export default App;
