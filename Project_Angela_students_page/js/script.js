class Profile {
	constructor(image, name, surname, age, education) {
			this.image = image;
			this.name = name;
			this.surname = surname;
			this.age = age;
   		this.education = education;  
   	}
 //////////////////method for output data////////////////////////
  	render() {
  		let msg = `
  		<div class="col-lg-3 col-md-6" col-sm-12>
  			<div class="thumbnail" id="thumbnail">
  				<img src=" ${this.image} ">
  				<div class="caption">
  					<h3> ${this.name} </h3>
  					<p><strong>
  						<span>Nachname:  ${this.surname} </span><br>
  						<span>Alter:  ${this.age} </span><br>	
  						<span>Ausbildung:  ${this.education} </span><br>
  					</p></strong>
  				</div>
  			</div>
  		</div>`;
  	return msg;
  	}
};    


//////////////////ProfileData (Objects are stored in an Array)/////////////////////
var people = [

new Profile("img/woman1.jpg", "Maria", "Müller", "23", "Kauffrau"),
new Profile("img/woman2.jpg", "Kristina", "Marx", "22", "Kauffrau"),
new Profile("img/man1.jpg", "Nico", "Reinhardt", "17", "Kaufmann"),
new Profile("img/man2.jpg", "Daniel", "Grau", "25", "Hotelfachmann"),
new Profile("img/man3.jpg", "Bilal", "Ghazi", "19", "Front Office"),
new Profile("img/woman3.jpg", "Arabella", "Angular", "24", "Straßenmeister"),
new Profile("img/woman4.jpg", "Stefanie", "Oberlehner", "18", "Gemeindeprüferin"),
new Profile("img/woman5.jpg", "Sabine", "Sonderbar", "20", "Straßenmeisterin"),
];


/////////////////Output////////////////////////////
function showAllProfiles() {
	let allProfiles = document.getElementById("thumbnail_container");
	for (let i = 0; i < people.length; i++) {
		allProfiles.innerHTML += people[i].render();
	}
};










