import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spa-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() title = 'Home';

  constructor() { }

  ngOnInit(): void {
  }

}
