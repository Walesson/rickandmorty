import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { getRicks } from '~/services/API'
import { Search, Loading, ListCharacters, DetailModal } from '~/components'
import { Wrapper, Overlay, Container, Header, Logo } from './styles'

export const Home = () => {
  const { loading, data } = useQuery(getRicks)
  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState({})
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (data && data?.characters) {
      setCharacters(data.characters.results)
    }
  }, [data])

  const handleCharacter = (character) => {
    setOpenModal(true)
    setTimeout(() => setCurrentCharacter(character), 200)
    console.info('currentCharacter:', currentCharacter)
  }

  const closeModal = () => setOpenModal(false)

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
          <ListCharacters
            characters={characters}
            handleCharacter={handleCharacter}
          />
        </Container>
      </Overlay>
      <Loading open={loading} />
      <DetailModal
        open={openModal}
        character={currentCharacter}
        onClose={closeModal}
      />
    </Wrapper>
  )
}
