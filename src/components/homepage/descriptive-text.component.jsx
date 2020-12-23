import * as React from 'react'

const FeatureText = ({title, description}) => {
    return(

            <div>
                <h3 className="text-heading--2 text-codGray mb-3">{title}</h3>
                <p className="text-body--1">{description}</p>
            </div>
    )

}

export default FeatureText