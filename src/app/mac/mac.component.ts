import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.scss']
})
export class MacComponent implements OnInit {

  constructor() { }
  
  installAll(){
    alert('install all');
  }
  
  installVirtualBox(){
    alert('install Virtual box');
  } 

  installVagrant(){
    alert('Install Vagrant')
  }
  ngOnInit(): void { }

}
