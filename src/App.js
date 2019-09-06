import React from 'react';
import List from './List';
import './App-styles.css';
//Import List component

export default class App extends React.Component {

  state = this.props.store
  
    handleDeleteCard = (id)  => {
      // console.log(this.state.lists[0].cardIds);
      
      const newCards = this.state.lists[0].cardIds.filter((array, index) => array[index] === id)
      console.log(newCards);
        this.setState({
          allCards: newCards
        })
    }
  

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              onDeleteCard={this.handleDeleteCard}
            />
          ))}
        </div>
      </main>
    );
  }
}


