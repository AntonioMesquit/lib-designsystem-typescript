import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicador } from './styles'
import { ComponentProps } from 'react'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicador asChild>
        <Check weight="bold" />
      </CheckboxIndicador>
    </CheckboxContainer>
  )
}
Checkbox.displayName = 'Checkbox'
