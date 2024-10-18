import { Component, OnInit } from '@angular/core';
import { PokemonInterface } from '../../_interfaces/pokemon.interface';
import { PokemonService } from '../../_services/pokemon.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-pokemon-view',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-view.component.html',
  styleUrl: './pokemon-view.component.css'
})
export class PokemonViewComponent implements OnInit {
  pokemonOne: PokemonInterface | undefined;

  constructor(
    private pokemonService: PokemonService,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonOne("http://vps204.tyrolium.fr/apiPokemon/index.php").subscribe((pokemonResponse: PokemonInterface) => {
        this.pokemonOne = pokemonResponse;
      }
    );
  }

}
