////////////////////
//// Build

////////////////////
//// Environmental
import './RedditPost.scss'
import { Link } from "react-router-dom";
import React from "react";

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
            <Link className="post-title" to={ { pathname: `https://www.reddit.com/${ data.permalink }` } } target="_blank">
                <h2>
                { data.title }
                </h2>
            </Link>


            <p>domain: { data.domain }</p>
            <h4></h4>
            <p>comments: { data.comments }</p>
            <p>Subscribers: { data.subreddit_subscribers }</p>
            <footer>{ data.created }</footer>
        </li>
    )
}

/** Created by ownwindows on 21-12-21 **/
