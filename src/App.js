import './App.css';
import UploadAssignement from './Components/uploadAssignment';
import SubmitAssignement from './Components/submitAssignment';
import Mark from './Components/markAssignment';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <UploadAssignement />
            </Route>
            <Route path='/submit'>
              <SubmitAssignement />
            </Route>
            <Route path='/mark'>
              <Mark />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
