import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-dark nav-start">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link text-white">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/LivroLista">
          <a className="nav-link text-white">LivroLista</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/LivroDados">
          <a className="nav-link text-white">LivroDados</a>
        </Link>
      </li>
    </nav>
  );
};
