import fetch from "isomorphic-fetch"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

console.log(process.env.GATSBY_GITHUB_TOKEN)
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
    },
    fetch,
  }),
})

export default client
