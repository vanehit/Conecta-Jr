# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Conecta JR Blog

Puedes ver el blog en vivo aquí: [Conecta JR Blog](https://conecta-jr.vercel.app)

**Conecta JR** es un blog donde compartimos contenido sobre tecnología, programación, desarrollo web y más. Nuestro objetivo es crear una comunidad de aprendizaje y colaboración entre desarrolladores y entusiastas de la tecnología.
**El Dashboard de Tendencias en GitHub permite visualizar de manera interactiva cuáles son los lenguajes de programación más utilizados en los repositorios con más de 10,000 estrellas en GitHub. La información se obtiene a través de la GitHub API, y se muestra en gráficos dinámicos. Además muestra Noticias de Tecnología en tiempo real.

## Descripción

En **Conecta JR**, podrás encontrar artículos, tutoriales y recursos útiles para mejorar tus habilidades de programación, conocer nuevas herramientas y aprender más sobre el mundo del desarrollo web. Además, tendrás la oportunidad de interactuar con otros lectores y dejar tus comentarios(a futuro).

## Funcionalidades

- **Publicación de Artículos**: Los artículos están organizados por categorías (Tecnología, Programación, Herramientas, etc.).
- **Comentarios**: Los usuarios pueden dejar sus opiniones sobre cada publicación.
- **Búsqueda**: Encuentra fácilmente artículos usando el sistema de búsqueda por palabras clave.
- **Responsive**: El blog está optimizado para verse bien en cualquier dispositivo, ya sea móvil, tablet o escritorio.
- **Gráfico de Barras: Muestra los lenguajes de programación más populares en repositorios con +10,000 estrellas.
- **Lista de Lenguajes: Visualización de la cantidad de repositorios por lenguaje.
- **Consumo de API: Obtención de datos en tiempo real desde GitHub y gnews.io.
- **Interfaz Responsiva: Optimizada para móviles y escritorio.

## Tecnologías Utilizadas

- **Frontend**: React, React Router, Bootstrap
- **Backend** (en contrucción): Node.js, Express
- **Base de Datos** (en contrucción): MongoDB 
- **Estilos**: Sass, CSS

## Cómo Ejecutar el Proyecto Localmente

Para comenzar a trabajar con el proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/vanehit/Conecta-Jr.git

2. Navega a la carpeta del proyecto:
    ```bash
    cd Conecta-Jr
3. Instala las dependencias:
    npm install
4. Crea un archivo .env en la raíz del proyecto y agrega tu API Key de GitHub:
    VITE_GITHUB_API_KEY=tu_api_key_aqui
5. Inicia el servidor de desarrollo:
    npm run dev
6. Abre tu navegador y ve a http://localhost:3000 para ver la aplicación en funcionamiento.


## Backend (Futuro)

Actualmente, el backend está en construcción y se implementará utilizando **Node.js** y **Express**. El backend se encargará de gestionar las publicaciones, comentarios y otras funcionalidades relacionadas con la base de datos (MongoDB). En una futura versión, se agregará una API REST para la comunicación entre el frontend y el backend.


## Contribuciones

¡Gracias por tu interés en contribuir al proyecto Conecta JR!

Si deseas contribuir, aquí te explico cómo puedes hacerlo:

Sugerencias: Si tienes sugerencias o ideas para mejorar el proyecto, no dudes en abrir un issue para discutirlas. Apreciamos todas las ideas y comentarios que puedan mejorar el blog.

Esperamos tus sugerencias y contribuciones para hacer crecer la comunidad de Conecta JR. ¡Gracias por tu apoyo!
