import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const Input = ({ type = 'text', placeholder, dir, changeHandler }) => {
  const inputChangeHandler = (e) => {
    changeHandler(e.target.value)
  }
  return (
    <input
      onChange={(e) => inputChangeHandler(e)}
      type={type}
      placeholder={placeholder}
      css={css`
        width: 100%;
        border: 1px solid #eee;
        padding: 10px 5px;
        border-radius: 3px;
        box-shadow: 1px 3px 4px #ccc;
        direction: ${dir};
      `}
    />
  )
}

export default Input
