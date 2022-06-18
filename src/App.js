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
            <div className='container'>
                <div className='div1'></div>
                <div className='div2'></div>
            </div>
        </div>
    )
}

export default App;
