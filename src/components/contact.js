import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
import profilePic from '../images/profile.jpg';


class Contact extends Component{
    render() {
      return (
        <div className = "contact-body">
          <Grid className = "contact-grid">           
             <Cell col={6}>
              <h2>Jibin Kim</h2>
              <img src = {profilePic} alt="profile-img" className = "profile-img"/>
              <p style ={{ width: '75%', margin: 'auto', paddingTop:'1em'}}>
              Hello World
              </p>
            </Cell>
            
            <Cell className="contact-right-col" col={6}>
            <h2>Contact</h2>
            <hr/>

            <div className="contact-list">
              <List style ={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ListItem>
                <ListItemContent style ={{fontFamily: 'Anton', fontSize:30}}>
                     <i className="fa fa-phone-square" aria-hidden="true" style={{fontSize:30}}></i>
                     +82-010-8070-2310
                  </ListItemContent>
                </ListItem>
                <ListItem>
                <ListItemContent style ={{fontFamily: 'Anton', fontSize:30}}>
                     <i className="fa fa-address-book" aria-hidden="true" style={{fontSize:30}}></i>
                     Hwaseong-si, Gyeonggi-do, REPUBLIC OF KOREA
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style ={{fontFamily: 'Anton', fontSize:30}}>
                     <i className="fa fa-envelope" aria-hidden="true" style={{fontSize:30}}></i>
                    a5817028@aoyama.jp
                 </ListItemContent>
                </ListItem>
                <ListItem>
                <ListItemContent style ={{fontFamily: 'Anton', fontSize:30}}>
                    <i className="fa fa-envelope" aria-hidden="true" style={{fontSize:30}}></i>
                     jokercsi@gmail.com
                 </ListItemContent>
                </ListItem>

              </List>
            </div>
            </Cell>
            
          </Grid>
        </div>
      );
    }
  }

export default Contact;