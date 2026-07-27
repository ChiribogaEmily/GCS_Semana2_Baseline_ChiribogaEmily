# Documento de Diseño de Software (SDD) — v1.0

**Proyecto:** EmilyAyuda

**Estado:** Aprobado Baseline v1.0

## Arquitectura: MVC (Modelo-Vista-Controlador)

* **Modelo**: Representa las entidades `Cliente` y `Tarea` (descripción, materia, días de plazo, estado, precio).
* **Vista**: `VistaTareas`, interfaz simple (por ahora consola/mock) que muestra el listado de tareas y su estado.
* **Controlador**: `ControladorTareas`, encargado de recibir una tarea nueva, calcular la cotización y cambiar su estado.

## Componentes

| Componente | Responsabilidad |
| --- | --- |
| `Tarea` (Modelo) | Representa una tarea académica y su estado. |
| `ControladorTareas` | Crea tareas, calcula cotización, cambia estados. |
| `VistaTareas` | Muestra el listado de tareas al cliente o a Emily. |

## Decisiones técnicas

* Se usa el patrón MVC para separar claramente los datos (`Tarea`), la lógica de negocio (`ControladorTareas`) y la presentación (`VistaTareas`), facilitando el mantenimiento a medida que crezca el proyecto.
* El cálculo de cotización se centraliza en el controlador para que sea fácil de auditar y modificar sin tocar el modelo ni la vista.

## Control de versiones del documento

| Versión | Fecha | Autor | Cambio |
| --- | --- | --- | --- |
| v1.0 | 27/07/2026 | Emily | Versión inicial aprobada (Baseline) |