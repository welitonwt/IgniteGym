import { Input as NativeBaseInput, IInputProps } from 'native-base'

type Props = IInputProps & { isReadOnly?: boolean }

export function Input({ isReadOnly = false, ...rest }: Props) {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      mb={4}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily="body"
      placeholderTextColor="gray.300"
      isReadOnly={isReadOnly}
      opacity={isReadOnly ? 0.5 : 1}
      _focus={{
        backgroundColor: 'gray.600',
        borderWidth: 1,
        borderColor: 'green.500',
      }}
      {...rest}
    />
  )
}
