module.exports = function () { 
  var electron = require('electron');
  let macServerSide = {
      installAllMac: function(){
        electron.ipcMain.on('installAllMac', (event, arg) => {
          console.log(arg) // prints "ALL"
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
            event.reply('installAllMac-reply', result);
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
      }
    };
    macServerSide.installAllMac();
    macServerSide.installVagrantMac();
    macServerSide.installVirtualBoxMac();  
};
