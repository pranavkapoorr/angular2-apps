import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [
    { title:'Post-1', date:'November 1, 2018', content:'This is the content. This is not the real data but is dummy data which is used for developement. Once the developement is done and is ready for production then this data can be replaced with real data.', author:'Scott' },
    { title:'Post-2', date:'November 2, 2018', content:'This is the content. This is not the real data but is dummy data which is used for developement. Once the developement is done and is ready for production then this data can be replaced with real data.', author:'Steven'},
    { title:'Post-3', date:'November 3, 2018', content:'This is the content. This is not the real data but is dummy data which is used for developement. Once the developement is done and is ready for production then this data can be replaced with real data.', author:'Chris' },
    { title:'Post-4', date:'November 4, 2018', content:'This is the content. This is not the real data but is dummy data which is used for developement. Once the developement is done and is ready for production then this data can be replaced with real data.', author:'Ralph' },
    { title:'Post-5', date:'November 5, 2018', content:'This is the content. This is not the real data but is dummy data which is used for developement. Once the developement is done and is ready for production then this data can be replaced with real data.', author:'Paul' },
    { title:'Post-6', date:'November 6, 2018', content:'This is the content. This is not the real data but is dummy data which is used for developement. Once the developement is done and is ready for production then this data can be replaced with real data.', author:'Nicholas' },
    { title:'Post-7', date:'November 7, 2018', content:'This is the content. This is not the real data but is dummy data which is used for developement. Once the developement is done and is ready for production then this data can be replaced with real data.', author:'Tesla' },
    { title:'Post-8', date:'November 8, 2018', content:'This is the content. This is not the real data but is dummy data which is used for developement. Once the developement is done and is ready for production then this data can be replaced with real data.', author:'George' },
    { title:'Post-9', date:'November 9, 2018', content:'This is the content. This is not the real data but is dummy data which is used for developement. Once the developement is done and is ready for production then this data can be replaced with real data.', author:'Lauen' },
    { title:'Post-10', date:'November 10, 2018', content:'This is the content. This is not the real data but is dummy data which is used for developement. Once the developement is done and is ready for production then this data can be replaced with real data.', author:'Donald' },
  ];

  constructor() { }

  ngOnInit() {}

}
