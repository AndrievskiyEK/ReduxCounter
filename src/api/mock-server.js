import { Response, createServer } from "miragejs"

const INITIAL_COUNTER = 10;

createServer({
  routes() {
    this.namespace = "api"

    this.get('/counter', () => {
         /* return new Response(500);  */
        return {
            counter: INITIAL_COUNTER
        }
    })

    this.post("/counter/save", (schema, request) => {
      /* return new Response(500); */ 


      const counter = JSON.parse(request.requestBody).counter
      console.log(counter)
      return {
        status: 'ok'
      }
    })
  },
})