////////////////////
//// Build
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
//// Environmental
import './Subreddit.scss'
import axios from "axios";
import Loader from "../../shared/Loader/Loader";
import LoadError from "../../shared/LoadError/LoadError";
import ContentContainer from "../../layout/ContentContainer/ContentContainer";
import RedditHero from "../../layout/RedditHero/RedditHero";

const { REACT_APP_REDDIT_API_HOT, REACT_APP_REDDIT_TOPIC, REACT_APP_REDDIT_TOPIC_END,REACT_APP_REDDIT_LOAD_TIMER } = process.env;
////////////////////
//// External


export default function Subreddit() {
    const [ postData, setPostData ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const [ hasError, setHasError] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        const source = axios.CancelToken.source();

        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
            setIsLoading(false)
        }, REACT_APP_REDDIT_LOAD_TIMER);

        async function getPost() {

            setIsLoading(true);
            setHasError(false);


            try {
                const result = await axios.get(`https://www.reddit.com/r/${id}/about.json`, { cancelToken: source.token });
                setPostData(result.data.data);
                console.log(postData);
                console.log(id)

            } catch (e) {
                console.error(e);
                setHasError(true);
            }
        }


        getPost();

        console.log(id);


        return function clearData() {
            source.cancel()
            clearTimeout(timer);
            setIsLoading(false)

        };

    }, []);

    return (
        <div className="center">
          <ContentContainer>
              {isLoading && <Loader isLoading={isLoading} />}
              {hasError && <LoadError hasError={hasError} />}
              <RedditHero className="container-sub">

                  {postData &&
                      <>
                          <h1>{postData.display_name_prefixed}</h1>
                          <footer>{ postData.public_description }</footer>
                          <img alt={ postData.icon_img } src={ postData.icon_img }/>

                      </>

                  }
              </RedditHero>
          </ContentContainer>


        </div>
    )
}

/** Created by ownwindows on 14-12-21 **/
