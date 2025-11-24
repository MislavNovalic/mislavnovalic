import { Component } from '@angular/core';
import { Data } from '../../services/data';

@Component({
  selector: 'app-work',
  standalone: false,
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  work: any;

  constructor(private dataService: Data) {
    this.work = this.dataService.work;
  }
}
