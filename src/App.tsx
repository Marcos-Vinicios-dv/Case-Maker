import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Routes from './routes/routes';
import Header from './components/Navigation/Header';
import GlobalStyles from './styles/global';

import store from './store';
import Footer from './components/Footer';
// import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
