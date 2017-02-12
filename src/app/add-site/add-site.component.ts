import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {
  @Input() siteId: number;
  @Output() onAddThis = new EventEmitter<string>();
  @Output() onCancelThis = new EventEmitter();
  siteName: string;

  addThis() {
    this.onAddThis.emit(this.siteName);
  }

  cancelThis() {
    this.onCancelThis.emit(null);
  }

  constructor() { }

  ngOnInit() {
  }

}
