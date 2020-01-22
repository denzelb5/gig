import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.scss';

import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';
import SingleGig from '../components/pages/SingleGig/SingleGig';
import GigForm from '../components/pages/GigForm/GigForm';
import firebaseConnection from '../helpers/data/connection';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Roster from '../components/pages/Roster/Roster';
import Gigs from '../components/pages/Gigs/Gigs';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();
class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
     <Router>
       <MyNavbar authed={authed} />
       <Switch>
         <PrivateRoute path="/" exact component={Home} authed={authed} />
         <PrivateRoute path="/gigs" exact component={Gigs} authed={authed} />
         <PrivateRoute path="/gig/new" exact component={GigForm} authed={authed} />
         <PublicRoute path="/auth" exact component={Auth} authed={authed} />
         <PrivateRoute path="/gig/:gigId/edit" exact component={GigForm} authed={authed} />
         <PrivateRoute path="/gig/:gigId" exact component={SingleGig} authed={authed} />
         <PrivateRoute path="/gig/:gigId/roster" exact component={Roster} authed={authed} />
       </Switch>
     </Router>
     </div>
    );
  }
}

export default App;
