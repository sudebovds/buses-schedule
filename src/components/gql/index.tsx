import { gql } from "@apollo/client";

export const GET_STOP_INFORMATION = gql`
    query GetStops(
        $id: String!, 
        $startTime: Long, 
        $numberOfDepartures: Int = 5
        ){
        stop(id: $id) {
            name
            stoptimesWithoutPatterns(
                startTime: $startTime, 
                numberOfDepartures: $numberOfDepartures
            ) {
            serviceDay
            scheduledArrival
            realtimeArrival
            arrivalDelay
            scheduledDeparture
            realtimeDeparture
            departureDelay
            realtime
            realtimeState
            serviceDay
            trip {
                route {
                shortName
                }
            }
            headsign
        }
    }
  }
`;