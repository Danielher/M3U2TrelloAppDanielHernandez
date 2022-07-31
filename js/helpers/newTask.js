// Apuntamos al formulario para crear la nueva tarea del HTML
const form = document.querySelector('#register-form');

form.addEventListener('signup', (ev) => {
  // Evitamos que la pagina se recargue cuando se envian los datos
  ev.preventDefault();
  const formData = ev.target;
  
  // Recopilamos la información a enviar a la API
  const data = {
    title: formData.titulo.value,
    person: formData.Resonsable.value,
    details: formData.Descripcion.value,
    // deadline: formData.deadLineTask.value,
    deadline: formData.FechaEn.value,
    //created: createTask.Value,
    state: 'to-do'
  };
  // Hacemos una petición POST para enviar la información a la API y le pasamos el arreglo data con la información nueva
  axios.post(`${API_URL}/tasks`, data)
    .then((res) => {
      //Mandamos la información a la API
      createTask(res.data);
      //Reseteamos el formulario
      formData.reset();
    })
    .catch((err) => console.error(err));
});