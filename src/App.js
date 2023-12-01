import "./App.css";
import "./Responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingLog from "./Pages/LandingLog";
import "bootstrap/dist/css/bootstrap.min.css";
import FighterHome from "./Pages/FighterHome";
import LayoutPage from "./components/LayoutPage";
import CompanionHome from "./Pages/CompanionHome";
import SearchFighter from "./Pages/SearchFighter";
import ActivitiesFighter from "./Pages/ActivitiesFighter";
import RankingFighter from "./Pages/RankingFighter";
import CartFighter from "./Pages/CartFighter";
import AccountFighter from "./Pages/AccountFighter";
import PaymentInfo from "./Pages/PaymentInfo";
import TwitterPost from "./Pages/TwitterPost";
import PasswordReset from "./Pages/PasswordReset";
import LikeProfile from "./Pages/LikeProfile";
import PayMethod from "./Pages/PayMethod";
import About from "./Pages/About";
import HelpCenter from "./Pages/HelpCenter";
import TermsService from "./Pages/TermsService";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CookiePolicy from "./Pages/CookiePolicy";
import Works from "./Pages/Works";
import Faq from "./Pages/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingLog />} />
        <Route element={<LayoutPage />}>
          <Route path="/fighterhome" element={<FighterHome />} />
          <Route path="/companionhome" element={<CompanionHome />} />
          <Route path="/searchfighter" element={<SearchFighter />} />
          <Route path="/activitiesfighter" element={<ActivitiesFighter />} />
          <Route path="/rankingfighter" element={<RankingFighter />} />
          <Route path="/cartfighter" element={<CartFighter />} />
          <Route path="/accountfighter" element={<AccountFighter />} />
          <Route path="/paymentinfo" element={<PaymentInfo />} />
          <Route path="/twitterpost" element={<TwitterPost />} />
          <Route path="/passwodreset" element={<PasswordReset />} />
          <Route path="/likeprofile" element={<LikeProfile />} />
          <Route path="/paymentmethod" element={<PayMethod />} />
          <Route path="/about" element={<About />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/terms-of-services" element={<TermsService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/how-it-works" element={<Works />} />
          <Route path="/faq" element={<Faq />} />
          {/* <Route path="/footr" element={<Footer />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
