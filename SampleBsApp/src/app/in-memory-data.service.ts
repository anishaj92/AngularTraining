import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heros/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 1, name: 'Dr. Nice', power: 'Really Smart' },
    { id: 2, name: 'Bombasto', power: 'Weather Changer' },
    { id: 3, name: 'Celeritas', power: 'Super Hot' },
    { id: 4, name: 'Magneta', power: 'Super Hot' },
    { id: 5, name: 'RubberMan', power: 'Really Smart' },
    { id: 6, name: 'Dynama', power: 'Super Hot' },
    { id: 7, name: 'Dr. IQ', power: 'Weather Changer' },
    { id: 8, name: 'Magma', power: 'Really Smart' },
    { id: 9, name: 'Tornado', power: 'Really Smart' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
