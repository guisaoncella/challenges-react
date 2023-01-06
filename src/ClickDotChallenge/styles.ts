import styled from 'styled-components'

export const Board = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #999;
`

export const Dot = styled.span<{x: number, y: number}>`
  width: 21px;
  height: 21px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: violet;

  position: absolute;
  top: ${props => `${props.y}px` || 0};
  left: ${props => `${props.x}px` || 0};
`

export const Button = styled.button`
  margin-left: 50px;
  margin-top: 10px;
  padding: 10px;
`