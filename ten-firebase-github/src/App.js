import React, { useState } from "react";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// firebase
import firebase from "firebase/app";
import "firebase/auth";

// react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// context
import { UserContext } from "./context/UserContext";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";

import firebaseConfig from "./config/firebaseConfig";
// init firebase

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
