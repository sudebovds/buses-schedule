import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'digitransit-subscription-key': '40402e35e8714b8685b6fe7b3e51a586'
    },
    cache: new InMemoryCache(),
})