import React, { Component } from 'react';
import SidePanel from './components/SidePanelComponent';
import Header from './components/HeaderComponent';
import Slides from './components/SlidesComponent';
import SectionAbout from './components/SectionAbout';
import SectionFind from './components/SectionFind';

import SectionSubscribe from './components/SectionSubscribe';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';
import './styles/App.css'

class App extends Component {
    constructor(){
        super();

        this.state={
            sidePanelIsOpened:false,
        }
    }

    toggleSidePanelOpen() {
        this.setState({
            sidePanelIsOpened: !this.state.sidePanelIsOpened
        })
    }

    render() {
        return (
            <div className={this.state.sidePanelIsOpened ? 'side-panel-open':'' }>
                <div className="body-overlay" onClick={()=>this.toggleSidePanelOpen()}></div>
                <SidePanel ></SidePanel>
                <div id="container" className="clear-fix">
                    <Header toggleSidePanelOpen={()=>this.toggleSidePanelOpen()}></Header>
                    <Slides></Slides>
                    <section id="content">
                        <div className="content-wrap nopadding" style={{ backgroundColor: 'white' }}>
                            <SectionAbout></SectionAbout>
                            <SectionFind></SectionFind>
                            <SectionSubscribe></SectionSubscribe>
                            <SectionContact></SectionContact>
                        </div>
                    </section>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
