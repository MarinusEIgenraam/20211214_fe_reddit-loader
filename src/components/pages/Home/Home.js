////////////////////
//// Build
import React, {useEffect, useState} from "react";
import axios from 'axios';

////////////////////
//// Environmental
import './Home.scss'
import {Link} from "react-router-dom";
import Loader from "../../shared/Loader/Loader";
import RedditPost from "../../shared/RedditPost/RedditPost";

const {REACT_APP_REDDIT_API_HOT, REACT_APP_REDDIT_TOPIC, REACT_APP_REDDIT_TOPIC_END} = process.env;

////////////////////
//// External

export default function Home() {
    const [redditPosts, setRedditPosts] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const [loadError, setLoadError] = useState(false);

    useEffect(() => {
        const source = axios.CancelToken.source();


        async function getData() {
            setIsLoading(true)
            setLoadError(false)

            try {
                const postData = await axios.get(`${REACT_APP_REDDIT_API_HOT}`, {cancelToken: source.token})
                setRedditPosts(postData.data.data.children);
                console.log(postData);
                console.log(redditPosts);

            } catch (e) {
                console.error(e);
                setLoadError(true)
            }
            setIsLoading(false)
        }

        getData();

        return function clearData() {
            source.cancel();
        };

    }, []);


    return (
        <>
            <div>
                <h1>HomePage</h1>
                {(isLoading) && <Loader/>}


                <sl>
                    {(redditPosts) && (redditPosts.map((post) => <RedditPost key={post.data.created} data={post.data}/>))}
                </sl>
            </div>
        </>
    )
        ;
}

/** Created by ownwindows on 14-12-21 **/
