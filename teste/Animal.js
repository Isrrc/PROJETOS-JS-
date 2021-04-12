class Animal{

     _codigo;
     _nome;
     _idade;

     get getCodigo(){
         return this._codigo;
     }

     set setCodigo(vCodigo){
        this._codigo = vCodigo;
     } 

     get getNome(){
        return this._nome;
    }

    set setNome(vNome){
       this._nome = vNome;
    } 

    get getIdade(){
        return this._idade;
    }

    set setIdade(vIdade){
       this._idade = vIdade;
    } 

}