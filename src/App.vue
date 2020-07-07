<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Fitch Microfrontends</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/vince">Vince's Movie Recommendations</b-nav-item>
          <b-nav-item to="/rashidmalav">Rashid and Malavs List</b-nav-item>
          <b-nav-item to="/matt">Matt's micro-frontend</b-nav-item>
          <b-nav-item to="/cool-app">Tyler's cool app</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
