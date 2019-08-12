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
  displayedContributorList;
  isDisabled: boolean;
  buttonText = 'Expand';

  constructor(private route: ActivatedRoute, private retrieveDataService: RetrieveDataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.login = params.login;
      this.name = params.name;
      this.retrieveDataService.getRepoDetail(this.login, this.name).subscribe(detail => {
        this.displayedContributorList = this.adaptWithDetailLength(detail);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  adaptWithDetailLength(detail) {
    if (detail.length <= 5) {
      this.buttonText = 'Expand';
      this.isDisabled = true;
      return detail;
    } else {
      this.buttonText = 'Expand';
      this.contributorList = detail;
      this.isDisabled = false;
      return detail.slice(0, 5);
    }
  }

  expand() {
    if (this.displayedContributorList.length <= 5) {
      this.buttonText = 'Hide';
      this.displayedContributorList = this.contributorList;
    } else {
      this.buttonText = 'Expand';
      this.displayedContributorList = this.contributorList.slice(0, 5);
    }
  }

}
