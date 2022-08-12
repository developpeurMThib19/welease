import './App.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Articles from './pages/Articles';

function App() {

  return (
    <>
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/articles" element={<Articles />}/>
        </Routes>
      </BrowserRouter>                  
      </div>
    </>
  );

  
}


export default App;
