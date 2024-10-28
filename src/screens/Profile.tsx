import { Alert, TouchableOpacity } from 'react-native'
import { useState } from 'react'

import { Center, Heading, ScrollView, VStack } from 'native-base'

import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'

export function Profile() {
  const [userPhoto, setUserPhoto] = useState(
    'https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png',
  )

  async function handleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      if (photoSelected.canceled) {
        return
      }

      const photoUri = photoSelected.assets[0].uri

      if (photoUri) {
        const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as {
          size: number
        }

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          return Alert.alert(
            'Essa imagem é muito grande. Escolha uma de até 5mb',
          )
        }
        setUserPhoto(photoUri)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{
              uri: userPhoto,
            }}
            size={32}
            alt="Imagem do Perfil"
          />
          <TouchableOpacity onPress={handleUserPhotoSelect}>
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
            <Input placeholder="Nome" bg="gray.600" mb={4} />
            <Input value="Email" bg="gray.600" isReadOnly />
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
