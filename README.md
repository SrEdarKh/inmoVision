# 🏡 InmoVision – Plataforma Inmobiliaria Moderna

<p align="center">
  <img src="https://img.shields.io/badge/Status-En%20Desarrollo-yellow?style=flat-square" alt="Estado">
  <img src="https://img.shields.io/badge/Framework-Django-092E20?style=flat-square&logo=django" alt="Django">
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Estilos-TailwindCSS-38B2AC?style=flat-square&logo=tailwindcss" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/Backend-Python%20%7C%20Django-blue?style=flat-square&logo=python" alt="Python">
</p>

---

## 🚀 Descripción del Proyecto

**InmoVision** es una plataforma web inmobiliaria moderna que integra **dos entornos backend y dos frontends** conectados entre sí. Permite la **gestión eficiente de propiedades**, usuarios y operaciones inmobiliarias mediante **interfaces administrativas y públicas** con tecnologías actuales.

### 🧩 Estructura general del proyecto

```
inmo-vision/
│
├── back_end/gestion_propiedades/    # 🧱 Backend principal con Django (admin y API)
│   ├── backend/                     # Configuración principal Django
│   ├── propiedades/                 # App interna de propiedades
│   ├── venv/                        # Entorno virtual (NO se sube)
│
├── front_end/                       # 🎨 Frontend público (React + Tailwind)
│   ├── src/                         # Componentes, hooks, vistas
│   ├── public/                      # index.html y assets
│
├── dashboard_admin/                 # ⚙️ Interfaz React de gestión interna (admin dashboard)
│
└── README.md                        # 📘 Este archivo
```

---

## ⚙️ Tecnologías Utilizadas

| Tipo | Tecnología | Descripción |
|------|-------------|-------------|
| 🖥️ Frontend | **React.js** | Framework para la interfaz dinámica del usuario. |
| 🎨 Estilos | **Tailwind CSS** | Sistema de diseño moderno, rápido y adaptable. |
| ⚙️ Backend | **Django (Python)** | Framework robusto para el manejo de la lógica del negocio. |
| 🔗 API REST | **Django REST Framework** | Comunicación entre frontend y backend. |
| 🧩 Base de Datos | **SQLite / MySQL / MariaDB** | Sistema de persistencia de datos. |
| 🔐 Seguridad | `.env` + CORS | Variables de entorno y control de orígenes permitidos. |

---

## 🧠 Características Principales

- ✅ Gestión completa de propiedades (creación, edición, eliminación).  
- ✅ Panel administrativo con autenticación de usuarios.  
- ✅ Visualización pública de propiedades con filtros dinámicos.  
- ✅ Integración de API REST entre front y back.  
- ✅ Diseño responsive con **TailwindCSS**.  
- ✅ Arquitectura modular y preparada para despliegue.

---

## 🧰 Instalación y Ejecución (Desarrollo)

> A continuación se muestra el flujo recomendado para ejecutar los dos backends y los dos frontends en local. Ajusta rutas si tu estructura difiere.

### 🔹 1) Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO
```

### 🔹 2) Backend principal (Django: gestión de propiedades / admin)
```bash
cd back_end/gestion_propiedades
python -m venv venv
# Windows PowerShell
venv\Scripts\activate
# Linux / MacOS
# source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser   # crear superusuario para /admin
python manage.py runserver
```
Backend admin disponible en: `http://127.0.0.1:8000/admin/` (API en `http://127.0.0.1:8000/api/`)

### 🔹 3) Frontend público (React + Tailwind)
```bash
cd ../../../front_end
npm install
# Si usas Vite:
npm run dev
# Si usas CRA:
# npm start
```
Frontend público disponible en: `http://localhost:5173` (Vite) o `http://localhost:3000` (CRA).

### 🔹 4) Dashboard administrativo (React) 
```bash
cd ../dashboard_admin
npm install
npm run dev  # o npm start según configuración
```
Dashboard disponible en otro puerto (ej. `http://localhost:5174`)

---

## 🔒 Seguridad y Exclusiones

**No subir a GitHub**:
- `.env` (variables secretas)
- `db.sqlite3` u otras bases locales
- `venv/` y `node_modules/`
- Llaves privadas (`*.pem`, `*.key`)
- Archivos de credenciales

Incluye un `.env.example` en el repo explicando variables necesarias sin valores sensibles.

---

## 🌍 Conexión Frontend ↔ Backend

- API base (ejemplo): `http://127.0.0.1:8000/api/`  
- Configura la variable en frontend (Vite): `VITE_API_BASE_URL=http://127.0.0.1:8000/api/` en `project/.env.local`

Ejemplo en código (fetch):
```js
const API = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api/";
const res = await fetch(`${API}propiedades/`);
```

---

## 📦 Cómo subir este README a GitHub (paso a paso)

1. Copia este archivo `README.md` a la raíz de tu repositorio local (donde está `.gitignore` y `manage.py`).

2. Abre una terminal en la raíz del repo y ejecuta:
```bash
git status
git add README.md
git commit -m "Agregar README principal del proyecto"
```

3. Si aún no tienes remoto configurado, créalo en GitHub y conecta:
```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main
```

4. Si ya existía el remoto, solo empuja:
```bash
git push origin main
```

> 🔑 Si Git te pide credenciales, usa un **Personal Access Token (PAT)** en lugar de tu contraseña. Puedes generarlo en GitHub > Settings > Developer settings > Personal access tokens.

---

## 📝 Contribuciones

Si trabajas en equipo, crea ramas y PRs. Ejemplo de flujo:
```bash
git checkout -b feature/nueva-funcionalidad
# trabajar...
git add .
git commit -m "Añadir nueva funcionalidad"
git push origin feature/nueva-funcionalidad
# crear PR en GitHub
```

---

## 🧾 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Puedes usarlo, modificarlo y redistribuirlo siguiendo los términos de la licencia.

---

## 👩‍💻 Autor(es)

     ..InmoVisión..

**SrEdarkh_Nicolle_Csmart**

---
