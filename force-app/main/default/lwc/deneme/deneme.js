import { LightningElement } from 'lwc';
var form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Formun sayfayı yenileme özelliğini devre dışı bırakır

  var firstName = form.firstName.value;
  var lastName = form.lastName.value;

  console.log("İsim: " + firstName);
  console.log("Soyisim: " + lastName);
});
export default class Deneme extends LightningElement {}