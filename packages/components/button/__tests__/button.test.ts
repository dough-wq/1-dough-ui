import { describe,expect,it } from "vitest";
import { mount } from '@vue/test-utils'
import Button from "..";
describe("Button test", () => {
    it("should render slot", () => {
        const button = mount(Button, {
            slots: {
                default:'hello world'
            }
        })
        // 断言button里面的文字包含hello world
        expect(button.text()).toContain('hello world')
    })
})