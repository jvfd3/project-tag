import React from 'react';
type Prop1 = {
    quotes: string[]
}

type Prop2 = {
    currentIndex: number,
}

class TestClass1 extends React.Component<Prop1, Prop2> {
    render() {
        return (

            <div className='WhiteText'>
                <header className="App-header">
                    <h3>
                        Render Component with State and Props using TypeScript
                    </h3>
                </header>
            </div>
        );
    }
}

class SimpleClass2 extends React.Component {
    render() { return <></> }
}

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// Pages ----------------------

const Home = () => {
    return <h2>Home</h2>;
};

const Gallery = () => {
    return <h2>Gallery</h2>;
};

const About = () => {
    return <h2>About</h2>;
};

// Routing --------------------

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/about">About</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Routes>
                </div>
            </Router>
        );
    };
}

