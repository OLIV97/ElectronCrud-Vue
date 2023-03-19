const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('CRUD', {
    post: (data) => ipcRenderer.send('post', data)
})