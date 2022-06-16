const data = [
   {
      name: 'John Connor',
      age: 26,
      gender: 'Male',
      lookingFor: 'Female',
      location: 'Boston',
      image: 'https://randomuser.me/api/portraits/men/60.jpg'
   },
   {
      name: 'William Shakspeare',
      age: 31,
      gender: 'Male',
      lookingFor: 'Female',
      location: 'Chicago',
      image: 'https://randomuser.me/api/portraits/men/80.jpg'
   },
   {
      name: 'Sara Thomas',
      age: 27,
      gender: 'Female',
      lookingFor: 'Male',
      location: 'New York',
      image: 'https://randomuser.me/api/portraits/women/60.jpg'
   },
   {
      name: 'Ellie Jhonson',
      age: 28,
      gender: 'Female',
      lookingFor: 'Male',
      location: 'Iowa',
      image: 'https://randomuser.me/api/portraits/women/67.jpg'
   },
   {
      name: 'Scott Pilgrim',
      age: 30,
      gender: 'Male',
      lookingFor: 'Female',
      location: 'Boston',
      image: 'https://randomuser.me/api/portraits/men/77.jpg'
   }
];

const profiles = profileIterator(data);
//console.log(profiles.next().value.name);

nextP();

document.getElementById('next').addEventListener('click', nextP);

function nextP(){
   const currentProfile = profiles.next().value;

   if (currentProfile !== undefined){
      document.getElementById('profileDisplay').innerHTML = 
      `<ul class="list-group">
         <li class="list-group-item">Name: ${currentProfile.name}</li>
         <li class="list-group-item">Age: ${currentProfile.age}</li>
         <li class="list-group-item">Location: ${currentProfile.location}</li>
         <li class="list-group-item">I'm a ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
      </ul>
      `;
   
      document.getElementById('imageDisplay').innerHTML = 
      `
      <img src="${currentProfile.image}">
      `;
   } else{
      window.location.reload()
   }
}

//Profile iterator
function profileIterator (profiles){
   let nextProfile = 0;

   return {
      next: function(){
         return nextProfile < profiles.length ?
         { value: profiles[nextProfile++], done: false } :
         { done: true }
      }
   };
}