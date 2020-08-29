function password(){
  let hasil = ''
  let kata = 'abcdefghijklmnopqrstuvwxyz0123456789'
  for ( let i = 0 ; i < 16 ; i++ ){
    hasil += kata.charAt(Math.floor(Math.random() * kata.length))
  }
  return hasil
}

function split(str) {
    let ret = [];
    let pass = password()
    for(let i = 0; i < pass.length; i += 4) {
       ret.push(str.substr(i, 4))
    }
    return ret.join('-')
};

function generate(num){
  let hasil = [];
  for ( let i = 0 ; i < num ; i++){
    let password1 = password()
    let split1 = split(password1)
    hasil.push(split1) 
  }
  return hasil
}

console.log(generate(3))
