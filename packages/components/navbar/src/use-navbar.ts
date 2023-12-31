import type { NavbarVariantProps } from '@nextui-org/theme'
import type { HTMLEchoUIProps } from '@echoui/system'
import { computed, ref, type Ref } from 'vue'
import { navbar } from '@nextui-org/theme'
import { dataAttr } from '@echoui/shared-utils'

interface Props extends HTMLEchoUIProps<'nav'> {
  height?: number | string
  shouldHideOnScroll?: boolean
  isMenuOpen: Ref<boolean | undefined>
}

export type UseNavbarProps = Props & NavbarVariantProps

export const useNavbar = (props: UseNavbarProps) => {
  const { as, height = '4rem', isMenuOpen, shouldHideOnScroll = false } = props
  const isHidden = ref(false)

  const Component = as || 'nav'

  const slots = computed<Record<string, any>>(() => navbar({ ...props, hideOnScroll: shouldHideOnScroll }))

  const getBaseProps = computed(() => ({
    'data-hidden': dataAttr(isHidden.value),
    'data-menu-open': dataAttr(isMenuOpen.value),
    class: slots.value.base(),
    style: {
      '--navbar-height': height
    }
  }))

  const getWrapperProps = computed(() => ({
    'data-menu-open': dataAttr(isMenuOpen.value),
    class: slots.value.wrapper()
  }))

  return { Component, height, slots, isMenuOpen, shouldHideOnScroll, getBaseProps, getWrapperProps }
}
