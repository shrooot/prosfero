// import './App.css';
import React from 'react';
import Nav from './components/header/Nav';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import Contact from './components/contactPage/Contact';
import UserDashBoard from './components/dashboard/UserDashBoard';
import Explore from './components/explore/Explore';
import DonationForm from './components/donationForm/DonationForm';
// import Fundraisers from './components/dashboard/fundraiser/fundraiser';
import { Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route path='/' exact component={Homepage} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/dashboard/:id' exact component={UserDashBoard} />
      <Route path='/explore' exact component={Explore} />
      <Route path='/donate' exact component={DonationForm} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
