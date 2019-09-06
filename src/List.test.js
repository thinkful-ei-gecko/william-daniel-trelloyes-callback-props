import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';


describe('List Component Tests', ()=> {
  //Smoke Test
  it('List renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header='string' cards={[
      { id: 'a', title: 'First card', content: 'lorem ipsum' },
      { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    ]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot
  it('List matches snapshot', () => {
    const tree = renderer
      .create(<List header='string' cards={[
        { id: 'a', title: 'First card', content: 'lorem ipsum' },
        { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      ]} />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
});
