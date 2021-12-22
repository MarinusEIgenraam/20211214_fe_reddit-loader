////////////////////
//// Build

////////////////////
//// Environmental
import './RedditPost.scss'
import {Link} from "react-router-dom";
import React from "react";

////////////////////
//// External

export default function RedditPost({data}) {

    return (
        <li>
            <Link to='/reditpost'>
                {data.title}
            </Link>
            <h4>{data.author}</h4>

            <p>domain: {data.domain}</p>
            <p>link: {data.permalink}</p>
            <p>comments: {data.comments}</p>
            <p>comments: {data.subreddit_subscribers}</p>
            <footer>{data.created}</footer>
        </li>
    )
}

/** Created by ownwindows on 21-12-21 **/
