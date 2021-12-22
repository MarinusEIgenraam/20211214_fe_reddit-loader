////////////////////
//// Build

////////////////////
//// Environmental
import './LoadError.scss'

////////////////////
//// External

export default function LoadError({hasError}) {

    return (
        <div className="container">
            <h3>an error occurred, please hond on</h3>
            {hasError}
        </div>
    )
}

/** Created by ownwindows on 14-12-21 **/
