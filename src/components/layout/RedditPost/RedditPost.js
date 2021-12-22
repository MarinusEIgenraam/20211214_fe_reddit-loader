////////////////////
//// Build

////////////////////
//// Environmental
import './RedditPost.scss'
import { Link } from "react-router-dom";
import React from "react";
import numberWithDots from "../../../helpers/calculateHelper";
import createDateString from "../../../helpers/createDateString";
////////////////////
//// External

export default function RedditPost({ data }) {

    return (
        <li>


            <Link className="reddit-subreddit" to={ `/subreddit/${ data.subreddit }` }>
                <img alt={data.subreddit} className='avatar-image'
                     src="https://styles.redditmedia.com/t5_2z4sy/styles/communityIcon_pcigkqhspva71.png"/>
                <h4 className='subreddit-name'>
                    r/{ data.subreddit }<span className="author"> • { data.author }</span>
                </h4>
            </Link>
            <a href={`https://www.reddit.com${ data.permalink }`} className="post-title">
                <h2>
                    { data.title }
                </h2>
            </a>



            <h4>{ data.domain }</h4>
            <p>{ numberWithDots(data.num_comments )} comments</p>
            <p>{numberWithDots(data.subreddit_subscribers)} people subscribed</p>
            <footer>{ createDateString(data.created) }</footer>
        </li>
    )
}

/** Created by ownwindows on 21-12-21 **/
