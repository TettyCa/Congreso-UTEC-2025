/*=======SHOW AGENDA CONTENIDO AUTOMÁTICO===========*/
document.querySelectorAll(".titulo__contenido").forEach((item) => {
  const contenidoId = item.id.replace("item-agenda", "contenido");
  const contenido = document.getElementById(contenidoId);

  item.addEventListener("click", () => {
    // Ocultar todos los contenidos
    document.querySelectorAll(".descripcion__agenda.sh").forEach((el) => {
      if (el !== contenido) el.classList.remove("sh");
    });

    // Quitar rotación a todos los títulos
    document.querySelectorAll(".titulo__contenido.rota").forEach((el) => {
      if (el !== item) el.classList.remove("rota");
    });

    // Alternar clases del contenido y del título
    contenido.classList.toggle("sh");
    item.classList.toggle("rota");

    // Scroll suave si se abre
    if (contenido.classList.contains("sh")) {
      contenido.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});