import {Box, Text, TextInput, TextInputProps} from "@tonho-ignite-ui/react"
import type {StoryObj, Meta} from "@storybook/react"

export default {
    title: 'Form/Text Input', 
    component: TextInput,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return(
                <Box as='label' css={{display: 'flex' , flexDirection: 'column', gap: 2}}> 
                    <Text size={'sm'}>
                        Email addres
                    </Text>
                    {Story()}
                </Box>
            )
        }
    ],
    args: {},

} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your name'
    }
}
export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    }
}
export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'call.com/',
        placeholder: 'your-username'
    }
}


