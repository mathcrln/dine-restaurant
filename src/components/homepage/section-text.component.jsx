import * as React from 'react'

const SectionText = ({
                        title = "Title",
                        description = "You need to pass properties to this component if you want this to work.", 
                        onBackground, classProperties}) => {
    return(
            <div className={classProperties}>
                <h3 className={`text-heading--2 text-${onBackground === "dark" ? "white" : "codGray"} mb-3`}>{title}</h3>
                <p className={`text-body--1 text-${onBackground === "dark" ? "white" : "codGray"}`}>{description}</p>
            </div>
    )

}

export default SectionText