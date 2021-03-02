import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ProvideAuth } from './hooks/useAuth'
// import routes from './routes';
// import PrivateRoute from './components/PrivateRoute';
import Login from "pages/Login";
import Signup from "pages/Signup";
// import AuthRoute from "components/AuthRoute";
import HomePage from "pages/Home";
import Message from "pages/Message";
import Profile from "pages/Profile";
import Friend from "pages/Friend";
import NotFound from "pages/NotFound";
import MessageRedirect from "pages/MessageRedirect";
import "App.css"
import Landing from "pages/Landing";
export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/message" exact component={MessageRedirect} />
          <Route path="/message/t/" component={Message} />
          <Route path="/profile" component={Profile} />
          <Route path="/friend" component={Friend} />
          {/* <Route path="/friend/t/:user_id" component={Friend} /> */}
          <Route path="/landing" component={Landing} />
          <Route path='*' component={NotFound} />

          {/* {routes.map((route, index) => {
            return <Route path={route.path} key={index} component={route.component} />
          })}
          <AuthRoute path="/login" exact ><Login /></AuthRoute>
          <AuthRoute path="/signup" exact ><Signup /></AuthRoute> */}
          {/* {
            routes.publicRoutes.map((route, index) => {
              return <Route path={route?.path} exact component={route.component} key={index} />
            })
          } */}
        </Switch>
      </Router>
      {/* <div className="absolute bottom-0 left-0 bg-gray-700 w-80 h-20 rounded-xl m-5">Toast</div> */}
    </ProvideAuth>
  );
}