import React from 'react'
import { Card } from '~/components/molecules'
import { Wrapper, Item } from './styles'

export const ListCharacters = ({ characters = [], handleCharacter }) => (
  <Wrapper>
    {characters.map((character) => (
      <Item key={character.id}>
        <Card
          img={character.image}
          status={character.status}
          title={character.name}
          subTitle={character.species}
          onClick={() => handleCharacter(character)}
        />
      </Item>
    ))}
  </Wrapper>
)
