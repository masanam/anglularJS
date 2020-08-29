import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

// Service
import { ApiService } from 'src/app/shared/service/api.service';

// env
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('errorSwal') private errorSwal;
  @ViewChild('successSwal') private successSwal;
  alertText;
  bgImg;
  apiAsset = environment.API_URL_ASSET;
  loading = true;
  send:boolean;
  titlePage;
  langTit;

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {

    // Lang
    this.apiService.langApi.subscribe( value => {
      this.langTit = value;
    });

    // Background header
    this.apiService.getDataApi('getMenuDetail/investor-contact').subscribe(response => {
      this.bgImg = response.data[0].picture;
      this.titlePage = response.data[0].title;
      this.loading = false;
    });
    
  }

  onSubmit(contactForm: NgForm){

    let body = contactForm.value;
    this.send = true;
    if(body.name && body.email && body.phone && body.country && body.title && body.content){
      this.apiService.postDataApi('saveInvestor',  body).subscribe(
        data => { this.successSwal.fire() },
        error => { this.errorSwal.fire() }
      ); 
      contactForm.resetForm();
      this.send = false;
    }
  }

}
