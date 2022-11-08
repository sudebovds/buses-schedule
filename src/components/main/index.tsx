import React from 'react'
import ScheduleItem from '../schedule/ScheduleItem';
import Title from '../schedule/title'
import './style.css'

const arr = [1,2,3,4,5];

const Main = () => {
  return (
    <main className="main">
        <Title 
            busStopName={'Energia-aukio'}
        />
        <section className="content mt-[64px]">
            <ul>
                {
                    arr.map((i) => {
                        if(i !== 3 && i !== 5){
                            return <ScheduleItem key={i} late={false} />
                        }
                        else{
                            return <ScheduleItem key={i} late={true} />
                        }
                    })
                }
            </ul>
        </section>
    </main>
  )
}

export default Main