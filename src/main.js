class Tarea {
  // Modelo: representa una tarea académica subida por un cliente.
  constructor(descripcion, materia, diasPlazo) {
    this.descripcion = descripcion
    this.materia = materia
    this.diasPlazo = diasPlazo
    this.estado = 'pendiente'
    this.precio = null
  }
}

class ControladorTareas {
  // Controlador: crea tareas, calcula cotización y cambia su estado.
  constructor() {
    this.tareas = []
  }

  crearTarea(descripcion, materia, diasPlazo) {
    const tarea = new Tarea(descripcion, materia, diasPlazo)
    tarea.precio = this.cotizar(diasPlazo)
    this.tareas.push(tarea)
    return tarea
  }

  cotizar(diasPlazo) {
    // Cotización simple: entre más urgente, más cara (REQ-003).
    const precioBase = 10
    if (diasPlazo <= 1) return precioBase * 3
    if (diasPlazo <= 3) return precioBase * 2
    return precioBase
  }

  marcarComoCompletada(tarea) {
    tarea.estado = 'entregada'
  }
}

class VistaTareas {
  // Vista: muestra el listado de tareas.
  static mostrarTareas(tareas) {
    tareas.forEach((t) => {
      console.log(
        `- ${t.materia}: ${t.descripcion} | $${t.precio} | estado: ${t.estado}`
      )
    })
  }
}

function principal() {
  const controlador = new ControladorTareas()
  controlador.crearTarea('Ensayo de historia', 'Historia', 1)
  controlador.crearTarea('Resumen de biología', 'Biología', 5)

  console.log('Baseline v1.0 - EmilyAyuda (tareas pendientes)')
  VistaTareas.mostrarTareas(controlador.tareas)
}

module.exports = { Tarea, ControladorTareas, VistaTareas }

if (require.main === module) {
  principal()
}
