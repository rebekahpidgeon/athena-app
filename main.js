const { app, BrowserWindow } = require('electron');
const path = require('path')

// Create a browser window to show the HTML on
const createWindow = () => { 
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
    
    // Load the HTML file which will show on the application window
    win.loadFile('index.html')
}

// Wait until the application is ready before creating the window
app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})