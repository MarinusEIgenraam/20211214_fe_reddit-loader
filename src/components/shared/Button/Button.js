////////////////////
//// Build

////////////////////
//// Environmental
import './Button.scss'
import AuthContext from "../../../context/AuthProvider";

////////////////////
//// External

export default function Button({children, onClick}) {

    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

/** Created by ownwindows on 22-12-21 **/
