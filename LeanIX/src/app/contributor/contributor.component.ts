import { Component, OnInit, Input, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RetrieveDataService } from '../services/retrieve-data.service';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.css']
})
export class ContributorComponent implements OnInit {
  @Input() contributor: any;
  image: any;
  contributorDetail: any;

  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog, private retrieveDataService: RetrieveDataService) { }

  ngOnInit() {
    this.image = this.sanitizer.bypassSecurityTrustStyle(`url(${this.contributor.avatar_url})`);
    this.retrieveDataService.getContributorDetail(this.contributor.url).subscribe(detail => {
      this.contributorDetail = detail;
    });
  }

  openDialog(contributorDetail) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        contributorDetail
      }
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'contributor-detail.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
}
