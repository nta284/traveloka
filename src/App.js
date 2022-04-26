import { useState } from 'react';
import './App.scss';
import Header from './layouts/Header';
import Sidenav from './layouts/Sidenav';
import Container from './layouts/Container/Container';
import Footer from './layouts/Footer/Footer';
import HelpBox from './layouts/HelpBox/HelpBox';

function App() {
    const [sidenavToggle, setSidenavToggle] = useState(false);

    return (
        <div className="App">
            <Header setSidenavToggle={setSidenavToggle} />
            <Sidenav sidenavToggle={sidenavToggle} setSidenavToggle={setSidenavToggle} />
            <Container />
            <Footer />
            <HelpBox />
        </div>
    )
}

export default App;
