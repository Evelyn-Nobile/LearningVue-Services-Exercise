// nuestro post va a ser una referencia para que cuando lo actualicemos
// el proceso desencadenante de las dependecias nos actualice la info en nuestros componentes

import { ref } from 'vue'; // Importamos la función 'ref' de Vue para crear una referencia reactiva


class PostService {
   
    private posts; // Declaramos una variable privada 'posts'
  
    constructor() {
      // Inicializamos la variable 'posts' como una referencia reactiva vacía
      this.posts = ref([]);
    }
  
    // Getter para obtener la referencia reactiva 'posts'
    getPosts() {
      return this.posts;
    }
  
    // Función asincrónica para obtener datos de una API
    async fetchAll() {
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
  }
  
  // Exportamos la clase 'PostService' para que pueda ser utilizada en otros archivos
  export default PostService;
