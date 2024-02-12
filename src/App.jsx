import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import GlobalStyles from './styled-elements/global.styles'
import React, { useState, useEffect, Suspense, lazy } from 'react'
import {
  Navbar,
  CubeSpinner
} from './components'
import { ErrorBoundary } from 'react-error-boundary'
const Index = lazy(() => import('./components/pages/index.home'))
const Listings = lazy(() => import('./components/pages/listing.games'))
const DetailInfo = lazy(() => import('./components/pages/detail.page.jsx'))
const Signin = lazy(() => import('./components/pages/signin.auth'))
const Signup = lazy(() => import('./components/pages/signup.auth'))
const ErrorFallback = lazy(() => import('./test/error.fallback'))


function App() {

  const location = useLocation()
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const _url = 'https://62c2c416876c4700f52db5b6.mockapi.io/api/v1/'

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${_url}games`)
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The 
          status is ${response.status}`
          )
        }
        const res = await response.json()
        setData(res)
        console.log(res)
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGames()

  }, [])

  return (
    <>
      <GlobalStyles />
      {isLoading && (<CubeSpinner />)}
      {!isLoading && (
        <div>
          <ErrorBoundary FallbackComponent={ErrorFallback}
            onReset={() => {
              if (error) {
                console.error({ error })
                window.location.reload()
              } else {
                navigate('/')
              }
            }}
          >
            <Suspense fallback={<CubeSpinner />}>
              {
                location.pathname !== '/login' && location.pathname !== '/signup' && <Navbar />
              }
              <Routes>
                <Route path='/' element={<Index data={data} />} />
                <Route path='/games' element={<Listings data={data} />} />
                <Route path='/detail-info' element={<DetailInfo />} />
                <Route path='/login' element={<Signin data={data} />} />
                <Route path='/signup' element={<Signup data={data} />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
      )
      }
    </>
  )
}

export default App