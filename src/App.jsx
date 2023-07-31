
import logo from '/memoryLogo.png'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/styles.scss';

function App() {

  return (
    <div className='container'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
