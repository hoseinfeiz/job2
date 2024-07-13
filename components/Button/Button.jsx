import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ThreeDots } from 'react-loader-spinner'
const Button = ({
  children,
  loading,
  backColor = '#33e530',
  color = '#fff',
  btnClicked,
}) => {
  return (
    <button
      onClick={btnClicked}
      css={css`
        background-color: ${backColor};
        border: none;
        border-radius: 3px;
        color: ${color};
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
