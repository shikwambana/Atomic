/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSnackbarService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { details } from '../../models/details.model'
import { registerService } from '../../services/register/register.service'
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from "@angular/forms";
import { Router } from '@angular/router'
/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

@Component({
    selector: 'bh-register',
    templateUrl: './register.template.html'
})

export class registerComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    info : FormGroup;

    details : details;
    attend = ['Individual','Group']
    pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

    constructor(private bdms: NDataModelService, 
    private regService : registerService, 
    private fb: FormBuilder,
    private alertService: NSnackbarService,
    private router : Router) {
        super();
        this.mm = new ModelMethods(bdms);
        this.details = new details();
    }

    ngOnInit() {
        // this.details.attendance = "Individual"

        this.info =this.fb.group({
            fullName:  ['', Validators.required],
            email:  ['', Validators.compose([
                Validators.required, 
                Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')])],
            idea:  [''],
            reason:  [''],
            problem:  [''],
            attendance:  ['Individual', Validators.required],
        })
    }

    get data() {
        return this.info.controls;
    }

    submit(){
        this.details = this.info.value;

        if(this.info.valid){
            this.regService.register(this.details);   
            this.alertService.openSnackBar('You have being registered for the Hackathon');
            this.router.navigate(['home']);

        }else {
            this.makeInvalid();
            this.alertService.openSnackBar('Your form is invalid');    
            return        
        }
    }

    makeInvalid(){
        console.log('errorrr')
        var element = document.getElementById("info");
        element.classList.add("inputInvalid");
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete (dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
