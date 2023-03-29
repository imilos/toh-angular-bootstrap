import { Component } from '@angular/core';
import { Hero } from '../hero'
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'], 
})

export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  // Dependency injection
  constructor(private heroService: HeroService, 
    private messageService: MessageService) {}

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(junaci=>this.heroes = junaci);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero) {
    this.heroes = this.heroes.filter(h => h!== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  ngOnInit() : void {
    this.getHeroes();
  }

}
