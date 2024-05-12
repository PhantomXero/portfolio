import React from "react";

function Nav() {
  return (
    <div className="links">
      <ul className="list">
        <li className="h-link" id="link_1">
          <a className="" href="/index.html">
            Home
          </a>
        </li>
        <li className="h-link" id="link_2">
          <a className="" href="/public/views/portfilo.html">
            Portfolio
          </a>
        </li>
        <li className="h-link" id="link_3">
          <a className="" href="/public/views/service.html">
            Services
          </a>
        </li>
        <li className="h-link" id="link_4">
          <a className="" href="/public/views/about.html">
            About
          </a>
        </li>
        <li className="h-link" id="link_5">
          <a className="" href="/public/views/faq.html">
            FAQ
          </a>
        </li>
        <li className="h-link" id="link_8">
          <a className="" href="/public/views/reviews.html">
            Reviews
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
