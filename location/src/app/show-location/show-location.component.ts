import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({

  selector: 'app-show-location',

  templateUrl: './show-location.component.html',

  styleUrls: ['./show-location.component.css']

})

export class ShowLocationComponent implements OnInit {

  currentUrl: string = '';


  constructor(private router: Router) {}


  ngOnInit(): void {

    this.currentUrl = window.location.href;

  }

}