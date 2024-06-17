import { HistoryCard } from '@components/HistoryCard'
import { ScreenHeader } from '@components/ScreenHeader'
import { VStack } from 'native-base'

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Historico de Exercícios" />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </VStack>
  )
}
