# OLX Frontend Workshop
A project prepared for a frontend workshop in February 2023.

## Requirements
- [Node v18+](https://nodejs.org/en/)
- NPM v6.14+ (Automatically installed with Node)
- Your favorite text editor, we recommend [VS Code](https://code.visualstudio.com) for this workshop

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

At the root of the project create a file `.env` to store our permanent environment variables. We will need it later on. More information about environment variables can be found [here](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env).

For now let's just add this variable to the `.env` file
```sh
REACT_APP_API_BASE="http://localhost:4040"
```

Run the app using:
```sh
npm start
```

You should see the app running on [http://localhost:3000/](http://localhost:3000/).

![initial-app-page](/olx-frontend-workshop/docs/images/01-initial-app-page.png)

