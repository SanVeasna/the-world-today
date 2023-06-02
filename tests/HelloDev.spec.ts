import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HelloDev from '../components/HelloDev.vue'

describe('HelloDev', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(HelloDev)
    expect(wrapper.vm).toBeTruthy()
  })
})