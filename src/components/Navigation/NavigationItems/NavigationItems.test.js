import React from 'react'

import {configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure ({adapter:new Adapter()})
let wrapper;

beforeEach(()=>{
    wrapper= shallow(<NavigationItems />)
})
describe('<NavigationItems/>', ()=>{
    it('should render two navigation items, if not authenticated', ()=>{
            expect(wrapper.find(NavigationItem)).toHaveLength(2);
    })

    it('should render three navigation items, if authenticated', ()=>{
        wrapper.setProps({auth:true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);

    })
        it('should see logout link', ()=>{
            wrapper.setProps({auth:true})
            expect(wrapper.contains(<NavigationItem link ="/logout">Logout</NavigationItem>)).toEqual(true);

})



})