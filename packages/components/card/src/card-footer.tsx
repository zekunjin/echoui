import { clsx } from '@echoui/shared-utils'
import type { HTMLEchoUIProps } from '@echoui/system'
import { computed, defineComponent, type PropType } from 'vue'
import { useCardContext } from './card-context'

interface CardFooterProps extends HTMLEchoUIProps<'div'> { }

const props = {
  as: { type: String as PropType<CardFooterProps['as']>, default: undefined }
}

const CardFooter = defineComponent({
  props,

  setup (props, { slots, attrs }) {
    const { as } = props
    const ctx = useCardContext()
    const Component = as || 'div'

    const footerStyles = computed(() => clsx(attrs.class))

    const getCardFooterProps = computed(() => ({
      class: ctx?.slots.value.footer?.({ class: footerStyles.value })
    }))

    return () => (
      <Component {...getCardFooterProps.value}>
        {slots.default?.()}
      </Component>
    )
  }
})

export { CardFooter }
