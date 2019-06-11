/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit  } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

@Component({
    selector: 'bh-criteria',
    templateUrl: './criteria.template.html'
})

export class criteriaComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    @ViewChildren("card") card: QueryList<ElementRef>;

    constructor(private bdms: NDataModelService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    info = [
        {
            "number" : "01.",
            "title" : "Idea Submission",
            "content" : [
                "Submission Date - 17 June'19",
                "There are no set formats for the submission of ideas. Please submit it in a format that is most optimal for your idea (PowerPoint Presentation, video, etc.)",
                "Email Id for Submission of Presentaions [To be Submitted in a form]"
            ]
        },
        {
            "number" : "02.",
            "title" : "Idea Presentation Schedule",
            "content" : [
                "Who: The Idea document",
                "How: 20 minutes for each team (10 mins presentaion + 10 mins Q&A)",
                "When: 19 June'19",
                "Where: Neutrinos Office"
            ]
        },
        {
            "number" : "03.",
            "title" : "Announcing the results of document review",
            "content" : [
                "Announcing the selection of the final Contenstants",
                "21 June'19"
            ]
        }
        
    ]

    forward = true;
    back = false;


    ngOnInit() {

    }

    slide() {    
        this.card.toArray()[2].nativeElement.scrollIntoView({behavior: 'smooth'});
        this.forward = false;
        this.back = true;
    }

    slideback() {
        this.card.toArray()[0].nativeElement.scrollIntoView({behavior: 'smooth'});
        this.forward = true;
        this.back = false;
    }

    scroll(){
        this.card.last.nativeElement.focus();
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
