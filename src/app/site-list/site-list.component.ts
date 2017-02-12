import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DiveSite } from '../classes/dive-site';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {
  @Input() sites: DiveSite[];
  @Output()onAddNewSite = new EventEmitter();
  @Output() onEditSite = new EventEmitter<DiveSite>();

  addNewSite() {
    this.onAddNewSite.emit(null);
  }

  editThisSite(site: DiveSite) {
    this.onEditSite.emit(site);
  }

  constructor() { }

  ngOnInit() {
  }

}
