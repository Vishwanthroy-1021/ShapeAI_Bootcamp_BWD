import React from "react";

function Footer() {
  const fullyear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright @{fullyear}</p>
      </footer>
    </div>
  );
}
export default Footer;
