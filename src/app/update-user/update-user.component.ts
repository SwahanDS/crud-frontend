import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  ps: number;
  user: User=new User();
  
  constructor(private userService:UserService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ps=this.route.snapshot.params['ps'];
    this.userService.getUser(this.ps).subscribe(data=>
      {
        this.user=data;
      },
      error=>console.log(error));
  }

  onSubmit(){
    this.userService.updateUser(this.ps,this.user).subscribe(data=>
      {
        this.goToUserList();
      },
      error=>console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

}
