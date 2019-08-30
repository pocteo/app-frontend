import React from 'react';
import Home from './componets/Home'
import  MainContract from './componets/MainContract'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container , Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="App">

          <Router>
              <div>
                  <>
                  <Nav className="justify-content-center" activeKey="/home">
                      <Nav.Item>
                          <Nav.Link href="/">Home</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                          <Nav.Link href="/Makecontract">Contract</Nav.Link>
                      </Nav.Item>

                  </Nav>
                  </>
                  <hr/>
                  <Container>
                  <Route exact path="/" component={Home} />
                  <Route path="/Makecontract" component={MainContract} />
                  </Container>

              </div>
          </Router>

    </div>
  );
}

export default App;
