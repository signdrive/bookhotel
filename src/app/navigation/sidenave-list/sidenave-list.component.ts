import { Component, OnInit , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenave-list',
  templateUrl: './sidenave-list.component.html',
  styleUrls: ['./sidenave-list.component.css']
})
export class SidenaveListComponent implements OnInit {
@Output() closeSideNavigation = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onToggleClose() {
    this.closeSideNavigation.emit();
  }
}
