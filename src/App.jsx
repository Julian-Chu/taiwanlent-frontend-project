import React, { Component } from 'react';
import SidePanel from './components/SidePanelComponent';
import Header from './components/HeaderComponent';
import Slides from './components/SlidesComponent';
import SectionAbout from './components/SectionAbout';
import SectionFind from './components/SectionFind';

class App extends Component {
    render() {
        return (
            <div>
                <div className="body-overlay"></div>
                <SidePanel></SidePanel>
                <div className="clear-fix">
                    <Header></Header>
                    <Slides></Slides>
                    <section >
                        <div className="content-wrap nopadding" style={{backgroundColor:'white'}}>
                            <SectionAbout></SectionAbout>
                            <SectionFind></SectionFind>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
