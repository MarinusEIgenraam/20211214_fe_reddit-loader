////////////////////
//// Build

////////////////////
//// Environmental
import './LoadError.scss'
import RedditHero from "../../layout/RedditHero/RedditHero";

////////////////////
//// External

export default function LoadError({hasError}) {

    return (
    <RedditHero className='container'>
        <h3>an error occurred, please hond on</h3>
        {hasError}
    </RedditHero>
    )
}

/** Created by ownwindows on 14-12-21 **/
