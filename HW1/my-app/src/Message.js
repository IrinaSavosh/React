import React from 'react'; //на будущее
import './Message.css'; 

const Message = ({ text }) => {
    return (
        <div className="message">
            {text}
        </div>
    );
};

export default Message;
