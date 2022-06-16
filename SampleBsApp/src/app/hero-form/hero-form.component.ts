import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heros/hero';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.sass']
})
export class HeroFormComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  model: Hero = {
    id: 0,
    name: '',
    power: ''
  };

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  submitted = false;

  reset(): void{
    this.submitted = false;
    this.model = {
      id: 0,
      name: '',
      power: ''
    };
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.model.id === 0) {
      const hero = {
        name: this.model.name,
        power: this.model.power
      } as Hero;
      this.heroService.addHero(hero).subscribe(hero => {
        this.model = hero;
      });
    }
    else {
      const hero = {
        id: this.model.id,
        name: this.model.name,
        power: this.model.power
      } as Hero;
      this.heroService.updateHero(hero).subscribe();
    }
  }

  ngOnInit(): void {

  }

}
