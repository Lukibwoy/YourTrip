import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUpForm from './components/SignUpForm';

function App() {
    return (
        <BrowserRouter>
            <div className="bg-white overflow-hidden">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUpForm />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
