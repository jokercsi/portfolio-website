import { StylesContext } from '@material-ui/styles';
import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = { activeTab: 0};

  }

  toggleCategories(){

    if(this.state.activeTab === 0){
      return(
        <div>
        <Card shadow={6} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#black', height: '176px', background: 'url(https://raw.githubusercontent.com/jokercsi/pollavi-mobile/master/result/Screenshot_1643170933.png) center / cover'}} >Pollavi Project</CardTitle>
          <CardText>
            i participate in start up project. my job was front-end Programmer
          </CardText>
          <CardActions border>
            <Button colored onClick={() => window.open('https://github.com/jokercsi/pollavi-mobile', '_blank')}>
              Github code
            </Button>
          </CardActions>
        </Card>
        <br />
        <Card shadow={6} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#black', height: '176px', background: 'url(https://helpdev.eu/wp-content/uploads/2018/11/react_native.png) center / cover'}} >UCRA Project</CardTitle>
          <CardText>
            first cross platform app made by React Native 
          </CardText>
          <CardActions border>
            <Button colored onClick={() => window.open('https://github.com/jokercsi/ucra', '_blank')}>
              Github code
            </Button>
          </CardActions>
        </Card>
      </div>

      )
    }
     else if(this.state.activeTab === 1){
      return(
        <div>
        <Card shadow={6} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >React Project 1</CardTitle>
          <CardText>
            My Portfolio. It is my first website made by React 
          </CardText>
          <CardActions border>
            <Button colored>
            <a href = "https://jokercsi.github.io/portfolio-website">Portfolio site</a>
            </Button>
            <Button colored onClick={() => window.open('https://github.com/jokercsi/portfolio-website', '_blank')}>
              Github code
            </Button>
          </CardActions>
        </Card>     
      </div>
      )   
    }

  }


    render() {
      return (
        <div>
          <Tabs activeTab={this.state.activeTeb} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>React Native</Tab>
            <Tab>React</Tab>
          </Tabs>

          <section>
            <Grid>
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