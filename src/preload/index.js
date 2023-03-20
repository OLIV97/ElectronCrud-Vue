const { contextBridge, ipcRenderer } = require('electron');
import ProductoController from '../main/controller/producto-controller';

const get = () =>{
    const x = new ProductoController();
    return x.get();
}

contextBridge.exposeInMainWorld('CRUD', {
    post: (data) => ipcRenderer.send('post', data),
    get : () =>  get()
     // Le damos una función para enviar un saludo al main
   
})

