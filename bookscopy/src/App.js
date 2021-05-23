import "./App.css";
import Main from "./Components/Main";
import { Router, Route, Switch } from 'react-router';
import Edit from "./Components/Edit";
import { AppProvider } from "./Context";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/edit" exact component={Edit}></Route>
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
