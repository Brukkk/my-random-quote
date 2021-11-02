import React from 'react';

const quotes = () => {
    return (
        <div id="quote-box">
            <div id="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem alias reiciendis deserunt beatae necessitatibus, nobis natus praesentium, maxime veniam deleniti eaque, corporis ipsum quo!</p>
            </div>
            <div id="author">
                <p>Author</p>
            </div>

            <div className="buttons">
                <div className="social-media">
                    <a href="#" id="tweet-quote">
                        <span><img src="" alt="Twitter button" /></span>
                    </a>
                </div>
                <button id="new-quote">New Quote</button>
            </div>
        </div>
    )
}
export default quotes;