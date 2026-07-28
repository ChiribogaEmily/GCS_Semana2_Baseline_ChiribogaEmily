# Especificación de Requisitos (SRS) — v1.0
**Proyecto:** EmilyAyuda
**Estado:** Aprobado (Baseline v1.0)

## Requisitos Funcionales

- **REQ-001**: El cliente debe poder registrarse e iniciar sesión en la plataforma.
- **REQ-002**: El cliente debe poder subir una tarea académica con descripción, materia y fecha límite.
- **REQ-003**: El sistema debe mostrar una cotización estimada del precio según la fecha límite y complejidad de la tarea.
- **REQ-004**: Emily debe poder marcar una tarea como completada y adjuntar el archivo de entrega al cliente.

## Cambios luego de la Baseline v1.0

- **REQ-005**: El sistema debe notificar por correo al cliente cuando su tarea cambie de estado a "entregada".

## Requisitos No Funcionales

- **RNF-001 (Almacenamiento):** Los archivos subidos por el cliente no deben superar los 10 MB.
- **RNF-002 (Rendimiento):** El listado de tareas pendientes debe cargar en menos de 2 segundos.
