import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
         </div>
      <div className="main-container">
{!showResult
?<>
<div className="great">
            <p><span>Hello</span></p>
            <p>How can I help you today?</p>
             </div>
             <div className="cards">
                <div className="card">
                                    
<p>Suggest beautiful place to see on an upcoming road trip</p>
<img src={assets.compass_icon} alt=''></img>
 </div>
 <div className="card">
 <p>Briefly summarise this concept: urban planning</p>
<img src={assets.bulb_icon} alt=''></img>
  </div>
  <div className="card">
                    <p>Brainstorm team bonding activites for our work retreat</p>
                    <img src={assets.message_icon} alt=''></img>
                     </div>
                     <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt=''></img>
                     </div>
                     </div>
</>
:<div className='result'>
<div className="result-title">
  <p>{recentPrompt}</p>
</div>
<div className="result-data">
  <img src={assets.gemini_icon}></img>
  {loading
  ?<div className='loader'>
    <hr/>
    <hr/>
    <hr/>

  </div>
  :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
  }
  
</div>
</div>
}

   
                     <div className="main-bottom">
                      <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type = "text" placeholder="Enter a prompt here"/>
<div>
  <img src={assets.gallery_icon} alt= "" />
  <img src={assets.mic_icon} alt= "" />
  <img onClick={()=>onSent()} src={assets.send_icon} alt= "" />
</div>
 </div>
 <p className="bottom-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque dicta repudiandae pariatur et sequi amet at ad consectetur eveniet neque consequuntur sapiente, praesentium quo veniam quam. Soluta, ducimus sed?</p>

                     </div>

      </div>
    </div>
  )
}

export default Main
