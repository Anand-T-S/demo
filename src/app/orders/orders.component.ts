import { Component } from '@angular/core';
import { OrderService } from '../Services/order.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  constructor(private serve: OrderService) {}

  public odArray: any

  ngOnInit(): void {
    this.odArray = this.serve.getOrders();
    console.log(this.odArray);  
  }
}
