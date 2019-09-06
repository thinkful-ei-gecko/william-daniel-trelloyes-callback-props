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

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

export default class App extends React.Component {

  state = STORE

    handleRandomAdd = (listId) => {
      // console.log('Random Add ran');
      // console.log(listId);

      const newCardObject = newRandomCard();
      // console.log(newCardObject);

      const { lists, allCards } = this.state;
      const newLists = lists.map(list => {
        const array = list.cardIds;
        // console.log(array);
        if(listId === list.id) {
          array.push(newCardObject.id);
        }
        return list;
      })
      // console.log(newLists);

      const newAllCards = {...allCards};
      newAllCards[newCardObject.id] = newCardObject;

      this.setState({
        lists: newLists,
        allCards: newAllCards
      })
    };
  
    handleDeleteCard = (cardId)  => {
      const { lists, allCards } = this.state;
      // console.log(lists)
      // console.log(allCards)
      // console.log(cardId)
      const newLists = lists.map(list => ({
        ...list,
        cardIds: list.cardIds.filter(id => id !== cardId)
      }));
  
      const newCards = omit(allCards, cardId);
  
      this.setState({
          lists: newLists,
          allCards: newCards
      })
      // console.log(this.state)
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
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              onDeleteCard={this.handleDeleteCard}
              onAddRandomCard={this.handleRandomAdd}
            />
          ))}
        </div>
      </main>
    );
  }
}


