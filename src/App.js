import LuckyDraw from './main/lucky/Lucky-draw';
import Nuego from './main/nuegoLounge/Nuego';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Nuego />}></Route>
        <Route path="/winner" element={ <LuckyDraw />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
