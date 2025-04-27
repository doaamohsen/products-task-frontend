import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    products: any[] = [];
    cartItemCount: number = 0;
    cart: CartItem[] = [];
    cartTotal: number = 0;
    successMessage: string = "";
    // constructor(private productService: ProductService) { }
    constructor(private productService: ProductService, private cartService: CartService) { }
    ngOnInit() {
        this.productService.getProducts().subscribe((data) => {
            // (data) => {
            this.products = data;
        })
        this.cartService.getCart().subscribe((cart) => {
            this.cartItemCount = cart.items.length;
            this.cart = cart.items;
            this.cartTotal = cart.total
        })

    }
    addToCartHandler(productId: number) {
        this.cartService.addToCart(productId, 1).subscribe((res) => {
            // alert('Item added to cart!');
            this.successMessage = 'Item added to cart!';
            setTimeout(() => {
                this.successMessage = '';
            }, 3000); // hide after 3 seconds
        });
        this.cartService.getCart().subscribe((cart) => {
            this.cartItemCount = cart.items.length;
            this.cart = cart.items;
            this.cartTotal = cart.total
        });

    }
}
