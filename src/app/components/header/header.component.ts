import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
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
    public helperService: HelperService,
    private router: Router
  ) {
    console.log(this.router.url);
    this.getActiveMenuItem();

  }

  // function to find the active menu item and highlight it
  getActiveMenuItem() {
    // deactivate all menu item
    this.menuItems.forEach((menu: any) => {
      menu.active = false;
    })
    const activeMenuItem = this.menuItems.find((menu: any) => menu.path === this.router.url.split('/')[1]);
    if (activeMenuItem)
      activeMenuItem.active = true;
    console.log(this.menuItems);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY;
  }

  goTo(path: string) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.helperService.goTo(path);
  }

  toggleMenu() {
    this.show = !this.show;
    this.helperService.toggleScroll(this.show);
  }

  onClose() {
    this.show = false;
  }
}
