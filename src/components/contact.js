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

              <a href ="https://github.com/jokercsi" rel="noopener noreferrer" target = "_blank">
						    <i className="fa fa-github-square" aria-hidden="true" style={{fontSize:30}}></i>
					    </a>	
              <p>github</p>

              <a href ="https://www.facebook.com/jibin.kim.7" rel="noopener noreferrer" target = "_blank">
                <i className ="fa fa-instagram" aria-hidden="true" style={{fontSize:30}}></i>
               </a>  
              <p>instagram</p>

              <a href ="https://www.facebook.com/jibin.kim.7" rel="noopener noreferrer" target = "_blank">
                <i className ="fa fa-facebook-square" aria-hidden="true" style={{fontSize:30}}></i>
              </a>  
              <p>facebook</p>

              <a href ="https://www.facebook.com/jibin.kim.7" rel="noopener noreferrer" target = "_blank">
                <i class="fa fa-book" aria-hidden="true" style={{fontSize:30}}></i>     
              </a>
              <p>Blog</p>
            </Cell>
            
            <Cell className ="contact-right-col" col={6}>
              <h2>Contact</h2>
              <hr/>
              <div className="contact-list">
                <List style ={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                  <ListItem>
                  <ListItemContent style ={{fontFamily: 'Anton', fontSize:30}}>
                      <i class="fa fa-mobile" aria-hidden="true" style={{fontSize:30}}></i>
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