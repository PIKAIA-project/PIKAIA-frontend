import React, { useState } from 'react'
import './About.css'
import Bot1 from '../src/Images/Bot.png';
import Comp from '../src/Images/HaxMas.jpg';
import CompHACK from '../src/Images/IITHACK.jpg';
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
import Thalha1 from '../src/Images/thalha_m.jpg';
import Chanod from '../src/Images/chanod2.jpg';
import Chanod2 from '../src/Images/chanod.jpg';
import Awareness1 from '../src/Images/awareness.jpg';
import depressed from '../src/Images/sad_boy.jpg';
import help from '../src/Images/help.jpg';


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
      <p class="About_img_team1_para"> Shehan just being shehan </p>
    
      </div>

      <hr class="hr2"></hr>
      <div class="container_1">
      <p class="About_img_team3_para"> When eminem is your Competition </p>
      <img src={Thoshitha}  alt="Ayeee!" class="about_img_team3"/>
      
      </div>

      <hr class="hr2"></hr>
      <div class="container_1">
      <img src={Shuhaib}  alt="Ayeee!" class="about_img_team4"/>
      <p class="About_img_team4_para"> "ahh.. this mic is too heavy " </p>
      </div>

      <hr class="hr2"></hr>
      <div class="container_1">
      <p class="About_img_team5_para"> "Staring contest??? Game on son!!" </p>
      <img src={Thalha2}  alt="Ayeee!" class="about_img_team5"/>
     
      </div>

      <hr class="hr2"></hr>
      <div class="container_1">
      <img src={Chanod}  alt="Ayeee!" class="about_img_team6"/>
      <p class="About_img_team6_para"> " *breathes* "  </p>
      </div>

      <hr class="hr2"></hr>

      <div class="container_1">
      <p class="About_img_Complement_para">" *karate chop* "" </p>
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
      
      <p class="P2_Para_tab3">  Mental illnesses affect 19% of the adult population, 46% of teenagers and 13% of children each year.
       Anxiety disorders and mood disorders are two most common mental illnesses. Unfortunately, most of those cases go unnoticed due 
       to the stigma attached to mental health. Helping people combat anxiety and negative mood swings is the goal of the developers.
        Our effort of providing an innovative solution to this existing problem is one of our SDG goals. </p>

        <img src={Awareness1}  alt="sad girl" class="awareness_image_tab3"/>  

      <p class="P3_Para_tab3">Sri Lanka has one of the highest suicide rates in the world, with an average of 6000 deaths per year,
       nearly 100,000 attempt to take their own life every year. Historically, Sri Lanka has always turned a blind eye towards mental
        health due to social taboos and lack of knowledge about the subject matter among the general populace.
         This is evident from the fact that resources and funding in the country has always been low when it comes to mental healthcare.
          Even after the tragedy of a war citizens had to endure for nearly 3 decades. Data shows that there are only one psychiatrist
           for every 500,000 Sri Lankans. Furthermore, majority of the available experts are concentrated in urban areas. 
           Another huge drawback when it comes to mental health in Sri Lanka is the lack of trained staff with the healthcare system. </p>

        
           <img src={depressed}  alt="sad boy" class="sad_image_tab3"/> 

      <p class="P4-Para-tab3">Those are the reasons which fueled the creation of Pikaia. While developers are making no effort to 
      replace professional healthcare, we are trying to make a difference out there. 
      With Pikaia, you will always have someone to listen to. Someone to rant about your daily struggles. 
      Pikaia will not only listen to you, it will make you feel good through the magical medicine of music. 
 </p> 

 <img src={help}  alt="helping hand" class="helping_hand_tab3"/> 


        </div>
  

  

</div>
}

export default About
