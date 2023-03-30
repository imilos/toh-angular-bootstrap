import { Component } from '@angular/core';
import { Hero } from '../hero'
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  closeResult: string = '';
  PORUKA_BRISANJE: string = '';

  // Dependency injection
  constructor(private heroService: HeroService,
    private modalService: NgbModal,
    private messageService: MessageService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(junaci => this.heroes = junaci);
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
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  open(content: any, hero: Hero) {

    this.PORUKA_BRISANJE = `Da li želite da obrišete ${hero.name}?`;

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = result;
      if (result=='obrisi') this.delete(hero);
    }, _ => {});
    
  }

}

export class CustomModalOptions {
  stringProp?: string; 
  numberProp?: number;
}
