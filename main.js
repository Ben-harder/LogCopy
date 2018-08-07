const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const fs = require('fs');

let win;

function createWindow()
{
    win = new BrowserWindow({ width: 650, height: 550 });

    win.loadFile('index.html');

    win.webContents.openDevTools();

    win.on('closed', () =>
    {
        win = null;
    });

    Menu.setApplicationMenu(null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => 
{
    if (process.platform !== 'darwin')
    {
        app.quit();
    }
});

app.on('activate', () => 
{
    if (win === null)
    {
        createWindow();
    }
});