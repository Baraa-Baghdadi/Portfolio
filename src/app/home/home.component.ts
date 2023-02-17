import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('text') someContent!: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    let space = ''
    let text: any[] = [`Computer-Engineer`,
                       `MSc-in-Robotics-Programming`,
                       'Full-Stack-Developer',
                       'Database-Specialist'];
    let i = 1;
    let index = 0;
    let x1 = setInterval(() => {
      this.someContent.nativeElement.innerText += text[index].slice(i - 1, i)
      i++;
      if (i > text[index].length + 1) {
        index++;
        i = 0;
        this.someContent.nativeElement.innerText = '';
      }
      if (index >= text.length) {     // to stop write
        index = 0;
      }
    }, 200);
  }
  ngOnInit(): void {
  }

}
