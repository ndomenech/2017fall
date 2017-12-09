import * as React from 'react';

export const Nav = () => 
<nav ClassName='navbar navbar-expand-lg navbar-light bg-light'>
    <a ClassName='navbar-brand' href='#'>Memes Inc.</a>
    <button ClassName='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
        <span ClassName='navbar-toggler-icon'></span>
    </button>
    <div ClassName='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div ClassName='navbar-nav'>
        <a ClassName='nav-item nav-link active' id='home-link' href='./index.html'>Home <span ClassName='sr-only'>(current)</span></a>
        <a ClassName='nav-item nav-link' id='signup-link' href='signup.html'>Signup</a>
        <a ClassName='nav-item nav-link' href='rules.html'>Rules</a>
        <a ClassName='nav-item nav-link disabled' href='#'>Cool Memes</a>
        </div>
    </div>
</nav>