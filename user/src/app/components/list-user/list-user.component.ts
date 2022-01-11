import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listUsers: User[] = [];

  constructor(private _userService: UserService,
        private toastr: ToastrService) { }
  
  //pagination variable
  p: number = 1;
        
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    }, error => {
      console.log(error);
    })
  }

  deleteUser(id: any) {
    this._userService.deleteUser(id).subscribe(data => {
      this.toastr.error('The user has been eliminated successfully!', 'Eliminated User');
      this.getUsers();
    }, error => {
      console.log(error);
    })
  }

}
