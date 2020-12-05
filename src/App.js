import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
// import UserScreen from './screens/UserScreen';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomeScreen} />
          {/* <Route path="/user/:id" component={UsertScreen} /> */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
