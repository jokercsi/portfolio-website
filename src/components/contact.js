import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
import contactPic1 from '../images/profile.jpg';
import contactPic2 from '../images/contactPic.jpg';


class Contact extends Component{
    render() {
      return (
        <div className = "contact-body">
          <Grid className = "contact-grid">           
             <Cell className ="contact-left-col" col={6}>
              <img src = {contactPic1} alt="profile-img" className = "contactPic-img"/>
              <h2>SNS & Other Accounts </h2>
              <hr/>
              <p>github</p>
              <p>instagram</p>
              <p>facebook</p>
            </Cell>
            
            <Cell className ="contact-right-col" col={6}>
              <h2>Contact</h2>
              <hr/>
              <div className="contact-list">
                <List style ={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                  <ListItem>
                  <ListItemContent style ={{fontFamily: 'Anton', fontSize:30}}>
                      <i className="fa fa-phone-square" aria-hidden="true" style={{fontSize:30}}></i>

                      <p>080-1357-2631</p>
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                  <ListItemContent style ={{fontFamily: 'Anton', fontSize:30}}>
                      <i className="fa fa-address-book" aria-hidden="true" style={{fontSize:30}}></i>
                      <p>Hwaseong-si, Gyeonggi-do, REPUBLIC OF KOREA</p>
                      <br/>
                      <p>Sagamihara, Kanagawa, Japan</p>
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style ={{fontFamily: 'Anton', fontSize:30}}>
                      <i className="fa fa-envelope" aria-hidden="true" style={{fontSize:30}}></i>
                      <p>a5817028@aoyama.jp</p>
                  </ListItemContent>
                  </ListItem>
                  <ListItem>
                  <ListItemContent style ={{fontFamily: 'Anton', fontSize:30}}>
                      <i className="fa fa-envelope" aria-hidden="true" style={{fontSize:30}}></i>
                      <p>jokercsi@gmail.com</p>
                  </ListItemContent>
                  </ListItem>
                </List>
              </div>
              <img src = {contactPic2} alt="profile-img" className = "contactPic-img"/>
            </Cell>
            
          </Grid>
        </div>
      );
    }
  }

export default Contact;