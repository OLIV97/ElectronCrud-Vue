
import ProductService from '../service/product-service'
import {dialog} from 'electron';
import fs from 'fs';
import util from 'util'

export default class ProductoController{
   
    constructor(){
        this.productService;
    }
    async post(event,data){
        const options = {
            // El tipo de diálogo: "none", "info", "error", "question" o "warning"
            type: 'error',
            // El título del diálogo
            title: 'Verifique datos',
            // El mensaje del diálogo
            message: 'Verifique que todos los campos estén llenos',
            // El texto detallado del diálogo (opcional)
            detail: 'Mira niño, ¿ves las cajas de texto que no tienen texto?, por favor necesito de la manera más antenta que les pongas algo de texto',
            // Un array de botones para el diálogo (opcional)
            buttons: ['OK'],
            // El índice del botón por defecto (opcional)
            defaultId: 0,
            // El índice del botón de cancelación (opcional)
            cancelId: -1,
          }
      
          const options1 = {
            // El tipo de diálogo: "none", "info", "error", "question" o "warning"
            type: 'info',
            // El título del diálogo
            title: 'Tarea realizada correctamente',
            // El mensaje del diálogo
            message: 'Felicidades',
            // El texto detallado del diálogo (opcional)
            detail: '¿Tan dificil era amiguito?',
            // Un array de botones para el diálogo (opcional)
            buttons: ['OK'],
            // El índice del botón por defecto (opcional)
            defaultId: 0,
            // El índice del botón de cancelación (opcional)
            cancelId: -1,
          }
          let valoresVacios = Object.values(data).every(valor => valor != "");
          if (valoresVacios) {
            this.productService  = new ProductService();
          this.productService.validateFileProductsExists();
          const readFile = util.promisify(fs.readFile);
          let info;
          try {
            info = await readFile("./products/products.txt","utf-8");
           console.log("xd: "+info)
          } catch (error) {
            console.log(error)
          }

          if (info) {
            console.log("no debe entrar aquí ya que no hay info")
            const infoJavascript = JSON.parse(info);
            console.log(infoJavascript)
            infoJavascript.push(data);
            
            const nuevo = JSON.stringify(infoJavascript);
          try {
            await fs.promises.writeFile("./products/products.txt",nuevo,"utf-8");
          } catch (error) {
            console.log(error)
          }
          }else{
            const products = [];
            products.push(data);
            console.log(data);
            console.log(products);
            const productsJson = JSON.stringify(products);
            try {
                await fs.promises.writeFile("./products/products.txt",productsJson,"utf-8");
            } catch (error) {
                
            }
          }
          dialog.showMessageBoxSync(options1);   
          }else{
            dialog.showMessageBoxSync(options);
          }
          
        
          //const jsonData = JSON.parse(info);
          //console.log(jsonData)
          /*
          let valoresVacios = Object.values(data).every(valor => valor != "");
          if (valoresVacios) {
              dialog.showMessageBoxSync(options1);
          }else{
            dialog.showMessageBoxSync(options);
          }
          */
    
    }

    async get(){
        const info = await fs.promises.readFile("./products/products.txt","utf-8");
        const dataJson = JSON.parse(info);
        console.log(dataJson)
        return dataJson;
    }

}