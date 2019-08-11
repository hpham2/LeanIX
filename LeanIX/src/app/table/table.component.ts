import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RetrieveDataService } from '../services/retrieve-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<Repository>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor( private router: Router, private retrieveDataService: RetrieveDataService ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);

    this.retrieveDataService.getPublicRepoLink().subscribe((reposList: Repository[]) => {
      this.dataSource.data = reposList;
    });
  }

  goToRepo(repo) {
    console.log(repo)
    // this.router.navigate(['/repo', id]);
  }

}

export interface Repository {
  name: string;
  id: number;
}
