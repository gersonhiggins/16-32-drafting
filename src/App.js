  import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';
import Gallery from './components/Portfolio/Portfolio';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
