import { Component, OnInit } from '@angular/core';
import { Product } from "../Product";
import { ProductService } from "../product.service";
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  selected: Product;
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  detailProduct(product) {
    product.status = !product.status;
    this.selected = product;
  }
  removeItem(id) {
    this.products = this.products.filter(product => product.id != id);
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}