import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private authService: AuthService) { }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    logout() {
        this.authService.logout();
    }
    getprofilePicUrl() {
        return this.authService.getprofilePicUrl()
    }
}
