import { Component,  OnInit } from '@angular/core';

import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';


@Component({
  selector: 'app-questions',
  template: `
     <head> 
 
 <style> 


 .card { 
padding: 3%; 
margin: 40% auto; 
background-color: rgb(252, 252, 252); 
border-radius: 5px; 
border: 1px solid; 
text-align: center; 
max-width: 500px; 
font-family: Arial, Helvetica, sans-serif ; 
display:none 
} 

.group{ 
display: flex; 
flex-direction: column; 
margin : 10px 5px; 
} 

button { 
background-color: #4CAF50;  
border: none; 
color: white; 
padding: 15px 32px; 
text-align: center; 
text-decoration: none; 
display: inline-block; 
font-size: 16px; 
margin: 0px 5px 
} 


button:hover{ 
background-color: #b97316; 
transition-duration: 0.5s; 
} 

input { 
padding: 10px; 
width: 90%; 
font-size: 17px; 
border: 1px solid #aaaaaa; 
margin: 10px auto; 
} 


.card.active{ 
display:block; 
animation: slide 500ms ease-in-out forwards; 
} 

@keyframes slide{ 
0%{ 
transform: translateX(200%); 
opacity: 0; 
} 

200%{ 
transform: translateX(0%); 
opacity: 1; 
} 


} 


 </style> 
 
</head> 

<body> 
 <form > 
     <div class="card active" id="card1" [ngClass]="{'active': open}"> 
         <div class="group"> 
             <input type="text" name="name" id="name" placeholder="Name" value='' > 
         </div> 
         <div class="group"> 
             <input type="email" name="email" id="email" placeholder="Email" value='' > 
         </div> 
         <button type='button' id="next_btn" (click)="open = !open; open2=!open2"> Next </button> 
         <!-- <button type='button'  (click)="startNFCListener()"> Test </button> -->
     </div>  

     <div class="card" id="card2" [ngClass]="{'active': open2}"> 
         <div class="group"> 
             <input type='text' name="Username" id="Username" placeholder="Username"  > 
         </div> 
         <div class="group"> 
             <input type="password" name="password" id="password" placeholder="Password" > 
         </div> 
         <div class="group"> 
           <textarea style="width: 90%; margin-left: auto; margin-right: auto;"name="feedback" cols="45" rows="5" placeholder="Feedback here"></textarea> 
         </div> 
         <button type='button' id="previous" (click)="open2 = !open2; open = !open"> Previous </button> 
         <button id="submit"> Submit </button> 
     </div>  

 </form> 

</body> 
  `,
  styles: [
  ]
})
export class QuestionsComponent implements OnInit  {

    showspinner =false

    constructor(private nfc: NFC, private ndef: Ndef) { }

    ngOnInit(): void {
        this.startNFCListener()
    }

    
    nfcread(){
        let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
        this.nfc.readerMode(flags).subscribe(
           tag => alert(JSON.stringify(tag)),
          err => alert('Error reading tag '+ err))
    }  


    startNFCListener() {

        this.nfc.addNdefListener().subscribe(
            tag => 
            { 
                let msg= this.nfc.bytesToString(tag.tag.ndefMessage[0].payload)
                
                const inputnameElement = <HTMLInputElement> document.getElementById("name")
                inputnameElement.value= msg.split('FN:')[1].split('ORG')[0]
            
                const inputemailElement = <HTMLInputElement> document.getElementById("email")
                inputemailElement.value= msg.split('EMAIL:')[1].split('ADR:')[0]

                alert(msg)},
            err => {
                
                alert('Error reading tag '+ err)})
      }
    


  open: boolean = true;
  open2: boolean = false;

}
