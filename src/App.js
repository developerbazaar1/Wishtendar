
import './App.css';
import './Responsive.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingLog from './Pages/LandingLog';
import 'bootstrap/dist/css/bootstrap.min.css';
import FighterHome from './Pages/FighterHome';
import LayoutPage from './components/LayoutPage';
import CompanionHome from './Pages/CompanionHome';
import SearchFighter from './Pages/SearchFighter';
import ActivitiesFighter from './Pages/ActivitiesFighter';
import RankingFighter from './Pages/RankingFighter';
import CartFighter from './Pages/CartFighter';
import AccountFighter from './Pages/AccountFighter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingLog/>}/>
      <Route element={<LayoutPage/>}>
      <Route path='/fighterhome' element={<FighterHome/>}/>
      <Route path='/companionhome' element={<CompanionHome/>}/>
      <Route path='/searchfighter' element={<SearchFighter/>}/>
      <Route path='/activitiesfighter' element={<ActivitiesFighter/>}/>
      <Route path='/rankingfighter' element={<RankingFighter/>}/>
      <Route path='/cartfighter' element={<CartFighter/>}/>
      <Route path='/accountfighter' element={<AccountFighter/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
