const form = document.getElementById("loginForm"); 
const email = document.getElementById("email") 
const password = document.getElementById("password") 
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", async function (e) {
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

  if (!valid) {
    e.preventDefault();
    return;
  }

  const url = 'http://localhost:3000/api/login';
  
  try {
  // Simulación de login exitoso
  const mockResponse = {
    data: {
      message: "Inicio de sesión exitoso",
      user: {
        id: 1,
        name: "Michelle",
        email: email.value
      }
    }
  };

  console.log("Login simulado:", mockResponse.data);
  alert("¡Inicio de sesión simulado exitosamente!");

} catch (error) {
  console.error("Error simulado en el login:", error);
  alert("Error en el inicio de sesión.");
}
});