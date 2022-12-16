import { LightningElement } from 'lwc';

export default class NameUpper extends LightningElement {

    fName="Jason";
    lName="stat";
    get fullUpper(){ //get fonksiyonu
return this.fName.toUpperCase() + ' '+ this.lName.toUpperCase();
    }
}