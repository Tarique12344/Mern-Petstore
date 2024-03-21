import '../styles/ChatAi.css';
import { useState, useEffect } from 'react';

const ChatAi = () => {
    const [value, setValue] = useState('');
    const [message, setMessage] = useState('');
    const [previousChats, setPreviousChats] = useState([]);
    const [currentTitle, setCurrentTitle] = useState(null);

    const createNewChat = () => {
        setMessage('');
        setValue('');
        setCurrentTitle(null);
    };

    const handleClick = (uniqueTitle) => {
        setCurrentTitle(uniqueTitle);
        setMessage('');
        setValue('');
    };

    const getMessages = async () => {
        const options = {
            method: 'POST',
            body: JSON.stringify({ message: value }),
            headers: { 'Content-Type': 'application/json' }
        };
    
        try {
            const response = await fetch('https://mern-petstore-backend.onrender.com/completions', options);
            const data = await response.json();
            if (data.choices && data.choices.length > 0) {
                setMessage(data.choices[0].message);
            } else {
                // Handle the case where no choices are returned
                console.error('No choices found in the response data');
                setMessage(null); // Reset message state or handle accordingly
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
                {
                    title: currentTitle,
                    role: 'user',
                    content: value
                },
                {
                    title: currentTitle,
                    role: message.role,
                    content: message.content
                }
            ]));
        }
    }, [message, currentTitle, value]);

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
                    {currentChat?.map((chatMessage, index) => (
                        <li key={index}>
                            <p className='role'>{chatMessage.role}</p>
                            <p>{chatMessage.content}</p>
                        </li>
                    ))}
                </ul>
                <div className='bottom-section'>
                    <div className='input-container'>
                        <input value={value} onChange={(e) => setValue(e.target.value)} />
                        <div id='submit' onClick={getMessages}>Click</div>
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
