document.addEventListener("DOMContentLoaded", function () {
  // Obtener los elementos
  const hamburguesaToggle = document.getElementById("modal-hamburguesa-toggle");
  const saludo = document.getElementById("btn-saludo");
  const titular = document.getElementById("btn-titular");
  const alias = document.getElementById("btn-alias");
  const cbu = document.getElementById("btn-cbu");
  const btnBienvenida = document.getElementById("btn-bienvenida");
  const btnRegistrarUsuario = document.getElementById("btn-registrarUsuario");
  const acreditadas = document.getElementById("btn-acreditadas");
  const link = document.getElementById("btn-link");
  const sistemaDeReferidos = document.getElementById("btn-sistemaDeReferidos");
  const bono = document.getElementById("btn-bono");
  const captura = document.getElementById("btn-captura"); 
  const solicitarUsuario = document.getElementById("btn-solicitarUsuario");
  const referidoAcreditado = document.getElementById("btn-referidoAcreditado");
  const referidasAcreditadas = document.getElementById("btn-referidasAcreditadas");
  const linea = document.getElementById("btn-linea"); 
  const noIngreso = document.getElementById("btn-noIngreso");
  const soporte = document.getElementById("btn-soporte");
  const sistemaDePagos = document.getElementById("btn-sistemaDePagos");
  const cartera = document.getElementById("btn-cartera");  
  const overlay = document.getElementById("overlay");
  const overlayBienvenida = document.getElementById("overlay-bienvenida");
  const overlayRegistrar = document.getElementById("overlay-registrar");
  const overlayReferidoAcreditado = document.getElementById(
    "overlay-referidoAcreditado"
  );
  const form = document.querySelector("form"); // Seleccionamos el primer formulario
  const formBienvenida = document.querySelectorAll("form")[1]; // Seleccionamos el segundo formulario
  const formRegistrar = document.querySelectorAll("form")[2]; // Seleccionamos el tercer formulario
  const formReferidoAcreditado = document.querySelectorAll("form")[3]; // Seleccionamos el quinto formulario

  let inputTitular, inputCBU, inputAlias;
  let firstVisit = true;

  const bonoTextos = [
    `⬇️ *INFO IMPORTANTE* ⬇️

📣 Hay juegos que *NO* permiten usar la bonificación. 
En caso de no usar la bonificación, no es posible retirarla 🚫

📢 Aviso importante: El sector de 💳 pagos estará activo desde las ⏰ 8AM hasta nuevo aviso. 🙏 Por favor, déjame tu alias y a partir de esa hora te van a estar respondiendo.`,
`⬇️ *INFO IMPORTANTE* ⬇️

📣 Te recordamos que las bonificaciones no son extraibles, es un plus para que tengas más chances de ganar 🚫
14 min`
  ];
  let bonoIndex = 0;

  bono.addEventListener("click", () => {
    copyToClipboard(bonoTextos[bonoIndex]);
  
    // Avanzar al siguiente saludo (y volver al principio si es el último)
    bonoIndex = (bonoIndex + 1) % bonoTextos.length;
  });

  const lineaTextos = [
`👌 Genial! Para acr3drit4r tus fich4s comunicate al link con la línea principal y envía USU4RIO y C0MPROB4NTE para que las c4jer4s acr3drit3n tu c4rga 👉 https://wa.me/189fcd`,
`✅ Listo! Entra aquí y escribe a la línea principal enviando USU4RIO y C0MPROB4NTE para acr3drit4r fich4s 👉 https://wa.me/189fcd`,
`🔥 Perfecto! Usa este enlace para hablar con la línea principal y envía USU4RIO y C0MPROB4NTE, así las c4jer4s harán tu c4rga 👉 https://wa.me/189fcd`,
`👍 Buen trabajo! Comunicate con la línea principal aquí, manda USU4RIO y C0MPROB4NTE y se acr3drit4 tu fich4s 👉 https://wa.me/189fcd`,
`🥳 Todo OK! Para acr3drit4r fich4s escribe a la línea principal y envía USU4RIO + C0MPROB4NTE 👉 https://wa.me/189fcd`,
`📲 Dale! Entra al link, habla con la línea principal y manda USU4RIO y C0MPROB4NTE para acr3drit4r 👉 https://wa.me/189fcd`,
`🚀 Ya casi! Comunicate con la línea principal aquí y envía USU4RIO + C0MPROB4NTE para que las c4jer4s acr3drit3n 👉 https://wa.me/189fcd`,
`💬 Buenísimo! Manda mensaje a la línea principal con USU4RIO y C0MPROB4NTE para acr3drit4r tu c4rga 👉 https://wa.me/189fcd`,
`🎯 Perfecto! Este es el link para que envíes USU4RIO y C0MPROB4NTE a la línea principal y se acr3drit4n tus fich4s 👉 https://wa.me/189fcd`,
`🔑 Ahora sí! Comunicate aquí con la línea principal, envía USU4RIO y C0MPROB4NTE y se hará la acr3dit4ción 👉 https://wa.me/189fcd`,
`👌 Ya casi está! Solo falta que uses este link, envíes USU4RIO + C0MPROB4NTE a la línea principal y listo 👉 https://wa.me/189fcd`,
`📞 Con este link puedes escribir a la línea principal, mandar USU4RIO y C0MPROB4NTE y acr3drit4r tu c4rga 👉 https://wa.me/189fcd`,
`📌 Importante! Para acr3drit4r fich4s comunicate aquí y manda USU4RIO y C0MPROB4NTE 👉 https://wa.me/189fcd`,
`💎 Todo listo! Solo falta que las c4jer4s acr3drit3n, habla con la línea principal y envía USU4RIO y C0MPROB4NTE 👉 https://wa.me/189fcd`,
`⚡ Entra a este link, contacta a la línea principal y manda USU4RIO y C0MPROB4NTE para acr3drit4r 👉 https://wa.me/189fcd`,
`🙌 Bien! Para finalizar acr3drit4r tus fich4s comunicate aquí y envía USU4RIO y C0MPROB4NTE 👉 https://wa.me/189fcd`,
`✔️ Solo un paso más: usa este enlace, manda USU4RIO + C0MPROB4NTE y las c4jer4s acr3drit3n 👉 https://wa.me/189fcd`,
`🤝 Listo para jugar! Acr3drit4 tus fich4s contactando aquí y enviando USU4RIO y C0MPROB4NTE 👉 https://wa.me/189fcd`,
`📲 Este es el enlace para hablar con la línea principal, mandar USU4RIO y C0MPROB4NTE y acr3drit4r tu c4rga 👉 https://wa.me/189fcd`,
`💥 Dale click aquí y envía USU4RIO y C0MPROB4NTE a la línea principal para acr3drit4r fich4s 👉 https://wa.me/189fcd`
  ];
  let lineaIndex = 0;

  linea.addEventListener("click", () => {
    copyToClipboard(lineaTextos[lineaIndex]);
  
    // Avanzar al siguiente saludo (y volver al principio si es el último)
    lineaIndex = (lineaIndex + 1) % lineaTextos.length;
  });
  
  const textos = [
`Ya están! Mucha suerte!! 🍀`,
`Acreditadas! A romperla!! 🔥🍀`,
`Todo listo! Éxitos!! ✅🍀`,
`Acreditadas! A jugar!! 🎉✅`,
`Cargadas! Mucha suerte 🥰🍀`,
`Listo!! Ya podes entrar!! ✅`,
`Listoo!! A darlo todo! 💪🍀`,
`Ya podes jugar! Éxitos!! 🎮🍀`,
`Acreditadas! Todo tuyo!! 🤞🏻✅`,
`Cargadas!! ✅`,
`Activadas! Que tengas mucha suerte! 🍀🥰`,
`Ya podes arrancar!! A jugar! 🎲✅`,
`Todo listo! Suerte! 🍀`,
`Cargado! Ya podes entrar 😄✅`,
`A darle!! Que sea con suerte!! 🤞🏻💫`,
`Ya están listas!! 🍀✅`,
`Suerteee!! Ya podes jugar! 🤩🍀`,
`Todo ok! A jugar!! 🥳`,
`Acreditado! Vamos con todo! 💪✅`,
`Dale nomas! Ya están cargadas! 👌🍀`,
`Acreditadas! Que la suerte te acompañe! ✨`,
`Ya está acreditado! Éxitos! 💥🍀`,
`Acreditadass!! Todo listo! 🎉🍀`,
`Acreditadas!! ✅`,
`Ya estan cargadas! A jugar!! ✅`,
`Listo acreditado! Suerte!! 🤞🏻🍀`,
`Ya podes arrancar! Mucha suerte! 🚀🍀`,
`✅ Acreditadas! A romperla!! 💥`,
`Listo, ya podes empezar! 🎮🍀`,
`Ya te acredite! A jugar!! 🥰✅`,
`Todo listo! Mucha suerte!! 🌟🍀`
  ];
  let textoIndex = 0;


  const saludos = [
`Holuu!! 🙌🏻`,
`Buenas!!`,
`Holii buenas!! 😝`,
`Holuuu!! 😝`,
`Holaa buenas!!`,
`Holii!! 🥰`,
`Bueenass!!!`,
`Holuu buenas!! ☺️`,
`Holaaa!! 🤩`,
`Holuu! 🥰`,
`Holaa!!`,
`Buenass!! ☺️`,
`Holu buenas!!`,
`Buenas buenas!!`,
`Holiii!! ✨`,
`Holuuuuu!! 😍`,
`Ey buenas!!`,
`Holii holaa!! 💕`
];
  let saludosIndex = 0;

  const links = [
`www.b22m.net`,
`Accedé a: b22m.net`,
`https://www.b22m.net`,
`Link: www.b22m.net`,
`Ingresá a: b22m.net`,
`http://b22m.net`,
`Te dejo el link: 🔗 b22m.net`,
`b22m.net`,
`Página web: 💥 b22m.net 💥`,
`El link es: http://b22m.net`,
`https://b22m.net`,
`Sitio web: 🔗 b22m.net`,
`Accedé a: 💥 b22m.net 💥`,
`Ingresá a: www.b22m.net`,
`Te dejo el link: 💥 b22m.net 💥`,
`Link: 💥 b22m.net 💥`,
`Accedé a: www.b22m.net`,
`🔗 b22m.net`,
`Ingresá a: http://b22m.net`,
`El link es: www.b22m.net`,
`Accedé a: 🔗 b22m.net`,
`Link: https://b22m.net`,
`https://b22m.net`,
`Ingresá a: 💥 b22m.net 💥`,
`Página web: www.b22m.net`,
`El link es: 🔗 b22m.net`,
`b22m.net`,
`Te dejo el link: b22m.net`,
`Ingresá a: 🔗 b22m.net`,
`Link: https://b22m.net`,
`Te dejo el link: www.b22m.net`,
`💥 b22m.net 💥`,
`http://b22m.net`,
`El link es: b22m.net`,
`Página web: https://b22m.net`,
`b22m.net`,
`Link: 🔗 b22m.net`,
`www.b22m.net`,
`Te dejo el link: www.b22m.net`,
`Accedé a: b22m.net`
  ];
  let linksIndex = 0;

  // Funcion para copiar texto al portapapeles
  function copyToClipboard(text) {
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = text;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
  }

  saludo.addEventListener("click", () => {
    copyToClipboard(saludos[saludosIndex]);
  
    // Avanzar al siguiente saludo (y volver al principio si es el último)
    saludosIndex = (saludosIndex + 1) % saludos.length;
  });

  link.addEventListener("click", () => {
    copyToClipboard(links[linksIndex]);
  
    // Avanzar al siguiente saludo (y volver al principio si es el último)
    linksIndex = (linksIndex + 1) % links.length;
  });

  titular.addEventListener("click", () => {
    const texto = `${inputTitular}`;
    copyToClipboard(texto);
  });

  alias.addEventListener("click", () => {
    const texto = `${inputAlias}`;
    copyToClipboard(texto);
  });

  cbu.addEventListener("click", () => {
    const texto = `${inputCBU}`;
    copyToClipboard(texto);
  });

  acreditadas.addEventListener("click", () => {
    copyToClipboard(textos[textoIndex]);
  
    // Avanzar al siguiente texto (y volver al principio si es el último)
    textoIndex = (textoIndex + 1) % textos.length;
  });

  sistemaDeReferidos.addEventListener("click", () => {
    const texto = `🎉 *PROGRAMA DE REFERIDOS* 🎉
Invita a tus amigos y GÁNATE 1,500 fichas + 3,000 BONUS 💎

👉 Solo pásales nuestro número y diles que vienen de tu parte.
✅ Cuando tu amigo haga su primera carga, recibirás automáticamente tus fichas de REFERIDO.

¡Mientras más invites, más ganas! 🚀🔥`;
    copyToClipboard(texto);
  });

  bono.addEventListener("click", () => {
    const texto = `⬇️ *INFO IMPORTANTE* ⬇️

📣 Hay juegos que *NO* permiten usar la bonificación. 
En caso de no usar la bonificación, no es posible retirarla 🚫`;
    copyToClipboard(texto);
  });

  captura.addEventListener("click", () => {
    const texto = `👩🏼‍💻 *Para el bonus extra del 300% en tu primer carga por favor enviame captura de como me agendaste* ❤️‍🔥`;
    copyToClipboard(texto);
  });

  solicitarUsuario.addEventListener("click", () => {
    const texto = `Me recordarias tu usuario porfi 🙏🏼`;
    copyToClipboard(texto);
  });
  
  referidasAcreditadas.addEventListener("click", () => {
    const texto = `🎉 ¡Fichas de Referidos Acreditadas! 🎉
Tus fichas ya fueron sumadas ✅
🙌 ¡Gracias por ser parte de esta comunidad y ayudarnos a seguir creciendo juntos! ❤️‍🔥
`;
    copyToClipboard(texto);
  });

  noIngreso.addEventListener("click", () => {
    const texto = `🚫 Tu transferencia todavía no impactó 🚫

*Tené en cuenta que a veces las transferencias se demoran.*  🙏🏻

*Por favor sea paciente, en cuanto impacte en nuestra cuenta, las fichas serán cargadas* 🙌🏻`;
    copyToClipboard(texto);
  });

  soporte.addEventListener("click", () => {
    const texto = `🛠️ Soporte – Información necesaria 🛠️
Para poder revisar tu caso de manera rápida y efectiva, por favor envíanos los siguientes datos:

1️⃣ ID de usuario
2️⃣ Hora exacta del incidente
3️⃣ Nombre del juego o bono involucrado
4️⃣ Tipo de dispositivo (Celular 📱 o PC 💻)
5️⃣ Descripción detallada de lo ocurrido (si es posible, adjunta fotos o videos como respaldo).

✅ Con esta información podremos darte una solución mucho más ágil.`;
    copyToClipboard(texto);
  });

  sistemaDePagos.addEventListener("click", () => {
    const texto = `*Nuestro cronograma* : 
❤️‍🔥 Pagos 24hs
❤️‍🔥 Mínimo de retiro: $3.000

 *Importante* ‼⬇

❤️‍🔥 Un retiro por día 

💥 *MAXIMO DE RETIRO DEPENDIENDO DE LA CARGA* ⬇️⬇️

❤️‍🔥Si la carga es menor a 50.000 puede retirar hasta 100.000 diarias 💪🏼

❤️‍🔥Si la carga a partir de 50.000 puede retirar hasta 250.000 🫰🏼

❤️‍🔥Si la carga es a partir de 100.000 puede retirar hasta 300.000 diarios 🙌🏻
`;
    copyToClipboard(texto);
  });

  cartera.addEventListener("click", () => {
    const texto = `💰 Cómo ver tu saldo Retirable 💰
1. En la pantalla principal, ubica tu saldo.
2. A la derecha del saldo verás el ícono de una personita 👤, tócala.
3. Se abrirá un menú.
4. Entra en la pestaña “CARTERA” y ahí podrás ver tu saldo RETIRABLE. ✅
`;
    copyToClipboard(texto);
  });

  // Función para abrir y cerrar el overlay del menú hamburguesa
  hamburguesaToggle.addEventListener("click", function () {
    if (overlay.style.display === "flex") {
      overlay.style.display = "none"; // Cerrar overlay
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    } else {
      overlay.style.display = "flex"; // Abrir overlay
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
  });

  // Función para abrir y cerrar el overlay del menú bienvenida
  btnBienvenida.addEventListener("click", function () {
    if (overlayBienvenida.style.display === "flex") {
      overlayBienvenida.style.display = "none"; // Cerrar overlay del menú central
    } else {
      overlayBienvenida.style.display = "flex"; // Abrir overlay del menú central
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioBienvenida").focus();
  });

  // Función para abrir y cerrar el overlay del menú registrar usuario
  btnRegistrarUsuario.addEventListener("click", function () {
    if (overlayRegistrar.style.display === "flex") {
      overlayRegistrar.style.display = "none"; // Cerrar overlay del menú central
    } else {
      overlayRegistrar.style.display = "flex"; // Abrir overlay del menú central
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioRegistrar").focus();
  });

  // Función para abrir y cerrar el overlay del menú Referido Acreditado
  referidoAcreditado.addEventListener("click", function () {
    if (overlayReferidoAcreditado.style.display === "flex") {
      overlayReferidoAcreditado.style.display = "none"; // Cerrar overlay
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    } else {
      overlayReferidoAcreditado.style.display = "flex"; // Abrir overlay
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioQueRefiere").focus();
  });

  // Cerrar el overlay si se hace clic fuera del formulario del primer menú
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay && !firstVisit) {
      overlay.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del segundo menú
  overlayBienvenida.addEventListener("click", function (e) {
    if (e.target === overlayBienvenida) {
      overlayBienvenida.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formBienvenida.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del tercer menú
  overlayRegistrar.addEventListener("click", function (e) {
    if (e.target === overlayRegistrar) {
      overlayRegistrar.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formRegistrar.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del quinto menú
  overlayReferidoAcreditado.addEventListener("click", function (e) {
    if (e.target === overlayReferidoAcreditado) {
      overlayReferidoAcreditado.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formReferidoAcreditado.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay del primer menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !firstVisit) {
      // Verifica si la tecla presionada es Escape
      overlay.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });
  // Cerrar el overlay del segundo menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Verifica si la tecla presionada es Escape
      overlayBienvenida.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formBienvenida.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });
  // Cerrar el overlay del tercer menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Verifica si la tecla presionada es Escape
      overlayRegistrar.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formRegistrar.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });
  // Cerrar el overlay del quinto menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Verifica si la tecla presionada es Escape
      overlayReferidoAcreditado.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formReferidoAcreditado.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Prevenir el envío del formulario y cerrar el overlay
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlay.style.display = "none"; // Cerrar el overlay del primer menú
    inputTitular = document.getElementById("titular").value.trim();
    inputCBU = document.getElementById("cbu").value.trim();
    inputAlias = document.getElementById("alias").value.trim();
    form.reset(); // Limpiar los campos del formulario
    firstVisit = false;
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del segundo menú
  formBienvenida.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayBienvenida.style.display = "none"; // Cerrar el overlay del segundo menú
    const user = document.getElementById("usuarioBienvenida").value.trim();
    const texto = `¡Bienvenid@ al nuevo BOOM �❤️‍🔥Explosión de diversión ❤️‍🔥

🤯 *300% de b0n0 de regalo en tu primer deposito* 🤯

📲 Usu4rio: ${user}
🔐 Cl4ve: vip123

L1NK: https://b22m.net

❤️‍🔥M1n1mo de c4rg4: *$1.500*
❤️‍🔥M1n1m0 de retiro: *$3.000*
❤️‍🔥PAGOS las 24 hs 🕒
❤️‍🔥B0nus en todas tus c4rgas diarias 

Te envio 4li4s? confirmame ❣️
`;
    copyToClipboard(texto);
    formBienvenida.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del tercer menú
  formRegistrar.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayRegistrar.style.display = "none"; // Cerrar el overlay del tercer menú
    const user = document.getElementById("usuarioRegistrar").value.trim();
    const texto = `✅ USU4RIO REGISTRAD@ ✅ 

L1NK: https://b22m.net 🎰

📲 Usu4rio: ${user}
🔐 Cl4ve: vip123

Te envio 4li4s? confirmame ❣️
`;
    copyToClipboard(texto);
    formRegistrar.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del quinto menú
  formReferidoAcreditado.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayReferidoAcreditado.style.display = "none"; // Cerrar el overlay del quinto menú
    const usuario1 = document.getElementById("usuarioQueRefiere").value.trim();
    const usuario2 = document.getElementById("usuarioReferido").value.trim();
    const texto = `El usuario *${usuario1}* recomendó al usuario *${usuario2}* y fue bonificado!! ✅`;
    copyToClipboard(texto);
    formReferidoAcreditado.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });
});







