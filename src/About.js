import React, { useState } from 'react'
import './About.css'
import Bot1 from '../src/Images/Bot.png';
import Comp from '../src/Images/HaxMas.jpg';
import CompHACK from '../src/Images/IIT HACK.jpeg';
import Complement from '../src/Images/Complements.jpg';
import Shohan from '../src/Images/shohan.jpg';
import Shohan2 from '../src/Images/Shohan2.jpeg';
import Shehan from '../src/Images/Shehan2.jpg';
import Shehan2 from '../src/Images/shehan.jpg';
import Shuhaib from '../src/Images/Shuhaib2.jpg';
import Shuhaib2 from '../src/Images/Shuhaib_A.jpg';
import Thoshitha from '../src/Images/thoshitha2.jpg';
import Thoshitha2 from '../src/Images/thoshitha.jpg';
import Thalha2 from '../src/Images/thalha2.jpg';
import Thalha1 from '../src/Images/thalha.jpg';
import Chanod from '../src/Images/chanod2.jpg';
import Chanod2 from '../src/Images/chanod.jpg';
const About = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  
  

  const buttonClasses = {}

  



  return (
    <div>
      <div className='tab-container'>
        <div className='tab-bloc-tabs'>
          <button
            className={
              toggleState === 1
                ? 'tab-tabs tab-active-tabs tab-tab-controller-btn'
                : 'tab-tabs tab-tab-controller-btn'
            }
            onClick={() => toggleTab(1)}
          >
          <div class="tab"> About Project PIKAIA</div>
          </button>
          <button
            className={
              toggleState === 2
                ? 'tab-tabs tab-active-tabs tab-tab-controller-btn'
                : 'tab-tabs tab-tab-controller-btn'
            }
            onClick={() => toggleTab(2)}
          >
          
          <div class="tab">  Meet the team </div>
          </button>
          <button
            className={
              toggleState === 3
                ? 'tab-tabs tab-active-tabs tab-tab-controller-btn'
                : 'tab-tabs tab-tab-controller-btn'
            }
            onClick={() => toggleTab(3)}
          >
            <div class="tab"> Mental Health Awareness </div>
          </button>
        </div>

        <div className='tab-content-tabs'>
          <div
            className={
              toggleState === 1
                ? 'tab-content  tab-active-content'
                : 'tab-content'
            }
          >
            <Tab1 />
          </div>

          <div
            className={
              toggleState === 2
                ? 'tab-content  tab-active-content'
                : 'tab-content'
            }
          >
            <Tab2 />
          </div>

          <div
            className={
              toggleState === 3
                ? 'tab-content  tab-active-content'
                : 'tab-content'
            }
          >
            <Tab3 />
          </div>
        </div>
      </div>
    </div>
  )
}

// TODO: add tab 1 content here
const Tab1 = () => {
  return <div class="About_main">
  <div class="about_card">
    
      <img src={Bot1}  alt="Pikaia" class="about_image"/>
      <h1 class="H1_header">PROJECT PIKAIA </h1>
      <p class="P1_Para" >~ Our vision and our mission ~</p>

      <hr class="hr1"></hr>
      
      <p class="P2_Para">We all go through a wide range of mood swings when we go through our day to day lives. We seldom find someone 
      to talk about how we feel nor to rant about our lives. This is both due to our personal insecurities and the busy life style.
       This is where Pikaia comes in. In Pikaia, you will always find someone to talk to. Pikaia will not only listen to whatever you 
       have to say, it has a way of comforting you too. Our group developed this application with hopes of utilizing music therapy to help you cope with your mood 
       swings. Music therapy is a proven way to relieve you of your negative emotions and moods.
        Pikaia will not only be your companion who will listen to whatever you have to say, but will comfort you with the most appropriate
         music to make you feel good. Still not convinced? Just hop in and start chatting to find out yourself!</p>

      
      <hr class="hr2"></hr>
      
      <h1 class="about_comp">Competitions Team PhyOps has joined</h1>
      <div class="container_1">
      <p class="About_img_comp_para">Team PyOps, Project PIKAIA earning 4th place out of 40 impressive and outstanding ideas. HaxMas was also their very first team event</p>
     
      <img src={Comp}  alt="HaxMas" class="about_img_haxmas"/>
      </div>  
      

      <hr class="hr2"></hr>

      <div class="container_1">
     
      <img src={CompHACK}  alt="IIT HACK" class="about_img_IITHACK"/>
      <p class="About_img_compHack_para">Currently participating in IIT HACK with the goal of trying to get to the top 3 and gaining experience for self and team growth</p>
     
      </div>
      <hr class="hr2"></hr>

      <div class="container_1">
      <p class="About_img_team1_para"> Mrs Anna Kalm (Founder CEO of Ascentic) and Mrs Dhanisha Paul (Director Delivery at Sysco Labs) acknowledge team Pyop's project PIKAIA both in Linkedin and on the day of HaxMas 2021 </p>
        <img src={Complement}  alt="Ayeee!" class="about_img_team1"/>
     
      
      </div>

      <hr class="hr2"></hr>
      <div class="container_1">
     
      <img src={Shehan}  alt="Ayeee!" class="about_img_team2"/>
      <p class="About_img_team1_para"> Mrs Anna Kalm (Founder CEO of Ascentic) and Mrs Dhanisha Paul (Director Delivery at Sysco Labs) acknowledge team Pyop's project PIKAIA both in Linkedin and on the day of HaxMas 2021 </p>
    
      </div>

      <hr class="hr2"></hr>
      <div class="container_1">
      <p class="About_img_team1_para"> Mrs Anna Kalm (Founder CEO of Ascentic) and Mrs Dhanisha Paul (Director Delivery at Sysco Labs) acknowledge team Pyop's project PIKAIA both in Linkedin and on the day of HaxMas 2021 </p>
      <img src={Thoshitha}  alt="Ayeee!" class="about_img_team3"/>
      
      </div>

      <hr class="hr2"></hr>
      <div class="container_1">
      <img src={Shuhaib}  alt="Ayeee!" class="about_img_team4"/>
      <p class="About_img_team1_para"> Mrs Anna Kalm (Founder CEO of Ascentic) and Mrs Dhanisha Paul (Director Delivery at Sysco Labs) acknowledge team Pyop's project PIKAIA both in Linkedin and on the day of HaxMas 2021 </p>
      </div>

      <hr class="hr2"></hr>
      <div class="container_1">
      <p class="About_img_team1_para"> Mrs Anna Kalm (Founder CEO of Ascentic) and Mrs Dhanisha Paul (Director Delivery at Sysco Labs) acknowledge team Pyop's project PIKAIA both in Linkedin and on the day of HaxMas 2021 </p>
      <img src={Thalha2}  alt="Ayeee!" class="about_img_team5"/>
     
      </div>

      <hr class="hr2"></hr>
      <div class="container_1">
      <img src={Chanod}  alt="Ayeee!" class="about_img_team6"/>
      <p class="About_img_team2_para"> Mrs Anna Kalm (Founder CEO of Ascentic) and Mrs Dhanisha Paul (Director Delivery at Sysco Labs) acknowledge team Pyop's project PIKAIA both in Linkedin and on the day of HaxMas 2021 </p>
      </div>

      <hr class="hr2"></hr>

      <div class="container_1">
      <p class="About_img_Complement_para"> |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| </p>
      <img src={Shohan}  alt="Ayeee!" class="about_img_Complements"/>
    
      </div>
     

      
      <hr></hr>
   </div>
      

  

</div>
}

// TODO: add tab 2 content here
const Tab2 = () => {
  return (<div class="About_main_tab2">
    <div class="about_card_tab2">
      
        <img src={Bot1}  alt="Pikaia" class="about_image_tab2"/>
        <h1 class="H1_header_tab2">PROJECT PIKAIA </h1>
        <p class="P1_Para_tab2" >~ The intellects behind Project Pikaia~</p>
  
        <hr class="tab3_hr"></hr>
        <div class="row">
  <div class="column">
    <div class="card">
    <img src={Shohan2}  alt="Ayeee!" class="about_img_teamT"/>
      <div class="container">
        <h2>Shohan Saverimuttu</h2>
        <p class="title">PhyOps Team Leader</p>
       
       
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={Thoshitha2}  alt="Ayeee!" class="about_img_teamT"/>
      <div class="container">
        <h2>Thoshitha</h2>
        <p class="title">PhyOps Team Member</p>
       
      
       
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img src={Shehan2}  alt="Ayeee!" class="about_img_teamT"/>
      <div class="container">
        <h2>Shehan Saverimuttu</h2>
        <p class="title">PhyOps Team Member</p>
     
        
        
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
    <img src={Chanod2}  alt="Ayeee!" class="about_img_teamT"/>
      <div class="container">
        <h2>Chanod</h2>
        <p class="title">PhyOps Team Member</p>
      
      
       
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
    <img src={Shuhaib2}  alt="Ayeee!" class="about_img_teamT"/>
      <div class="container">
        <h2>Shuhaib</h2>
        <p class="title">PhyOps Team Member</p>
        
        
        
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card2">
    <img src={Thalha1}  alt="Ayeee!" class="about_img_teamT"/>
      <div class="container">
        <h2>Thalha Mukshik</h2>
        <p class="title">PhyOps Team Memmber</p>
        
        
       
      </div>
    </div>
  </div>
</div>
       
       </div>
    
  
    
  
  </div>
)}

// TODO: add tab 3 content here
const Tab3 = () => {
  return <div class="About_main_tab3">
  <div class="about_card_tab3">
    
      <img src={Bot1}  alt="Pikaia" class="about_image_tab3"/>
      <h1 class="H1_header_tab3">PROJECT PIKAIA </h1>
      <p class="P1_Para_tab3" >~ Mental health? ~</p>

      <hr class="tab3_hr"></hr>
      
      <p class="P2_Para_tab3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
  

  

</div>
}

export default About
