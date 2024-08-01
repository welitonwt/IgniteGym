import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { Center, Heading, ScrollView, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native'

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{
              uri: 'https://github.com/welitonwt.png',
            }}
            size={32}
            alt="Imagem do Perfil"
          />
          <TouchableOpacity>
            <Heading
              color="green.500"
              fontFamily="heading"
              fontSize="lg"
              mt={2}
              mb={8}
            >
              Alterar Foto
            </Heading>
          </TouchableOpacity>

          <Center w="full">
            <Input placeholder="Weliton Duarte" bg="gray.600" mb={4} />
            <Input value="welitonww@hotmail.com" bg="gray.600" isReadOnly />
          </Center>

          <Heading color="green.500" fontSize="lg" mt={4} mb={2}>
            Alterar Senha
          </Heading>

          <Center w="full">
            <Input placeholder="Senha Antiga" bg="gray.600" secureTextEntry />
            <Input placeholder="Nova senha" bg="gray.600" secureTextEntry />
            <Input
              placeholder="Confirme sua senha"
              bg="gray.600"
              secureTextEntry
            />
            <Button title="Atualizar" />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  )
}
