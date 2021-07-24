
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage/homepage';
import DetailPage from './Pages/DetailPage/detailPage';
import SearchPage from './Pages/SearchPage/searchPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage></Homepage>
        </Route>
        <Route path="/detail/:id">
          <DetailPage></DetailPage>
        </Route>
        <Route path="/search/:name">
          <SearchPage></SearchPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
