import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit {

  alert: string = 'alert-danger';
  loading: boolean = false;
  props: Object = {
    danger: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000)
  }

}
