import "./App.css";
import Main from "./Components/Main";
import Tabs from "./Components/Tabs";
import { Router, Route, Switch } from 'react-router';
import Edit from "./Components/Edit";
import { AppProvider } from "./Context";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Tabs /> */}
      {/* <AppProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/edit" exact component={Edit}></Route>
          </Switch>
        </Router>
      </AppProvider> */}
      {/* <Edit /> */}
      <AppProvider>
      <Main />
            {/* <Edit /> */}

      </AppProvider>
    </div>
  );
}

export default App;
