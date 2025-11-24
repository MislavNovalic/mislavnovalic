import { Component } from '@angular/core';
import { Data } from '../../services/data';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  education: any[];

  constructor(private dataService: Data) {
    this.education = this.dataService.education;
  }
}
