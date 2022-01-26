import { StylesContext } from '@material-ui/styles';
import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button,CardMenu, IconButton} from 'react-mdl';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = { activeTab: 0};

  }

  toggleCategories(){

    if(this.state.activeTab === 0){
      return(
        <Card shadow={6} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >React Project 1</CardTitle>
          <CardText>
            My Portfolio. It is my first website made by React 
          </CardText>
          <CardActions border>
            <Button colored>
            <a href = "https://jokercsi.github.io/">Portfolio site</a>
            </Button>
            <Button colored>
            <a href = "https://github.com/jokercsi/portfolio-website">Github code</a>
            </Button>
          </CardActions>
          <CardMenu style={{color: '#black'}}>
            <IconButton name="share" />
          </CardMenu>


          <CardTitle style={{color: '#black', height: '176px', background: 'url(https://helpdev.eu/wp-content/uploads/2018/11/react_native.png) center / cover'}} >React Native Project 1</CardTitle>
          <CardText>
            first cross platform app made by React Native 
          </CardText>
          <CardActions border>
            <Button colored>
            <a href = "https://github.com/jokercsi/ucra">Github code</a>
            </Button>
          </CardActions>
          <CardMenu style={{color: '#black'}}>
            <IconButton name="share" />
          </CardMenu>


          <CardTitle style={{color: '#black', height: '176px', background: 'url(https://helpdev.eu/wp-content/uploads/2018/11/react_native.png) center / cover'}} >React Native Project 2</CardTitle>
          <CardText>
            i participate in start up project. my job was front-end Programmer
          </CardText>
          <CardActions border>
            <Button colored>
            <a href = "https://github.com/jokercsi/pollavi-mobile">Github code</a>
            </Button>
          </CardActions>
          <CardMenu style={{color: '#black'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      )
    }
     else if(this.state.activeTab === 1){
      return(
        <div>
          <h3>Programming Blog (in Korean)</h3>
          <iframe src="https://blog.naver.com/jokercsi1" width="100%" height="700" title="Blog for programming">대체 내용</iframe>
        </div>  
      )   
    }

  }


    render() {
      return (
        <div className="category-tabs">
          <Tabs activeTab={this.state.activeTeb} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>React</Tab>
            <Tab>Blog</Tab>
            <Tab></Tab>
          </Tabs>

          <section className="projects-grid">
            <Grid className="projects-grid">
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
          </section>
        </div>
      );
    }
  }

export default Projects;