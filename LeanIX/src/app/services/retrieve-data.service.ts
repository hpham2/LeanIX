import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class RetrieveDataService {
  gqlQueryPosts = gql`
    query gqlQueryPosts {
      search(query: "is:public", type: REPOSITORY, first: 100) {
        repositoryCount
        edges {
          node {
            ... on Repository {
              name
              owner {
                id
                login
              }
            }
          }
        }
      }
    }`;

  constructor(private http: HttpClient, private apollo: Apollo) { }

  getPublicRepoList() {
    return this.apollo
      .watchQuery({
        query: this.gqlQueryPosts
      })
      .valueChanges;
  }

  getRepoDetail(login, name) {
    return this.http.get(`https://api.github.com/repos/${login}/${name}/contributors`);
  }

  getContributorDetail(url) {
    return this.http.get(url);
  }
}
