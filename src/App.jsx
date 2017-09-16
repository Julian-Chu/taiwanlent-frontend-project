import React, { Component } from 'react';
import SidePanel from './components/SidePanelComponent';


class App extends Component {
    render() {
        return (
            <div>
                <div className="body-overlay"></div>
                <SidePanel/>

            </div>
        );
    }
}

export default App;
