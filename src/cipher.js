const cipher = {
  
  encode : (offset, string) => {
    if (offset === null || offset === 0) {
      throw new TypeError();
    }
    
    let cifradoTotal = '';
    for ( let i = 0 ; i < string.length ; i += 1) {
      const numeroAscii = string.charCodeAt(i);
      
      if( numeroAscii >= 65 && numeroAscii <= 90 ) {
        cifradoTotal += String.fromCharCode((numeroAscii - 65 + offset) % 26 + 65);
      } else if ( numeroAscii >= 97 && numeroAscii <= 122 ) {
        cifradoTotal += String.fromCharCode((numeroAscii - 97 + offset) % 26 + 97);
      } else if ( numeroAscii >= 48 && numeroAscii <= 57 ) {
        cifradoTotal += String.fromCharCode((numeroAscii - 48 + offset) % 10 + 48);
      } else {
        cifradoTotal += string[i];
      }
    }
    return cifradoTotal;
},

  decode : (offset, string) => {
    if (offset === null || offset === 0) {
      throw new TypeError();
    }

    let descifradoTotal = '';
    for ( let i = 0 ; i < string.length ; i += 1) {
      const numeroAscii = string.charCodeAt(i);
      
      if( numeroAscii >= 65 && numeroAscii <= 90 ) {
        descifradoTotal += String.fromCharCode((numeroAscii - 90 - offset) % 26 + 90);
      } else if ( numeroAscii >= 97 && numeroAscii <= 122 ) {
        descifradoTotal += String.fromCharCode((numeroAscii - 122 - offset) % 26 + 122);
      } else if ( numeroAscii >= 48 && numeroAscii <= 57 ) {
        descifradoTotal += String.fromCharCode((numeroAscii - 57 - offset) % 10 + 57);
      } else {
        descifradoTotal += string[i];
      }
    }
    return descifradoTotal;
  }
};

export default cipher;
