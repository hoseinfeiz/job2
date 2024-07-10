import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Jobcard } from '..'

import { ThreeDots } from 'react-loader-spinner'
const Jobcards = ({ jobList, loading }) => {
  console.log('jobList', jobList)
  console.log('loading', loading)

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
      {loading && (
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
      {!loading &&
        jobList != null &&
        jobList.jobs.map((job, index) => <Jobcard key={index} job={job} />)}
    </div>
  )
}

export default Jobcards
