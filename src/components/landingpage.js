import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePic from '../images/profileEmoji.png';
import Typical from 'react-typical';
import { Button } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/LockOpen';
import {Link} from 'react-router-dom'


class Landing extends Component{
    render() {
      return (
        <div style ={{width: '100%', margin: 'auto'}}>
		    <Grid className="landing-grid">
		        <Cell col={12}>
					<img className = 'profile-img' src = {profilePic} alt="profile-img"/>
		        	<div className = "banner-text">
						<h1>Jibin Kim</h1>
						<p>I'm{' '}
						<Typical 
							loop={Infinity}
							wrapper="b"
							steps={[
								'a Developer💻',5000,
								'a AGU Student🧑‍🎓',5000,
								'a Soccer Player',5000,
								'a Triplover', 5000,
								'a Gamer', 5000
							]}        
						/>
		        	    </p>
						<hr/>
		        		<p className="coding">I’m a software engineer & student based in Tokyo, Japan</p>
						<Link to="/portfolio-website/login">
							<Button startIcon={<LoginIcon />} variant="contained" style ={{marginBottom :'1em'}} >Admin Login / 관리자 로그인 </Button>
      					</Link>
						
		        	</div>
		        </Cell>
		    </Grid>
        </div>
      );
    }
  }

export default Landing;