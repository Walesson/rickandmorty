import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { getCharacters } from '~/services/API'
import {
  Search,
  Loading,
  ListCharacters,
  DetailModal,
  Pagination,
} from '~/components'
import { Wrapper, Overlay, Container, Header, Logo } from './styles'

export const Home = () => {
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')
  const { loading, data } = useQuery(getCharacters, {
    variables: { page, filter },
  })
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  const [currentCharacter, setCurrentCharacter] = useState({})
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (data && data?.characters) {
      setInfo(data.characters.info)
      setCharacters(data.characters.results)
    }
  }, [data])

  const handleCharacter = (character) => {
    setOpenModal(true)
    setTimeout(() => setCurrentCharacter(character), 200)
  }

  const closeModal = () => setOpenModal(false)

  const handleFilter = (value) => {
    setPage(1)
    setFilter(value)
  }

  const handlePrev = (enable) => {
    if (enable) {
      setPage(info.prev)
    }
  }

  const handleNext = (enable) => {
    if (enable) {
      setPage(info.next)
    }
  }

  const handlePage = (currentPage) => setPage(currentPage)

  return (
    <Wrapper>
      <Overlay>
        <Container>
          <Header>
            <Logo />
            <Search placeholder='Search characters' onSubmit={handleFilter} />
          </Header>
          <ListCharacters
            characters={characters}
            handleCharacter={handleCharacter}
          />
          <Pagination
            info={info}
            page={page}
            onPrev={handlePrev}
            onNext={handleNext}
            onPage={handlePage}
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
