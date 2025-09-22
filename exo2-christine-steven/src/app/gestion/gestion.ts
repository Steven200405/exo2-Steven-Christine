import { Component } from '@angular/core';
import { FormService } from '../form-service/form-service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss'
})
export class Gestion {
  public contact;
  
  constructor(private service: FormService){
    this.contact = service.contact;
  }
}
