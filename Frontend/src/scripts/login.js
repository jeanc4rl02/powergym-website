const form = document.getElementById("loginForm"); 
const email = document.getElementById("email") 
const password = document.getElementById("password") 
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let valid = true;

  // Validación de email
  if (!email.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    emailError.classList.remove("hidden");
    valid = false;
  } else {
    emailError.classList.add("hidden");
  }

  // Validación de contraseña
  if (password.value.length < 6) {
    passwordError.classList.remove("hidden");
    valid = false;
  } else {
    passwordError.classList.add("hidden");
  }

  if (!valid) return; 
    
  const url = 'http://localhost:3000/api/login';
  
  try {
  // Simulación de login exitoso
  const response = await axios.post(url, {
    email: email.value,
    password: password.value
  });

  console.log("Respuesta de la API:", response.data);
  alert("¡Inicio de sesión exitoso!");

} catch (error) {
  console.log("Simulación activda: no se pudo conectar al servidor real");

  // Simulación de respuesta
  const mockResponse = {
    data: {
      message: "Inicio de sesión exitoso",
      user: {
        id: 1,
        name: "Michelle",
        email: email.value
      },
    },
  };

  console.log("Login simulado:", mockResponse.data);
  alert("¡Inicio de sesión simulado exitosamente!");
 } 
});