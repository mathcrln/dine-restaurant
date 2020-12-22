import * as React from 'react'

const Container = (props) => {
    return(
        <div className={`container w-77 m-auto ${props.classProperties}`}>
            {props.children}
        </div>

    )

}

export default Container