import * as React from 'react'
import {Link} from 'gatsby'
import LogoDine from '../../assets/logo.svg'

const Logo = () => {
    return(
        <Link to="/">
            <img src={LogoDine} alt="Dine Restaurant" className="logo"/>
        </Link>
    )

}

export default Logo