import { MatMenuModule,MatButtonModule, MatCheckboxModule, MatIconModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [ MatCardModule,MatIconModule,MatMenuModule,MatButtonModule, MatCheckboxModule ],
  exports: [ MatCardModule,MatIconModule,MatMenuModule,MatButtonModule, MatCheckboxModule ]
})

export class MaterialModule {

}