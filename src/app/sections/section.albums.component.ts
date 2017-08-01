import { Component } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './section.albums.component.html'
})

export class SectionAlbumsComponent {  
  public albumList: any = [
    {
      imgUrl: 'assets/img/covers/originals/jw-album-11.jpg'
    },
    {
      imgUrl: 'assets/img/covers/originals/jw-album-10.jpg'
    },
    {
      imgUrl: 'assets/img/covers/originals/jw-album-9.jpg'
    },
    {
      imgUrl: 'assets/img/covers/originals/jw-album-8.jpg'
    },
    {
      imgUrl: 'assets/img/covers/originals/jw-album-7.jpg'
    },
    {
      imgUrl: 'assets/img/covers/originals/jw-album-6.jpg'
    },
    {
      imgUrl: 'assets/img/covers/originals/jw-album-5.jpg'
    },
    {
      imgUrl: 'assets/img/covers/originals/jw-album-4.jpg'
    },
    {
      imgUrl: 'assets/img/covers/originals/jw-album-3.jpg'
    },
    {
      imgUrl: 'assets/img/covers/originals/jw-album-2.jpg'
    },
    {
      imgUrl: 'assets/img/covers/originals/jw-album-1.jpg'
    },
  ];   
}
