import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

/*
装饰器：普通类---装饰器--->组件
                  =
                  I
                  I
                元数据
装饰器赋予一个类更丰富的信息，也就是元数据
*/
@Component({
  /* css选择器
  * 指令装饰器@Directive
  * 组件指令装饰器：@Component，选择器：dom标签
  * 属性指令装饰器：@Directive，选择器：[属性]
  * 结构指令装饰器：@Directive，选择器：[属性]
  */
  selector: 'my-heroes',
  /* 模板 */
  templateUrl: './html/heroes.component.html',
  styleUrls: [ './style/heroes.component.css' ]
  /* 元数据 */
})

/*
组件类
*/
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  /*构造*/
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes_ => this.heroes = heroes_);
    /*.then()前的方法执行完后再执行then()内部的程序,这样就避免了，数据没获取到等的问题.
    * 上面的函数等同于：.then（function（heroes_）{
     return this.heroes = heroes_
     }）
     */
  }
  /* 生命钩子函数  得到英雄数组*/
  ngOnInit(): void {
    this.getHeroes();
  }

  /* 模板中事件绑定执行的函数 */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  /* 模板中事件绑定执行的函数 */
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
