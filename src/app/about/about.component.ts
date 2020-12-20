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
      hover: false,
      url: 'https://www.instagram.com/developing.developer/'
    },
    {
      selectedImage: "assets/images/yt-selected.png",
      unSelectedImage: "assets/images/yt-unselected.png",
      hover: false,
      url: 'https://www.youtube.com/channel/UC8Gl9fv7A1ipE3EaOMzxCSg'
    },
    {
      selectedImage: "assets/images/linkedin-selected.png",
      unSelectedImage: "assets/images/linkedin-unselected.png",
      hover: false,
      url: 'https://www.linkedin.com/in/abhishek-s-8809bb11a/'
    }
  ]


  constructor() { }


  ngOnInit(): void {

  }

  onNavigate(url: string): void {
    window.open(url, '_blank');
  }

}

