import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AddressService {
    constructor(private http: HttpClient) { }

    getAddresses() {
        return this.http.get(`${environment.API_BASE}/address`);
    }

    addAddress(address: any) {
        return this.http.post(`${environment.API_BASE}/address/add`, address);
    }

    updateAddress(id: number, address: any) {
        return this.http.put(`${environment.API_BASE}/address/${id}`, address);
    }

    deleteAddress(id: number) {
        return this.http.delete(`${environment.API_BASE}/address/${id}`);
    }
}
