import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
   
	currentUser = JSON.parse(localStorage.getItem('currentUser'));
    ngOnInit() {

    }
}