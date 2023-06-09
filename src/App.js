import logo from './logo.svg';
import './App.css';
import Header from './components/mobileview/Header';
import FirstNav from './components/mobileview/FirstNav';
import Carousel from './components/mobileview/Carousel';
import ThreeImages from './components/mobileview/ThreeImages';
import TwoImages from './components/mobileview/TwoImages';
import ElectronicList from './components/mobileview/ElectronicList';

function App() {
  return (
    <div className="App">
    <Header/>
    <FirstNav/>
    <Carousel/>
    <ThreeImages/>
    <TwoImages/>
    <ElectronicList/>
    </div>
  );
}

export default App;
