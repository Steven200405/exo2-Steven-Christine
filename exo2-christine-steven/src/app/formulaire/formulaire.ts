import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form-service/form-service';

@Component({
  selector: 'app-formulaire',
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.scss'
})
export class Formulaire {
  public contactForm = new FormGroup(
    {
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      age: new FormControl(''),
      checkbox: new FormControl(false),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', Validators.required)
    }
  );

  constructor(private router: Router, private service: FormService){
  }

  public getCheckbox(): boolean | null | undefined {
    return this.contactForm.get('checkbox')?.value?? false;
  }

  public initEmail(): void {
    if(this.getCheckbox() == false ){
            this.contactForm.get('email')?.removeValidators(Validators.required);
            this.contactForm.get('email')?.removeValidators(Validators.email);
            this.contactForm.patchValue({
              email: '',
            });
    }
    else{
      this.contactForm.get('email')?.setValidators([Validators.required, Validators.email]);
    }
    this.contactForm.updateValueAndValidity();
  }

  public submitForm(): void {
    alert("Le formulaire est valide");
    this.service.contact = this.contactForm;
    this.router.navigate(['/accueil']);
  }
}
