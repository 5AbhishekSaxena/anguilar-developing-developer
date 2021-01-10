import { Component, OnInit } from '@angular/core';
import { Courses } from './Courses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  basicCourses: Courses[] = [
    {
      heading: 'Basics Layouts',
      content:
        "This module is about the different layouts in the android. Layouts are the basic building blocks in any frontend framework. In this module, you'll learn about Constraint Layout, Linear Layout and Relative Layout.",
      thumbnail: 'assets/images/layout.png',
      codeSampleUrl:
        'https://github.com/5AbhishekSaxena/android-layout-examples',
    },
    {
      heading: 'Basic UI Widgets',
      content:
        'This module is about the different widgets provided by android. Android has a lot a widgets but in this we will discuss about most commonly used widgets like EditText, TextView, Button, CheckBox, Radio Button, Spinner (Dropdown Menu)',
      thumbnail: 'assets/images/input.png',
      codeSampleUrl: 'https://github.com/5AbhishekSaxena/ui-widget-example',
    },
    {
      heading: 'Data Persistence in Android',
      content:
        'This module is about understanding how the data is stored in android. There are multiple ways of data persistence, which are key-value pairs using Datastore and SQL database using Room',
      thumbnail: 'assets/images/storage.png',
      codeSampleUrl:
        'https://github.com/5AbhishekSaxena/data-persistence-room-example',
    },
    {
      heading: 'Networking in Android',
      content:
        'This module is about understanding how to make basic GET request to fetch data from a server using Retrofit. You can also use volley for the same.',
      thumbnail: 'assets/images/networking.png',
      codeSampleUrl:
        'https://github.com/5AbhishekSaxena/networking-retrofit-example',
    },
  ];

  advanceCourses: Courses[] = [
    {
      heading: 'Firebase',
      content:
        'This module is about understanding the firebase integration in Android. Firebase has a lot of tools like analytics, crashlytics, database, storage, authentication and many more. In this module, you will understand, authentication, Cloud Firestore and storage.',
      thumbnail: 'assets/images/input.png',
      codeSampleUrl: '',
    },
    {
      heading: 'Testing',
      content:
        'This module is about understanding the basics of testing in android which is integration testing and unit testing',
      thumbnail: 'assets/images/input.png',
      codeSampleUrl: '',
    },
    {
      heading: 'Animations',
      content:
        'This module is about understanding the basic animations using Motion Layout.',
      thumbnail: 'assets/images/input.png',
      codeSampleUrl: '',
    },
  ];

  areAdvanceCoursesVisible = false;

  constructor() {}

  ngOnInit(): void {}

  openPage(url: string): void {
    window.open(url);
  }
}
