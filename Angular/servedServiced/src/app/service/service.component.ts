import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorisationService } from '../../services/authorisation.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [AuthorisationService],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
    constructor(public authService:AuthorisationService){} 
    userName:string ="";
    userPass:string ="";


    login():void
    {
        this.authService.login(this.userName, this.userPass)
    }
    logout():void
    {
        debugger;
        this.authService.logout();
    }
}
