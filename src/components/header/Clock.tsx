import { useEffect, useState } from 'react'

import { getTimeHandler } from '../../helpers'

const Clock = () => {
    const [currTime, setCurrTime] = useState<String>(getTimeHandler());
    
    useEffect(() => { 
        const interval = setInterval(() => setCurrTime(getTimeHandler()), 3600);

        return () => clearInterval(interval);
    }, [])
    
  return (
    <div className="time">
        <span className="text-[24px] sm:text-[54px] titleText">
            {currTime}
        </span>
    </div>
  )
}

export default Clock