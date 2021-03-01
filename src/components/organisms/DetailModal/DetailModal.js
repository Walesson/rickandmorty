import React from 'react'
import { Button } from '~/components/atoms/Button'
import { InfoSession, Card } from '~/components/molecules'
import {
  Wrapper,
  Container,
  BannerLeft,
  Info,
  Close,
  WrapperButton,
  CloseIcon,
  BannerImage,
  WrapperCard,
  WrapperInfo,
  TitleBannerImage,
  SubTitleBannerImage,
} from './styles'

export const DetailModal = ({ open = false, character = {}, onClose }) => (
  <Wrapper open={open}>
    <Container>
      <BannerImage src={character?.image}>
        <WrapperInfo>
          <TitleBannerImage bold>{character?.name}</TitleBannerImage>
          <SubTitleBannerImage>{character?.species}</SubTitleBannerImage>
        </WrapperInfo>
      </BannerImage>
      <Close>
        <WrapperButton>
          <Button label='Close' onClick={onClose} />
        </WrapperButton>
        <CloseIcon onClick={onClose} />
      </Close>
      <BannerLeft src={character?.image} />
      <Info>
        <WrapperCard>
          <Card
            img={character.image}
            status={character.status}
            title={character.name}
            subTitle={character.species}
            onClick={() => null}
          />
        </WrapperCard>
        <InfoSession
          title='ABOUT'
          about={`${character?.name} is a ${character?.gender} ${
            character?.species
          }. Is ${character?.status} and your type ${
            character?.type || 'unknown'
          }.`}
        />

        <InfoSession
          title='ORIGIN'
          type={character?.origin?.type}
          textHighlight={character?.origin?.name}
          desc={character?.origin?.dimension}
          residents={character?.origin?.residents?.length}
        />

        <InfoSession
          title='LOCATION'
          type={character?.location?.type || ''}
          textHighlight={character?.location?.name || ''}
          desc={character?.location?.dimension || ''}
          residents={character?.location?.residents?.length || ''}
        />
      </Info>
    </Container>
  </Wrapper>
)
