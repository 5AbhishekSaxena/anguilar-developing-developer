import { Component, OnInit } from '@angular/core';
import { ContactMeItem } from './ContactMeListItem';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  contactMeItems: ContactMeItem[] = [
    {
      selectedImage: "assets/images/insta-selected.png",
      unSelectedImage: "assets/images/insta-unselected.png",
      hover: false
    },
    {
      selectedImage: "assets/images/yt-selected.png",
      unSelectedImage: "assets/images/yt-unselected.png",
      hover: false
    },
    {
      selectedImage: "assets/images/linkedin-selected.png",
      unSelectedImage: "assets/images/linkedin-unselected.png",
      hover: false
    }
  ]


  constructor() { }


  ngOnInit(): void {

  }

  onMouseEnter(): void {

  }

}

