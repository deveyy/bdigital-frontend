import React from 'react';

export default function UIFooter() {
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2022 ? '2022' : `2022 - ${currentYear}`;
  return (
    <footer className="footer text-center">
      © {yearTxt} Service - Developed by bdigital
    </footer>
  );
}
