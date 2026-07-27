# CHANGELOG

## [v1.0] - 27/7/2026 — Baseline v1.0

### Qué incluye la línea base

- `docs/SRS/SRS_v1.md`: 4 requisitos funcionales (REQ-001 a REQ-004) y 2 no
  funcionales (RNF-001, RNF-002).
- `docs/SDD/SDD_v1.md`: diseño de arquitectura MVC (`Tarea`, `VistaTareas`,
  `ControladorTareas`).
- `src/main.js`: implementación mínima en español del modelo de tareas y su
  cotización.
- `tests/test_tareas.js`: pruebas básicas de creación y entrega de tareas con la
  nueva nomenclatura (`ControladorTareas`).
- `config/config.example`: plantilla de configuración sin datos reales.

### Qué está aprobado

- SRS v1.0 y SDD v1.0 aprobados como base técnica del proyecto.
- Creación de tareas y cálculo de cotización (REQ-002, REQ-003) funcional y
  probado.

### Qué queda pendiente

- Registro e inicio de sesión de clientes (REQ-001).
- Entrega real de archivos y validación de tamaño máximo (REQ-004, RNF-001).

### Cómo se verifica

1. `git checkout v1.0`
2. `node src/main.js` — debe imprimir las tareas de ejemplo sin errores.
3. `node tests/test_tareas.js` — debe imprimir "OK: pruebas básicas de tareas
   pasaron correctamente."

## [Unreleased]

- `REQ-007` agregado tras la baseline v1.0 (ver rama `change/REQ-007`).
