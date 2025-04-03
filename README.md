# `Learn-React`

# ⚛️ React

Biblioteca universal (Se puede ejecutar en el cliente y servidor) de javaScript para construir interfaces de usuario. Es declarativo, de codigo abierto y esta basado en componentes.

## Historia

Es de **Meta** (Facebook, Instagram, etc). nacio en el 2011 para simplificat UI creado por Jordan Walke, un ingeniero de software de Facebook, quien liberó un primer prototipo de React llamado "FaxJS".

Usado por primera vez en el Feed de Noticias de Facebook en **2011**, después en Instagram en **2012** y se volvió código abierto en la JSConf US en mayo de **2013**.

## Por que aprender React

- **Framework más demandado** en el mundo occidental, siendo Angular el segundo.
- Lo aprendido se puede aplicar a React Native en **app móviles**.
- **Mantenimiento asegurado**.
- Ayuda con el resto de frameworks y p**asar de un framework a otro.**
- **Futuro prometedor**.
- **API estable**, mucha de la sintaxis no cambia o el cambio es fácil de migrar.
- **Comunidad enorme**, un monton de preguntas y respuestas, hackatones y ayuda.

## JSX

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

# 🔓 Creación e instalación

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
cd <nombre-proyecto>
npm install
npm run dev
```

# ⚙️ Estructura de proyecto

```bash
Proyecto/
│── node_modules/    # Dependencias del proyecto, no modificarse manualmente
│── public/          # Archivos estáticos accesibles sin procesamiento
│ ├── vite.svg       # Logo de Vite incluido por defecto
│── src/             # Código fuente de la aplicación
│ ├── assets/        # Recursos estáticos usados dentro del código fuente
│ │ ├── react.svg    # Logo de React para la interfaz inicial
│ ├── App.css        # Estilos específicos para el componente App.jsx
│ ├── App.jsx        # Componente principal de la aplicación
│ ├── index.css      # Estilos globales de la aplicación
│ ├── main.jsx       # Punto de entrada del proyecto, renderiza App.jsx en index.html
│── .gitignore       # Archivos y carpetas que Git debe ignorar (ej., node_modules/)
│── eslint.config.js # Configuración de ESLint para mantener buenas prácticas de código
│── index.html       # Archivo base donde React se monta en el <div id="root"></div>
│── package.json     # Metadatos del proyecto, dependencias y scripts de ejecución
│── README.md        # Documentación del proyecto
│── vite.config.js   # Configuración de Vite (alias, plugins, optimización, etc.)
```

# 🔍 Comparación con otras tecnologías

| Característica           | Angular                        | React                 | Vue                   |
| ------------------------ | ------------------------------ | --------------------- | --------------------- |
| **Lenguaje base**        | TypeScript                     | JavaScript            | JavaScript            |
| **Arquitectura**         | Basado en módulos              | Basado en componentes | Basado en componentes |
| **Data Binding**         | Bidireccional                  | Unidireccional        | Ambas                 |
| **Estado Global**        | RxJS, NgRx                     | Redux, Context API    | Vuex, Pinia           |
| **CLI Oficial**          | Sí (Angular CLI`               | No (Usa Vite, CRA)    | Sí (Vue CLI)          |
| **Renderizado**          | SPA, SSR con Angular Universal | SPA, SSR con Next.js  | SPA, SSR con Nuxt.js  |
| **Curva de Aprendizaje** | Alta                           | Media                 | Baja                  |

# ⛑️ Recursos

- Documentación oficial: [React](https://es.react.dev/)
- Preguntas y respuesta de la comunidad: [React wiki](https://www.reactjs.wiki/)
- Transformar js a jsx: [SWC Speedy Web Compiler](https://swc.rs/playground)
