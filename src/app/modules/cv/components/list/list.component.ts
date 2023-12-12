import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../../model/cv';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() cvs: Cv[] = [];

  @Output() itemSelected: EventEmitter<Cv> = new EventEmitter<Cv>();

  onItemClick(cv: Cv): void {
    this.itemSelected.emit(cv);
  }

  constructor(
    private router:Router
  ) {
  }
}
