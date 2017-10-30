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
            headerIsTransparent: true,
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    toggleSidePanelOpen() {
        this.setState({
            sidePanelIsOpened: !this.state.sidePanelIsOpened
        })
    }

    componentDidMount(){
        this.handleScrollTemp = this.debounce( this.handleScroll, 250)
        window.addEventListener('scroll', this.handleScrollTemp);
    }

    componentWillUnmount(){        
        window.removeEventListener('scroll', this.handleScrollTemp);
    }

    handleScroll(){
        let rectHeader = document.querySelector('#header').getBoundingClientRect();
        let rectContent = document.querySelector('#content').getBoundingClientRect();
        
        if((rectHeader.top + rectContent.top + 60 )< 0)
        {            
            this.setState({headerIsTransparent: false});
        }else
        {
            this.setState({headerIsTransparent:true});
        }
        
    }

    debounce(func, wait, immediate){
        var timeout;
        return function(){
            var context = this, args = arguments;
            var later = function(){
                timeout = null;
                if(!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if(callNow) func.apply(context, args);
        };
    }

    render() {
        return (
            <div className={this.state.sidePanelIsOpened ? 'side-panel-open':'' }>
                <div className="body-overlay" onClick={()=>this.toggleSidePanelOpen()}></div>
                <SidePanel ></SidePanel>
                <div id="container" className="clear-fix">
                    <Header toggleSidePanelOpen={()=>this.toggleSidePanelOpen()} headerIsTransparent={this.state.headerIsTransparent}></Header>
                    <Slides ></Slides>
                    <section id="content"  >
                        <div  className="content-wrap nopadding" style={{ backgroundColor: 'white' }}>
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
