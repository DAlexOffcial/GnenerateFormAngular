import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IForm, IFormControl, IValidators } from 'src/app/interfaces/form.interfaces';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit{
  @Input() form !: IForm;
  
  public fb = inject(FormBuilder)
  dynamicFormGroup: FormGroup = this.fb.group({})
  
  ngOnInit(): void {
    if(this.form.formControls){
      let formGroup: any = {}
      this.form.formControls.forEach( (control: IFormControl) => {
         let controlsValidators: any = []

         if(control.validators){
          control.validators.forEach((val : IValidators) => {
            if(val.validatorName === 'required') controlsValidators.push(Validators.required);
            if(val.validatorName === 'email') controlsValidators.push(Validators.email);
            if(val.validatorName === 'minlength') controlsValidators.push(Validators.minLength(val.minLength as number));
            if(val.validatorName === 'maxlength') controlsValidators.push(Validators.maxLength(val.maxLenght as number));
            if(val.validatorName === 'pattern') controlsValidators.push(Validators.pattern(val.pattern as string));
          })
         }
        formGroup[control.name] = [control.value || '' , controlsValidators]
      });
      this.dynamicFormGroup = this.fb.group(formGroup)
    }
  }

  onSubmit(){
    if(this.dynamicFormGroup.valid){
      console.log(this.dynamicFormGroup.value);
    }
    this.dynamicFormGroup.markAllAsTouched()
  }

  resetForm(){
    this.dynamicFormGroup.reset()
  }

  getValidationsErrors(control: IFormControl) : string{
    const myFormControl = this.dynamicFormGroup.get(control.name)
    let errorMessage = '';
    control.validators.forEach((val) => {
      if(myFormControl?.hasError(val.validatorName as string)){
        errorMessage = val.message as string
      }
    })

    return errorMessage
  }

}
