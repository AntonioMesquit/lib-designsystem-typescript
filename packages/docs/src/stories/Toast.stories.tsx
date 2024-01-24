import {Toast,ToastProps } from "@tonho-ignite-ui/react"
import type {StoryObj, Meta} from "@storybook/react"

export default {
    title: 'Form/Toast', 
    component: Toast,
    tags: ['autodocs'],
    args: {
        title: 'Agendamento Realizado',
    }


} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

