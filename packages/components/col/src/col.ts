// 自定义 标签
import { defineComponent, h, computed, inject } from "vue";
export default defineComponent({
  name: "DCol",
  // 用户属性 tag
  props: {
    tag: {
      type: String,
      default: "div",
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props, ctx) {
    const gutter = inject("DRow", 0);
    console.log(gutter, 666);

    console.log(ctx);
    // 通过计算属性， 生成: x-col-span/offset - 5 6
    let ret: any[] = [];
    const Class = computed(() => {
      const pops = ["span", "offset"] as const;
      pops.forEach((item) => {
        const size = props[item];
        if (typeof size == "number" && size > 0) {
          ret.push(`d-col-${item}-${size}`);
        }
      });

      return ["d-col", ...ret];
    });
    // gutter处理
    const styles = computed(() => {
        if (gutter !== 0) {
            return {
                paddingLeft: gutter / 2 + 'px',
                paddingRight:gutter/2 + 'px'
          }
      }
      return {};
    });
    return () =>
      h(
        props.tag,
        {
          class: Class.value,
          style: styles.value,
        },
        ctx.slots.default?.()
      ); //ts链式运算符 ctx.slots.default&&ctx.slots.default()
  },
});
