import React from 'react';
import List from './composition/List'

class App extends React.Component{
  render(){
    return(
      <h1>Trelloyes</h1>
      <div>
          <List />
      </div>
    )
  }
}

export default App