import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.scss']
})
export class TableStructureComponent implements OnInit {
  @Input() dataStructure:any;
  @Input() category:string;

  constructor() { }

  ngOnInit(): void {
  }

}
