import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RepoComponent } from './repo/repo.component';
import { ContributorComponent, DialogDataExampleDialog } from './contributor/contributor.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RepoComponent,
    ContributorComponent,
    DialogDataExampleDialog
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    HttpClientModule,
    GraphQLModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogDataExampleDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
