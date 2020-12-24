import * as React from 'react'
import Container from '../../../layout/container'
import TextWithSeparator from '../text-with-separator.component'
import MenuItem from './menu-item.component'

const Menu = () => {

    return(
        <div className="bg-codGray">
            <Container classProperties="py-24 tablet:pt-72 tablet:pb-40 flex flex-col tablet:flex-row"> 
                <TextWithSeparator
                    title={<span>A few highlights <br/>from our menu</span>}
                    description="We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season."
                    onBackground="dark"
                    classProperties="mb-16 laptop:mr-52 laptop:mb-0"
                />

                <div>
                    <MenuItem 
                        name="Seared Salmon Fillet" 
                        description="Our locally sourced salmon served with a refreshing buckwheat summer salad."
                        srcImage="salmon"
                        />
                    
                    <hr className="border-ShuttleGray my-10"/>
                    <MenuItem 
                        name="Rosemary Filet Mignon" 
                        description="Our prime beef served to your taste with a delicious choice of seasonal sides."
                        srcImage="beef"
                        />
                    
                    <hr className="border-ShuttleGray my-10"/>

                    <MenuItem 
                        name="Summer Fruit Chocolate Mousse" 
                        description="Creamy mousse combined with summer fruits and dark chocolate shavings."
                        srcImage="chocolate"
                        />
                </div>

            </Container>

        </div>

    )

}

export default Menu