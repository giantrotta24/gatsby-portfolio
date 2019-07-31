import React from 'react';

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black small text-center text-white-50">
      <div className="container">
        Copyright &copy; Gianfranco Trotta {currentYear}
      </div>
    </footer>
  );
}

export default Footer;
