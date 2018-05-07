import React from 'react';

import Button from '../../src/components/Common/Button';

describe('Check Component creation', () => {
    
    test('Button component', () => {
        const onClick = jest.fn();
        const element = shallow(<Button type='submit' label='Submit' className='b1'/>);
        expect(element).toMatchSnapshot();
        expect(element.text()).toEqual('Submit');
        expect(element.prop('type')).toEqual('submit');
        expect(element.prop('className')).toEqual('b1 btn');
        const element2 = shallow(<Button label='Submit' className='btn-primary' disabled={false} clickHandler={onClick}/>);
        expect(element2.prop('disabled')).toEqual(false);
        // console.log(element2.debug());
        element2.find('button').simulate('click', {
            target: { },
            preventDefault: function() { },
            stopPropagation: function() { }
        });
        expect(onClick).toHaveBeenCalled();
    });
});