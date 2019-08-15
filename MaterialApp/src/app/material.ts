import { MatMenuModule,MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [ MatIconModule,MatMenuModule,MatButtonModule, MatCheckboxModule ],
  exports: [ MatIconModule,MatMenuModule,MatButtonModule, MatCheckboxModule ]
})

export class MaterialModule {

}