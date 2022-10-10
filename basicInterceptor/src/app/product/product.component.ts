import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private api: ProductService) {}

  ngOnInit(): void {
    this.api.getConfig().subscribe((res: any) => {
      console.log(res);
    });
  }
}
