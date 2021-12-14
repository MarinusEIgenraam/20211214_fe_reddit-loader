////////////////////
//// Build
import React, {useEffect, useState} from "react";
import axios from 'axios';

////////////////////
//// Environmental
import './Home.scss'

const {REACT_APP_REDDIT_API_HOT, REACT_APP_REDDIT_TOPIC, REACT_APP_REDDIT_TOPIC_END} = process.env;

////////////////////
//// External

export default function Home() {
    const [redditPosts, setRedditPosts] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    const [loadError, setLoadError] = useState(false);

    useEffect(() => {
        const source = axios.CancelToken.source();


        async function getData() {
            try {

                const postData = await axios.get(`${REACT_APP_REDDIT_API_HOT}`, {cancelToken: source.token})
                setRedditPosts(postData.data);
                console.log(redditPosts);

            } catch (e) {
                console.error(e);
            }
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

                <sl>
                    <li>
                        list item
                    </li>
                </sl>
            </div>
        </>
    )
}

/** Created by ownwindows on 14-12-21 **/
