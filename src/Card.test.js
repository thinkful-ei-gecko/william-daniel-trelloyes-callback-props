import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';


describe('Card component', () => {
    //SMOKE TEST
    it('renders to the UI', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card title='title' content='content' />, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    //SNAPSHOT TEST
    it('nothing in the UI has changed', () => {
        const tree = renderer
        .create(<Card title='title' content='content' />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});