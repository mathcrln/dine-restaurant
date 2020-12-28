import * as React from 'react'

const MenuItem = ({name, description, srcImage}) => {
    const mobile = require(`../../../assets/homepage/${srcImage}-mobile@2x.jpg`);
    const desktopTablet = require(`../../../assets/homepage/${srcImage}-desktop-tablet@2x.jpg`);
    return(
        <div className="menu-item flex flex-col tablet:flex-row justify-center items-center">
            <div className="mb-10 tablet:mr-10 tablet:mb-0">
                <img 
                    srcSet={`${mobile} 327w, ${desktopTablet} 128w`}
                    sizes="(min-width: 640px) 128px, 327px"
                    src={desktopTablet} 
                    alt=""
                />

            </div>

            <div className="text-white">
                <h4 className="text-heading--3 pb-3">{name}</h4>
                <p className="text-body--2">{description}</p>
            </div>
        </div>

    )

}

export default MenuItem