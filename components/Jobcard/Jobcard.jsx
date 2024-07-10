import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Jobcard = ({ job }) => {
  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        border: 1px solid #eee;
        box-shadow: 0px 3px 4px #ccc;
        padding: 20px;
        border-radius: 3px;
        margin-top: 15px;
        &:hover {
          background-color: #ffefd5;
          cursor: pointer;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            padding: 10px;
          `}
        >
          {job.title}
        </div>
        <div
          css={css`
            padding: 10px;
          `}
        >
          {job.job_type}
        </div>
        <div
          css={css`
            padding: 10px;
          `}
        >
          {job.company}
        </div>
      </div>
      <div>
        <div>{job.date}</div>
      </div>
    </div>
  )
}

export default Jobcard
