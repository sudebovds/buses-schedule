export interface IBusStopInterfase{
    arrivalDelay: number,
    departureDelay: number,
    headsign: string,
    realtime: boolean,
    realtimeArrival: number,
    realtimeDeparture: number,
    realtimeState: string,
    scheduledArrival: number,
    scheduledDeparture: number,
    serviceDay: EpochTimeStamp,
    trip: {
        route: {
            shortName: string
        }
    }
}

export interface IResponseInterface{
    stop: {
        name: string,
        stoptimesWithoutPatterns: IBusStopInterfase[];
    }
}