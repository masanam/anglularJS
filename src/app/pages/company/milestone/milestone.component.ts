import { Component, OnInit, ViewEncapsulation, Renderer2, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class MilestoneComponent implements OnInit {

  year:string;
  detail: any;
  number = 65;
  titlePage;
  dataMilestone;
  loading = true;
  dataAbout;
  bgImg;
  apiAsset = environment.API_URL_ASSET;

  customOptions1: OwlOptions = {
    loop: false,
    autoWidth:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [ '<i class="icon ion-ios-arrow-back"></i>', '<i class="icon ion-ios-arrow-forward"></i>' ],
    responsive: {
      0: {
        items: 5
      },
      400: {
        items: 8
      },
      740: {
        items: 12
      },
      940: {
        items: 12
      }
    },
    nav: true
  }

  constructor(
    private renderer: Renderer2, 
    private elem: ElementRef,
    private apiService: ApiService
  ) { }
  
  ngOnInit(): void {

    // Background header
    this.apiService.getDataApi('getMenuDetail/milestone').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
    });

    // Content
    this.apiService.getDataApi('getMilestone').subscribe(response => {
      this.dataMilestone = response.data;
      this.year = response.data[0].year;
      this.detail = response.data[0].description;
      this.loading = false;
    });
    
  }

  takeDetail(detail, ev){
    this.year = detail.year;
    this.detail = detail.description;
    const target = ev.currentTarget;
    const parent = this.renderer.parentNode(target);
    const elements = this.elem.nativeElement.querySelectorAll('.bullet-year');
    if(parent.classList.contains('active')){
      this.renderer.removeClass(parent, 'active');
    }else{
      let i;
      for(i=0;i<elements.length;i++) {
        this.renderer.removeClass(elements[i], 'active');
      }
      this.renderer.addClass(parent, 'active');
    }
  }

}
