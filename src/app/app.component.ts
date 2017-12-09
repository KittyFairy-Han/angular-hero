import { Component} from '@angular/core';



@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./style/app.component.css'],
})
export class AppComponent  {
  title = 'Tour of Heroes';
}

/*
* <router-outlet></router-outlet>用来标记路由器该在哪里显示视图，导航在上面 ，页面在下面，所以<router-outlet></router-outlet>在末尾
 */
