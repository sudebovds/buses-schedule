import React, { FC, useState } from 'react'

import './ScheduleItem.css'

interface IScheduleItemInterface{
    busNumber?: Number,
    arivalDelay?: Number,
    scheduledArrival?: Number,
    realtimeArrival?: Number,
    arrivalDelay?: Number,
    realtime?: Boolean,
    realtimeState?: String,
    late: Boolean
}

const ScheduleItem: FC<IScheduleItemInterface> = ({ late }) => {
  return (
    <li className="item">
        <div className={`itemContent ${late ? 'late' : null}`}>
            <div>
                <img src="./assets/images/bus.svg" alt="bus-icon" />
                <span className="hidden sm:inline-block">15</span>
                <p className="flex flex-col sm:hidden">
                <span>15</span>
                <span className="text-textGray">In 1 minute / 11:48</span>
                </p>
            </div>
            <div className="hidden sm:block">
                <span className="text-textGray">In 1 minute / 11:48</span>
            </div>
        </div> 
    </li>
  )
}

export default ScheduleItem