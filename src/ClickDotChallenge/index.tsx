import React, { useState } from "react"
import { Board, Dot, Button } from "./styles"

function ClickDotChallenge() {
  type TypeDot = {
    x: number,
    y: number
  }
  const [dotList, setDotList] = useState<TypeDot[]>([])
  const [undoList, setUndoList] = useState<TypeDot[]>([])

  const handleClick = (e: React.MouseEvent) => {
    const newDot = {
      x: e.clientX,
      y: e.clientY
    }

    setDotList((prev) => [...prev, newDot])
    setUndoList([])
  }

  const handleUndo = (e: React.MouseEvent) => {
    e.stopPropagation()

    if(dotList.length < 1){
      return
    }

    const undid = dotList[dotList.length - 1]
    setUndoList((prev) => [...prev, undid])

    setDotList((prev) => {
      const newList = [...prev]
      newList.pop()

      return newList
    })
  }

  const handleRedo = (e: React.MouseEvent) => {
    e.stopPropagation()

    if(undoList.length < 1){
      return
    }

    const undid = undoList[undoList.length - 1]

    setUndoList((prev) => {
      const newList = [...prev]
      newList.pop()

      return newList
    })

    setDotList((prev) => [...prev, undid])
  }

  return (
    <Board onClick={handleClick}>
      <Button onClick={handleUndo}>DESFAZER</Button>
      <Button onClick={handleRedo}>REFAZER</Button>

      {dotList.map((item, index) => (
        <Dot x={item.x - 10} y={item.y - 10} key={index} />
      ))}
    </Board>
  )
}

export default ClickDotChallenge
