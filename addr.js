class Contact{
    constructor(...params){        
        this.firstName = params[0]        
        this.lastName = params[1];        
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }

    // UC2 : Validate Contact Details
    get firstName(){ return this._firstName}
    set firstName(firstName){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(firstName))
            this._firstName = firstName
        else throw "Incorrect First Name"
    }
    get lastName(){ return this._lastName}
    set lastName(lastName){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(lastName))
            this._lastName = lastName
        else throw "Incorrect Last Name"
    }
    get address(){ return this._address}
    set address(address){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(address))
            this._address = address
        else throw "Incorrect Address"
    }
    get city(){ return this._city}
    set city(city){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(city))
            this._city = city
        else throw "Incorrect City"
    }
    get state(){ return this._state}
    set state(state){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(state))
            this._state = state
        else throw "Incorrect State"
    }
    get zip(){ return this._zip}
    set zip(zip){
        let letterRegex = RegExp('^[^a-zA-z]+$')
        let splRegex = RegExp('^[!@#$^&%*()+=-[]\/{}|:<>?,.]+$')
        let pinRegex = RegExp('^[0-9]{3}[\\s]{0,1}[0-9]{3}$')
        if(letterRegex.test(zip) && !splRegex.test(zip) && pinRegex.test(zip)){
            zip = parseInt(zip.replace(" ",""))
            this._zip = zip
        }
        else throw "Incorrect Zip"
    }
    get phoneNo(){ return this._phoneNo}
    set phoneNo(phoneNo){
        let regex = RegExp('[0-9]{2}\\s[0-9]{10}')
        if(regex.test(phoneNo))
            this._phoneNo = phoneNo
        else throw "Incorrect Phone Number"
    }
    get email(){ return this._email}
    set email(email){
        let regex = RegExp('^[a-z]+([_+-.]?[a-z0-9]+)*[@][a-z0-9]+[.]([a-z]+){2,}([.]?[a-z]{2})?$')
        if(regex.test(email))
            this._email = email
        else throw "Incorrect Email"
    }

    toString(){
        return "FirstName: " + this.firstName + " LastName: " + this.lastName + " Address: " + this.address + " City: " + this.city +
                " State: " + this.state + " Zip: " + this.zip + " PhoneNO: " + this.phoneNo + " Email: " + this.email;
    }

}

// UC3 : Create Addresss Book Array and Add Contacts
let contact1 = new Contact("Bobby", "Deol", "Punjab", "Patiala", "PUnjab", "126292", "91 8179032121", "obby123@gmail.com")
let contact2 = new Contact("Sanjay", "Datt", "OP in the chat", "Gurgaon", "Haryana", "352004", "91 9362287593", "op99@gmail.com")
let contact3 = new Contact("Sumit", "Sharma", "Vapi", "Vapi", "Gujarat", "561004", "91 2984280202", "sumit11@gmail.com")
let contact4 = new Contact("Sumit", "Sharma", "DLFF", "ABCD", "EFGH", "826 004", "91 4929280202", "sumit@gmail.com")
let contact5 = new Contact("Sanjana", "Jain", "DLFF", "ABCD", "EFGH", "826 004", "91 4929280202", "sanjana@gmail.com")

// UC7: No Duplicate Entry
var addressBookArray = new Array()
function addContact(contact){
    let duplicateContact = findContact(contact.firstName, contact.lastName)
    if(duplicateContact != null)
        console.log("Can't Add Contact. Dupicate Contact Found.")
    else
        addressBookArray.push(contact)
}
addContact(contact1)
addContact(contact2)
addContact(contact3)
addContact(contact4)
addContact(contact5)

// UC4: Find Contact by Name And Edit It.
function findContact(fname, lname){
    let contactToEdit;
    for(let i = 0; i < addressBookArray.length; i++){
        if(addressBookArray[i].firstName === fname && addressBookArray[i].lastName === lname)
            contactToEdit = addressBookArray[i]
    }
    return contactToEdit;
}
const prompt = require('prompt-sync')();
function findContactAndEdit(fname, lname){
    let contactToEdit = findContact(fname,lname)
    if(contactToEdit == null)
        console.log("No Contact Found To Edit")
    else{
        let input = 1;
        while(input != 9){
            console.log("1. Edit First Name \n2. Edit Last Name \n3. Edit Address \n4. Edit City \n5. Edit State");
            console.log("6. Edit ZipCode \n7. Edit Phone No \n8. Edit Email \n9. Exit")
            input = prompt("Enter Your Choice:  ")
            input = parseInt(input)
            switch (input) {
                case 1:
                    let fname = prompt("Enter the first Name: ")
                    contactToEdit.firstName = fname
                    break
                case 2:
                    let lname = prompt("Enter the last Name: ")
                    contactToEdit.lastName = lname
                    break
                case 3:
                    let address_edit = prompt("Enter the address: ")
                    contactToEdit.address = address_edit
                    break
                case 4:
                    let city_edit = prompt("Enter the city: ")
                    contactToEdit.city = city_edit
                    break
                case 5:
                    let state_edit = prompt("Enter the State: ")
                    contactToEdit.state = state_edit
                    break
                case 6:
                    let zip_edit = prompt("Enter the zip: ")
                    contactToEdit.zip = zip_edit
                    break
                case 7:
                    let phone_edit = prompt("Enter the phone number: ")
                    contactToEdit.phoneNo = phone_edit
                    break
                case 8:
                    let mail_edit = prompt("Enter the email: ")
                    contactToEdit.email = mail_edit
                    break
                case 9:
                    break
                default:
                    console.log("Wrong Input")
            }
        }
    }
}

let param1 = prompt("Enter the First Name (contact to edit):  ")
let param2 = prompt("Enter the Last Name (contact to edit):  ")
findContactAndEdit(param1, param2)

// UC5: Delete A Contact
function deleteContact(fname, lname){
    let contactToDelete = findContact(fname. lname)
    if(contactToDelete == null)
        console.log("No Contact Found To Delete")
    else
        addressBookArray.pop(contactToDelete)
}
addressBookArray.push(contact4)
let param3 = prompt("Enter the First Name (contact to delete):  ")
let param4 = prompt("Enter the Last Name (contact to delete):  ")
deleteContact(param3, param4)

// UC6: Get Number of Contacts in Address Book
function count(counter){
    return counter + 1;
}
console.log("Total Number of Contacts: " + addressBookArray.reduce(count, 0))

function searchByCityState(place, choice){
    let contacts = new Array();
    if(choice == 1){
        contacts = addressBookArray.filter(con => con.city === place)
    }
    if(choice == 2){
        contacts = addressBookArray.filter(con => con.state === place)
    }
    return contacts;
}
function searchByCityState(fname, lname, place, choice){
    let contacts = new Array();
    if(choice == 1)
        contacts = addressBookArray.filter(con => con.city === place && con.firstName === fname && con.lastName === lname)
    if(choice == 2)
        contacts = addressBookArray.filter(con => con.state === place && con.firstName === fname && con.lastName === lname)
    if(choice == 3)
        contacts = addressBookArray.filter(con => con.city === place)
    if(choice == 4)
        contacts = addressBookArray.filter(con => con.state === place)
    return contacts;
}
console.log("1. Search Particular Person By City \n2. Search Particular Person By State \n3. Search By City \n4. Search By State")
let input = prompt("Enter your choice:  ")
input = parseInt(input)
let searchedContacts;
switch (input)
{
    case 1:
        let city = prompt("Enter the city name:  ")
        let fname1 = prompt("Enter the first name:  ")
        let lname1 = prompt("Enter the last name:  ")
        searchedContacts = searchByCityState(fname1, lname1, city, 1)
        console.log("Contact Found is:  " + searchedContacts.toString())
        break
    case 2:
        let state = prompt("Enter the state name:  ")
        let fname2 = prompt("Enter the first name:  ")
        let lname2 = prompt("Enter the last name:  ")
        searchedContacts = searchByCityState(fname2, lname2, state, 2)
        console.log("Contact Found is:  " + searchedContacts.toString())
        break
    case 3:
        let cityAll = prompt("Enter the city name:  ")
        searchedContacts = searchByCityState("","", cityAll, 3)
        console.log("Contacts Found in " + cityAll + " are:  " + searchedContacts.toString())
        break
    case 4:
        let stateAll = prompt("Enter the state name:  ")
        
        searchedContacts = searchByCityState("", "", stateAll, 4)
        console.log("Contacts Found in " + stateAll +" are:  " + searchedContacts.toString())
        break
}

// UC11: Sort the contacts alphabetically
console.log("Do You Want to Sort the Contacts:  \n1. YES \n2. NO")
let inputSort = parseInt(prompt("Enter your choice:  "))
if(inputSort == 1){
    addressBookArray.sort();
    for(let i = 0; i < addressBookArray.length; i++)
        console.log(addressBookArray[i].toString())
}
    