import React from 'react'
import STORE from 'store'

function Card(){
    return(
        <div>
            {STORE.allCards.map(card =>{
                <li>
                    <div key={card.id}>
                        <h3>{card.title}</h3>
                        <p>{card.content}</p>
                        <button>delete</button>
                    </div>
                </li>
            })
        }
        </div>
    )
}


export default Card