import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { getRicks } from '~/services/API'
import { Text } from '~/components/atoms'
import { Wrapper } from './styles'

export const Home = () => {
  const { loading, error, data } = useQuery(getRicks)
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    console.info('data:', data, loading, error)
    if (data && data?.characters) {
      setCharacters(data.characters.results)
    }
  }, [data])
  return (
    <Wrapper>
      {characters.map((character) => (
        <Text key={character.id}>{character.name}</Text>
      ))}
    </Wrapper>
  )
}
