import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { Data } from '../../services/data';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {
  personalInfo: any;
  socialLinks: any[];
  fiverrWidgetScript: string;

  constructor(private dataService: Data, private renderer: Renderer2) {
    this.personalInfo = this.dataService.personalInfo;
    this.socialLinks = this.dataService.socialLinks;
    this.fiverrWidgetScript = this.dataService.fiverrWidgetScript;
  }

  ngAfterViewInit(): void {
    // Load Fiverr widget script
    const script = this.renderer.createElement('script');
    script.id = 'fiverr-seller-widget-script-0f7deb1a-d933-4c84-9fab-e0a53c794231';
    script.src = this.fiverrWidgetScript;
    script.setAttribute('data-config', '{"category_name":"Graphics \\u0026 Design"}');
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
}
