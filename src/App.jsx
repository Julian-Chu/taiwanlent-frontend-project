import React, { Component } from 'react';
import SidePanel from './components/SidePanelComponent';
import Header from './components/HeaderComponent';
import Slides from './components/SlidesComponent';
import SectionAbout from './components/SectionAbout';
import SectionFind from './components/SectionFind';

import SectionSubscribe from './components/SectionSubscribe';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <div className="body-overlay"></div>
                <SidePanel></SidePanel>
                <div className="clear-fix">
                    <Header></Header>
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
