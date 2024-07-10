import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Jobcards } from '@/components'
import { jobslist } from '@/reducers/jobSlice'
const Home = ({ jobList, loading }) => {
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
      <Jobcards jobList={jobList} loading={loading} />
    </div>
  )
}

Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(jobslist())
  const jobsState = reduxStore.getState().job

  return { jobList: jobsState.jobslist, loading: jobsState.loading }
}

export default Home
