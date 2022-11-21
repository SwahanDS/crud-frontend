import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data=>
      {
      this.users=data;
      }
    );
  }

  updateUser(ps:number){
    this.router.navigate(['/update',ps]);
  }

  deleteUser(ps:number){
    this.userService.deleteUser(ps).subscribe(data=>
      {
        console.log(data);
        this.getUsers();
      })
  }

  viewUser(ps:number){
    this.router.navigate(['/user',ps]);
  }

}
