# Online Store - Proyecto de Ionic React

Este proyecto es una tienda en línea construida con **Ionic**, **React** y **Capacitor**. El objetivo de esta aplicación es ofrecer una lista de productos, agregar productos a una lista de deseos y visualizar la lista de productos favoritos.

## Características
- Mostrar una lista de productos.
- Agregar y eliminar productos de la lista de deseos.
- Persistencia de datos en `localStorage` para la lista de deseos.
- Navegación entre la lista de productos y la lista de deseos.

### Tecnologías Utilizadas
- **Ionic**: Framework para aplicaciones móviles.
- **React**: Biblioteca JavaScript para construir interfaces de usuario.
- **Capacitor**: Plataforma para integrar capacidades nativas.

# Inicio Rápido

### 1. Clonar el repositorio

git clone https://github.com/tuusuario/online-store.git
cd online-store
npm install
npm run dev
npm run build
npm run test.unit



#### **Estructura del Proyecto**
Documenta las principales carpetas y archivos.

```markdown
# Estructura del Proyecto

- `src/`: Contiene todo el código fuente de la aplicación.
  - `components/`: Componentes reutilizables de la aplicación.
    - `ProductList.tsx`: Componente que lista los productos.
    - `AppHeader.tsx`: Encabezado de la aplicación.
  - `services/`: Contiene los servicios que manejan la lógica de negocio.
    - `productService.ts`: Servicio para obtener los productos.
  - `interface/`: Define las interfaces de TypeScript utilizadas.
    - `Product.ts`: Define la interfaz para los productos.

- `public/`: Archivos públicos y recursos.
- `package.json`: Contiene las dependencias y scripts del proyecto.

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

# Capacitor - Capacidades Nativas

Este proyecto usa Capacitor para aprovechar las capacidades nativas del dispositivo.

### Plugins Utilizados
- `@capacitor/app`: Para manejar el ciclo de vida de la aplicación.
- `@capacitor/haptics`: Para proporcionar retroalimentación táctil.
- `@capacitor/keyboard`: Para manejar eventos del teclado.
- `@capacitor/status-bar`: Para controlar la barra de estado en el dispositivo.

Para más información sobre cómo Capacitor integra funcionalidades nativas, revisa la [documentación oficial](https://capacitorjs.com/docs).

# Ejecutar en Dispositivo Móvil

Para ejecutar la aplicación en un dispositivo físico, sigue estos pasos:

### 1. Android
- Asegúrate de tener Android Studio instalado.
- Conéctate a tu dispositivo Android.
- Ejecuta el siguiente comando:
```bash
npx cap open android

