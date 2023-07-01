import React, { useState } from 'react'
import ChatbotImg from '../img/chatbot.png'
import '../styles/Chatbot.css'
// import CloseIcon from '@mui/icons-material/Close';

function Chatbot() {
    const [chatbotClose, setChatbotClose] = useState(false);

  return (
    
    <div>
        <img className='chatbot' src={ChatbotImg}/>
    </div>
  )
}

export default Chatbot