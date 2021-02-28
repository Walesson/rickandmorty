import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { getRicks } from '~/services/API'
import { Search, Loading, ListCharacters } from '~/components'
import { Wrapper, Overlay, Container, Header, Logo } from './styles'

export const Home = () => {
  const { data } = useQuery(getRicks)
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    if (data && data?.characters) {
      setCharacters(data.characters.results)
    }
  }, [data])

  // useEffect(() => {
  //   if (openLoading !== loading) {
  //     setOpenLoading(loading)
  //   }
  // }, [loading])

  const handleCharacter = (character) => {
    console.info('handle', character)
  }

  return (
    <Wrapper>
      <Overlay>
        <Loading open={characters.length <= 0} />
        <Container>
          <Header>
            <Logo />
            <Search
              placeholder='Search characters'
              onSubmit={() => console.info('home submit')}
            />
          </Header>
          <ListCharacters
            characters={characters}
            handleCharacter={handleCharacter}
          />
        </Container>
      </Overlay>
    </Wrapper>
  )
}
