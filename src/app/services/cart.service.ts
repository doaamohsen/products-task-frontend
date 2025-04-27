import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CartItem } from '../models/cart-item.model';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CartService {
    constructor(private http: HttpClient) { }

    addToCart(productId: number, quantity: number) {
        return this.http.post(`${environment.API_BASE}/cart/add`, { productId, quantity });
    }

    getCart() {
        return this.http.get<any>(`${environment.API_BASE}/cart`);
    }

    removeFromCart(productId: number) {
        return this.http.delete(`${environment.API_BASE}/cart/remove`, { body: { productId } });
    }
}
