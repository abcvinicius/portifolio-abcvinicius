  import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Pages from './pages/Pages';
import './App.css';

  
function App() {

  
  

  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
    </BrowserRouter>
  );

}


export default App;