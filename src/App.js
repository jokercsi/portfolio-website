import React, {Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from "./components/main";
import {Link} from 'react-router-dom'

class Navbar extends Component {
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    render() {
        return (
            <Drawer title="JibinPortfolio">
                <Navigation>
                    <Link to={"/landingpage"} onClick={() => this.hideToggle()}>AboutMe</Link>
                    <Link to={"/resume"} onClick={() => this.hideToggle()}>Resume</Link>
                    <Link to={"/projects"} onClick={() => this.hideToggle()}>Projects</Link>
                    <Link to={"/contact"} onClick={() => this.hideToggle()}>Contact</Link>
                    <Link to={"/customers"} onClick={() => this.hideToggle()}>Customers</Link>
                </Navigation>
            </Drawer>
        );
    }
}
   

class App extends Component{
  render() {
    return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title ={<Link style={{textDecoration: 'none', color: 'white'}} 
            to= "/">JibinPortfolio</Link>} scroll>
                <Navigation>
                    <div className="icon">
                    { /*github*/ }
                    <a href ="https://github.com/jokercsi" rel="noopener noreferrer" target = "_blank">
						<i className="fa fa-github-square" aria-hidden="true"></i>
					</a>	
					{ /*facebook*/ }
                    <a href ="https://www.facebook.com/jibin.kim.7" rel="noopener noreferrer" target = "_blank">
						<i className ="fa fa-facebook-square" aria-hidden="true"></i>
					</a>                    
					{ /*instagram*/ }
                    <a href ="https://www.instagram.com/jibin_ary/" rel="noopener noreferrer" target = "_blank">
                        <i className ="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    </div>
                </Navigation>
            </Header>
            <Navbar>
            </Navbar>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;