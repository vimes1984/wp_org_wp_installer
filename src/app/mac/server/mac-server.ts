var electron = require('electron');

let macServerSide = {
  testFunc: function(){
    const sudo = require('sudo-prompt');

    electron.ipcMain.on('testFunc',function(event, arg){
        console.log(arg);
        var options = {
          name: 'Electron',
          icns: '/Applications/Electron.app/Contents/Resources/Electron.icns', // (optional)
        };
        sudo.exec('echo hello', options,
          function(error, stdout, stderr) {
            if (error) throw error;
            console.log('stdout: ' + stdout);
            console.log('done!');
          });
    });
  },
  installAllMac: function(){
    electron.ipcMain.on('installAllMac', (event, arg) => {
      console.log(arg) // prints "ALL"
      const { exec } = require("child_process");

      exec("mkdir /Volumes/MiniMe/vvtest/vagrant-local", (error, stdout, stderr) => {
          if (error) {
              console.log(`error: ${error.message}`);
              return;
          }
          if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
          }
          exec("cd /Volumes/MiniMe/vvtest/vagrant-local && wget https://github.com/Varying-Vagrant-Vagrants/VVV/archive/refs/heads/stable.zip",function(error, stdout, stderr){
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
          console.log(`stdout: ${stdout}`);
            let result = stdout;
            exec("unzip /Volumes/MiniMe/vvtest/vagrant-local/stable.zip",function(error, stdout, stderr){
              console.log(`stdout: ${stdout}`);
              exec("cd /Volumes/MiniMe/vvtest/vagrant-local/VVV-stable  && vagrant status && vagrant plugin install vagrant-goodhosts && vagrant plugin update && vagrant up --provision",function(error, stdout, stderr){
                console.log(`stdout: ${stdout}`);
              });
            });

          event.reply('installAllMac-reply', result); 
          });
      });
    });
  },
  installVirtualBoxMac: function(){
    electron.ipcMain.on('installVirtualBoxMac', (event, arg) => {
      console.log(arg) // prints "Vbox"
      const { exec } = require("child_process");

      exec("ls -la", (error, stdout, stderr) => {
          if (error) {
              console.log(`error: ${error.message}`);
              return;
          }
          if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
          }
          console.log(`stdout: ${stdout}`);
          let result = stdout;
          event.reply('installVirtualBoxMac-reply', result);
        });
    });
  },
  installVagrantMac: function(){
    electron.ipcMain.on('installVagrantMac', (event, arg) => {
      console.log(arg) // prints "Vagrant"
      const { exec } = require("child_process");

      exec("ls -la", (error, stdout, stderr) => {
          if (error) {
              console.log(`error: ${error.message}`);
              return;
          }
          if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
          }
          console.log(`stdout: ${stdout}`);
          let result = stdout;
          event.reply('installVagrantMac-reply', result);
        });
    });
  },
  installVVVMac: function(){
    electron.ipcMain.on('installVVVMac', (event, arg) => {
      console.log(arg) // prints "VVV"
      const { exec } = require("child_process");

      exec("cd ~/ && ls -la", (error, stdout, stderr) => {
          if (error) {
              console.log(`error: ${error.message}`);
              return;
          }
          if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
          }
          console.log(`stdout: ${stdout}`);
          let result = stdout;
          event.reply('installVVVMac-reply', result);
        });
    });
  }
};
macServerSide.installAllMac();
macServerSide.installVagrantMac();
macServerSide.installVirtualBoxMac();
macServerSide.testFunc();
macServerSide.installVVVMac();