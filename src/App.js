import './App.css';
import Home from './Components/Home.js'
import AboutMe from './Components/AboutMe.js'
import ContactMe from './Components/ContactMe.js'
import {Route} from 'react-router'
import {BrowserRouter, NavLink} from 'react-router-dom'
function App() {
  return (
    <div className="App">    
    <BrowserRouter>
    <div className="nav">
    <h1><NavLink exact activeClassName="current" to="/">Home</NavLink>
    <NavLink activeClassName="current" to="/aboutme">About Me</NavLink>
    <NavLink activeClassName="current" to="/contactme">Contact Me</NavLink></h1>
    </div>
    <Route exact path="/" component={Home}/>
    <Route exact path="/home" component={Home}/>
    <Route path="/aboutme" component={AboutMe}/>
    <Route path="/contactme" component={ContactMe}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
