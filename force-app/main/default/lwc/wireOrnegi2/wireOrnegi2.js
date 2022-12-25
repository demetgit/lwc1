import { LightningElement} from 'lwc'; //a1 wire i sil, imperatively hale getrmek için wire i sildk
import getAccounts from '@salesforce/apex/AccountController.getAccounts'; //2-AccountController adinda bir class ve getAccounts adinda bir method olusturmaliyim

export default class WireOrnek extends LightningElement {
    filterWord = ""; //3-
    account;//a2
    error;//a2
   /* @wire(getAccounts, {filter: '$filterWord'}) accounts; //a2.yoruma düsürelm wire i
    //4- wire yapisi = method, methodun icinde yapilacak filtreleme, sonucu icine alacak variable
    //4-1- filter kelimesi Apex method'unun parametre adi olmalidir
    //4-2- filterWord'un basina dinamik hale getirmek icin $ isareti konulur.
    //5-class'imizi VsCode uzerinden olusturalim.*/

    handleInput(event) { //10
        this.filterWord = event.target.value;
    }
    //b 
    handleGetAccount(){
        getAccounts ({filter: this.filterWord}) //c - $ isareti olmayacak cunku butona basılınca 
        .then( (result) => { //d - wire in 3.bolumunu dagtyrz
            this.account = result;
            this.error = undefined ; // accountlar geldyse haa bostur yani yoktur

        } )
        .catch((error) => {
            this.error = error;
            this.accounts= undefined;
        }); //e- handleGetAccount u olusturmak icin HTML e gidelm
    }
}