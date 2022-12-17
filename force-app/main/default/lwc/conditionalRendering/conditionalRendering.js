import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    flag= false; //1.bunu checkbox ile yapablrm
    //öncelikli deger bu olsun
    display= false; //A oncelkli deger kabul edilmedi olsun
//C handlechange fonks olusturalm
handleChange(event){
this.display= event.target.checked; //checkboxlarda value yerine checked kullnlr
}
}