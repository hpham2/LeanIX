import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class RetrieveDataService {
  publicRepoLink = 'https://api.github.com/repositories';

  rates: any[];
  loading = true;
  error: any;


  constructor(private http: HttpClient, private apollo: Apollo) { }

  getPublicRepoLink() {
    this.http.get(this.publicRepoLink).subscribe(data => {
      console.log(data);
    });

    // this.http.get('https://o5x5jzoo7z.sse.codesandbox.io/graphql').subscribe(data => {
    //   console.log(data);
    // });

    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
        // query: gql`
        //   {
        //     owner {
        //       id
        //     }
        //   }
        // `,
        // query: gql`
        //   organization(login: "nasa") {
        //     name
        //     url
        //   }
        // `,
      })
      .valueChanges.subscribe(result => {
        console.log(result);
      });
  }

}
