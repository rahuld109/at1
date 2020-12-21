import { ReactElement } from 'react';
import Header from './Header';
import Footer from './Footer';
import Staff from './Staff';
import './App.scss';

const App = (): ReactElement => (
  <div className="app">
    <Header />
    <div className="div__body"><Staff /></div>
    <Footer />
  </div>
);

export default App;
