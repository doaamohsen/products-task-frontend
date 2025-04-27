import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    cartItems: any[] = [];
    total = 0;

    constructor(private cartService: CartService) { }

    ngOnInit() {
        this.loadCart();
    }

    loadCart() {
        this.cartService.getCart().subscribe((data: any) => {
            this.cartItems = data.items;
            this.total = data.total;
        });
    }

    removeItem(productId: number) {
        this.cartService.removeFromCart(productId).subscribe(() => {
            this.loadCart();
        });
    }
}
