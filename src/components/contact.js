import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import contactPic1 from '../images/profile.jpg';
import contactPic2 from '../images/contactPic.jpg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';

class Contact extends Component{
    render() {
      return (
        <div className = "contact-body">
          <Grid className = "contact-grid">           
             <Cell className ="contact-left-col" col={6}>
              <img src = {contactPic1} alt="profile-img" className = "contactPic-img"/>
              <h2>Social Media </h2>
              <hr/>
              <List>
              <ListItem>
                  <ListItemButton onClick={() => window.open('https://www.instagram.com/jibin_ary/', '_blank')}>
                    <ListItemIcon>
                      <InstagramIcon />
                    </ListItemIcon>
                    <ListItemText primary="@jibin_ary" secondary="Instagram"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={() => window.open('https://www.facebook.com/jibin.kim.7/', '_blank')}>
                    <ListItemIcon>
                      <FacebookIcon />
                    </ListItemIcon>
                    <ListItemText primary="https://www.facebook.com/jibin.kim.7" secondary="Facebook"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={() => window.open('https://github.com/jokercsi', '_blank')}>
                    <ListItemIcon>
                      <GitHubIcon/>
                    </ListItemIcon>
                    <ListItemText primary="https://github.com/jokercsi" secondary="Github"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={() => window.open('https://blog.naver.com/jokercsi1', '_blank')}>
                    <ListItemIcon>
                      <BookIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Blog"  secondary="Naver Blog"/>
                  </ListItemButton>
                </ListItem>
              </List>
            </Cell>
            
            <Cell className ="contact-right-col" col={6}>
              <h2>Contact</h2>
              <hr/>
              <List>
              <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText primary="Machida, Kanagawa" secondary="JAPAN"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hwaseong-si, Gyeonggi-do" secondary="REPUBLIC OF KOREA"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <PhoneIphoneIcon/>
                    </ListItemIcon>
                    <ListItemText primary="080-1357-2631" secondary="JAPAN"/>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <EmailIcon/>
                    </ListItemIcon>
                    <ListItemText primary="a5817028@aoyama.jp" />
                  </ListItemButton>
                </ListItem>
                <ListItem >
                <ListItemButton>
                    <ListItemIcon>
                      <EmailIcon/>
                    </ListItemIcon>
                    <ListItemText primary="jokercsi@gmail.com" />
                  </ListItemButton>
                </ListItem>
              </List>
              <img src = {contactPic2} alt="profile-img" className = "contactPic-img"/>
            </Cell>
          </Grid>
        </div>
      );
    }
  }


export default Contact;