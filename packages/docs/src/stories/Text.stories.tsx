import {Text, TextProps} from "@ignite-ui/react"
import type {StoryObj, Meta} from "@storybook/react"

export default {
    title: 'Typography/Text', 
    component: Text,
    tags: ['autodocs'],
    args: {
        children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium in voluptates, quam totam dolorem dicta. Iste vero magni, expedita quae eveniet, amet, ut est dolorum quia nulla illum et deserunt.'
    }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}
