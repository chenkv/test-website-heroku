<br />
<h1 align="center">Assurance - Dashboard</h1>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-dashboard">About The Dashboard</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#project-structure">Project Structure</a>
      <ul>
        <li><a href="#pages">Pages</a></li>
        <li><a href="#components">Components</a></li>
        <li><a href="#utilities">Utilities</a></li>
        <li><a href="#styles">Styles</a></li>
      </ul>
    </li>
  </ol>
</details>



## About The Dashboard

The dashboard portion of the Cloud Analytics team is focused on creating a public and internal dashboard. The public dashboard should display an interactive map and provide statistics on gun violence around the world. Unfortunately for us, there isn't much specific data on any other country besides the US, so our project is currently focused on US data. We also have not started on the internal dashboard.

### Built With

* [Next.js](https://nextjs.org)
* [Material-UI](https://material-ui.com)
* [Mapbox](https://docs.mapbox.com)



<!-- GETTING STARTED -->
## Getting Started

Since this project is built with Next.js, you should first learn the basics of Next with any online tutorials. For example, this [YouTube tutorial](https://www.youtube.com/watch?v=mTz0GXj8NN0).

### Installation

Create a directory, initialize git, and pull from this branch. If you would like, you can use [nodeenv](https://pypi.org/project/nodeenv/) to create a virtual environment. Then in the terminal, run:
    
    $ npm install

which should install all of the dependencies.
    
To start the server locally, use:
    
    $ npm run dev
    
which you can then access from your browser at localhost:3000.



## Project Structure

### Pages

The pages directory is where each page should be located, for example `index`. Each page should be a js file that returns HTML, as Next.js will automatically convert it to HTML when requested. For more information, refer to [Next.js Documentation](https://nextjs.org/docs/basic-features/pages).

[_app.js](https://nextjs.org/docs/advanced-features/custom-app) and [_document.js](https://nextjs.org/docs/advanced-features/custom-document) can be used for things like persistent layout, global CSS, and much more.

### Components

Anything in the components folder returns a component of a webpage.

`Layout.js` wraps any page that uses it with a `<Head>`, `<header>`, `<AppBar>`, and `<footer>`. It's used to make it easier to import the basic site layout to any future pages.

`AppBar.js` mainly uses Material-UI to return the application bar that you see on the top of the page. There is known to be a couple errors logged into the console from the appbar.

`Map.js` uses Mapbox and returns a map component. Anything related to the map should be done here, like adding data points, layers, etc.

### Utilities

Anything in the utilities folder serves a specific function.

`AddressToCoordinates.js` takes in an address as a parameter and uses Mapbox's geocaching API to get the coordinates that correspond to that address.

`RetrieveFromDatabase.js` is intended to get all the data from every shooting from the Cloud Analytics team's backend API. As of now, the API isn't hosted yet so the file currently returns a fixed set of data.

### Styles

Currently, the styles folder is empty. However, it can be used to store the CSS files of the project that can then be imported to each page or globally through `_app.js`.
