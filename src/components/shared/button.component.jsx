import * as React from 'react'
import { Link } from "gatsby"

const Button = ({callToAction = "Empty button", destination, onLight}) => {
    let classProperties;
    onLight === true ? 
        classProperties = "btn btn--onLight" : 
        classProperties = "btn btn--onDark";

    return(
        <Link to={destination}>
            <button className={classProperties}>
                {callToAction.toUpperCase()}
            </button>
        </Link>

    )

}

export default Button