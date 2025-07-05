window.onload = function () {
  document.getElementById("popup").style.display = "flex";
};

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}



  fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      fetch("https://script.google.com/macros/s/AKfycbwdvogt9pbIzpeg8PwS1ST_cXrcR9Nsii2_iTZs1EiaxqhusSYHGqxSMUqXMXBeY0Sf/exec", {
        method: "POST",
        body: JSON.stringify({
          ip: data.ip,
          city: data.city,
          country: data.country_name
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => console.log("Visitante registrado"));
    })
    .catch(err => console.error("Error:", err));
