import {Avatar, AvatarProps} from "@ignite-ui/react"
import type {StoryObj, Meta} from "@storybook/react"

export default {
    title: 'Data Display/Avatar', 
    component: Avatar,
    tags: ['autodocs'],
    args: {
        src: 'https://github.com/AntonioMesquit.png',
        alt: 'Antonio Mesquita',
    }

} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: 'undefined',
    },
    parameters: {
        docs: {
            description: {
                story: 'Quando o usuario `não` tem um avatar, será contato `600 milisegundos` para aparecer a imagem de Fallback'
            }
        }
    }
}
