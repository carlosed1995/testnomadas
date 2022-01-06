import { Input, Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder ,  FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  form: FormGroup;
  user:any;
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  constructor(fb: FormBuilder, public login:AuthService, private router: Router) { 

    this.form =  fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],

  });
    
  }

  ngOnInit() {
  }



   
  

  async submit() {
    if (this.form.valid) {
      this.form.value;
      const user = this.form.value;
      console.log(user.username +' '+ user.password);

      const state = await this.login
      .login()
      .subscribe((e) => {
        let obj: any = e; 
        for(let i in obj){

          if(obj[i].user == user.username && obj[i].password == user.password) {
            this.login.setUser(user);
           this.router.navigate(['/']);
           break;
          }else{
           this.error = 'Usuario o clave invalidos';
           break;
 
          }
        } 
      });
    }
  }
 

}
