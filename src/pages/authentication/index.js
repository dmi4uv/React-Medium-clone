import React,{useState, useEffect} from 'react'

import {Link} from "react-router-dom";
import axios from "axios";

const Authentication = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmiting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmiting(true)
    }
    useEffect(()=> {
        if (!isSubmitting){
            return
        }
        axios('https://conduit.productionready.io/api/users/login', {
            method: 'post',
            data: {
                user: {
                    email: email,
                    password: password
                }
            }
        }).then(res => {
            console.log("sucsess",res)
            setIsSubmiting(false)
            }
        ).catch(err => {
            console.log("error", err)
            setIsSubmiting(false)
        })
    })


    return (
      <div className="auth-page">
          <div className="container page">
              <div className="row">
                  <div className="col-md-6 offset-md-3 col-xs-12">
                      <h1 className="text-xs-center">
                          Вход
                      </h1>
                      <p className="text-xs-center">
                          <Link to='register'>Нет аккаунта?</Link>
                      </p>
                      <form onSubmit={handleSubmit}>
                          <fieldset>
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
                              type='submit' disabled={isSubmitting}
                              >Войти</button>
                          </fieldset>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Authentication