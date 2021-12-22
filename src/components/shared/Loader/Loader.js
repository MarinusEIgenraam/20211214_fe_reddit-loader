////////////////////
//// Build

////////////////////
//// Environmental
import './Loader.scss'
import RedditHero from "../../layout/RedditHero/RedditHero";

////////////////////
//// External

export default function Loader({isLoading}) {

    return (
        <RedditHero className='container'>
            <h3>we are busy creating the post for you, please hond on</h3>
            {isLoading}

        </RedditHero>
    )
}

/** Created by ownwindows on 14-12-21 **/
