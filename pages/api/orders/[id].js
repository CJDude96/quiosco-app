
export default async function handler(req, res) {
    
    if(req.method === "GET"){
        console.log("GET funcionando")
    }
  
    //Update order state
    if (req.method === "POST") {
      console.log("actualizando")
    }

  }
  