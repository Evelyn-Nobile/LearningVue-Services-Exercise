// nuestro post va a ser una referencia para que cuando lo actualicemos
// el proceso desencadenante de las dependecias nos actualice la info en nuestros componentes

import { Ref, ref } from 'vue'; // Importamos la función 'ref' de Vue para crear una referencia reactiva
import IPost from '@/interfaces/IPost';


class PostService {
   
    private posts:Ref<Array<IPost>>; // Declaramos una variable privada 'posts'
    private post:Ref<IPost>;
  
    constructor() {
      // Inicializamos la variable 'posts' como una referencia reactiva vacía
      this.posts = ref<Array<IPost>>([]);
      this.post = ref<IPost>({})
    }
  
    // Getter para obtener la referencia reactiva 'posts'
    getPosts():Ref<Array<IPost>> { //tipado del valor de retorno
      return this.posts;
    }
  
    getPost():Ref<IPost>{
      return this.post
    }

    // Función asincrónica para obtener datos de una API
    async fetchAll():Promise<void> {
      try {
          const url = 'https://jsonplaceholder.typicode.com/posts'; // URL de la API
  
          // Realizamos una solicitud  y esperamos la respuesta
          const response = await fetch(url);
  
          // Convertimos la respuesta a formato JSON
          const json = await response.json();
  
          // Actualizamos la referencia reactiva 'posts' con los datos recibidos de la API
          this.posts.value = await json;
  
      } catch (error) {
          console.log(error); 
      }
    }

    async fetchId(id:string | Array<string>):Promise<void> {
      try {
        const url = 'https://jsonplaceholder.typicode.com/posts/' + id; 

        const response = await fetch(url);

        const json = await response.json()

        this.post.value = await json;

      } catch (error) {

        console.log(error);
      }
    }
  }
  
  // Exportamos la clase 'PostService' para que pueda ser utilizada en otros archivos
  export default PostService;
