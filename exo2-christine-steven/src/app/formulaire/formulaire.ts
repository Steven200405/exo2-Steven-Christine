import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.scss'
})
export class Formulaire {
  public profileForm = new FormGroup(
    {
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      age: new FormControl(''),
      checkbox: new FormControl(false),
      email: new FormControl('', Validators.email),
      comment: new FormControl('')
    }
  );

  public getCheckbox(): boolean | null | undefined {
    return this.profileForm.get('checkbox')?.value;
  }

  public initEmail(): void {
      this.profileForm.patchValue({
        email: "",
      });
  }

  public submitForm(): void {
    console.log(this.profileForm.get('firstname') + 'has submitted');
  }
}
