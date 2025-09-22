import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public contact = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      age: new FormControl(''),
      checkbox: new FormControl(false),
      email: new FormControl(''),
      comment: new FormControl('')
  });


}
