////////////////////
//// Build
import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
//// Environmental
import './Subreddit.scss'
import axios from "axios";

const { REACT_APP_REDDIT_API_HOT, REACT_APP_REDDIT_TOPIC, REACT_APP_REDDIT_TOPIC_END } = process.env;
////////////////////
//// External


export default function Subreddit() {
    const [ postData, setPostData ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const [ hasError, setHasError] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        const source = axios.CancelToken.source();

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
        setIsLoading(true)


        return function clearData() {
            source.cancel()
        };

    }, []);

    return (
        <>
            { postData &&
                <segment>
                    <h1>{postData.display_name_prefixed}</h1>
                    <footer>{ postData.public_description }</footer>
                    <img alt={ postData.icon_img } src={ postData.icon_img }/>
                </segment>
            }
        </>
    )
}

/** Created by ownwindows on 14-12-21 **/
