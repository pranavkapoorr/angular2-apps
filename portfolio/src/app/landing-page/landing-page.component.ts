import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { FLY_IN_OUT_ANIMATION } from '../animations/flyinout';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    FLY_IN_OUT_ANIMATION
  ]
})

export class LandingPageComponent {
  isOpen = true;
   
  toggle() {
    this.isOpen = !this.isOpen;
  }

}
