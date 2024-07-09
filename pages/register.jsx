import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Input, FormControl, Button } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '@/reducers/registerSlice'
const Register = () => {
  const dispatch = useDispatch()
  const reg = useSelector((state) => state.register)
  console.log('register state', reg)
  const [formData, setFormData] = useState({})
  const formSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(register())
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
          لطفا ثبت نام کنید
        </h2>

        <form onSubmit={(e) => formSubmitHandler(e)}>
          <FormControl>
            <Input
              type="text"
              placeholder="نام"
              dir="rtl"
              changeHandler={(val) => inputChangeHandler('name', val)}
            />
          </FormControl>
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
            <Button loading={reg.loading}>ثبت نام</Button>
          </FormControl>
        </form>
      </div>
    </>
  )
}

export default Register
