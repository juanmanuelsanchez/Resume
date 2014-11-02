/*
var formattedName;
var formattedRole;
var formattedContactMobile;
var formattedContactEmail;
var formattedContactGithub;
var formattedContactTwiter;
var formattedContactLocation;
var formattedPictureUrl;
var formattedWelcomessage;
var formattedSkillsStart;
var formattedSkills;
var formattedSkills1;
var formattedSkills2;
var formattedWorkStart;
var formattedWorkCurrentJob;
var formattedWorkEmployer;
var formattedWorkYears;
var formattedWorkDescription;
var formattedWorkLocation;
var formattedEducationStart;
var formattedEducationName;
var formattedEducationDates;
var formattedEducationDegree;
var formattedEducationLocation;
var formattedEducationMajor;*/



//Bio Object;
//var skills= ["JavaScript", "HTML", "CSS"];
var bio= {
	"name":"Juan Manuel Sánchez",
	"role": "Front End Web Developer",
	"contacts": {
		"mobile":"567 890 123",
		"email": "juanwip@gemail.com",
		"github": "juanwip",
		"twiter":"@juanwip",
		"location":"Bilbao"
	     },
	"pictureURL": "images/fry.jpg", //Ojo, no está en la propuesta del curso
	"welcomessage": "Lorem ipsum dolor sit amet etc, etc, etc.",
	"skills": ["JavaScript", "HTML", "CSS"]
}


//Work Object:

var work= {
  "jobs": [
  {
    "title":"Front End Ninja",
    "employer":"North by NortWest",
    "location":"Cold Mountain View",
    "dates":"2011-13",
    "description":"Lorem ipsum dolor sit amet etc, etc, etc."
  },
  {
    "title":"Front End Chief Ninja",
    "employer":"Bringing up my baby Ltd.",
    "location":"Cocoa Beach",
    "dates":"2013-14",
    "description":"Lorem ipsum dolor sit amet etc, etc, etc."
  }
 ]
}

//Project Object
 var projects= {
   "project": [
  {
    "title":"",
    "dates":"",
    "description":"",
    "images":["",""]
  },
  {
    "title":"",
    "dates":"",
    "description":"",
    "images":["", ""]
  }
 ]
}


//Education Object:
var education= {
  "schools": [
  {
    "name":"",
    "degree":"",
    "dates":"",
    "location":"",
    "majors":["",""],
    "url":""
},
{
    "name":"",
    "degree":"",
    "dates":"",
    "location":"",
    "majors":["",""],
    "url":""
  }
 ],
  "onlineCourses": [
   {

   	"title":"",
   	"school":"",
    "dates":"",
    "url": ""
   }
  ]
 }
 
 

/*
//Filling education with properties:
education["schools"][0]["name"]="Etham College";
education["schools"][0]["dates"]="1998-2003";
education["schools"][0]["degree"]="Postgraduate on Economics";
education["schools"][0]["located"]="London";
education["schools"][0]["major"]="Hopkinson Smith";

//Managing the data:
formattedEducationStart=HTMLschoolStart;
formattedEducationName=HTMLschoolName.replace("%data%", education["schools"][0]["name"]);
formattedEducationDates= HTMLschoolDates.replace("%data%",education["schools"][0]["dates"] );
formattedEducationDegree= HTMLschoolDegree.replace("%data%", education["schools"][0]["degree"]);
formattedEducationLocation= HTMLschoolDates.replace("%data%", education["schools"][0]["located"]);
formattedEducationMajor=HTMLschoolMajor.replace("%data%", education["schools"][0]["major"]);

//Displaying education properties:

$('#education').append(formattedEducationStart);
$('#education').append(formattedEducationName);
$('#education').append(formattedEducationDegree);
$('#education').append(formattedEducationDates);
$('#education').append(formattedEducationLocation);
$('#education').append(formattedEducationMajor);
*/


$("#main").append(internationalizeButton);





 //Name, role, picture, welcome message
  
  var formattedRole= HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  var formattedName= HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedPictureUrl= HTMLbioPic.replace("%data%", bio.pictureURL);
  $("#header").append(formattedPictureUrl);
  var formattedWelcomessage= HTMLWelcomeMsg.replace("%data%", bio.welcomessage);
  $("#header").append(formattedWelcomessage);
 //Contact information:
  var formattedContactMobile= HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").prepend(formattedContactMobile);
  var formattedContactEmail= HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedContactEmail);
  var formattedContactGithub= HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedContactGithub);
  var formattedContactTwiter= HTMLtwitter.replace("%data%", bio.contacts.twiter);
  $("#topContacts").append(formattedContactTwiter);
  var formattedContactLocation= HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedContactLocation);

 if (bio.skills.length>0){
  //Skills:
  var formattedSkillsStart= HTMLskillsStart;
  $("#header").append(formattedSkillsStart);

  formattedSkills= HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  formattedSkills= HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
  var formattedSkills= HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);

 }

function displayWork() {

 for(job in work.jobs) {
 
  var formattedWorkStart= HTMLworkStart;
  $("#workExperience").append(formattedWorkStart);
  var formattedWorkEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedWorkTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedWorkLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
  var formattedWorkYears= HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedWorkDescription=HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkLocation 
    + formattedWorkYears + formattedWorkDescription);
  
 }
}

displayWork();



