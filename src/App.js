import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import SwiperImage from './components/Swipper/SwiperImage.js';
import Count from './components/Count/Count.js';
function App() {
  return (
    <div className="App">
      <Header />
      <SwiperImage />
      <Count />
    </div>
  );
}

export default App;
