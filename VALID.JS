let contrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

console.log(contrasena.test('Contraseña1')); // Returns true
console.log(contrasena.test('contraseña1')); // Returns false