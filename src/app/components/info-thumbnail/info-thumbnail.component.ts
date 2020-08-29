import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-thumbnail',
  templateUrl: './info-thumbnail.component.html',
  styleUrls: ['./info-thumbnail.component.scss'],
})
export class InfoThumbnailComponent implements OnInit {
  @Input() dataInfo:any;
  @Input() link:any;
  @Input() files = false;

  constructor() { }

  ngOnInit(): void {
  }

}
