import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { TableComponent } from './table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RepoComponent } from './repo/repo.component';
import { GraphQLModule } from './graphql.module';
import { ApolloLink } from 'apollo-link';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RepoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    GraphQLModule
  ],
  providers: [
    // {
    //   provide: APOLLO_OPTIONS,
    //   useFactory: (httpLink: HttpLink) => {
    //     return {
    //       cache: new InMemoryCache(),
    //       link: httpLink.create({
    //         // uri: 'https://o5x5jzoo7z.sse.codesandbox.io/graphql'
    //         uri: 'https://api.github.com/graphql'
    //       })
    //     };
    //   },
    //   deps: [HttpLink]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
