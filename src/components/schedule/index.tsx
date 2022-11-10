import { useQuery } from '@apollo/client'
import { format, formatDistance, getUnixTime } from 'date-fns'
import { useEffect, useMemo } from 'react'
import Title from '../schedule/MainTitle'
import { formHelsinkiTimeHandler } from '../../helpers'
import { IBusStopInterfase, IResponseInterface } from '../../types'
import { GET_STOP_INFORMATION } from '../gql'
import ScheduleItem from './ScheduleItem'

const Schedule = () => {
  const POLL_FREQUENCY = 180000;

  const { loading, error, data, refetch } = useQuery<IResponseInterface>(GET_STOP_INFORMATION, {
    fetchPolicy: 'cache-and-network', 
    nextFetchPolicy: 'cache-and-network',
    variables: {
      id: 'HSL:1201110',
      startTime: getUnixTime(formHelsinkiTimeHandler())
    },
  });

  const busStopData = useMemo(() => data && data.stop.stoptimesWithoutPatterns, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, POLL_FREQUENCY);

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {loading ? 'loading...' : null}
      {error ? "Something went wrong! Please take a look at the console!" : (
        <section className="content">
          <Title 
            busStopName={data?.stop.name ?? ''}
          />
          <ul>
            {
              !loading && busStopData && busStopData.length > 0 && busStopData.map((item: IBusStopInterfase, i) => {
                let isLate = null;
                let latency = null;

                const currTime = new Date(getUnixTime(formHelsinkiTimeHandler()) * 1000);
                const scheduledArrival = new Date((item.serviceDay + item.scheduledArrival) * 1000);

                const arrivalDate = format(new Date((item.serviceDay + item.realtimeArrival) * 1000), "HH:mm");

                if(item.realtime && item.arrivalDelay >= 0){
                  isLate = true;

                  const arrivalWithDelay = new Date((item.serviceDay + item.scheduledArrival + item.arrivalDelay) * 1000);

                  latency = formatDistance(arrivalWithDelay, scheduledArrival);
                } else{
                  isLate = false
                }

                return (
                  <ScheduleItem 
                    key={item?.serviceDay - item?.scheduledDeparture}
                    late={isLate}
                    busNumber={item.trip.route.shortName}
                    serviceDay={item.serviceDay}
                    arrivalTimeLatency={latency}
                    arrivalTime={formatDistance(currTime, scheduledArrival)}
                    arrivalDate={arrivalDate}
                  />
                )
              })
            }
          </ul>
        </section>
      )}
    </>
  )
}

export default Schedule