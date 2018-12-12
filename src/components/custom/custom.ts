import { Component,Input } from '@angular/core';

/**
 * Generated class for the CustomComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom',
  templateUrl: 'custom.html'
})
export class CustomComponent {
  @Input('name') name:string;
  @Input('title') title:string;
  @Input('userimage') userImage:string;
  @Input('content') Content:string;

  constructor() {
    
  }

ngOnInit(){

}


}
