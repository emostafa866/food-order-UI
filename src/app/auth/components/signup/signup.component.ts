import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
// import { AuthServiceService } from '../../auth-service.service';
import { UserRegister } from '../../user-register';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  
  user: UserRegister ;
  wating:boolean=false;
  
  constructor(private router: Router,private authService: AuthServiceService) { 
    this.user=new UserRegister();
  }
  
  onSubmit_Sign_Up() {
    this.wating=true;

       
      this.authService.register(this.user).subscribe(r => {
         
        console.log(r)
          
        this.router.navigate(["/"])
        
        this.wating=false;
      }, error => {
         
        alert("The email or password is incorrect")
        
        this.wating=false;
      })
    
  }
  
}
