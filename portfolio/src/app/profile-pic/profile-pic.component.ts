import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent implements OnInit, OnChanges {
  imgStyle: {};
  logoStyles: {};
  @Input('height') height: string;
  @Input('width') width: string;
  @Input('borderWidth') borderWidth: string;
  constructor() { }

  ngOnInit() {
    this.logoStyles = {
      height: this.height,
      width: this.width
    };
    this.imgStyle = {
      borderWidth: this.borderWidth
    };
    // console.log(this.height);
    // console.log(this.width);
    // console.log(this.borderWidth);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
}
