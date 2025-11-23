import { Injectable } from '@angular/core';
import { Config } from '../others/config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  config = new Config();

  constructor(
    private router: Router,
  ) {
  }

  // custom function to navigate to any page by passing the path
  goTo(path: string, param1?: string, param2?: string, data?: any) {
    let routerArray: any = [];
    if (param2)
      routerArray = [path, param1, param2];
    else if (param1)
      routerArray = [path, param1];
    else
      routerArray = [path];
    this.router.navigate(routerArray, data);
  }

  // function to find the device type from user agent
  getDeviceFromUserAgent(): 'mobile' | 'tablet' | 'desktop' {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile|iphone|ipod|android.*mobile/.test(userAgent)) return 'mobile';
    if (/ipad|tablet|android(?!.*mobile)/.test(userAgent)) return 'tablet';
    return 'desktop';
  }

  // function to block the scrolling
  toggleScroll(block: boolean) {
    document.body.style.overflow = block ? 'hidden' : '';
  }

}
