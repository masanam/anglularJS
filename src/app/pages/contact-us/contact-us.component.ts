import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  @ViewChild('errorSwal') private errorSwal;
  @ViewChild('successSwal') private successSwal;
  alertText;
  langTit;
  send:boolean;
  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
    // Lang
    this.apiService.langApi.subscribe( value => {
      this.langTit = value;
    });
  }

  onSubmit(contactForm: NgForm){

    let body = contactForm.value;
    
    this.send = true;
    
    if(body.name && body.email && body.phone && body.country && body.title && body.content){
      this.apiService.postDataApi('saveContact',  body).subscribe(
        data => { this.successSwal.fire() },
        error => { this.errorSwal.fire() }
      ); 
      contactForm.resetForm();
      this.send = false;
    }

  }

}
