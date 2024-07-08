import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ThreeDots } from 'react-loader-spinner'
const Button = ({ children, loading }) => {
  return (
    <button
      css={css`
        background-color: #33e530;
        border: none;
        border-radius: 3px;
        color: #fff;
        padding: 10px 20px;
        cursor: pointer;
        display: flex;
        justify-content; center;
        align-items; center;
      `}
    >
      {loading ? (
        <ThreeDots
          visible={true}
          height="30"
          width="30"
          color="#fff"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        children
      )}
    </button>
  )
}

export default Button
