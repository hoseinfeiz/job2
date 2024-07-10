import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Jobcard } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { jobslist } from '@/reducers/jobSlice'
import { ThreeDots } from 'react-loader-spinner'
const Jobcards = () => {
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.job)

  console.log('jobs', jobs)
  useEffect(() => {
    dispatch(jobslist())
  }, [])
  return (
    <div
      css={css`
        display: flex;
        width: 60%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 20px auto;
      `}
    >
      {jobs.loading && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="green"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {!jobs.loading &&
        jobs.jobslist != null &&
        jobs.jobslist.jobs.map((job, index) => (
          <Jobcard key={index} job={job} />
        ))}
    </div>
  )
}

export default Jobcards
