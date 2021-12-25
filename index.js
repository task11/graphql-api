import { GraphQLServer } from "graphql-yoga"
import resolvers from "./graphqlStore/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphqlStore/schema.graphql",
  resolvers
});

server.start(() => console.log("Server Running"))

