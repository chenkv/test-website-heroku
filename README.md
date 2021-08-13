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
    <li>
      <a href="#future-steps">Future Steps</a>
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
    
which you can then access from your browser at localhost:3000. As of now, you should see a simple page with a navigation bar and a giant map in the center with some data points plotted on it. So far, our project contains a nonfunctional navigation bar with a drawer and a map in the center of the screen. The map takes addresses, uses Mapbox's geocache API to convert it into coordinates, and then plots the data points on the map.



## Project Structure

### Pages

The pages directory is where each page should be located, for example `index`. Each page should be a js file that returns HTML, as Next.js will automatically convert it to HTML when requested. For more information, refer to [Next.js Documentation](https://nextjs.org/docs/basic-features/pages).

[_app.js](https://nextjs.org/docs/advanced-features/custom-app) and [_document.js](https://nextjs.org/docs/advanced-features/custom-document) can be used for things like persistent layout, global CSS, and much more.

### Components

Anything in the components folder returns a component of a webpage. In general, anything that may be reused across pages should be a component in this folder.

`Layout.js` wraps any page that uses it with a `<Head>`, `<header>`, `<AppBar>`, and `<footer>`. It's used to make it easier to import the basic site layout to any future pages.

`AppBar.js` mainly uses Material-UI to return the application bar that you see on the top of the page. There is known to be a couple errors logged into the console from the appbar related to the location of the `<button>` component.

`Map.js` uses Mapbox and returns a map component. This is done by creating and loading a map once the page has been loaded, as it will cause an error otherwise. [This tutorial](https://dev.to/naomigrace/how-to-integrate-mapbox-gl-js-in-your-next-js-project-without-react-map-gl-or-a-react-wrapper-library-50f) was used to create the map. Anything related to the map should be done here, like stylizing, adding data points, layers, etc.

_**!!! If the map isn't loading !!!**_

Our Mapbox layout was built with reference to our accounts made with Mapbox. Therefore, you should change the access token to another access token, such as the public one (pk.eyJ1IjoicGVuZ3Vpb29vIiwiYSI6ImNrcmNmeGc1eTUycTMydm10dGFqZmlyaTkifQ.RYQDCD2tHifk0r-ky8DEBw). You also need to change the map's style, as that is also custom. For now you can use the basic style `style: "mapbox://styles/mapbox/streets-v11",` where the map is created. If you want to create your own style, make an account on Mapbox and you can customize your own map, then replace the `style` key.

### Utilities

Anything in the utilities folder serves a specific function.

`AddressToCoordinates.js` takes in an address as a parameter and uses Mapbox's geocaching API to get the coordinates that correspond to that address.

`RetrieveFromDatabase.js` is intended to get all the data from every shooting from the Cloud Analytics team's backend API. As of now, the API isn't hosted yet so the file currently returns a fixed set of data.

### Styles

Currently, the styles folder is empty. However, it should be used to store the CSS files of the project that can then be imported to each page or globally through `_app.js`.



## Future Steps

As of now, the dashboard is calling a fixed set of data. It is not yet connected to the shootings database that will be hosted on Azure. When the API is hosted, data from the database should be retrieved in `RetrieveFromDatabase.js`.

Data should also be presented in other ways, such as bar graphs or a gradient map. The dashboard should also look more professional and fleshed out, hopefully with the help of a graphic designer.

If needed, an internal dashboard should be created to see more data specific to their subscription (camera feed, alert systems, notifications, etc.)
