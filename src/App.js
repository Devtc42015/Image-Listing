import './App.css';
import Header from './components/header';
import ImageListing from './components/imageListing';
import header_img from './assets/img/header_img.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className='row'>
        <img src={header_img} alt='No Image' />
      </div>
      <ImageListing />
    </div>
  );
}

export default App;
