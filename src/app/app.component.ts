// import { Component } from '@angular/core';

// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })

// // defines properties and methods needed by our view
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      <pm-products></pm-products>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'Acme product Management';
}
