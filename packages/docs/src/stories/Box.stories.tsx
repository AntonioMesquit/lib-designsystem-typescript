import {Box, BoxProps, Text} from "@tonho-ignite-ui/react"
import type {StoryObj, Meta} from "@storybook/react"

export default {
    title: 'Surfarces/Box', 
    component: Box,
    tags: ['autodocs'],
    args: {
        children: <Text>Testando o elemento Box</Text>

    }

} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
 
}
