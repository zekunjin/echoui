import { defineComponent, type PropType, provide } from 'vue'
import { useButtonGroup, type UseButtonGroupProps } from './use-button-group'

export interface ButtonGroupProps extends UseButtonGroupProps { }

const props = {
  variant: String as PropType<ButtonGroupProps['variant']>,
  color: String as PropType<ButtonGroupProps['color']>,
  size: String as PropType<ButtonGroupProps['size']>,
  radius: String as PropType<ButtonGroupProps['radius']>,
  isDisabled: Boolean as PropType<ButtonGroupProps['isDisabled']>,
  fullWidth: Boolean as PropType<ButtonGroupProps['fullWidth']>
}

const ButtonGroup = defineComponent({
  props,

  setup (props, { slots }) {
    const { styles, context } = useButtonGroup(props)

    provide('context', { ...context.value, isInGroup: true })

    return () => (
      <div class={styles.value}>
        {slots.default?.()}
      </div>
    )
  }
})

export default ButtonGroup
