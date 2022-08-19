import React from 'react';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return(
        <div className="container">
            <Header />
            <Buttons />
            <Main />
            <Footer />
        </div>
    )
}

export default App;