const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express')
const fs = require('fs');
const sudo = require('sudo-prompt');
const url = require('url');

const expressApp = express();

expressApp.post('/execute-script', (req, res) => {
  const scriptPath = path.join(__dirname, './scripts/level-1.sh');

  fs.access(scriptPath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log("Could not access the script")
      return res.status(500).send({ success: false, message: 'Error accessing the script file' });
    }

    const options = {
      name: 'Electron',
    };

    sudo.exec(`chmod +x ${scriptPath} && ${scriptPath}`, options, (error, stdout, stderr) => {
      if (error) {
        console.log("Some Error Occurred", error)
        return res.status(500).send({ success: false, message: 'Error executing the script' });
      }

      console.log("Successfully hit the api")
      return res.status(200).send({ success: true, message: 'Script executed successfully', output: stdout });
    });
  });
});

expressApp.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 730,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const indexPath = url.format({
    pathname: path.join(__dirname, './index.html'),
    protocol: 'file:',
    slashes: true,
  });

  mainWindow.loadURL(indexPath);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
