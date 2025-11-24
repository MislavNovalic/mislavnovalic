import { Component } from '@angular/core';
import { Data } from '../../services/data';

@Component({
  selector: 'app-interests',
  standalone: false,
  templateUrl: './interests.html',
  styleUrl: './interests.css',
})
export class Interests {
  interests: string[];

  constructor(private dataService: Data) {
    this.interests = this.dataService.interests;
  }
}
