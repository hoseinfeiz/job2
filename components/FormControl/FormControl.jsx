import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const FormControl = ({ children }) => {
  return (
    <div
      css={css`
        margin-top: 20px;
        display: flex;
        width: 300px;
        justify-content: center;
        align-items: center;
      `}
    >
      {children}
    </div>
  )
}

export default FormControl
