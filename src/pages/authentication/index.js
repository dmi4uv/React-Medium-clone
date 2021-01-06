import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Authentication = (props) => {
    const isLogin = props.match.path === "/login"
    const pageTitle = isLogin ? 'Вход' : 'Регистрация'
    const descriptionLink = isLogin ? '/register' : '/login'
    const descriptionText = isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'
    const apiUrl = isLogin ? '/users/login' : '/users'
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [{response,isLoading,error}, doFetch] = useFetch(apiUrl)

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = isLogin ? {email,password} : {email, password, username}
        doFetch({
            method: 'post',
            data: {
                user
                }

        })
    }

    return (
      <div className="auth-page">
          <div className="container page">
              <div className="row">
                  <div className="col-md-6 offset-md-3 col-xs-12">
                      <h1 className="text-xs-center">
                          {pageTitle}
                      </h1>
                      <p className="text-xs-center">
                          <Link to={descriptionLink}>{descriptionText}</Link>
                      </p>
                      <form onSubmit={handleSubmit}>
                          <fieldset>
                              {!isLogin && (
                                  <fieldset className='form-group'>
                                      <input type='text'
                                             placeholder='Имя пользователя'
                                             className='form-control form-control-lg'
                                             value={username}
                                             onChange={e => setUsername(e.target.value)}
                                      />
                                  </fieldset>
                              )}
                              <fieldset className='form-group'>
                                  <input type='email'
                                         placeholder='email'
                                         className='form-control form-control-lg'
                                         value={email}
                                         onChange={e => setEmail(e.target.value)}
                                  />
                              </fieldset>
                              <fieldset className='form-group'>
                                  <input type='password'
                                         placeholder='password'
                                         className='form-control form-control-lg'
                                         value={password}
                                         onChange={e => setPassword(e.target.value)}
                                  />
                              </fieldset>
                              <button className='btn btn-lg btn-primary pull-xs-right'
                              type='submit' disabled={isLoading}
                              >{pageTitle}</button>
                          </fieldset>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Authentication