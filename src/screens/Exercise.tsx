import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProp } from '@routes/app.routes'
import { ArrowLeft } from 'lucide-react-native'
import { VStack, Icon, HStack, Heading, Text, Image, Box } from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native'
import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionSvg from '@assets/repetitions.svg'
import { Button } from '@components/Button'

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProp>()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px="8" bg="gray.600" pt="12">
        <TouchableOpacity>
          <Icon
            as={ArrowLeft}
            color="green.500"
            size="xl"
            onPress={handleGoBack}
          ></Icon>
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt="4"
          mb="8"
        >
          <Heading
            color="gray.100"
            fontFamily="heading"
            fontSize="lg"
            flexShrink={1}
          >
            Puxada Frontal
          </Heading>

          <HStack
            alignItems="center"
            color="gray.200"
            ml={1}
            textTransform="capitalize"
          >
            <BodySvg />
            <Text color="gray.200">Costas</Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
      >
        <VStack p="4">
          <Image
            source={{
              uri: 'https://treinomestre.com.br/wp-content/uploads/2018/10/pulley-frente-puxador.jpg',
            }}
            alt="exercicio"
            mb={3}
            w="full"
            h={80}
            rounded="lg"
          />

          <Box bg="gray.600" rounded="md" pb="4" px="4">
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb="5"
              mt="5"
            >
              <HStack>
                <SeriesSvg />
                <Text color="gray.100"> 3 Séries</Text>
              </HStack>
              <HStack>
                <RepetitionSvg />
                <Text color="gray.100"> 12 Repetições</Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
