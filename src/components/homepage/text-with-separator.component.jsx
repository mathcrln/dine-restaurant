import * as React from 'react'
import Divider from '../../assets/patterns/pattern-divide.svg'
import SectionText from './section-text.component'

const TextWithSeparator = ({title, description, onBackground, classProperties}) => {
                                
    const properties = `flex flex-col justify-items-start items-center laptop:items-start laptop:w-1/2 ${classProperties}`
    return(
        <div className={properties}>
        <img src={Divider} alt="" className="mb-12"/>
        <SectionText title={title} description={description} onBackground={onBackground}/>
    </div>
    )
}

export default TextWithSeparator