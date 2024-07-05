import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-violet'>
        <div className='flex flex-col min-h-screen text-white'>
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
