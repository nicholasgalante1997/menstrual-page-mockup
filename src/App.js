import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero'
import SecondScreen from './components/SecondScreen'
import ThirdScreen from './components/ThirdScreen'
import FourthScreen from './components/FourthScreen'
import ProductHolder from './components/ProductHolder'
import Bottom from './components/BottomScreen'

function App() {
  return (
    <div className="App">
        <Hero />
        <SecondScreen />
        <ThirdScreen />
        <FourthScreen />
        <ProductHolder />
        <Bottom />
    </div>
  );
}

export default App;
