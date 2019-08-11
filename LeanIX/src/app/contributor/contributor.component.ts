import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.css']
})
export class ContributorComponent implements OnInit {
  @Input() avatarLink: string;
  @Input() loginName: string;
  @Input() id: number;
  @Input() contributorLink: string;
  image: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.image = this.sanitizer.bypassSecurityTrustStyle(`url(${this.avatarLink})`);
  }

}
