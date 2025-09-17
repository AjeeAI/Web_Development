const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const about_c = document.getElementById('about_me');
const contact_c = document.getElementById('contact');
const skill_c = document.getElementById('skills');   
// button1.addEventListener('click', () => {
//     alert('Button 1 clicked!');
//     document.getElementById('about_me').style.display = 'flex';
//     document.getElementById('contact').style.display = 'none';
//     document.getElementById('skills').style.display = 'none';
// });

// button2.addEventListener('click', () => {
//     alert('Button 2 clicked!');
//     document.getElementById('about_me').style.display = 'none';
//     document.getElementById('contact').style.display = 'flex';
//     document.getElementById('skills').style.display = 'none';
// });

// button3.addEventListener('click', () => {
//     alert('Button 3 clicked!');
//     document.getElementById('about_me').style.display = 'none';
//     document.getElementById('contact').style.display = 'none';
//     document.getElementById('skills').style.display = 'flex';
// });


button1.onclick = () =>{
  document.getElementById('about_me').style.display = "flex";
  document.getElementById('contact').style.display = "none";
  document.getElementById('skills').style.display = "none";
}

button2.onclick = () =>{
  document.getElementById('about_me').style.display = "none";
  document.getElementById('contact').style.display = "flex";
  document.getElementById('skills').style.display = "none";
}

button3.onclick = () =>{
  document.getElementById('about_me').style.display = "none";
  document.getElementById('contact').style.display = "none";
  document.getElementById('skills').style.display = "flex";
}
