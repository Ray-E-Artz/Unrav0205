import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {DiveSite} from '../classes/dive-site';

@Component({
  selector: 'app-delete-site',
  templateUrl: './delete-site.component.html',
  styleUrls: ['./delete-site.component.css']
})
export class DeleteSiteComponent {
  @Input() site: DiveSite;
  @Output() onDeleteThis = new EventEmitter();
  @Output() onCancelThis = new EventEmitter();

  deleteThis() {
    this.onDeleteThis.emit(null);
  }

  cancelThis() {
    this.onCancelThis.emit(null);
  }
}
