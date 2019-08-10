import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class RetrieveDataService {
  publicRepoLink = 'https://api.github.com/repositories';

  constructor(private http: HttpClient, private apollo: Apollo) { }

  getPublicRepoLink() {
    this.http.get(this.publicRepoLink).subscribe(data => {
      console.log(data);
    });

    this.apollo
      .watchQuery({
        query: gql`
          {
            repository(owner:"mojombo", name:"grit") {
              id
              name
            }
          }
        `,

        // query: gql`
        // {repository(owner:"octocat", name:"Hello-World") {
        //   issues(last:20, states:CLOSED) {
        //     edges {
        //       node {
        //         title
        //         url
        //         labels(first:5) {
        //           edges {
        //             node {
        //               name
        //             }
        //           }
        //         }
        //       }
        //     }
        //   }
        // }}
        // `,

        // query: gql`
        //   {__schema {
        //     types {
        //       name
        //       kind
        //       description
        //       fields {
        //         name
        //       }
        //     }
        //   }}
        // `,
      })
      .valueChanges.subscribe(result => {
        console.log(result);
      });
  }

}
