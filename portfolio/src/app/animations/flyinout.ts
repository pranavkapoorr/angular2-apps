import { animate, state, style, transition, trigger, group } from '@angular/animations';

export const FLY_IN_OUT_ANIMATION =
  trigger('flyInOutTrigger', [
    
    transition(':enter', [
      style({
	        transform: 'scale(0)',
      }),

        animate('0.5s 0.1s ease-in', style({
            transform: 'scale(1)',
        })),
       
    ]),
    transition(':leave', [
      
        animate('0.5s ease-out', style({
            transform: 'scale(0)'
        })),
        
      
    ])
  ]); 