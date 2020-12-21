import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-developingdeveloper';
}

/* how to deploy
1. git branch gh-pages
2. git checkout ghpages
3. git checkout -b gh-pages
4. git pus origin gh-pages
5. npm i -g angular-cli-ghpages
6. ng build --prod --base-href "https://5AbhishekSaxena.github.io/anguar-developing-developer"
7. nph --dir=docs/angular-developingdeveloper

.8 once done, ng build --prod
*/
