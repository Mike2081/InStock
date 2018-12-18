import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './Nav-SideBar/NavBar';
import SideBar from './Nav-SideBar/SideBar';
import Warehouses from './Warehouses';
import InventoryItem from './InventoryItem';
import InventoryList from './InventoryList/InventoryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App__body">
          <SideBar />
            <div className="App__body--center">
              <NavBar />
              <Switch>
                <Route path={'/'} exact render={() => <Redirect to='/warehouses'/>} />
                <Route path={'/warehouses'} exact component={Warehouses} />
                <Route path={'/inventory'} exact component={InventoryList} />
                
                <Route path={'/warehouses/:id'} render={(props) => { return <InventoryList {...props}    /> }
                  }/>
                <Route path={'/inventory/:id'} render={(props) => { return <InventoryItem {...props}    /> }
                  }/>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;


