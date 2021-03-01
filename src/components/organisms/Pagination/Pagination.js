import React, { useState, useEffect } from 'react'
import { Wrapper, ArrowLeft, ArrowRight, Info, Label } from './styles'

export const Pagination = ({ info, page, onPrev, onNext, onPage }) => {
  let indice = info?.pages < 5 ? 1 : (info?.next || 2) - 1
  const [lengthPages, setLengthPages] = useState([])

  useEffect(() => {
    if (info?.next) {
      const length = info?.pages > 5 ? 5 : info?.pages
      const updatedList = new Array(length).fill(0)
      for (let index = 0; index < length; index++) {
        updatedList[index] = indice
        indice += 1
      }
      setLengthPages(updatedList)
    }
  }, [info?.next])

  return (
    <Wrapper>
      <ArrowLeft active={info?.prev} onClick={() => onPrev(info?.prev)} />
      <Info>
        {lengthPages.map((item) => (
          <Label key={item} active={page === item} onClick={() => onPage(item)}>
            {item || 1}
          </Label>
        ))}
      </Info>
      <ArrowRight active={info?.next} onClick={() => onNext(info?.next)} />
    </Wrapper>
  )
}
