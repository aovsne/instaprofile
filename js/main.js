function getUserInfo(){
	var result = document.getElementById('result')

	// setting variables for the first, last, email and phone no.

	var firstName = document.getElementById('firstName').value
	console.log(firstName)
	var lastName = document.getElementById('lastName').value
	console.log(lastName)
	var email = document.getElementById('email').value
	console.log(email)
	var phoneNo = document.getElementById('phone').value
	console.log(phoneNo)

	// setting variables for the gender, color and place of birth
	var gender = document.getElementsByClassName('Gender')
	var color = document.getElementsByClassName('color')
	var placeOfBirth = document.getElementsByClassName('birth')

	// save variables 
	var userGender, userColor, userBirth

	// failure, FirstName

	if(firstName == ""){
		result.className = 'failure'
		result.textContent = 'You forgot to fill your firstname.'
		return
	}
	// lastname
	if(lastName == ""){
		result.className = 'failure'
		result.textContent = 'you forgot to fill your lastname.'
		return
	}
	// loop through gender options
	for(i = 0; i < gender.length; i++){
		if(gender[i].checked){
			userGender = gender[i].value
			console.log(userGender)
		}
	}
	if(userGender == undefined){
		result.className = 'failure'
		result.textContent = 'choose gender!!'
		return
	}

	// Email
	if(email == ""){
		result.className ='failure'
		result.textContent = 'email not filled.'
		return
	}
	// phonenumber
	if(phoneNo == ""){
		result.className = 'failure'
		result.textContent = 'phone number not entered.'
		return
	}
	// loop through favorite color
	for(i = 0; i < color.length; i++){
		if(color[i].selected){
			userColor = color[i].value
			console.log(userColor)
		}
	}
	if(userColor == ""){
		result.className = 'failure'
		result.textContent = 'color not chosen!'
		return
	}
	// loop through country of birth
	for(i = 0; i < placeOfBirth.length; i++){
		if(placeOfBirth[i].checked){
			userBirth = placeOfBirth[i].value
			console.log(userBirth)
		}
	}
	if(userBirth == undefined){
		result.className = 'failure'
		result.textContent = 'birthplace not chosen yet!'
		return
	}
	

	// SUCCESS
	result.className = 'success'
	result.textContent = 'you filled everything. thanks'

	// create object Array for user's profile

	var profile = {
		name : firstName + " " + lastName,
		sex : userGender,
		contactMail : email,
		contactPhone : phoneNo,
		favcolor : userColor,
		birthContinent : userBirth

	}
	console.log(profile)
	setTimeout(function(){
		displayProfile(profile)
	}, 1500)
}

function displayProfile(profile){
	// displaying profile info
	document.getElementById('newUsername').innerText = 'Name: ' + profile.name 
	document.getElementById('newGender').innerText = 'Gender: ' + profile.sex
	document.getElementById('newEmail').innerText = 'E-mail: ' + profile.contactMail
	document.getElementById('newPhone').innerText = 'Phone number: ' + profile.contactPhone
	document.getElementById('newColor').innerText = 'favorite color: ' + profile.favcolor
	document.getElementById('newBirth').innerText = 'Continent of birth: ' + profile.birthContinent

	// hide the firstpart and display the updated profile

	document.getElementById('firstpart').style.display = "none"
	document.getElementById('secondpart').style.display = "block"

}
// addEventlistener
	document.getElementById('info').addEventListener('click', getUserInfo, false)