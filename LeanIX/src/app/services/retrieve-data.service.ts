import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class RetrieveDataService {
  publicRepoLink = 'https://api.github.com/repositories';
  gqlQueryPosts = gql`
    query gqlQueryPosts($name: String!) {
      repository(owner: "mojombo", name:$name) {
        id
        name
      }
    }
  `;

  constructor(private http: HttpClient, private apollo: Apollo) { }

  getPublicRepoLink(queryname) {
    this.http.get(this.publicRepoLink).subscribe(data => {
      console.log(data);
    });

    this.apollo
      .watchQuery({
        query: this.gqlQueryPosts,
        variables: {
          name: queryname
        }
      })
      .valueChanges.subscribe(result => {
        console.log(result);
      });
  }
}
