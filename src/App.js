import React from 'react';
import List from './composition/List'
import Card from './composition/Card'

function App(){
  return(
    <div>
      <h1>Trelloyes</h1>
      <List />
      <Card />
    </div>
  )
}

export default App