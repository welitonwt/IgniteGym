/* eslint-disable jsx-a11y/alt-text */
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { HStack, Heading, Image, Text, VStack, Icon } from 'native-base'
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps

export function ExerciseCard({ ...res }: Props) {
  return (
    <TouchableOpacity {...res}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          source={{
            uri: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-unilateral-com-halter-serrote-no-banco.gif',
          }}
          alt="Imagem do exercicio"
          mr={4}
          w={16}
          h={16}
          rounded="md"
          resizeMode="center"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            Remada Unilateral
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  )
}
