import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./scss/style.scss";
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
