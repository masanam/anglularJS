import { Component, OnInit} from '@angular/core';
import * as AOS from 'aos';  
import { Subscription } from 'rxjs';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  ActivatedRoute
} from '@angular/router'
import { filter, map, mergeMap } from 'rxjs/operators';

// declare var $: any;

// Service
import { SeoService } from 'src/app/shared/service/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  paramsSubscription: Subscription;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private _seoService: SeoService
  ) {}

  ngOnInit(){

    setTimeout(()=>{ 
      AOS.init({
        // disable: 'mobile',
        // offset: 200,
        once: true
      });
    }, 1000);

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
     )
     .subscribe((event) => {
       //SEO
       this._seoService.updateMeta(
         'Kino | ' + event['title'],
          event['ogUrl'], 
          event['title'] + event['description'],
          event['keyword']
        );
     });

  } 
}
