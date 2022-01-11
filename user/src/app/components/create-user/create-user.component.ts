import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  title = 'Creaate a New User';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _userService: UserService,
              private aRouter: ActivatedRoute) {
    this.userForm = this.fb.group({
      nombre:['', Validators.required],
      email:['', Validators.required],
      puesto:['', Validators.required],
      fnac:['', Validators.required],
      domicilio:['', Validators.required],
      habilidad:['', Validators.required],
      grade:['', Validators.required],
    });

    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.isEdit();
  }

  addUser() {
    console.log(this.userForm);

    const USER: User = {
      nombre: this.userForm.get('nombre')?.value,
      email: this.userForm.get('email')?.value,
      puesto: this.userForm.get('puesto')?.value,
      fnac: this.userForm.get('fnac')?.value,
      domicilio: this.userForm.get('domicilio')?.value,
      habilidad: this.userForm.get('habilidad')?.value,
      grade: this.userForm.get('grade')?.value,
    }

    if(this.id !== null){
      //User Edit
      this._userService.editUser(this.id, USER).subscribe(data => {
        this.toastr.info('The User has been edited!', 'User edited');
        this.router.navigate(['/']);
      })
    } else{
      //Add New User
      console.log(USER);
      this._userService.saveUser(USER).subscribe(data => {
      this.toastr.success('The new user has been saved!', 'User registered');
      this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    }

    
    
  }

  isEdit(){
    if(this.id !== null){
      this.title = "User edit";
      this._userService.getOneUser(this.id).subscribe(data => {
        this.userForm.setValue({
          nombre: data.nombre,
          email: data.email,
          puesto: data.puesto,
          fnac: data.fnac,
          domicilio: data.domicilio,
          habilidad: data.habilidad,
          grade: data.grade
        })
      })
    }
  }

}
