import { Component } from '@angular/core';
import { FormService } from '../form-service';
import { FormControl, FormGroup } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-gestion',
  imports: [JsonPipe],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss'
})
export class Gestion {
  public contact = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      age: new FormControl(''),
      checkbox: new FormControl(),
      email: new FormControl(),
      comment: new FormControl('')
  });

  constructor(private service: FormService){
    this.contact = service.contact;
  }
}
