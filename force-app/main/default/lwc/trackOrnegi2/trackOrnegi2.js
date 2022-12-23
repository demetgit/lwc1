import { LightningElement, track } from 'lwc';

export default class TrackOrnegi2 extends LightningElement {
    //2
    degerler= '';//2.1 girilen sayiyi yerlestrecegmz bos alan actk,
    @track listValues= [];//2.2 girilen sayilari aktaracagmz alan actk.unutma:track leri unutma(reactive ypmk için)

    //4-onchangeHandler i olusturalm
    onchangeHandler(event){
        this.degerler= event.target.value;
    }
    //5-ekleHandler diiziye ekleme,sayi girilip butona tklannca listeye girilen sayiyi push edecek

ekleHandler(){  //parantez içine elma da yazlblr
    this.listValues.push(this.degerler);
}
}