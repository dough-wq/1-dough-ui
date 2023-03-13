import { describe,expect,it } from "vitest";
import { mount } from '@vue/test-utils'
import Button from "..";
describe('Button.vue', () => {
  // it('create', () => {
  //   const wrapper = mount(() => <Button type="primary" />)
  
  //   expect(wrapper.classes()).toContain('d-button--primary')
  // })
  
  it("should render slot", () => {
    const button = mount(Button, {
      slots: {
        default: 'hello world'
      }
    })
    // 断言button里面的文字包含hello world
    expect(button.text()).toContain('hello world')
  })
  
  
  
})