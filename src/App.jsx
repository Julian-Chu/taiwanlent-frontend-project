import React, { Component } from "react";
import SidePanel from "./components/SidePanelComponent";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Talents from "./components/talents/Talents";
import Footer from "./components/Footer";
import "./styles/App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login/Login";
import BusinessUserSignUp from "./components/businessUser/BusinessUserSignUp";
import Logout from "./components/Logout";
import BusinessUserRegister from "./components/businessUser/BusinessUserRegister";
import BusinessUserProfile from "./components/businessUser/BusinessUserProfile";
import WelcomeNewUser from "./components/WelcomeNewUser";
import PersonalUserRegister from "./components/personalUser/PersonalUserRegister";
import PersonalUserProfile from "./components/personalUser/PersonalUserProfile";
import UploadPhoto from "./components/personalUser/UploadPhoto";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidePanelIsOpened: false,
      headerIsTransparent: true
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  toggleSidePanelOpen() {
    this.setState({
      sidePanelIsOpened: !this.state.sidePanelIsOpened
    });
  }

  subscribeHeaderTransparentEvent() {
    this.handleScrollTemp = this.debounce(this.handleScroll, 100);
    window.addEventListener("scroll", this.handleScrollTemp);
  }

  unsubscribeHeaderTransparentEvent() {
    if (this.handleScrollTemp !== null)
      window.removeEventListener("scroll", this.handleScrollTemp);
  }

  handleScroll() {
    let rectHeader = document.querySelector("#header").getBoundingClientRect();
    const contentNode = document.querySelector("#content");
    let rectContent = contentNode
      ? contentNode.getBoundingClientRect()
      : { top: 0 };

    if (rectHeader.top + rectContent.top < 0) {
      if (this.state.headerIsTransparent === true)
        this.setState({ headerIsTransparent: false });
    } else {
      if (this.state.headerIsTransparent === false)
        this.setState({ headerIsTransparent: true });
    }
  }

  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  setHeaderTransparent(bool) {
    if (this.state.headerIsTransparent !== bool)
      this.setState({
        headerIsTransparent: bool
      });
  }

  render() {
    return (
      <div className={this.state.sidePanelIsOpened ? "side-panel-open" : ""}>
        <div
          className="body-overlay"
          onClick={() => this.toggleSidePanelOpen()}
        />
        <SidePanel />
        <div id="container" className="clear-fix">
          <BrowserRouter>
            <div>
              <Header
                toggleSidePanelOpen={() => this.toggleSidePanelOpen()}
                headerIsTransparent={this.state.headerIsTransparent}
              />
              <Switch>
                {/* <Route path="/home"
                                        exact strict component={
                                            (props) => <Home
                                                {...props}
                                                subscribeTransparentEvent={() => this.subscribeHeaderTransparentEvent()}
                                                unsubscribeTransparentEvent={() => this.unsubscribeHeaderTransparentEvent()}
                                            />} /> */}

                <Route
                  path="/talents"
                  extact
                  component={props => (
                    <Talents
                      {...props}
                      setHeaderNontransparent={() =>
                        this.setHeaderTransparent(false)
                      }
                    />
                  )}
                />
                <Route
                  path="/login"
                  extact
                  component={props => (
                    <Login
                      {...props}
                      setHeaderNontransparent={() =>
                        this.setHeaderTransparent(false)
                      }
                    />
                  )}
                />
                {/* <Route path="/user" extact component={(props) => <User
                                        setHeaderNontransparent={() => this.setHeaderTransparent(false)}
                                        {...props}
                                    />} /> */}

                <Route
                  path="/businessuserprofile"
                  extact
                  component={props => <BusinessUserProfile {...props} />}
                />
                <Route
                  path="/businessUserSignUp"
                  extact
                  component={props => (
                    <BusinessUserSignUp
                      setHeaderNontransparent={() =>
                        this.setHeaderTransparent(false)
                      }
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/personalUserRegister"
                  extact
                  component={props => <PersonalUserRegister {...props} />}
                />
                <Route
                  path="/personalUserProfile"
                  extact
                  component={props => <PersonalUserProfile {...props} />}
                />

                <Route
                  path="/profilephoto"
                  extact
                  component={props => <UploadPhoto {...props} />}
                />
                <Route
                  path="/WelcomeNewUser"
                  exact
                  component={props => <WelcomeNewUser {...props} />}
                />
                {/* For test */}
                <Route
                  path="/businessUserRegister"
                  extact
                  component={props => <BusinessUserRegister {...props} />}
                />
                <Route
                  path="/logout"
                  extact
                  component={props => (
                    <Logout
                      setHeaderNontransparent={() =>
                        this.setHeaderTransparent(false)
                      }
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/home"
                  exact
                  strict
                  component={props => (
                    <Home
                      {...props}
                      subscribeTransparentEvent={() =>
                        this.subscribeHeaderTransparentEvent()
                      }
                      unsubscribeTransparentEvent={() =>
                        this.unsubscribeHeaderTransparentEvent()
                      }
                    />
                  )}
                />
                <Redirect from="/" to="/home" />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
