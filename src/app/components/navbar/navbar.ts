import { Component } from '@angular/core';
import { Data } from '../../services/data';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  profileImage: string;

  constructor(private dataService: Data) {
    this.profileImage = this.dataService.personalInfo.profileImage;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
