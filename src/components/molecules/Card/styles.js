import styled from 'styled-components'
import { Text } from '~/components/atoms'

export const Wrapper = styled.div`
  width: 187px;
  height: 187px;
  background: url(${({ src }) => src}) no-repeat center;
  background-size: cover;
  position: relative;
  margin: 10px;
  border: 2px solid ${({ theme }) => theme.colors.dark.light};
  box-sizing: border-box;
  border-radius: 8px;
  filter: grayscale(${({ status }) => (status === 'Alive' ? 0 : 1)});
  cursor: pointer;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary.main};
    box-shadow: 0 3px 8px ${({ theme }) => theme.colors.secondary.main};
  }
`

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 13px;
  height: 54px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(23px);
`
export const Title = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.light.main};
`

export const SubTitle = styled(Text)`
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.light.main};
`
