import React from 'react';
import './App.sass';
import Header from '../header/header';
import Services from '../services/services';
import ContactUs from '../contact_us/contact_us';
function App() {
  return (
    <main className="App">
      <Header/>
      <Services/>
      <ContactUs/>
    </main>
  );
}

export default App;
