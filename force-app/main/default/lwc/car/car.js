import Event from '@salesforce/schema/AcceptedEventRelation.Event';
import { LightningElement } from 'lwc';

export default class Car extends LightningElement {
    //B
    motorModeliDegeri;
    motor(event){
this.motorModeliDegeri=event.target.value;
    }
}