const products = [
    {
        id: '1',
        name : 'Jeep Grand Cherokee',
        price : '120.000',
        description : 'Jeep Grand Cherokee 3.6',
        img : 'https://imgs.search.brave.com/RthWn3GhzJ4XfM7SewWzOYCeTPZRw_pJCnCmOn8oT5E/rs:fit:860:0:0/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9qZWVwL2plZXBf/UE5HNzEucG5n',
        category : 'Drive',
        stock : 100
    },
    {
        id: '2',
        name : 'Jeep Compass',
        price : '55.000',
        description : 'Jeep Compass 2.0 Td At9 4x4 Trailhawk',
        img : 'https://imgs.search.brave.com/BUzuAMXLQ0mk4oY6W7pQGxJ9FIFOYcNdaL91jrorU7E/rs:fit:860:0:0/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9qZWVwL2plZXBf/UE5HOTcucG5n',
        category : 'Drive',
        stock : 100
    },
    {
        id: '3',
        name : 'Jeep Renegade',
        price : '30.000',
        description : 'Jeep RenegadeSport At Plus',
        img : 'https://imgs.search.brave.com/kFOHrftYMiqKsmP2QUmyDK_OxQtK3xbS6BeEWOaE1s8/rs:fit:860:0:0/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9qZWVwL2plZXBf/UE5HMzYucG5n',
        category : 'Drive',
        stock : 100
    },
    {
        id: '4',
        name : 'Jeep Commander',
        price : '32.000',
        description : 'Jeep Commander 2.0',
        img : 'https://imgs.search.brave.com/62yAPteSPQMz9M5jwtVarr3cdpDHl9ex0ZMqIlEPljc/rs:fit:860:0:0/g:ce/aHR0cDovL2NsaXBh/cnQtbGlicmFyeS5j/b20vbmV3X2dhbGxl/cnkvMTEyLTExMjEx/MzRfaW1hZ2UtZnJl/ZXVzZS1kb3dubG9h/ZC1vZmYtcm9hZC1q/ZWVwLXBuZy10cmFu/c3BhcmVudC5wbmc',
        category : 'Drive',
        stock : 100
    },
    {
        id: '5',
        name : 'Jeep Patriot',
        price : '12.000',
        description : 'Jeep Patriot 2.4 Sport 4x4 ',
        img : 'https://imgs.search.brave.com/Y49voOTy_ChPJq5RkGkwrkVmoeKyLdKBmJL43-AAoHM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/amVlcC5jb20uYXUv/Y29udGVudC9kYW0v/Y3Jvc3MtcmVnaW9u/YWwvYXBhYy9qZWVw/L2VuX2F1L2JocC9H/cmFuZC1DaGVyb2tl/ZS1PdmVybGFuZC1m/bHlvdXQtQmxhY2su/cG5nLmltZy4zMDAu/cG5n',
        category : 'Drive',
        stock : 100
    },
   
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (products.length > 0) {
        // Verificamos si products tiene elementos en el array
        setTimeout(() => {
          resolve(products);
        }, 3000);
      } else {
        reject("No hay productos");
      }
    });
  };