import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../core/services';


@Component({
  selector: 'app-detail',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.scss']
})
export class MacComponent implements OnInit {

  constructor(
    private electronService: ElectronService
    ){
      this.electronService.ipcRenderer.send('test', 'test');
    }

   installfunctions = {
    installAll: function(){
      alert('install all');
      let electronService = new ElectronService();
      electronService.ipcRenderer.send('installAllMac', 'ALL');
    },
    installVirtualBox: function(){
      alert('install Virtual box');
      let electronService = new ElectronService();
      electronService.ipcRenderer.send('installVirtualBoxMac', 'Vbox');
    },
    installVagrant: function(){
      alert('Install Vagrant');
      let electronService = new ElectronService();
      electronService.ipcRenderer.send('installVagrantMac', 'Vagrant');
    }
  };
  ngOnInit(): void { }
}
