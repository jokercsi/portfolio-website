import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePic from '../images/profileEmoji.png';
import Typical from 'react-typical';


class Landing extends Component{
    render() {
      return (
        <div style ={{width: '100%', margin: 'auto'}}>
		    <Grid className="landing-grid">
		        <Cell col={12}>
					<img src = {profilePic} alt="profile-img"/>
		        	<div className = "banner-text">
						<h1>Jibin Kim</h1>
						<p>I'm{' '}
						<Typical 
							loop={Infinity}
							wrapper="b"
							steps={[
								'a Developer💻',2000,
								'a AGU Student🧑‍🎓',2000,
								'a Soccer Player',2000,
								'Iron Man', 2000,
								'Legend', 2000
							]}        
						/>
		        	    </p>
						<hr/>

		        		<p className="coding">HTML/CSS | JavaScript | React | MySQL | C/C# | Java | Python | Git</p>
		        	</div>
		        </Cell>
		    </Grid>
        </div>
      );
    }
  }

export default Landing;