import React, {Component} from 'react';
import {Box,Tabs,Tab,Card, CardContent, CardActions, Button} from '@material-ui/core';
import NotesIcon from '@material-ui/icons/Notes';
import CategoryIcon from '@material-ui/icons/Category';
import Typography from '@material-ui/core/Typography';
import profilePic from '../images/profileEmoji.png';

class Blog extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }
    render() {
      return (
        <div style ={{width: '100%', margin: 'auto'}}>
          <div>
            <Tabs value={this.state.value} onChange={this.handleChange} aria-label="lab API tabs example" centered>
              <Tab icon={<NotesIcon/>} label="text" {...this.a11yProps(0)}/>
              <Tab icon={<CategoryIcon/>} label="series"  {...this.a11yProps(1)}/>
            </Tabs>
           
            <div style ={{ maxWidth:'800px', margin: 'auto'}}>
              <TabPanel value={this.state.value} index={0}>
                      <p>블로그 글</p>
              </TabPanel>
              <TabPanel value={this.state.value} index={1}>
                  Item Two
              </TabPanel>  
            </div>
          </div>
        </div>
      );
    }
  }

  const cardStyle = {
    height: "100vh",
    maxHeight:"500px"
  };

  class TabPanel extends Component {
    render() {
      return (
        <Typography align="center" component="div" hidden={this.props.value !== this.props.index}>
        <Card sx={{ whiteSpace: 'normal'}} style={cardStyle}>
          <CardContent>
            <Typography component="div">
              <div style ={{ height: "100vh", maxHeight:"500px"}}>
                <div style ={{width: '90%', height:'80%', margin: 'auto'}}>
                  <img style ={{width: '100%', height:'100%', objectFit:'cover'}} src = {profilePic} alt="profile-img"/>
                </div>
                <div style ={{width: '90%', height:'5%'}}>
                  <p>블로그 글</p>
                </div>
              </div>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Typography>
      );
    }
  }


export default Blog;