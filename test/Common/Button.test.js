import { shallow } from 'enzyme';
import React from 'react';

import Button from '../../src/components/Common/Button';

describe('Check Component creation', () => {
    const getComponent = (props) => shallow(<Button label="submit" {...props} />);
    const element = getComponent({ type: 'submit', className: 'b1' });
    
    test('Button component snapshot test', () => {
        expect(element).toMatchSnapshot();
    });
    test('Testing for Button props', () => {
        expect(element.prop('type')).toEqual('submit');
        expect(element.prop('className')).toEqual('b1 btn');
    });
    test('Test if button is getting disabled', () => {
        const element2 = getComponent({ className: 'btn-primary', disabled: true });
        expect(element2.prop('disabled')).toEqual(true);
    });
    test('Test if Button handler is invoked', () => {
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