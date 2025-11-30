Act as a senior backend engineer designing a production-ready Node.js microservices architecture for an e-commerce platform.

Tech stack:
- Node.js + Express for each service
- MongoDB for data storage
- JWT-based authentication (Auth service)
- REST APIs between services (for now)
- Docker for containerization
- Jest + Supertest for testing

Goal:
Generate ONLY a clean folder structure (directory tree) for a monorepo that contains multiple microservices for an e-commerce system. Do NOT write any actual implementation code, just folder and file names. Use realistic, industry-style naming.

Monorepo root should include:
- `services/` folder containing all microservices
- `gateway/` for API gateway or edge service
- `libs/` or `shared/` for reusable shared modules (DTOs, common middlewares, logging utilities, etc.)
- `infra/` for deployment config (Docker Compose, Kubernetes manifests, etc.)
- `docs/` for architecture diagrams and documentation
- `.gitignore`
- `README.md`
- `docker-compose.yml`
- `.github/workflows/` for CI/CD pipelines

Inside `services/`, create these services:
- `auth-service` (user signup/login, JWT, profile)
- `catalog-service` (products, categories, pricing)
- `cart-service` (user cart items)
- `order-service` (order creation, status, history)
- `payment-service` (integrations with payment gateway)
- `notification-service` (email/SMS/push notifications)
- (Optional) `inventory-service` (stock levels)

For EACH service, use a consistent Node.js service structure like this:

- `src/`
  - `config/` (db config, env config, etc.)
  - `controllers/`
  - `routes/`
  - `models/` (Mongoose schemas)
  - `services/` (business logic)
  - `middlewares/`
  - `utils/`
  - `app.js`
  - `server.js`
- `tests/` (unit + integration tests, e.g. using Jest + Supertest)
- `Dockerfile`
- `.env.example`
- `package.json`
- `jest.config.js`
- `README.md` (service-specific documentation)

In `libs/` or `shared/`, include folders like:
- `logging/` (shared logger)
- `http-client/` (shared Axios or fetch wrapper)
- `auth/` (shared JWT verification middleware, user context helpers)
- `config/` (shared config loader)
- `constants/`

In `infra/`, include:
- `k8s/` (Kubernetes manifests, if applicable)
- `nginx/` or `gateway-config/` for API gateway / reverse proxy config
- `scripts/` for deployment or local dev scripts

In `gateway/`, use a similar Node.js structure:
- `src/` (routes, proxy logic, auth checks)
- `Dockerfile`
- `package.json`

Important formatting instructions:
- Output the structure as a clean, indented directory tree.
- Use `/` at the end of directory names.
- Show representative key files, but do NOT include any code contents.
- Do NOT explain anything in prose. Just output the folder tree.

services/
  auth-service/
    src/
      config/
      controllers/
      routes/
      models/
      services/
      middlewares/
      utils/
      app.js
      server.js
    tests/
    Dockerfile
    .env.example
    package.json
    jest.config.js
    README.md

  catalog-service/
    src/
      config/
      controllers/
      routes/
      models/
      services/
      middlewares/
      utils/
      app.js
      server.js
    tests/
    Dockerfile
    .env.example
    package.json
    jest.config.js
    README.md

  cart-service/
    src/
      config/
      controllers/
      routes/
      models/
      services/
      middlewares/
      utils/
      app.js
      server.js
    tests/
    Dockerfile
    .env.example
    package.json
    jest.config.js
    README.md

  order-service/
    src/
      config/
      controllers/
      routes/
      models/
      services/
      middlewares/
      utils/
      app.js
      server.js
    tests/
    Dockerfile
    .env.example
    package.json
    jest.config.js
    README.md

  payment-service/
    src/
      config/
      controllers/
      routes/
      models/
      services/
      middlewares/
      utils/
      app.js
      server.js
    tests/
    Dockerfile
    .env.example
    package.json
    jest.config.js
    README.md

  notification-service/
    src/
      config/
      controllers/
      routes/
      models/
      services/
      middlewares/
      utils/
      app.js
      server.js
    tests/
    Dockerfile
    .env.example
    package.json
    jest.config.js
    README.md

  inventory-service/
    src/
      config/
      controllers/
      routes/
      models/
      services/
      middlewares/
      utils/
      app.js
      server.js
    tests/
    Dockerfile
    .env.example
    package.json
    jest.config.js
    README.md
gateway/
  src/  
    routes/
    proxy.js
    auth.js
    app.js
    server.js
  Dockerfile
  package.json
libs/
  logging/
    logger.js 
  http-client/
    httpClient.js
  auth/
    jwtMiddleware.js
    userContext.js
  config/
    configLoader.js
  constants/
    index.js
infra/
  k8s/
    auth-service-deployment.yaml
    catalog-service-deployment.yaml
    cart-service-deployment.yaml
    order-service-deployment.yaml
    payment-service-deployment.yaml
    notification-service-deployment.yaml
    inventory-service-deployment.yaml
    gateway-deployment.yaml
  gateway-config/
    nginx.conf
  scripts/
    deploy.sh
docs/
  architecture-diagram.png
.gitignore
README.md
docker-compose.yml
.github/workflows/
  ci-cd-pipeline.yml
