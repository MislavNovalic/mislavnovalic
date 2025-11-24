import { Component } from '@angular/core';
import { Data } from '../../services/data';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills: any;

  constructor(private dataService: Data) {
    this.skills = this.dataService.skills;
  }
}
