const { contextBridge, remote } = require('electron');

const win = remote.getCurrentWindow();

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  app: {
    name: remote.app.getName(),
    version: remote.app.getVersion()
  },
  win: {
    minimize: () => win.minimize(),
    maximize: () => {
      if (win.isMaximized()) {
        win.unmaximize();
        return false;
      } else {
        win.maximize();
        return true;
      }
    },
    close: () => win.close()
  }
});
