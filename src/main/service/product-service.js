import fs from 'fs';
import util from 'util'

export default class ProductService{
    constructor(){

    }

    async validateFileProductsExists(){
        const access = util.promisify(fs.access);
        let folderProductsExist = false;
        let fileProductsExist = false;
    
          try {
           await access('./products', fs.constants.F_OK)
           
          } catch (error) {
            folderProductsExist=true;
          }
          /*
          fs.access('./products', (err) => {
            if (err) {
              
              console.log('La carpeta no existe');
              
            } else {
              console.log('La carpeta existe');
              folderProductsExist=true;
            }
          });
*/
          if (folderProductsExist) {
            console.log("No debe entrar la carpeta existe")
            fs.mkdir('products', (err) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log('La carpeta se creó exitosamente');
                }
              });
          }

          
          try {
           await access('./products/products.txt', fs.constants.F_OK)
           
          } catch (error) {
            fileProductsExist=true;
          }
          /*
          fs.access('./products/products.txt', (err) => {
            if (err) {
            
              console.log('El archivo no existe');
             
            } else {
              console.log('El archivo existe');
              fileProductsExist=true;
            }
          });
*/
          if (fileProductsExist) {
            console.log("No debe entrar el file  existe")
            fs.writeFile("./products/products.txt", "", (err) => {
                // Manejar el error si lo hay
                if (err) throw err;
                // Mostrar un mensaje de éxito
                console.log("Completed!");
              });
          }
         
    }

}