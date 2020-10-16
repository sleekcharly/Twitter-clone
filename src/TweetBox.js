import React, { useState } from 'react'
import './tweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
          displayName: "Charles Ukasoanya",
          username: "sleekcharly",
          verified: true,
          text: tweetMessage,
          image: tweetImage ? tweetImage : "",
          avatar:
            "https://pbs.twimg.com/profile_images/862215055110279169/kdca2k3T_400x400.jpg",
          createdAt: new Date().toISOString(),
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
      <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <Avatar src="https://pbs.twimg.com/profile_images/862215055110279169/kdca2k3T_400x400.jpg" />
                    <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage}placeholder="What's happening?" type="text" />
          </div>

          <input
                    className="tweetBox__imageInput"
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
            placeholder="Enter image URL"
            type="text"
          />

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
        </form>
      </div>
    );
}

export default TweetBox
