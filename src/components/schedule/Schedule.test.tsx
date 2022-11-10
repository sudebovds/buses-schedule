import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_STOP_INFORMATION } from "../gql";
import Schedule from ".";
import { getUnixTime } from "date-fns";
import { formHelsinkiTimeHandler } from "../../helpers";

    it('Schedule API testing', async () => {
        const mockedBusStopData = {
            request: {
                query: GET_STOP_INFORMATION,
                variables: {
                    id: 'HSL:1201110',
                    startTime: getUnixTime(formHelsinkiTimeHandler()),
                    numberOfDepartures: 5
                }
            },
            result: {
                data: {
                    stop: {
                        name: "Energia-aukio",
                        stoptimesWithoutPatterns: {
                            serviceDay: 1668031200,
                            scheduledArrival: 51660,
                            realtimeArrival: 51619,
                            arrivalDelay: -41,
                            scheduledDeparture: 51660,
                            realtimeDeparture: 51672,
                            departureDelay: 12,
                            realtime: true,
                            realtimeState: "UPDATED",
                            trip: {
                                route: {
                                    shortName: "15"
                                }
                            },
                            headsign: "Ruoholahti"
                        }
                    } 
                }
            }
        };

        render(
            <MockedProvider mocks={[mockedBusStopData]} addTypename={false}>
                <Schedule />
            </MockedProvider>
        );

        expect(await screen.findByText('loading...')).toBeInTheDocument();
        expect(await screen.findByText(/Energia-aukio/i)).toBeInTheDocument();
        expect(screen.findAllByAltText(/15/));
    });