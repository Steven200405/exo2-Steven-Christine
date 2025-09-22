import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss'
})
export class Gestion implements OnInit{
  public contact;

  constructor(private service: FormService, private router: Router){
    this.contact = service.getContact();
  }

  ngOnInit(): void {
    if(!(this.service.getFirstname() && this.service.getLastname() && this.service.getComment() )){
      this.router.navigate(['/page404']);
    }
  }
}
