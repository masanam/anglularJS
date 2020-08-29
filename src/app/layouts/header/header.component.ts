import { Component, OnInit, Renderer2, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @ViewChild('langen') el_en:ElementRef;
  @ViewChild('langid') el_id:ElementRef;
  openSearch = false;
  selectedItem: string;
  openListMenu= false;
  headerSubscription: Subscription;
  menuBrand: number = 1;
  dataBrandMenu;
  lang;
  search;

  constructor(
    private renderer: Renderer2, 
    private elem: ElementRef, 
    private apiService: ApiService, 
    private router : Router,
    private activedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Detect current route and change language
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let url = val.url;
        let lg = url.substr(1,2);
        if(lg == 'en' || lg == 'id'){
          this.apiService.giveLang(lg);
          this.lang = lg;
          // Check browser support Local Storage
          if (typeof(Storage) !== "undefined") {
            // Store
            window.localStorage.setItem("language", lg);
          } else {
            window.localStorage.setItem("language", "id");
          }
          if(lg == 'en'){
            this.el_en.nativeElement.style.color = '#FAA616';
            this.el_id.nativeElement.style.color = 'white';
          }else if(lg == 'id'){
            this.el_id.nativeElement.style.color = '#FAA616';
            this.el_en.nativeElement.style.color = 'white';
          };
          this.apiService.getDataApi('getTypes').subscribe(response => {
            this.dataBrandMenu = response.data;
          });
        }else if (lg == ''){
          let storageUrl = window.localStorage.getItem("language");
          if(storageUrl != null){
            window.location.href = '/'+storageUrl;
          }else{
            window.location.href = '/id';
          }
        }else {
          this.router.navigate(['/id/not-found']);
        }
      }
    });
  }

  onOpenSearch(ev){
    ev.stopPropagation();
    this.openSearch =  true;
  }

  onCloseSearch(){
    this.openSearch = false;
  }

  onPrevent(ev){
    ev.stopPropagation();
  }

  onSearch(ev){
    if (ev.keyCode === 13 || ev.type === 'click' ) {
      this.router.navigate([this.lang+'/search'], { queryParams: { key: this.search } });
      this.closeMenu();
    }
  }

  onOpenMenuMobile(){
    this.openListMenu = !this.openListMenu;
    if( this.openListMenu === true ){
      this.renderer.addClass(document.body, 'overflow-hidden');
    }else{
      this.renderer.removeClass(document.body, 'overflow-hidden');
    }
  }

  changeLanguage(param){
    this.apiService.giveLang(param);
    if (!this.router.url.includes('/'+param)) {
      let url = this.router.url.substring(4);
      url = '/'+param+'/'+url;
      window.location.href = url;
    }
  }

  closeMenu(){
    this.openListMenu = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
    const elements = this.elem.nativeElement.querySelectorAll('.w-title.parent');
    let i;
    for(i=0;i<elements.length;i++) {
      this.renderer.removeClass(elements[i], 'active-m');
      this.renderer.removeClass(elements[i], 'active-d');
    }
  }

  listMenuMobile(ev){
    const target = ev.currentTarget;
    const parent = this.renderer.parentNode(target);
    const elements = this.elem.nativeElement.querySelectorAll('.w-title.parent');
    if(parent.classList.contains('active-m')){
      this.renderer.removeClass(parent, 'active-m');
    }else{
      let i;
      for(i=0;i<elements.length;i++) {
        this.renderer.removeClass(elements[i], 'active-m');
      }
      this.renderer.addClass(parent, 'active-m');
    }
  }

  openDropdownD(ev){
    const target = ev.currentTarget;
    this.renderer.addClass(target, 'active-d');
  }

  closeDropdownD(ev){
    const target = ev.currentTarget;
    this.renderer.removeClass(target, 'active-d');
  }

  ngOnDestroy() {
    // this.headerSubscription.unsubscribe();
  }

}
