import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';

/* bootstrap */
import { ModalDirective } from 'ngx-bootstrap/modal';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-work-kino',
  templateUrl: './work-kino.component.html',
  styleUrls: ['./work-kino.component.scss']
})
export class WorkKinoComponent implements OnInit, AfterViewInit {
  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isModalSymbol = false;
  isModalDanger = false;
  symbolDetail:string;
  symbolIcon:string;
  symbolTitle:string;
  loading = true;
  bgImg;
  lang;
  dataUnique;
  dataDevelop;
  apiAsset = environment.API_URL_ASSET;

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
    // Background header
    this.apiService.getDataApi('getMenuDetail/work-at-kino').subscribe(response => {
      this.bgImg = response.data[0].picture;
    });

    // Content
    this.apiService.getDataApi('getUniqueWorkingEnvironment').subscribe(response => {
      this.dataUnique = response.data[0];
      this.loading = false;
    });

    this.apiService.getDataApi('getWorkatKino').subscribe(response => {
      this.dataDevelop = response.data[0];
    });

    
    // Link
    this.apiService.langApi.subscribe( value => {
      this.lang = value;
    });

  }

  showModal(symbol): void {
    this.isModalSymbol = true;
    this.symbolTitle = symbol.title;
    this.symbolDetail = symbol.content;
    this.symbolIcon = symbol.picture;
  }
 
  hideModal(): void {
    this.autoShownModal.hide();
  }
 
  onHidden(): void {
    this.isModalSymbol = false;
    this.isModalDanger = false;
  }

  ngAfterViewInit() {
    setTimeout(()=>{ 
      this.isModalDanger = true;
    }, 1000);
  }

}
