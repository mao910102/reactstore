# Cómo Funciona la Aplicación

### 1. `Home.tsx`
Este componente es la página principal de la aplicación. Se encarga de:
- Cargar los productos usando el servicio `fetchProducts`.
- Manejar la lista de deseos utilizando el estado local y `localStorage`.
- Alternar entre la vista de productos y la lista de deseos.

### 2. `ProductList.tsx`
Componente encargado de renderizar la lista de productos. Ofrece botones para añadir o eliminar productos de la lista de deseos.

### 3. `AppHeader.tsx`
Componente de cabecera de la aplicación, con estilo personalizado y un icono que muestra el nombre de la aplicación.

### Servicios
#### `productService.ts`
Este archivo contiene la función `fetchProducts` que simula la obtención de productos desde una API.
