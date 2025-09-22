import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RedirectCommand, Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.scss'
})
export class Formulaire {
  constructor(private router: Router){
  }

  public profileForm = new FormGroup(
    {
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      age: new FormControl(''),
      checkbox: new FormControl(false),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', Validators.required)
    }
  );

  public getCheckbox(): boolean | null | undefined {
    return this.profileForm.get('checkbox')?.value;
  }

  public initEmail(): void {
    if(this.profileForm.get('checkbox')?.value == false ){
            this.profileForm.get('email')?.removeValidators(Validators.required);
            this.profileForm.get('email')?.removeValidators(Validators.email);
            this.profileForm.patchValue({
              email: "",
            });
    }
    else{
      this.profileForm.get('email')?.setValidators([Validators.required, Validators.email]);
    }
    this.profileForm.updateValueAndValidity();
  }

  public submitForm(): void {
    alert("Le formulaire est valide");
    this.router.navigate(['/accueil']);
  }
}
