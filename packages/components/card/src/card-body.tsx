import type { HTMLEchoUIProps } from '@echoui/system'
import { defineComponent, useAttrs, type PropType } from 'vue'
import { useCardContext } from './card-context'

interface CardBodyProps extends HTMLEchoUIProps<'div'> { }

const props = {
  as: { type: String as PropType<CardBodyProps['as']>, default: undefined }
}

const CardBody = defineComponent({
  props,

  setup (props, { slots }) {
    const attrs = useAttrs()
    const { as } = props
    const Component = as || 'div'
    const ctx = useCardContext()

    return () => (
      <Component class={ctx?.slots.value.body?.({ class: attrs.class as string })}>
        {slots.default?.()}
      </Component>
    )
  }
})

export { CardBody }
