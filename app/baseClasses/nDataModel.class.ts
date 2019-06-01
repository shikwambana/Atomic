import { user } from '../src/app/models/user.model';
import { details } from '../src/app/models/details.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
details: details;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.details = new details();
//CREATE NEW DM INSTANCE
    }
}