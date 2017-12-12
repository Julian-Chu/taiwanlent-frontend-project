import React, { Component } from 'react';
import SidePanel from './components/SidePanelComponent';
import Header from './components/HeaderComponent';
import Home from './components/home/Home';
import Talents from './components/talents/Talents';
import Footer from './components/Footer';
import './styles/App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            sidePanelIsOpened: false,
            headerIsTransparent: true,
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    toggleSidePanelOpen() {
        this.setState({
            sidePanelIsOpened: !this.state.sidePanelIsOpened
        })
    }

    subscribeHeaderTransparentEvent(){
        this.handleScrollTemp = this.debounce(this.handleScroll, 100)
        window.addEventListener('scroll', this.handleScrollTemp);
    }

    unsubscribeHeaderTransparentEvent(){
        if(this.handleScrollTemp !== null)
            window.removeEventListener('scroll',this.handleScrollTemp);
    }

    handleScroll() {
        let rectHeader = document.querySelector('#header').getBoundingClientRect();
        let rectContent = document.querySelector('#content').getBoundingClientRect();

        if ((rectHeader.top + rectContent.top ) < 0) {
            if(this.state.headerIsTransparent === true)
                this.setState({ headerIsTransparent: false });
        } else {
            if(this.state.headerIsTransparent === false)
                this.setState({ headerIsTransparent: true });
        }

    }

    debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    render() {
        return (

            <div className={this.state.sidePanelIsOpened ? 'side-panel-open' : ''}>
                <div className="body-overlay" onClick={() => this.toggleSidePanelOpen()}></div>
                <SidePanel ></SidePanel>
                <div id="container" className="clear-fix">
                    <BrowserRouter>
                        <div>
                            <Header toggleSidePanelOpen={() => this.toggleSidePanelOpen()} 
                                    headerIsTransparent={this.state.headerIsTransparent}                                    
                                    ></Header>
                            <Switch>
                                <Route path="/home"                                       
                                      exact component={
                                          ()=><Home 
                                                 subscribeTransparentEvent = {()=>this.subscribeHeaderTransparentEvent()} 
                                                 unsubscribeTransparentEvent = {()=> this.unsubscribeHeaderTransparentEvent()}
                                                />} />                               
                                {/* <Route path="/home" exact component={Home} />                */}
                                <Route path="/talents" extact component={Talents} />
                                <Redirect to="/home" />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
