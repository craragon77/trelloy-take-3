import React from 'react';
import STORE from './store';

function List(){
    return (
        <div>
            {STORE.lists.map(header =>
                <ul key={header.id}>
                    <h3>{header.header}</h3>
                </ul>
                )
            }
        </div>
    )
}

export default List 