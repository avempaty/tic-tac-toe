import Board from '../components/board'
import apiClient from '../utils/apiClient'
import {useEffect, useState} from 'react'

export default function Home() {
  const [board, setBoard] = useState(null)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    console.log('CREATING BOARD')
    apiClient.createTicTacToe()
    .then((board) => {
      console.log('CREATED BOARD')
      setBoard(board)
    })
    .catch((err) => {
      console.error('ERROR CREATING BOARD')
      setFetchError(err)
    })
  }, [])

  if(!board) return <bold>"Loading..."</bold>
  if(fetchError) return <bold>"Error Loading Board"</bold>

  return <Board board={board}/>
}
