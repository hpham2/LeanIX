import { Component, OnInit } from '@angular/core';
import { RetrieveDataService } from './services/retrieve-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private retrieveDataService: RetrieveDataService) { }

  ngOnInit() {
    // this.retrieveDataService.getPublicRepoLink().subscribe(data => {
    //   console.log(data[0]);
    // });

    this.retrieveDataService.getPublicRepoLink("grit");
  }
}
