import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private api: ProductService) {}

  ngOnInit(): void {}

  eventLogin() {
    console.log('baru');
    this.api.postConfig();
  }
}
