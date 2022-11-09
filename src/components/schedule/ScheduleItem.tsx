import React, { FC, useState } from 'react'
import { IBusStopInterfase } from '../../types'

import './ScheduleItem.css'
interface IStopItemInterface{
    late: boolean,
    busNumber: string,
    delayTime?: string,
    arrivalTimeLatency: string | null,
    arrivalTime: string,
    arrivalDate: string,
    serviceDay: EpochTimeStamp
}

const ScheduleItem: FC<IStopItemInterface> = ({ late, busNumber, arrivalTimeLatency, arrivalTime, arrivalDate }) => {
  return (
    <li className="item">
        <div className={`itemContent ${late ? 'late' : null}`}>
            <div>
                <img src="./assets/images/bus.svg" alt="bus-icon" />
                <span className="hidden sm:inline-block">
                    {busNumber}{arrivalTimeLatency ? ` (${arrivalTimeLatency} late)` : null}
                </span>
                <p className="flex flex-col sm:hidden">
                    <span>
                        {busNumber}{arrivalTimeLatency ? ` (${arrivalTimeLatency} late)` : null}
                    </span>
                    <span className="text-textGray">In {arrivalTime} / {arrivalDate}</span>
                </p>
            </div>
            <div className="hidden sm:block">
                <span className="text-textGray">In {arrivalTime} / {arrivalDate}</span>
            </div>
        </div> 
    </li>
  )
}

export default ScheduleItem