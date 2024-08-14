export interface IForm {
    formTitle: string,
    saveBtnTitle: string
    resetBtnTitle: string ,  
    formControls: IFormControl[]
}

export interface IFormControl {
    name: string,
    label: string,
    value?: string,
    options?: IOptions[],
    radioOptions?: string[]
    placeholder?: string,
    class: string,
    type: string,
    validators: IValidators[],
}

export interface IValidators {
    validatorName: string,
    message?: string
    required?: boolean,
    pattern?: string | undefined,
    minLength?: number
    maxLenght?: number,
    email?: string
}

export interface IOptions {
    id?: number,
    value?: string,
}