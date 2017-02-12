import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DiveSite } from '../classes/dive-site';

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.css']
})
export class EditSiteComponent implements OnInit {
  @Input() site: DiveSite;
  @Output() onSaveThis = new EventEmitter<DiveSite>();
  @Output() onCancelThis = new EventEmitter();
  siteName: string;

  saveThis() {
    this.onSaveThis.emit(this.site);
  }

  cancelThis() {
    this.onCancelThis.emit(null);
  }

  constructor() { }

  ngOnInit() {
  }

}
