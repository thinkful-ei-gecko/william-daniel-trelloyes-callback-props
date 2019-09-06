import React from 'react';
import List from './List';
import './App-styles.css';
import STORE from './store.js'

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}


export default class App extends React.Component {

  state = STORE
  
  
    handleDeleteCard = (cardId)  => {
      const { lists, allCards } = this.state;
      console.log(lists)
      console.log(allCards)
      console.log(cardId)
      const newLists = lists.map(list => ({
        ...list,
        cardIds: list.cardIds.filter(id => id !== cardId)
      }));
  
      const newCards = omit(allCards, cardId);
  
      this.setState({
          lists: newLists,
          allCards: newCards
      })
      console.log(this.state)
    };
  

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


