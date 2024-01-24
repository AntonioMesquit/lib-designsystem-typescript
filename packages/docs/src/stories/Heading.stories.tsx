import {Heading, HeadingProps} from "@tonho-ignite-ui/react"
import type {StoryObj, Meta} from "@storybook/react"

export default {
    title: 'Typography/Heading', 
    component: Heading,
    tags: ['autodocs'],
    args: {
        children: 'Custom Title'
    }

} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 heading',
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o Heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`'
            }
        }
    }
}


