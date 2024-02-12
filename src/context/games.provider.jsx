import React, { createContext, useState, useEffect } from 'react'

export const GameContext = createContext()
const GameContextProvider = (process) => {
  const [data, setData] = useState([])
  const [error, setError] = useEffect(null)
  const [loading, setLoading] = useState(null)
  const _url = 'https://62c2c416876c4700f52db5b6.mockapi.io/api/v1/'


  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(`${_url}games`)
    }

    fetchGames()
  }, [])

  return (
    <GameContext.Provider>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameContextProvider