import { Pressable, Text } from 'native-base'
import { IPresenceTransitionProps } from 'native-base/lib/typescript/components/composites/Transitions/types'

type Props = IPresenceTransitionProps & {
  name: string
  isActive: boolean
}

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{ borderColor: 'green.500', borderWidth: 1 }}
      {...rest}
    >
      <Text
        color={isActive ? 'green.500' : 'gray.200'}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  )
}
