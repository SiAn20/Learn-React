# Learn-React
## React
Biblioteca universal (Se puede ejecutar en el cliente y servidor) de javaScript para construir interfaces de usuario. Es declarativo, de codigo abierto y esta basado en componentes.

### Historia
Es de **Meta** (Facebook, Instagram, etc). nacio en el 2011 para simplificat UI creado por Jordan Walke, un ingeniero de software de Facebook, quien liberó un primer prototipo de React llamado "FaxJS".

Usado por primera vez en el Feed de Noticias de Facebook en **2011**, después en Instagram en **2012** y se volvió código abierto en la JSConf US en mayo de **2013**.

### Por que aprender React
- **Framework más demandado** en el mundo occidental, siendo Angular el segundo.
- Lo aprendido se puede aplicar a React Native en **app móviles**.
- **Mantenimiento asegurado**.
- Ayuda con el resto de frameworks y p**asar de un framework a otro.**
- **Futuro prometedor**.
- **API estable**, mucha de la sintaxis no cambia o el cambio es fácil de migrar.
- **Comunidad enorme**, un monton de preguntas y respuestas, hackatones y ayuda.

### JSX
**JSX (JavaScript XML)** es una extensión de la sintaxis de JavaScript utilizada en React para definir la estructura de la interfaz de usuario de una manera similar a HTML.

Permite escribir componentes de forma más intuitiva y expresiva, combinando JavaScript con una sintaxis parecida a XML. Ejemplo:
```bash
//jsx
function Saludo() {
    const nombre = "Juan";
    return <h1>Hola, {nombre}!</h1>;
}
```
```bash
//js
function Saludo() {
  const nombre = "Juan";
  return React.createElement("h1", null, `Hola, ${nombre}!`);
}
```
Para transformar de js a jsx React usa: **swc, Babel**

## Recursos
- [Documentación oficial de React](https://es.react.dev/)
- [React wiki](https://www.reactjs.wiki/) , preguntas y respuesta de la comunidad.
- Transformar js a jsx: [SWC Speedy Web Compiler](https://swc.rs/playground)

## Creación e instalación
Usaremos Vite

Antes de comenzar, asegúrate de tener Node.js instalado. Puedes verificarlo con:
```bash
node -v
```
Crear proyecto con vite, colocar cualquiera de los siguientes comandos:
```bash
npm create vite@latest
npm create vite@latest <nombre-proyecto> --template react
```
Instalar dependencias y poner el proyecto en marcha:
```bash
npm install
npm run dev
```

## Explicación de Directorios Generados

### node_modules
Directorio donde se instalan todas las dependencias del proyecto. No debe modificarse manualmente.

### public
Carpeta donde se almacenan archivos estáticos como imágenes, fuentes y favicon.ico. Estos archivos no pasan por el proceso de compilación.

### src
Directorio principal del código fuente de la aplicación.

- **assets** → Carpeta para almacenar recursos como imágenes o estilos.
- **main.jsx** → Punto de entrada de la aplicación donde se renderiza el componente principal (App).

### Archivos en la raíz

- **.gitignore** → Lista de archivos y carpetas que Git debe ignorar (ej., node_modules).
- **index.html** → Archivo base de la aplicación donde se inyecta el código de React.
- **package.json** → Contiene metadatos del proyecto, scripts de ejecución y las dependencias utilizadas.
- **vite.config.js** → Configuración de Vite para optimizar el proyecto y definir alias o plugins.
- **README.md** → Archivo de documentación del proyecto.

