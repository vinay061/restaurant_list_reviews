import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Link, Route, } from 'react-router-dom';
import AddReview from './components/add-reviews';
import Login from './components/login';
import RestaurantsList from './components/restaurants-list';
//import Restaurants from './components/restaurants';
import Restaurant from './components/restaurants';

function App() {
  const [user, setUser] = useState(null);

  async function login(user = null){
    setUser(user)
  }

  async function logout(){
    setUser(null)
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/restaurants"} className="nav-link">
                Restaurants
              </Link>
            
            
          </li>
          <li className="nav-item">
            <Link to={"/displayrest"} className="nav-link">
            Display Restaurant Component
            </Link>
          </li>
          <li className="nav-item">
            { user ? (
              <a href={logout} onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.name}
              </a>) : (
              <Link to={"/login"} className="nav-link">
                Login
              </Link>)
            }
          </li>
          
        </div>
      </nav>
      <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/restaurants"]} component={RestaurantsList}/>
              <Route 
                path = "/restaurants/:id/review"
                render = {(props) => (
                  <AddReview {...props} user={user} />
                )}/>
              <Route path="/restaruants/:id" component={Restaurant}/>
              <Route
                path = "/login"
                render = {(props) => (
                  <Login {...props} login={login}/>
                )}
              />
              <Route path="/displayrest" component={Restaurant}/>
            </Switch>
      </div>
    </div>
  );
}

export default App;


/* Line 54
<Route 
                path = "/restaurants/:id"
                render = {(...props) => (
                  <Restaurants {...props} user={user} />
                )}/>
                Line 59
*/