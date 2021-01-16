import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Completed from './components/Completed';
import Canceled from './components/Canceled';
import Detail from './components/Detail'
import Header from './components/Header';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Navigation />
        <Switch>
          <Route path="/completed">
            <Completed />
          </Route>
          <Route path="/canceled">
            <Canceled />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>




      </div>
    </Router>
  );
}

export default App;
