import {Button, ButtonProps} from "@ignite-ui/react"
import type {StoryObj, Meta} from "@storybook/react"
import { ArrowRight } from "phosphor-react"

export default {
    title: 'Form/Button', 
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Send',
        disabled: false,
        variant: 'primary',
        size: 'md',
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {
                type: 'inline-radio',
            },
        },
        size: {
            options: ['sm', 'md',],
            control: {
                type: 'inline-radio',
            },
        },
        onClick: {
            action: 'click',
        },
    },

} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary', 
        children: 'Create New',
      


    },
}
export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Cancel',
    },
}
export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
    },
}
export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
            Próximo Passo
            <ArrowRight weight="bold"/>
            </>
        )
    },
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    },
}