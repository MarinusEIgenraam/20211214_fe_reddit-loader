////////////////////
//// Build
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { AuthContext } from "../../../context/AuthProvider";
import { useContext } from "react";

////////////////////
//// Environmental
import './Home.scss'
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader/Loader";
import RedditPost from "../../layout/RedditPost/RedditPost";
import ContentContainer from "../../layout/ContentContainer/ContentContainer";
import RedditHero from "../../layout/RedditHero/RedditHero";
import LoadError from "../../shared/LoadError/LoadError";

const { REACT_APP_REDDIT_API_HOT, REACT_APP_REDDIT_TOPIC, REACT_APP_REDDIT_TOPIC_END } = process.env;

////////////////////
//// External

export default function Home() {

    const { authenticated, toggleAuthenticated } = useContext(AuthContext)

    const [ redditPosts, setRedditPosts ] = useState();

    const [ isLoading, setIsLoading ] = useState();
    const [ loadError, setLoadError ] = useState();

    useEffect(() => {
        const source = axios.CancelToken.source();


        async function getData() {
            setIsLoading(true)
            setLoadError(false)

            try {
                const postData = await axios.get(`${ REACT_APP_REDDIT_API_HOT }`, { cancelToken: source.token })
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
            <div className="container">
                { isLoading && <Loader isLoading={ isLoading }/> }
                { loadError && <LoadError loadError={ loadError }/> }


                <ContentContainer>

                    <sl>
                        <RedditHero>
                            <h1>
                                Welcome to reddit

                            </h1>

                            { !authenticated && <h4>login and see how deep the rabbit hole goes!</h4> }


                        </RedditHero>
                        { ( redditPosts ) && ( redditPosts.map((post) => <RedditPost key={ post.data.created }
                                                                                     data={ post.data }/>) ) }
                    </sl>
                </ContentContainer>
            </div>
        </>
    )
        ;
}

/** Created by ownwindows on 14-12-21 **/
