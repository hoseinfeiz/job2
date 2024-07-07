import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const Button = ({ children }) => {
  return (
    <button
      css={css`
        background-color: #33e530;
        border: none;
        border-radius: 3px;
        color: #fff;
        padding: 10px 20px;
        cursor: pointer;
      `}
    >
      {children}
    </button>
  )
}

export default Button
