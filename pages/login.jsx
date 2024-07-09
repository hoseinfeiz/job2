import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Input, FormControl, Button } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_ACTION, selectAuth } from '@/reducers/authSlice'
const Login = () => {
  const dispatch = useDispatch()
  const auth = useSelector(selectAuth)
  console.log('auth state', auth)
  const [formData, setFormData] = useState({})
  const formSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(
      LOGIN_ACTION({
        loading: true,
        logged: true,
        user: formData,
      })
    )
  }

  const inputChangeHandler = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  return (
    <>
      <div
        css={css`
          display: flex;
          height: 100vh;
          width: 100%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <img src="./images/login.jfif" />
        <h2
          css={css`
            margin-top: 15px;
          `}
        >
          لطفا لاگین کنید
        </h2>
        <form onSubmit={(e) => formSubmitHandler(e)}>
          <FormControl>
            <Input
              type="email"
              placeholder="ایمیل"
              dir="ltr"
              changeHandler={(val) => inputChangeHandler('email', val)}
            />
          </FormControl>
          <FormControl>
            <Input
              type="password"
              placeholder="پسوورد"
              dir="ltr"
              changeHandler={(val) => inputChangeHandler('password', val)}
            />
          </FormControl>
          <FormControl>
            <Button>لاگین</Button>
          </FormControl>
        </form>
      </div>
    </>
  )
}

export default Login
