import { Component, OnInit, ViewChild } from '@angular/core';
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
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<Repository>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor( private router: Router, private retrieveDataService: RetrieveDataService ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.retrieveDataService.getPublicRepoList().subscribe(result => {
      console.log(result.data['search'].edges);
      this.dataSource.data = result.data['search'].edges;
    });
  }

  goToRepo(repo) {
    const login = repo.node.owner.login;
    const name = repo.node.name;
    this.router.navigate(['/repo', login, name]);
  }

}

export interface Repository {
  name: string;
  id: number;
}
