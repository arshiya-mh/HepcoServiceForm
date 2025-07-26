import {BrowserRouter  , Routes , Route} from 'react-router-dom'
import Overhul from './pages/Overhul/Overhul';
import OverhulForm from './pages/OverhulForm/OverhulForm';
import Auth from './pages/Auth/Auth';
function App() {
  return (
    <>
      <BrowserRouter >
          <Routes>
              <Route path='/' element={<Overhul />}/>
              <Route path='/overhulform' element={<OverhulForm />} />
               <Route path='/signin' element={<Auth />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
