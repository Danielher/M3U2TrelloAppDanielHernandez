const sor = new Sortable.default(
    //Referenciamos todas la columnas
    document.querySelectorAll('.CuadroTareas'),
    //Hacemos ordenables todos los article de las tareas
    { draggable: 'article' }
  );