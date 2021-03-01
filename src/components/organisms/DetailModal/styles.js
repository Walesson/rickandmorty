import styled from 'styled-components'
import { Close as UnstyledClose } from '~/assets/icons'
import { Text } from '~/components/atoms'
import { fadeIn, fadeOut } from '~/services/theme'

export const Wrapper = styled.div`
  display: flex;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.3s linear;
  transition: visibility 0.3s linear;
  z-index: 999;
`

export const Container = styled.div`
  display: flex;
  width: 1034px;
  min-height: 799px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  box-sizing: border-box;
  border-radius: 16px;
  position: relative;
  margin: 20px 0;

  @media (max-width: 1250px) {
    max-width: 100%;
    overflow: auto;
    max-height: 100vh;
  }
`

export const BannerLeft = styled.div`
  width: 389px;
  height: 100%;
  background: url(${({ src }) => src}) no-repeat center;
  background-size: cover;
  border-radius: 16px 0px 0px 16px;
  filter: blur(23px);
  position: relative;
  overflow: hidden;

  &:after {
    content: ' ';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
  }

  @media (max-width: 1250px) {
    display: none;
  }
`

export const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.dark.dark};
  padding-left: 71px;
  z-index: 1;

  @media (max-width: 1250px) {
    overflow: auto;
    padding: 65px;
  }
`

export const Close = styled.div`
  top: 20px;
  left: 20px;
  position: absolute;
  z-index: 2;

  @media (max-width: 1250px) {
    top: 100px;
  }
`

export const WrapperButton = styled.div`
  display: flex;
  @media (max-width: 1250px) {
    display: none;
  }
`

export const CloseIcon = styled(UnstyledClose)`
  display: none;
  width: 20px;
  cursor: pointer;
  @media (max-width: 1250px) {
    display: block;
  }
`

export const BannerImage = styled.div`
  width: 401px;
  height: 653px;
  background: url(${({ src }) => src}) no-repeat center;
  background-size: cover;
  border: 2px solid ${({ theme }) => theme.colors.border.main};
  box-sizing: border-box;
  border-radius: 8px;
  top: 110px;
  left: -80px;
  position: absolute;
  z-index: 999;

  @media (max-width: 1250px) {
    display: none;
  }
`

export const WrapperCard = styled.div`
  display: none;
  margin-top: 47px;
  padding: 40px;
  @media (max-width: 1250px) {
    display: flex;
  }
`

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px;
  width: 100%;
  bottom: 0;
  position: absolute;
  background: ${({ theme }) => theme.colors.border.main};
`

export const TitleBannerImage = styled(Text)`
  font-size: 20px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.light.main};
`

export const SubTitleBannerImage = styled(Text)`
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.light.main};
`
