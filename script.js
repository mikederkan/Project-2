//Parallax scrolling for svg header background

window.addEventListener('scroll', () => { 
  const scrollY = window.scrollY; //Records how far the page is scrolled up or down
  //Get the three svgs 
  const svg1 = document.getElementById('svg1');
  const svg2 = document.getElementById('svg2');
  const svg3 = document.getElementById('svg3');
  //Parallax speed (lower is slower, appears further away)
  const speed1 = 0.3;
  const speed2 = 0.6;
  const speed3 = 0.9;

  //Make it move up or down by how far the page is scrolled times the speed factor above
  svg1.style.transform = `translateY(${scrollY * speed1}px)`;
  svg2.style.transform = `translateY(${scrollY * speed2}px)`;
  svg3.style.transform = `translateY(${scrollY * speed3}px)`;
});

//Pseudo email form

document.getElementById("userForm").addEventListener("submit",
function(event) {
  event.preventDefault(); //Stops regular form handling (no page refresh)
  //Grab the values from the form fields
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  //Checks for empty inputs
  if(name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields"); //Alerts user if forms are empty, 
      return; //does not submit form
  }

  //Sends a confirmation message if all fields are full. Does not actually email anything. 
  alert(`Thank you, ${name}! Your email (${email}) has been received.`);
});