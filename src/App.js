//  Dependencies
import { Route, Switch } from 'react-router-dom';

//  UI components
import Nav from './components/Nav';

//  Page Components
import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';


import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/"> {/* exact is a boolean prop to ensure that when the / is used in the switch component it will only act on the root path. all the routes have a / so it avoids any weird behavior */}
          <Main />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
        <Route path="/price/:symbol" render={(props) => <Price {...props} />} />
        {/* 
          Render props from React Router DOM
          It gives us three objects
          1. history (gives access to browser history and allows mutation of browser history, most used)
          2. loacation (gives access to current location in browser and query params)
          3. match (gives acess to URL params, also most used) 
        */}
      </Switch>
    </div>
  );
}

export default App;
