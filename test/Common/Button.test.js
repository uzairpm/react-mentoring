import React from 'react';

import Button from '../../src/components/Common/Button';

describe('Check Component creation', () => {
    const element = shallow(<Button type='submit' label='Submit' className='b1'/>);
    test('Button component', () => {
        expect(element).toMatchSnapshot();
        expect(element.text()).toEqual('Submit');
    });
    test('Button props', () => {
        expect(element.prop('type')).toEqual('submit');
        expect(element.prop('className')).toEqual('b1 btn');
    });
    test('Button click 1', () => {
        const onClick = jest.fn();
        const element2 = shallow(<Button label='Submit' className='btn-primary' disabled={true} clickHandler={onClick}/>);
        expect(element2.prop('disabled')).toEqual(true);
    });
    test('Button click 2', () => {
        const onClick = jest.fn();
        const element2 = shallow(<Button label='Submit' className='btn-primary' disabled={false} clickHandler={onClick}/>);
        expect(element2.prop('disabled')).toEqual(false);
        element2.find('button').simulate('click', {
            target: { },
            preventDefault: function() { },
            stopPropagation: function() { }
        });
        expect(onClick).toHaveBeenCalled();
    });
});