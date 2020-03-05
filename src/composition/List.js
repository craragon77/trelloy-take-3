import React from 'react'
import STORE from './composition/store'

class List extends React.Component{
    render(){
        return(
            {this.STORE.lists}.map(profile =>{
                <ul>
                    <h1>{profile.header}</h1>
                    {/*}ok so i have a feeling that the card.js thing goes in here{<*/}
                </ul>
            })
        )
    }
}

export default List