import React, { Component } from 'react';
import SidePanel from './components/SidePanelComponent';
import Header from './components/HeaderComponent';

class App extends Component {
    render() {
        return (
            <div>
                <div className="body-overlay"></div>
                <SidePanel />
                <div className="clear-fix">
                    <Header/>
                </div>
            </div>
        );
    }
}

export default App;
