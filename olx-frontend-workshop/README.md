# OLX Frontend Workshop
A project prepared for a frontend workshop in February 2023.

## Requirements
- [Node v18+](https://nodejs.org/en/)
- NPM v6.14+ (Automatically installed with Node).
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
