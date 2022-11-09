import { FC } from 'react'
import './Schedule.css'

interface ITitleInterface{
    busStopName: string
}

const MainTitle: FC<ITitleInterface> = ({ busStopName = 'Energia-aukio' }) => {
  return (
    <h1 className="titleText">{busStopName}</h1>
  )
}

export default MainTitle