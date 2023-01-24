import * as React from 'react';
//import './Aside.css';
import CodeIcon from '@mui/icons-material/Code';
import SkillsSection from "./SkillsSection";
import Header from "./Header";
import Content from "./Content"
import AsideSection from "./AsideSection";


//const image = 'https://images.unsplash.com/photo-1474447976065-67d23accb1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80';
export default function BasicGrid() {
    return (
       //  We now want the title as a separate component
        // Same for all the information that we will input into the main box
        // We will make a new component for the aside and so on.
       <div>
           <div className="mainBox">
                {/*Hold icon image here*/}
               <Header icon={"https://img.icons8.com/material-outlined/24/null/guest-male.png"} title={'About Me'}/>
               {/*For each of these we will have text that will be added to whatever subject.*/}
               <Content content={"A highly motivated and skilled Junior Front-End Web Developer with 1+ years of experience in developing and designing responsive websites and web applications. Strong understanding of HTML, CSS, and JavaScript. Experience with popular front-end frameworks such as React and EJS. Proven ability to work in a team environment and deliver projects on time."}/>
               <Header icon={"https://img.icons8.com/ios-glyphs/30/null/development-skill.png"} title={'Work Experience'} date={'Date: 21/07/21'}/>
                <Content content={"Junior Front-End Developer at [Company Name], [Dates of Employment]\n" +
                    "                   Developed and designed responsive websites and web applications using HTML, CSS, and JavaScript\n" +
                    "                   Utilized React and Angular to create dynamic user interfaces\n" +
                    "                   Collaborated with cross-functional teams to deliver projects on time\n" +
                    "                   Internship as a Front-End Developer at [Company Name], [Dates of Employment]\n" +
                    "                   Assisted in the development and design of websites and web applications\n" +
                    "                   Gained experience in HTML, CSS, and JavaScript.  Self taught junior developer, recently had the experiance of being granted an oppeunity to study with hyperionDev which is a bootcamp funeded by russel group to\n" +
                    "                   create web sites, web applications and and gain the knowlege of strict coding practices to create programs using JS, HTML, CSS, React and more.\n" +
                    "                   Utilized React to create dynamic user interfaces which are available to via the github link.\n" +
                    "                   Collaborated with other students to deliver a series of task by the deadline. Gained a lot of experiance on the phloysife of programming and computer science.\n"}/>
               <Header icon={"https://img.icons8.com/material-outlined/24/null/accuracy.png"} title={'Skills'} date={'Date: 21/07/21'}/>
               <Content content={" Strong understanding of HTML, CSS, and JavaScript\n" +
                   "                   Experience with front-end frameworks such as React and Angular\n" +
                   "                   Familiarity with version control systems such as Git\n" +
                   "                   Strong problem-solving and analytical skills\n" +
                   "                   Excellent communication and teamwork abilities."}/>
               <CodeIcon/>
               <SkillsSection/>
               <Header icon={"https://img.icons8.com/ios-glyphs/30/null/school.png"} title={'Education'} date={'Date: 21/07/21'}/>
                <Content content={"HyperionDev Bootcamp"}/>
               <Content content={"Lambeth Collage I.T"}/>

           </div>
           <AsideSection/>
       </div>
    );
}
// I want all content to be in its own files for easy management for later on.
// Make css files for each component
// Tidy up code and layout.

