import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Cv } from '../../model/cv';
import { CvService } from '../../services/cv.service';
import {debounceTime, distinctUntilChanged, Observable, switchMap} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string = 'Search CVs';
  @Output() cvSelected = new EventEmitter<Cv>();
  searchControl = new FormControl();
  searchResults: Cv[] = [];
  search$!: Observable<Cv[]>
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.search$ = this.searchControl.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm) => this.cvService.searchCvs(searchTerm))
    );
}

  onSelectCv(cv: Cv): void {

    this.cvSelected.emit(cv);
  }

}
