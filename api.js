const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
    another: String
    number: Int
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
  Query: {
    another: () => "Another query",
  },
  Query: {
    number: () => "123",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const main = async () => {
  const app = express();
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log("Now browse to http://localhost:4000" + server.graphqlPath)
  );
};

main();
