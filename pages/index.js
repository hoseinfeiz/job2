import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { Jobcards, Button } from '@/components'
import { jobslist } from '@/reducers/jobSlice'

const Home = ({ jobList, loading }) => {
  const router = useRouter()
  const btnClickHandler = (btnType) => {
    if (btnType === 'login') {
      router.push('/login')
    } else {
      router.push('/register')
    }
  }
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
      <div>
        <div
          css={css`
            display: flex;
            justify-content: end;
            align-items: center;
            margin-top: 20px;
          `}
        >
          <div
            css={css`
              margin-left: 15px;
            `}
          >
            <Button
              backColor="#4483FF"
              btnClicked={() => btnClickHandler('register')}
            >
              ثبت نام
            </Button>
          </div>
          <div>
            <Button
              backColor="#4483FF"
              btnClicked={() => btnClickHandler('login')}
            >
              ورود
            </Button>
          </div>
        </div>
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
