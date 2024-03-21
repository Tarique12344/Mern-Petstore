import '../styles/ChatAi.css';
import React, { useState, useEffect } from 'react';

const ChatAi = () => {
    const [value, setValue] = useState('');
    const [message, setMessage] = useState(null);
    const [previousChats, setPreviousChats] = useState([]);
    const [currentTitle, setCurrentTitle] = useState(null);

    const createNewChat = () => {
        setMessage(null);
        setValue('');
        setCurrentTitle(null);
    };

    const handleClick = (uniqueTitle) => {
        setCurrentTitle(uniqueTitle);
        setMessage(null);
        setValue('');
    };

    const getMessages = async () => {
        const options = {
            method: 'POST',
            body: JSON.stringify({ prompt: value, max_tokens: 100 }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_OPENAI_API_KEY' // Replace 'YOUR_OPENAI_API_KEY' with your actual API key
            }
        };

        try {
            const response = await fetch('https://api.openai.com/v1/completions', options);
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
            const data = await response.json();

            // Check if data.choices exists and has elements
            if (data.choices && data.choices.length > 0) {
                setMessage(data.choices[0].message);
            } else {
                // Handle the case when data.choices is empty or undefined
                console.error('No choices found in the response data');
                setMessage(null); // Reset message state
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (!currentTitle && value && message) {
            setCurrentTitle(value);
        }
        if (currentTitle && value && message) {
            setPreviousChats(prevChats => ([
                ...prevChats,
                { title: currentTitle, role: 'user', content: value },
                { title: currentTitle, role: message.role, content: message.content }
            ]));
        }
    }, [message, currentTitle]);

    const currentChat = previousChats.filter(chat => chat.title === currentTitle);
    const uniqueTitles = Array.from(new Set(previousChats.map(chat => chat.title)));

    return (
        <div className='chatai'>
            <section className='side-bar'>
                <button onClick={createNewChat}>+ New Chat</button>
                <ul className='history'>
                    {uniqueTitles.map((uniqueTitle, index) => (
                        <li key={index} onClick={() => handleClick(uniqueTitle)}>{uniqueTitle}</li>
                    ))}
                </ul>
                <nav>
                    <p>Made by ADEPARTAR</p>
                </nav>
            </section>
            <section className='main'>
                {!currentTitle && <h1>AdepatarGPT</h1>}
                <ul className='feed'>
                    {currentChat.map((chatMessage, index) => (
                        <li key={index}>
                            <p className='role'>{chatMessage.role}</p>
                            <p>{chatMessage.content}</p>
                        </li>
                    ))}
                </ul>
                <div className='bottom-section'>
                    <div className='input-container'>
                        <input value={value} onChange={e => setValue(e.target.value)} />
                        <div id='submit' onClick={getMessages}>></div>
                        <p className='info'>
                            Chat GPT, Free Research Preview.
                            Our goal is to make Ai systems more natural and safe to interact with.
                            Your feedback will help us improve.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChatAi;
