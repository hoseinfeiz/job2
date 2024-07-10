import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Jobcards } from '@/components'
const Home = () => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: block;
        `}
      >
        <img src="./images/home.jpg" />
        <h1
          css={css`
            font-size: 2em;
          `}
        >
          به کارکده خوش آمدید
        </h1>
      </div>
      <Jobcards />
    </div>
  )
}

Home.getInitialProps = async ({ reduxStore }) => {
  const jobslist = await reduxStore.getState()
  console.log('reduxStore', jobslist)
  return reduxStore
}

export default Home
