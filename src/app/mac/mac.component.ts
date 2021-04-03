import {Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from '../core/services';



@Component({
  selector: 'app-detail',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.scss']
})
export class MacComponent implements OnInit {
    private filesallMac         = '';
    private filesVirtualBoxMac  = '';
    private filesVagrantMac     = '';
    constructor(
      private electronService: ElectronService,
      private _ngZone: NgZone
      ){
        this._ngZone = _ngZone;
      };
      

        installAll (){
          alert('install all');
          let electronService = new ElectronService();
          electronService.ipcRenderer.send('installAllMac', 'ALL');
          electronService.ipcRenderer.on('installAllMac-reply', this.returnfunctionAll.bind(this))
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
          let electronService = new ElectronService();
          electronService.ipcRenderer.send('installVirtualBoxMac', 'Vbox');
          electronService.ipcRenderer.on('installVirtualBoxMac-reply', this.returnfunctionVirtualBox.bind(this));
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
          let electronService = new ElectronService();
          electronService.ipcRenderer.send('installVagrantMac', 'Vagrant');
          electronService.ipcRenderer.on('installVagrantMac-reply', this.returnfunctionVagrant.bind(this));
        };
        returnfunctionVagrant (event, arg){
          console.log(arg);
          this._ngZone.run(()=> {
            this.filesVagrantMac = arg;
          });
        };


    ngOnInit(): void {}
}
