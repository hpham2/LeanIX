import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RetrieveDataService } from '../services/retrieve-data.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit, OnDestroy {
  login: string;
  name: string;
  sub: any;
  contributorList;

  constructor(private route: ActivatedRoute, private retrieveDataService: RetrieveDataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.login = params.login;
      this.name = params.name;
      this.retrieveDataService.getRepoDetail(this.login, this.name).subscribe(detail => {
        console.log(detail);
        this.contributorList = detail;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
