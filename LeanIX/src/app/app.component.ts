import { Component, OnInit } from '@angular/core';
import { RetrieveDataService } from './services/retrieve-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  reposList;

  constructor(private retrieveDataService: RetrieveDataService) { }

  ngOnInit() {
  }
}
