import { IForm } from "../interfaces/form.interfaces";

export const registerFormConfig: IForm = {
    formTitle: 'Registration form',
    saveBtnTitle: 'Register',
    resetBtnTitle: 'Reset',
    formControls: [
        {
            "name" : "firstName",
            "label" : "First Name",
            "value" : "",
            "placeholder" : "",
            "class" : "col-md-6",
            "type" : "text",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*First name is required"
                }
            ]
        },
        {
            "name" : "lastName",
            "label" : "Last name",
            "value" : "",
            "placeholder" : "",
            "class" : "col-md-6",
            "type" : "text",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Last name is required"
                },
                {
                    "validatorName": "minlength",
                    "minLength": 5,
                    "message": "Minimum char should be 5"
                },
            ]
        },
        {
            "name" : "email",
            "label" : "Email",
            "value" : "",
            "placeholder" : "",
            "class" : "col-md-4",
            "type" : "email",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Email is required"
                },
                {
                    "validatorName": "email",
                    "email": "email",
                    "message": "Email not Valid"
                },
            ]
        },
        {
            "name" : "mobiel",
            "label" : "Mobiel",
            "value" : "",
            "placeholder" : "",
            "class" : "col-md-4",
            "type" : "number",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Mobile Number is Required"
                },
                {
                    "validatorName": "maxlenght",
                    "maxLenght": 10,
                    "message": "Maximun 10 digit is allowed"
                },
            ]
        },
        {
            "name" : "weight",
            "label" : "Weight",
            "value" : "",
            "placeholder" : "Should be in Kgs",
            "class" : "col-md-4",
            "type" : "number",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Weight Number is Required"
                },
            ]
        },
        {
            "name" : "height",
            "label" : "Height",
            "value" : "",
            "placeholder" : "Should be in cms",
            "class" : "col-md-4",
            "type" : "number",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Height Number is Required"
                },
            ]
        },
        {
            "name" : "gender",
            "label" : "Gender",
            "class" : "col-md-4",
            "placeholder" : "",
            "radioOptions" : [
                "Male", 
                "Famale"
            ],
            "type" : "radio",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Gender is Required"
                },
            ]
        },
        {
            "name" : "trainer",
            "label" : "Required trainer",
            "class" : "col-md-4",
            "placeholder" : "",
            "radioOptions" : [
                "Yes", 
                "No"
            ],
            "type" : "radio",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Selection is Required"
                },
            ]
        },
        {
            "name" : "package",
            "label" : "Package",
            "class" : "col-md-4",
            "placeholder" : "",
            "options" : [
                {
                    "id" : 1,
                    "value" : "Mouthly"
                },
                {
                    "id" : 2,
                    "value" : "Quartely"
                },
                {
                    "id" : 3,
                    "value" : "Mouthly"
                }
            ],
            "type" : "select",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Package is Required"
                },
            ]
        },
        {
            "name" : "motivation",
            "label" : "What is important to you",
            "class" : "col-md-4",
            "placeholder" : "",
            "options" : [
                {
                    "id" : 1,
                    "value" : "Get Fit"
                },
                {
                    "id" : 2,
                    "value" : "Gain more Muscle"
                },
                {
                    "id" : 3,
                    "value" : "Weight Loss"
                }
            ],
            "type" : "select",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Selection is Required"
                },
            ]
        },
        {
            "name" : "enquiryDate",
            "label" : "Date of Enquiry",
            "class" : "col-md-4",
            "placeholder" : "",
            "type" : "date",
            "value" : "",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Gender is Required"
                },
            ]
        },
    ]
}