Vite + TypeScript + TailwindCSS:

📁 Estructura del Proyecto

src/: carpeta donde está el código principal.

tailwind.config.js: configuración de estilos con Tailwind.

package.json: define las dependencias y scripts del proyecto.
 
NOTAS_ sucias__:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


✅ visualizarlo correctamente?

Abre la carpeta descomprimida

En la terminal del VS Code, ejecuta:
para front
° npm install
° snpm run dev
Esto iniciará el servidor Vite y abrirá la web en tu navegador (normalmente en http://localhost:5173).


🧩 para en back
* revisar la version actual de python, sino desinstalarla y volverla a instalar
* desde la carpeta inmo-vision-version2.1 19-04-25\inmo-vision-version2.1 19-04-25\inmovision_backend>
    
    * .\venv\Scripts\activate
        * pip install djangorestframework
        * pip freeze > requirements.txt
        * pip install django-cors-headers
        * pip freeze > requirements.txt
        * py manage.py runserver
esto iniciará el servidor Django con el (http://127.0.0.1:8000/api/api/propiedades/)
pd base :: admin 1234

🐱‍👤Gracias por Leerme🐓....



---
**🔩

Este proyecto está estructurado con dos backends y dos frontends.

---

#### Proyecto 1: API REST de desarrollo

- **Backend:**
  Se encuentra en la carpeta `back_end`, dentro de la subcarpeta `gestion_propiedades`. Para ejecutarlo:
  1. Abre una terminal y navega a `back_end/gestion_propiedades`.
  2. Asegúrate de tener el entorno virtual de Python activado.
  3. Ejecuta el servidor con el comando:
     ```
     python manage.py runserver
     ```

- **Frontend:**
  Se encuentra en `front_end/src`. En una terminal nueva:
  1. Navega a la carpeta `front_end/src`.
  2. Ejecuta el frontend con uno de los siguientes comandos:
     ```
     npm start
     ```
     o
     ```
     npm run dev
     ```

---,⚙

#### Proyecto 2: Proyecto principal (InmoVision)

- **Backend:**
  Ubicado en la carpeta `inmovision-backend`. Para ejecutarlo:
  1. Abre una terminal y navega a la carpeta `inmovision-backend`.
  2. Activa el entorno virtual correspondiente.
  3. Ejecuta el archivo `manage.py` con:
     ```
     python manage.py runserver
     ```

- **Frontend:**
  El frontend correspondiente se encuentra en la carpeta `project`. Para iniciarlo:
  1. Abre una nueva terminal y navega a `project`.
  2. Ejecuta:
     ```
     npm start
     ```
     o
     ```
     npm run dev
     ```

---

#### Notas:

- Es indispensable que el entorno virtual de Python esté activado antes de ejecutar cada backend.
- Asegúrate de instalar todas las dependencias con los comandos:
  - Para el backend:
    ```
    pip install -r requirements.txt
    ```
  - Para el frontend:
    ```
    npm install
    ```
by Nicoll and Sr_Edarkh, cualquier duda me llaman🤣🤣 320678....

Pdta no busquen la documentación....yo soy la documentación😃😄😁🤣

 no abrir "data:image/jpeg;base64,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"
