import './App.css';
import Navbar from './Component/Header/Navbar';
import Navbar1 from './Component/Header/Navbar1';
import HomeBanner from './Component/HomeBanner/HomeBanner';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Navbar/>
      <HomeBanner/> 
      <Display/>    

    </div>
  );
}

export default App;
