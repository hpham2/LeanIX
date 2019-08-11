import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class RetrieveDataService {
  publicRepoLink = 'https://api.github.com/repositories';
  repoDetailLink = 'https://api.github.com/repos/mojombo/grit/contributors';
  // gqlQueryPosts = gql`
  //   query gqlQueryPosts($name: String!) {
  //     repository(owner: "mojombo", name:$name) {
  //       id
  //       name
  //       collaborators(first: 10, affiliation: ALL) {
  //         edges {
  //           permission
  //           node {
  //             id
  //             login
  //             name
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;

  gqlQueryPosts = gql`
  query gqlQueryPosts {
    search(query: "is:public", type: REPOSITORY, first: 50) {
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
  }
`;

  constructor(private http: HttpClient, private apollo: Apollo) { }

  getPublicRepoList() {
    // return this.http.get(this.publicRepoLink);
    return this.apollo
      .watchQuery({
        query: this.gqlQueryPosts
      })
      .valueChanges;
  }

  getRepoDetail(login, name) {
    return this.http.get(`https://api.github.com/repos/${login}/${name}/contributors`);
  }
}
