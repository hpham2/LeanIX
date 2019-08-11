import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RetrieveDataService } from '../services/retrieve-data.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit, OnDestroy {
  private login: string;
  private name: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private retrieveDataService: RetrieveDataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.login = params.login;
      this.name = params.name;
      this.retrieveDataService.getRepoDetail(this.login, this.name).subscribe(detail => {
        console.log(detail);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
