import { Component, OnInit } from '@angular/core';

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
    },
    {
      heading: 'Basic UI Widgets',
      content:
        'This module is about the different widgets provided by android. Android has a lot a widgets but in this we will discuss about most commonly used widgets like EditText, TextView, Button, CheckBox, Radio Button, Spinner (Dropdown Menu)',
    },
    {
      heading: 'Data Storage in Android',
      content:
        'This module is about understanding how the data is stored in android. There are multiple ways of data persistence, which are key-value pairs using Datastore and SQL database using Room',
    },
    {
      heading: 'Networking in Android',
      content:
        'This module is about understanding how to make basic GET request to fetch data from a server using Retrofit. You can also use volley for the same.',
    },
  ];

  advanceCourses: Courses[] = [
    {
      heading: 'Firebase',
      content:
        'This module is about understanding the firebase integration in Android. Firebase has a lot of tools like analytics, crashlytics, database, storage, authentication and many more. In this module, you will understand, authentication, Cloud Firestore and storage.',
    },
    {
      heading: 'Testing',
      content:
        'This module is about understanding the basics of testing in android which is integration testing and unit testing',
    },
    {
      heading: 'Animations',
      content:
        'This module is about understanding the basic animations using Motion Layout.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
