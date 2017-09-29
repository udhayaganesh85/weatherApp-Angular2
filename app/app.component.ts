import {AppExtraComponent } from './app.extracomponent';
import { Component,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TimePickerComponent} from "angular2-timepicker/timepicker-component";
import { FormGroup, FormControl, FormBuilder, Validator, ReactiveFormsModule } from '@angular/forms';
import { AppServices } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/landingPage.html',
  providers: [AppServices],
  styles : [` h1, .myContent { color:gray;}`]
})
export class AppComponent  implements OnInit{ 
  intro ='Enter your details';
   astroDetails='';//[];
  //astroInfo = [];
  getAstroInfo: string;
  constructor(private _appServices: AppServices){
 this.astroInfo =this._appServices.readLocation(); 
    //  let jsonData = JSON.parse(this.astroInfo);  
   
    }
    
  onAstroClick(){
  console.log("button Clicked")
	 this._appServices.getAstroInfo().subscribe(resp =>this.astroInfo = JSON.stringify(resp) );

	 /*this._appServices.getAstroInfo()
	 .subscribe(
		 astroInfo =>this.getAstroInfo = JSON.stringify(astroInfo),
		 () => console.log("Finished")
	 );*/
console.log("button Click completed")
  }  
    
 ngOnInit(){
	 //this._appServices.getAstroInfo().subscribe(resp =>this.astroInfo = resp );

	 this._appServices.getAstroInfo()
	 .subscribe(
		 astroInfo =>this.getAstroInfo = JSON.stringify(astroInfo),
		 () => console.log("Finished")
	 );
	 
 /*
 ,
		 error => alert(error),
		 () =console.log("Finished")
		 */
 
 
 
 //this.astroInfo = JSON.parse(this.astroInfo);
   //console.log('-@@--->'+this.astroInfo);
   
  //astroInfo = '{"id":1},{"id":2}';
  }
   private handleError(error: any) {
    console.log('Yup an error occurred', error);
    return Observable.throw(error.message || error);
}
  userForm = new  FormGroup({
    name: new FormControl(),
    city: new FormControl(),
 dob: new FormControl(),
 tob: new FormControl()
  });
onSubmit()
{
console.log(this.userForm.value);
}
} 