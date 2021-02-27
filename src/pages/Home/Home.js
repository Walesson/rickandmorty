import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { getRicks } from '~/services/API'
import { Search } from '~/components/molecules'
import { Wrapper, Overlay, Container, Header, Text, Logo } from './styles'

export const Home = () => {
  const { data } = useQuery(getRicks)
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    if (data && data?.characters) {
      setCharacters(data.characters.results)
    }
  }, [data])

  return (
    <Wrapper>
      <Overlay>
        <Container>
          <Header>
            <Logo />
            <Search
              placeholder='Search characters'
              onSubmit={() => console.info('home submit')}
            />
          </Header>

          {characters.map((character) => (
            <Text key={character.id}>{character.name}</Text>
          ))}
        </Container>
      </Overlay>
    </Wrapper>
  )
}
