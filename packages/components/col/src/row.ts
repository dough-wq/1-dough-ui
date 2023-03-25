// 自定义 标签
import { defineComponent ,h,computed,provide} from "vue";
export default defineComponent({
    name: 'DRow',
    // 用户属性 tag
    props: {
        tag: {
            type: String,
            default:'div'
        },
        gutter: {
            type: Number,
            default:0,
        },
        justify:{
            type: String,
            default:'start',
        }
    },
    setup(props, ctx) {
        // 父组件中提供数据 provide  子组件中使用
        provide('DRow',props.gutter)

        console.log(ctx);
        const classs = computed(() => [
            'd-row',
            // justify
            props.justify !== 'start'?`is-justify-${props.justify}`:''
        ])
        // 解决gutter 给开头和结尾元素和容器对齐
        const styles = computed(() => {
            let ret = {
                marginLeft: '',
                marginRight:''
            }
            // 判断一下
            if (props.gutter) {
                ret.marginLeft = ret.marginRight = `-${props.gutter/2}px`
            }
        })
        return () => h(props.tag, {
            class:classs.value
        }, ctx.slots.default?.())  //ts链式运算符 ctx.slots.default&&ctx.slots.default()
    },
})