import '../styles/ChatAi.css';
import { useState, useEffect } from 'react';

const ChatAi = () => {
    const [value, setValue] = useState(null);
    const [message, setMessage] = useState(null);
    const [previousChats, setPreviousChats] = useState([]);
    const [currentTitle, setCurrentTitle] = useState(null);

    // Function to create a new chat session
    const createNewChat = () => {
        setMessage(null);
        setValue('');
        setCurrentTitle(null);
    };

    // Handle click event for selecting a previous chat
    const handleClick = (uniqueTitle) => {
        setCurrentTitle(uniqueTitle);
        setMessage(null);
        setValue('');
    };

    // Function to fetch messages from the server
    const getMessages = async () => {
        const options = {
            method: 'POST',
            body : JSON.stringify({ message: value }),
            headers: { 'Content-Type': 'application/json' }
        };

        try {
            const response = await fetch('http://https://mern-petstore-backend.onrender.com/completions', options);
            const data = await response.json();
            setMessage(data.choices[0].message);
        } catch (error) {
            console.error(error);
        }
    };

    // Effect to handle message updates and manage chat history
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
    }, [message, currentTitle, value]);

    // Filter unique chat titles
    const uniqueTitles = Array.from(new Set(previousChats.map(previousChat => previousChat.title)));

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
                    {previousChats.map((chat, index) => (
                        (chat.title === currentTitle) && 
                        <li key={index}>
                            <p className='role'>{chat.role}</p>
                            <p>{chat.content}</p>
                        </li>
                    ))}
                </ul>
                <div className='bottom-section'>
                    <div className='input-container'>
                        <input value={value} onChange={e => setValue(e.target.value)} />
                        <div id='submit' onClick={getMessages}>Submit</div>
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
