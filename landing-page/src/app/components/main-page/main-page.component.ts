import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @Output('ExploreMe')
  ExploreMe = new EventEmitter();

  startTadaAnimation = false;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.startTadaAnimation = !this.startTadaAnimation;
    }, 3000);
  }

  onExploreMeClick() {
    this.ExploreMe.emit();
  }
}