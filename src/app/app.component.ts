import { Component } from '@angular/core';
import { TitansService} from './titans.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sphinx-teq';
  titans = null;
  constructor(private titan: TitansService){
    this.titans = titan.getAllTitan()
  }
  
  
}
