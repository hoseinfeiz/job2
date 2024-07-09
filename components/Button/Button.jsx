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
        padding: 15px 25px;
        cursor: pointer;
      `}
    >
      {loading ? (
        <ThreeDots
          visible={true}
          height="20"
          width="20"
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
