import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient, private router: Router) { }

    register(name: string, email: string, password: string, profilePicBase64: string) {
        return this.http.post(`${environment.API_BASE}/registerUser`, { name, email, password, profilePicBase64 });
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.API_BASE}/loginUser`, { email, password });
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
    getToken() {
        return localStorage.getItem('token');
    }

    isLoggedIn() {
        return !!localStorage.getItem('token');
    }
}
