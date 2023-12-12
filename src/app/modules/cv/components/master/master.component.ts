import {Component, OnInit} from '@angular/core';
import {Cv} from "../../model/cv";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit{
  cvs:Cv[]=[]
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {
  }
  ngOnInit(): void {
     this.cvs = this.activatedRoute.snapshot.data['cvs']
  }

  showDetail(cv:Cv) {
    console.log('hello',cv.id)
    this
    this.router.navigate(['/cv/list', cv.id]);
  }
}
