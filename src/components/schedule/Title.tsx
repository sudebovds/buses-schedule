import React, { FC } from 'react'

interface ITitleInterface{
    busStopName: string
}

const Title: FC<ITitleInterface> = ({ busStopName = 'Energia-aukio' }) => {
  return (
    <h1 className="titleText">{busStopName}</h1>
  )
}

export default Title