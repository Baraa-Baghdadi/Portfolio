import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  constructor() {
  }
  ngOnInit(): void {
    AOS.init();
  }
  ngAfterViewInit(): void {
  }
}

