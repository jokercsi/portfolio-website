import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import profilePic from '../images/JibinKim.jpg';
import Skills from './skills';

class Resume extends Component{
    render() {
      return (
        <div>
          <Grid>
            <Cell col ={4}>
              <div style={{ display:'flex', justifyContent: 'center'}}>
                <img src = {profilePic} alt="profile-img" className = "resume-profile-img"/>
              </div>
              <h2 >Jibin Kim</h2>
              <h4 style={{color: 'grey'}}>IT student, Programmer</h4>
              <hr style={{borderTop: '3px solid #833fb2'}}></hr>
              <p>-	Try to stay motivated and be positive thinking."</p>
              <p>-	Self-starting worker, with a tendency to see what needs to be done before being asked.</p>
              <p>-	Half year experience in Start-Up project.</p>
              <p>-	Passionate about the Machine Learning and Data Analysis.</p>
              <hr style={{borderTop: '3px solid #833fb2'}}></hr>
              <h5>Ethnicity・Nationality</h5>
              <p>South Korea</p>
              <hr style={{borderTop: '3px solid #833fb2'}}></hr>
              <h5>Language</h5>
              <p>-	English : Business Level (TOEIC: 860)</p>
              <p>-	Japanese : Native Level (JLPT: N1)</p>
              <p>-	Korean : Native Level</p>
              <hr style={{borderTop: '3px solid #833fb2'}}></hr>
              <h5>Hobbies</h5>
              <p>-  Workout (Soccer, Weight Training)</p>
              <p>-  Trip, International Travel</p>
              <p>-  Studying English, Finance, Economies, Stock Market</p>


            </Cell>

            <Cell className="resume-right-col" col ={8}>
              <h2>Education</h2>
              <Education
                startYear={2017}
                endYear={2023}
                schoolName="Aoyama Gakuinn University"
                schoolDepartment ="(Department of Integrated Information Technology)"
                GPA="GPA: 2.6 / 4.0"
                Extra="Extracurricular Activities: Weight Training, Soccer Club, Volunteer Club"
              />
              <Education
                startYear={2016}
                endYear={2017}
                schoolName="Tokyo Korean School (in Japan)"
                schoolDepartment ="science"
              />
              <Education
                startYear={2014}
                endYear={2016}
                schoolName="Dongtang High School (in Korea)"
                schoolDepartment ="science"
                Extra="Extracurricular Activities: Soccer Club, Acting Club"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress ="70"
              />
              <Skills
                skill="JavaScript"
                progress ="50"
              />
              <Skills
                skill="React"
                progress ="30"
              />
              <Skills
              skill="MySQL"
              progress ="30"
              />
              <Skills
              skill="C/C#"
              progress ="70"
              />
              <Skills
              skill="Java"
              progress ="40"
              />
              <Skills
              skill="Python"
              progress ="30"
              />
              
            </Cell>



          </Grid>
        </div>
      );
    }
  }

export default Resume;