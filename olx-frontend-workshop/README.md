# OLX Frontend Workshop
A project prepared for a frontend workshop in February 2023.

## Requirements

- [Node v18+](https://nodejs.org/en/)
- NPM v6.14+ (Automatically installed with Node).
- [Docker (Desktop for Mac/Windows, Engine for Linux)](https://www.docker.com/get-started).
- Your favorite text editor, we recommend [VS Code](https://code.visualstudio.com) for this workshop but any other would work.
- Internet browser, we recommend Google Chrome which will be used for this workshops but any other would work.

# Development
## Initial setup

Start by quickly setting up a single-page React application using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).
```sh
npx create-react-app olx-frontend-workshop
```

Go inside the newly created folder:
```sh
cd olx-frontend-workshop
```

At the root of the project, create an `.env` file where permanent variables will be kept. You can learn more about environment variables [here](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env).

Run the app using:
```sh
npm start
```

You should see the app running on [http://localhost:3000/](http://localhost:3000/).

![initial-app-page](/olx-frontend-workshop/docs/images/01-initial-app-page.png)

## First steps
### Clean-up

1. Let's clean up the React boilerplate starting with `App.js` file.
```diff
- import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
+       <h1>OLX Mini App</h1>
-       <img src={logo} className="App-logo" alt="logo" />
-      <p>
-        Edit <code>src/App.js</code> and save to reload.
-       </p>
-       <a
-         className="App-link"
-         href="https://reactjs.org"
-         target="_blank"
-         rel="noopener noreferrer"
-       >
-         Learn React
-      </a>
      </header>
    </div>
  );
}

export default App;
```

2. Now let's clean up the styles we do not need anymore from `App.css`.
```diff
.App {
+  max-width: 1200px;
+  padding: 0 16px 16px 16px;
+  margin: auto;
-  text-align: center;
}

- .App-logo {
-   height: 40vmin;
-   pointer-events: none;
- }
-
- @media (prefers-reduced-motion: no-preference) {
-  .App-logo {
-    animation: App-logo-spin infinite 20s linear;
-  }
- }
-
.App-header {
+  text-align: center;
-  background-color: #282c34;
-  min-height: 100vh;
-  display: flex;
-  flex-direction: column;
-  align-items: center;
-  justify-content: center;
-  font-size: calc(10px + 2vmin);
-  color: white;
}
-
- .App-link {
-  color: #61dafb;
-}
-
- @keyframes App-logo-spin {
-  from {
-    transform: rotate(0deg);
-  }
-  to {
-    transform: rotate(360deg);
-  }
- }
```

3. Remove `logo.svg` file from the `/src` folder.

### Configuration

1. Add a configuration file which will be needed later on to reach our API. In order to do that, create a new folder in `/src` scope called `config` and inside it, create an `index.js` file with below content:
```js
const config = {
  api_ads: `${process.env.REACT_APP_API_BASE}/api/ads`,
};

export default config;
```

2. Add configuration which will allow us to run our project using Docker alongside backend. In order to do that, create a file in the root of the project called `Dockerfile` (no extension) with below content:
```docker
FROM node:16.3.0-alpine

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND
# package-lock.json are copied where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

3. In order to be able to use the `Dockerfile` we need to create one more file in the root of the project called `docker-compose.yml` with below content:
```yml
version: "3.2"
services:
  frontend:
    build:
      context: .
      dockerfile: ./Dockerfile
    ports:
      - 3000:3000
    volumes:
      - ".:/app"
    env_file: .env
    container_name: mini-olx-frontend

  database:
    image: mysql:5.7.22
    environment:
      MYSQL_ROOT_PASSWORD: ""
      MYSQL_ALLOW_EMPTY_PASSWORD: 1
    container_name: mini-olx-db
    ports:
      - 33061:3306
    volumes:
      - mini-olx-data:/var/lib/mysql

  backend:
    image: aipms/projects:mini-olx-backend
    depends_on:
      - database
    environment:
      WAIT_HOSTS: database:3306
    ports:
      - 4040:4040
    container_name: mini-olx-backend

volumes:
  mini-olx-data:
```

Right now your folder structure should look similar to this:
```sh
.
├── Dockerfile
├── docker-compose.yml
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── config
    │   └── index.js
    ├── index.css
    ├── index.js
    ├── reportWebVitals.js
    └── setupTests.js
```

4. Run the project using Docker command.
_Note: If you still have the previous process (from `npm start`) running, kill it first (using `ctr/cmd + c` in the terminal) and only then run below command._
```sh
docker-compose up
```

Once the dependencies load (it will take a moment), our page should look like this:
![app-ran-by-Docker](/olx-frontend-workshop/docs/images/02-app-ran-by-Docker.png)