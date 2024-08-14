import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IForm, IFormControl, IValidators } from 'src/app/interfaces/form.interfaces';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit{
  @Input() form !: IForm;
  
  public fb = inject(FormBuilder)
  public hidde = signal(true)
  dynamicFormGroup: FormGroup = this.fb.group({})
  
  ngOnInit(): void {
    if(this.form.formControls){
      let formGroup: any = {}
      this.form.formControls.forEach( (control: IFormControl) => {
         let controlsValidators: any = []

         if(control.validators){
          control.validators.forEach((val : IValidators) => {
            if(val.validatorName === 'required' && val.required === true) controlsValidators.push(Validators.required);
            if(val.validatorName === 'email' && val.required === true) controlsValidators.push(Validators.email);
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

  generatePDF() {
    this.hidde.set(false)
    
    const elementToPrint = document.getElementById('theContent');
    if (!elementToPrint) return;
    

    html2canvas(elementToPrint, { scale: 2, useCORS: true }).then((canvas) => {
       const imgWidth = 210; // Ancho de la imagen en mm
       const pageHeight = 297; // Altura de la página en mm
       const imgHeight = (canvas.height * imgWidth) / canvas.width;
       let heightLeft = imgHeight;
       
       const pdf = new jsPDF('p', 'mm', 'a4');
       let position = 0;
 
       // Agregar la primera página
       pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
       heightLeft -= pageHeight;
 
       // Agregar páginas adicionales si el contenido es más alto que una página A4
       while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
       }
 
       pdf.save('myFile.pdf');
    });

    this.hidde.set(true)
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


}
