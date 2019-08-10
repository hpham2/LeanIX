import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

const uri = 'https://o5x5jzoo7z.sse.codesandbox.io/graphql';
// const uri = 'https://api.github.com/graphql';

@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphQLModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    // const http = httpLink.create({uri: '/graphql'});

    // const authLink = new ApolloLink((operation, forward) => {
    //   // Get the authentication token from local storage if it exists
    //   const token = '3628305082fcacb760c72b74089aee6fbe8c893d';

    //   // Use the setContext method to set the HTTP headers.
    //   operation.setContext({
    //       headers: {
    //           Authorization: token ? `Bearer ${token}` : ''
    //       }
    //   });

    //   // Call the next link in the middleware chain.
    //   return forward(operation);
    // });
    // create Apollo
    apollo.create({
      link: httpLink.create({ uri }),
    //   link: authLink.concat(http),
      cache: new InMemoryCache(),
    });
  }
}
