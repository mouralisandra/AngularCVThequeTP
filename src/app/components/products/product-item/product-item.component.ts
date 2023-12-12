import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/Product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  // @ts-ignore
  @Input() product:Product;


  ngOnInit(): void {
    //console.log(this.product)
  }

}
