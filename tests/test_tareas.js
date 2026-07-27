const assert = require('assert')
const { ControladorTareas } = require('../src/main')

function probarCrearTarea() {
  // Se debe poder crear una tarea con su cotización (REQ-002, REQ-003).
  const controlador = new ControladorTareas()
  const tarea = controlador.crearTarea('Tarea de prueba', 'Matemáticas', 2)
  assert.strictEqual(tarea.estado, 'pendiente')
  assert.strictEqual(tarea.precio, 20)
}

function probarMarcarComoCompletada() {
  // Se debe poder marcar una tarea como entregada (REQ-004).
  const controlador = new ControladorTareas()
  const tarea = controlador.crearTarea('Otra tarea', 'Física', 5)
  controlador.marcarComoCompletada(tarea)
  assert.strictEqual(tarea.estado, 'entregada')
}

probarCrearTarea()
probarMarcarComoCompletada()
console.log('OK: pruebas básicas de tareas pasaron correctamente.')
