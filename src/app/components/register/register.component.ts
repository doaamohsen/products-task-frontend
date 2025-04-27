import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    name = '';
    email = '';
    password = '';
    profilePic: any;
    error = '';

    constructor(private authService: AuthService, private router: Router) { }

    onFileChange(event: any) {
        const reader = new FileReader();
        reader.onload = () => {
            this.profilePic = (reader.result as string).split(',')[1];
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    register() {
        this.authService.register(this.name, this.email, this.password, this.profilePic).subscribe({
            next: () => {
                this.router.navigate(['/']);
            },
            error: (err) => {
                this.error = err.error.error || 'Registration failed';
            }
        });
    }
}
