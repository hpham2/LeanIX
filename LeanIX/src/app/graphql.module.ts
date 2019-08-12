import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

const uri = 'https://api.github.com/graphql';

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
    const http = httpLink.create({uri});

    const authLink = new ApolloLink((operation, forward) => {
      const token = '6f43af81bdbd2b3f9a2e31314850262488087aa3';

      // Use the setContext method to set the HTTP headers.
      operation.setContext({
          headers: {
              Authorization: token ? `Bearer ${token}` : ''
          }
      });

      // Call the next link in the middleware chain.
      return forward(operation);
    });

    // create Apollo
    apollo.create({
    //   link: httpLink.create({ uri }),
      link: authLink.concat(http),
      cache: new InMemoryCache(),
    });
  }
}
