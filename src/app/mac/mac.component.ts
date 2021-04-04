import {Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from '../core/services';



@Component({
  selector: 'app-detail',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.scss']
})
export class MacComponent implements OnInit {
    filesallMac         = '';
    filesVirtualBoxMac  = '';
    filesVagrantMac     = '';
    constructor(
      private electronService: ElectronService,
      private _ngZone: NgZone
      ){
        this._ngZone = _ngZone;
      };
      
        testfunc (){
          alert('test');
          this.electronService.ipcRenderer.send('testFunc', 'test');
        };
        installAll (){
          alert('install all');
          this.electronService.ipcRenderer.send('installAllMac', 'ALL');
          this.electronService.ipcRenderer.on('installAllMac-reply', this.returnfunctionAll.bind(this))
        };
        returnfunctionAll (event, arg){
          console.log(arg);
            this._ngZone.run(()=> {
              this.filesallMac = arg;
            });
         };
         //Virtual box xall and return 
        installVirtualBox(){
          alert('install Virtual box');
          this.electronService.ipcRenderer.send('installVirtualBoxMac', 'Vbox');
          this.electronService.ipcRenderer.on('installVirtualBoxMac-reply', this.returnfunctionVirtualBox.bind(this));
        };
        returnfunctionVirtualBox(event, arg){
            console.log(arg);
              this._ngZone.run(()=> {
                this.filesVirtualBoxMac = arg;
              });
        };
        //vagrant call and return
        installVagrant(){
          alert('Install Vagrant');
          this.electronService.ipcRenderer.send('installVagrantMac', 'Vagrant');
          this.electronService.ipcRenderer.on('installVagrantMac-reply', this.returnfunctionVagrant.bind(this));
        };
        returnfunctionVagrant (event, arg){
          console.log(arg);
          this._ngZone.run(()=> {
            this.filesVagrantMac = arg;
          });
        };


    ngOnInit(): void {}
}