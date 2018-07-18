let PORT = '';
let testPort = 'http://localhost:3000';

if(process.env.NODE_ENV==='production'){
    PORT = 'http://localhost:8000';
}

export {PORT,testPort}