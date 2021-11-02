import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { SiTwitter } from "react-icons/si";

const Quotes = () => {
    const [quote,setQuote] = useState('');
    const [author,setAuthor] = useState('');
    const tweetLink = 'https://twitter.com/intent/tweet?text=';

    useEffect(() =>{
        getQuote();
        
    }, []);

    

    const getQuote = () => {
        const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
        axios.get(url)
        .then((response) =>{
            let dataQuotes = response.data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
            console.log(randomQuote);
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
            
        })
        
            
    }

    const handleClick = () =>{
        getQuote();
    }

    

    return (
        <div id="quote-box">
            <div id="text">
                <p>{quote}</p>
            </div>
            <div id="author">
                <p>{author}</p>
            </div>

            <div className="buttons">
                <div className="social-media">
                    <a target="_blank" href={tweetLink+quote+" - "+author} id="tweet-quote">
                        <SiTwitter className="icon" />
                    </a>
                </div>
                <button onClick={handleClick} id="new-quote">New Quote</button>
            </div>
        </div>
    )
}
export default Quotes;
