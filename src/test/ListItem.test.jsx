import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import ListItem from './ListItem';
import Adapter from 'enzyme-adapter-react-16'; 
Enzyme.configure({adapter:new Adapter()});

describe('测试iteminput',function(){
    let todos;
    beforeEach(()=>{
        todos =[{text:'1'},{text:'2'}];
    });
    it('shoud render',function(){
        let wrapper =  shallow(<ListItem/>);
        const h3 = wrapper.find('h3');
        const input = wrapper.find('input');
        expect(input.props().defaultValue).toBe('');
    });

    it('edit',function(){
        let addTodo = jest.fn();
        let wrapper = shallow(<ListItem edit = {edit}/>);
        let button = wrapper.find('button');
        button.simulate('click');
        expect(edit).toBeCalled();
    });

    it('delete',function(){
        let addTodo = jest.fn();
        let wrapper = shallow(<ListItem delete = {delete}/>);
        let button = wrapper.find('button');
        button.simulate('click');
        expect(delete).toBeCalled();
    });
});