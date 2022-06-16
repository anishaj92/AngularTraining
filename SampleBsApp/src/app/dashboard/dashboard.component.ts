import { Component, OnInit } from '@angular/core';
import { Hero } from '../heros/hero';
import { HeroService } from '../hero.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heros: Hero[] = [];

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros() {
    // const heroes = this.heroService.getHeroes();
    // const takeFive = heroes.pipe(take(5));
    // takeFive.subscribe(heros => this.heros = heros);

    this.heroService.getHeroes()
    .subscribe(heroes => this.heros = heroes.slice(1, 5));
  }

}
