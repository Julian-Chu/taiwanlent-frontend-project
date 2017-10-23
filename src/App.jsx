import React, { Component } from 'react';
import SidePanel from './components/SidePanelComponent';
import Header from './components/HeaderComponent';
import Slides from './components/SlidesComponent';
import SectionAbout from './components/SectionAbout';

class App extends Component {
    render() {
        return (
            <div>
                <div className="body-overlay"></div>
                <SidePanel />
                <div className="clear-fix">
                    <Header />
                    <Slides />
                    <section>
                        <div className="content-wrap nopadding">
                            <SectionAbout></SectionAbout>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
