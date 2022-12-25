import { LightningElement } from 'lwc';

export default class ArrayOrnegi extends LightningElement {
    isimListesi= ['Ali', 'Veli','Ayse', 'Fatma', 'Demet']; //1


get ilkIsim(){ //3
return this.isimListesi[0];

}
get sonIsim(){ //4

return this.isimListesi[this.isimListesi.length-1];
}
}  //bunları yazdrmak icin html e git

