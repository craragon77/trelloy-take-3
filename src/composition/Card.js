import React from 'react'
import STORE from 'store'

const cardContent = () => {
        return (
            {STORE.allCards}.map( card =>{
                <h3>{card.title}</h3>
                <button>Delete</button>
                <p>{card.content}</p>
            })

            }
        )
}