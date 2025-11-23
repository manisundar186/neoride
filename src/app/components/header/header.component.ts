import { Component, HostListener } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  config = this.helperService.config;
  menuItems = this.config.headerMenuOptions;
  scrollPosition = 0;
  deviceType = this.helperService.getDeviceFromUserAgent();
  show = false;

  constructor(
    public helperService: HelperService
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY;
  }

  toggleMenu() {
    this.show = !this.show;
    this.helperService.toggleScroll(this.show);
  }

  onClose() {
    this.show = false;
  }
}
