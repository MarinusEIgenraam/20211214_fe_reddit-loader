////////////////////
//// Build
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { useContext } from "react";
import { useForm } from 'react-hook-form';

////////////////////
//// Environmental
import { ReactComponent as Icon } from "../../../assets/logo.svg";
import './Navigation.scss'
import Button from "../../shared/Button/Button";
import { ReactComponent as Snow } from '../../../assets/icons/snow.svg'
import { ReactComponent as Clouds } from '../../../assets/icons/clouds.svg'
import { ReactComponent as Rain } from '../../../assets/icons/snow.svg'
import { ReactComponent as Sun } from '../../../assets/icons/sun.svg'

////////////////////
//// External
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navigation() {

    const { authenticated, toggleAuthenticated } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation()

    function onFormSubmit(data) {
        console.log(data);
    }


    return (
        <nav>
            <NavLink className='logo-icon' to='/'>
                <Icon id="logo-icon" alt='home-logo'/>
                {!(location.pathname === '/') && <h3 className="home">Home</h3> }

            </NavLink>
            { !authenticated &&
                <form>

                    <input type='text' placeholder={ 'username' } className='login-field'/>
                    <input type='text' placeholder={ 'password' } className='login-field'/>
                    <Button onClick={ toggleAuthenticated }>Login</Button>
                </form> }
            { authenticated && <Button onClick={ toggleAuthenticated }>Logout</Button> }


            <div className='navigation-icons'>
                <Snow className="icon"/>
                <Clouds className="icon"/>
                <Rain className="icon"/>
                <Sun className="icon"/>
            </div>


        </nav>
    )
}

/** Created by ownwindows on 14-12-21 **/
