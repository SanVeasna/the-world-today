import {describe,it,expect} from 'vitest';
import { mount } from '@vue/test-utils';
import MunuTitle from '../components/MenuTitle.vue';

describe('MenuItem',()=>{
    it('is a Vue instance',()=>{
        const wrapper=mount(MunuTitle,{props:{title:'Hello'}})
        expect(wrapper.props().title).toBe('Hello')
    })
})