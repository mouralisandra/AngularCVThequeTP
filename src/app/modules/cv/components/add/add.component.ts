import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { map, Observable, of, tap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../../model/cv';
import { ToastrService } from 'ngx-toastr';
import { CanDesactivate } from '../../guards/cv.guard';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit, CanDesactivate {
  response$!: Observable<any>;
  addForm!: FormGroup;
  id: number;

  constructor(
    private cvService: CvService,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toast: ToastrService
  ) {
    // @ts-ignore
    this.id = this.activatedroute.snapshot.params['id'];
    console.log(this.id);
    let cv$: Observable<Cv>;
    if (this.id) {
      cv$ = this.cvService
        .getCvById(this.id)
        .pipe(map((c) => (c ? c : new Cv())));
    } else cv$ = of(new Cv());
    cv$.subscribe((c) => {
      console.log(c);
      this.addForm = this.fb.group({
        name: [c.name, Validators.required],
        firstname: [c.firstname, Validators.required],
        job: [c.job, Validators.required],
        age: [
          c.age,
          [Validators.required, Validators.min(0), Validators.max(70)],
        ],
        cin: [c.cin, Validators.required],
        path: [c.path, Validators.required],
      });
    });
  }

  ngOnInit(): void {}

  add(cv: Cv) {
    if (this.id) {
      this.response$ = this.cvService.updateCv(this.addForm.value).pipe(
        tap(() => {
          this.toast.success('Cv modifié avec succès');
          this.router.navigate(['cv', this.id]);
        })
      );
    } else {
      this.response$ = this.cvService.addCv(this.addForm.value).pipe(
        tap(() => {
          this.toast.success('Cv ajouté avec succès');
          this.addForm.reset();
        })
      );
    }

    this.response$.subscribe();
  }

  CanDeactivate(): Observable<boolean> | boolean {
    if (this.addForm.dirty) {
      return window.confirm(
        'You have unsaved changes. Do you really want to leave?'
      );
    }
    return true;
  }
}
