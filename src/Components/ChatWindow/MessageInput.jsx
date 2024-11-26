import React, { useState } from 'react';

const MessageInput = ({onSendMessage}) => {
    const [message, setMessage] = useState('');
    const handleSend = () => {
        if (message.trim() === '') return;
        console.log('Message sent:', message);
        onSendMessage(message);
        setMessage('');
    };

    return (
        <div className="flex space-x-3 items-center p-4  bg-[#202c33]">
            <span aria-hidden="true" data-icon="smiley" class=""><svg viewBox="0 0 24 24" height="26" width="26" preserveAspectRatio="xMidYMid meet" class="x23j0i4 xd7y6wv" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>smiley</title><path fill="lightgray" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path></svg></span>
            <span aria-hidden="true" data-icon="plus" class=""><svg viewBox="0 0 24 24" width="32" preserveAspectRatio="xMidYMid meet" class="x11xpdln x1d8287x x1h4ghdb"><title>plus</title><path fill="white" d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path></svg></span>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDownCapture={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSend();
                    }
                }}
                placeholder="Type a message"
                className="flex-1 p-2 rounded-md outline-none bg-[#2a3942] text-white"
            />
            <button
                onClick={handleSend}
                
                className="ml-4 px-4 py-2 rounded-md"
            >{
                    !message ? (
                        <span aria-hidden="true" data-icon="ptt" class=""><svg viewBox="0 0 24 24" height="26" width="26" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>ptt</title><path fill="gray" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg></span>
                    ) : (
                        <span aria-hidden="true" data-icon="send" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>send</title><path fill="gray" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg></span>
                    )
                }
            </button>
        </div>
    );
};

export default MessageInput;
