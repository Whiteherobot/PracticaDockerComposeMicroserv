# 📦 Microservicio de Productos — Docker Compose

Este repositorio contiene un microservicio sencillo en Node.js (Express) que sirve información de productos y usa PostgreSQL como almacenamiento. Todo está orquestado con Docker Compose para facilitar la ejecución local.

## 📋 Índice

- Requisitos
- Levantar el proyecto (Docker Compose)
- Endpoints disponibles
- Acceder a la base de datos
- Usar una imagen desde Docker Hub (opcional)
- Detener y limpiar
- Estructura del proyecto
- Notas

---

## 🚀 Requisitos

Antes de ejecutar el proyecto necesitas:

- Docker Desktop (o Docker Engine)
- Docker Compose (incluido en Docker Desktop moderno)
- (Opcional) Git para clonar el repo

---

## 🐳 Levantar el proyecto (rápido)

1. Clona el repositorio (si aplica):

```powershell
git clone https://github.com/tu_usuario/microservice-example.git
cd microservice-example
```

2. Levanta los servicios con Docker Compose:

```powershell
docker compose up --build
```

Esto construirá la imagen del servicio y levantará dos contenedores principales:

- products-api — puerto 3000 (microservicio Node.js)
- products-db — puerto 5432 (PostgreSQL con inicialización)

En los logs verás una línea similar a:

> Products microservice running on port 3000

---

## 📡 Endpoints disponibles

- Comprobar que el servicio está arriba:

```http
GET http://localhost:3000/health
```

- Listar productos:

```http
GET http://localhost:3000/products
```

Si quieres probar con curl / PowerShell (ejemplo PowerShell):

```powershell
Invoke-RestMethod -Method GET http://localhost:3000/health
Invoke-RestMethod -Method GET http://localhost:3000/products
```

---

## 🐘 Acceder a la base de datos (psql)

1. Entrar al contenedor de PostgreSQL:

```powershell
docker exec -it products-db bash
```

2. Abrir psql dentro del contenedor:

```bash
psql -U postgres -d products_db
```

3. Comandos útiles dentro de psql:

- Ver tablas:

```sql
\dt
```

- Ver datos:

```sql
SELECT * FROM products;
```

- Salir de psql:

```sql
\q
```

- Salir del contenedor:

```bash
exit
```

---

##  Usar la imagen desde Docker Hub (opcional)

Si publicas la imagen en Docker Hub y quieres usarla en lugar de construir localmente, edita `docker-compose.yml` para apuntar a tu imagen:

```yaml
services:
  products-api:
    image: TUUSUARIO/products-api:1.0
```

Luego levanta con:

```powershell
docker compose up
```

---

## 🧹 Detener y limpiar

- Para detener los servicios cuando están en primer plano: pulsa Ctrl + C
- Para detener y eliminar contenedores, redes y volúmenes creados por compose:

```powershell
docker compose down
```

Si quieres eliminar también los volúmenes (p. ej. para reiniciar la DB desde cero):

```powershell
docker compose down -v
```

---

## 📁 Estructura del proyecto

```
microservice-example/
├── src/
│   └── app.js         # servidor Express
├── db-init.sql        # script para inicializar la BD
├── Dockerfile         # imagen para products-api
├── docker-compose.yml
├── package.json
└── README.md
```



