import {Box, Text, Checkbox, CheckboxProps} from "@ignite-ui/react"
import type {StoryObj, Meta} from "@storybook/react"

export default {
    title: 'Form/Checkbox', 
    component: Checkbox,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return(
                <Box as='label' css={{display: 'flex' , flexDirection: 'row', gap: 10}}> 
                    {Story()}
                    <Text size={'sm'}>
                        Accept terms of use
                    </Text>
                    
                </Box>
            )
        }
    ],
    args: {},
    parameters: {
        docs: {
            description: {
                story: 'Checkbox feita usando `Radix-ui`, porem adicionando efeitos `fadeIn` e `fadeOut`, usando keyframes do `Stitches`.'
            }
        }
    }

} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}



