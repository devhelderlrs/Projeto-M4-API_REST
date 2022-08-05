import Database from "../infra/dbrestaurante.js"

class DatabaseMetodos {

  static activePragma(){
    const pragma = "PRAGMA foreign_keys = ON"

    Database.run(pragma, (erro)=>{
        if(erro){
            console.log(erro)
        } else {
            console.log("Chaves estrangeiras estão ativas")
        }
    })
  }

  static listar(query) {

    return new Promise((resolve, reject)=> {
      Database.all(query, (e, resultado)=>{
          if(e){
              reject(e.message)
          } else {
              resolve(resultado)
          }
      })
    })
  }

  static async listarPorParametro(entidade, parametro, valor) {
    
    const query = `SELECT * FROM ${entidade} WHERE ${parametro} = ?`

    return new Promise((resolve, reject)=> {
      Database.all(query, valor, (e, resultado)=>{
          if(e){
            reject(e.message)
          } else {
            resolve(resultado)
          }
      })
    })
  }

  
}

export default DatabaseMetodos;