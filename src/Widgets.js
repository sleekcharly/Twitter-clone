import React from 'react'
import './widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';

// MUI stuff
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>

          <TwitterTweetEmbed tweetId={"1247627980861509638"} />

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="sleekcharly"
            options={{ height: 400 }}
          />

          <TwitterShareButton
            url={"https://facebook.com/sleekcharly"}
            options={{ text: "#superdev Meet Charles Ukasoanya, an awsome developer.", via: "sleekcharly" }}
          />
        </div>
      </div>
    );
}

export default Widgets
