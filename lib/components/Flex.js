import mergeData from "vue-functional-data-merge"

const SHARED = ["start", "end", "center"]
const JUSTIFY_CONTENT = SHARED.concat(["between", "around"])
const ALIGN_ITEMS = SHARED.concat(["baseline", "stretch"])
const ALIGN_AXES = SHARED.concat(["between", "baseline", "stretch"])

function boolPropFactory() {
  const props = {}
  for (let i = 0; i < arguments.length; i++) {
    props[arguments[i]] = { type: Boolean, default: false }
  }
  return props
}

export const props = Object.assign(boolPropFactory("inline", "column", "reverse", "noWrap", "wrapReverse", "grow"), {
  tag: {
    type: String,
    default: "div"
  },
  justify: {
    type: String,
    default: null,
    validator: type => JUSTIFY_CONTENT.indexOf(type) !== -1
  },
  align: {
    type: String,
    default: null,
    validator: type => ALIGN_ITEMS.indexOf(type) !== -1
  },
  // Cannot prefix with `v` because it's parsed as directive.
  alignH: {
    type: String,
    default: null,
    validator: type => ALIGN_AXES.indexOf(type) !== -1
  },
  // Cannot prefix with `v` because it's parsed as directive.
  alignV: {
    type: String,
    default: null,
    validator: type => ALIGN_AXES.indexOf(type) !== -1
  }
})

export default {
  functional: true,
  props,
  render(h, { props, data, children }) {
    const hAxis = !props.column ? "justify-content" : "align-items"
    const hProp = !props.column ? "justify" : "align"
    const vAxis = props.column ? "justify-content" : "align-items"
    const vProp = props.column ? "justify" : "align"

    return h(
      props.tag,
      mergeData(data, {
        class: [
          `vf__flex${props.inline ? "--inline" : ""}`,
          `vf__flex-dir--${props.column ? "column" : "row"}${props.reverse ? "-reverse" : ""}`,
          {
            [`vf__flex-wrap${props.wrapReverse ? "-reverse" : ""}`]: !props.noWrap,
            "vf__flex-nowrap": props.noWrap,
            "vf__grow-children": props.grow,
            [`vf__justify-content-${props.justify}`]: props.justify,
            [`vf__align-items-${props.align}`]: props.align,
            [`vf__${hAxis}-${props.alignH}`]: props.alignH && !props[hProp],
            [`vf__${vAxis}-${props.alignV}`]: props.alignV && !props[vProp]
          }
        ]
      }),
      children
    )
  }
}
