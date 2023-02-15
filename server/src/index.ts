import { readFileSync } from 'fs';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './graphql/resolvers';

const typeDefs = readFileSync(require.resolve('../../core/schema.graphql'), { encoding: 'utf-8' });

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const main = async () => {
    const { url } = await startStandaloneServer(server, {
        listen: {
            port: 4000
        }
    });

    console.log(`🚀  Server ready at: ${url}`);
}

main().catch(err => console.log(err))