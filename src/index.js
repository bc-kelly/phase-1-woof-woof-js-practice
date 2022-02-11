let dogs = []
let currentDog;

const dogBar = document.getElementById("dog-bar")
const dogDetails = document.getElementById('dog-info')
const dogImage = document.getElementById('dog-image')
const dogName = document.getElementById('dog-name')
const dogButton = document.getElementById('dog-button')
    
    dogButton.addEventListener('click', e => {
    currentDog.isGoodDog = !currentDog.isGoodDog;
    setButtonText();
    })
    function getPups () {
        fetch('http://localhost:3000/pups')
        .then(resp => resp.json())
        .then(pupData => {
            dogs = pupData;
            restOfDogs(pupData)
        })
    }

    function restOfDogs(pups) {
        pups.map(pup => {
            let dogSpan = document.createElement('span');
            dogSpan.innerHTML = pup.name
            dogBar.appendChild(dogSpan);

            dogSpan.addEventListener('click', e => {
                createDogInfo(pup)
            })
        })
    }

    function createDogInfo (pup) {
        currentDog = pup;
        dogImage.src = pup.image
        dogName.textContent = pup.name
        setButtonText();
    }        

    function setButtonText () {
        dogButton.textContent = currentDog.isGoodDog ? "Good Dog!" : "Bad Dog!";
    }

    getPups();
    
        
            // function dogsNature (dogInfo) {
            //     if (dogInfo.isDogGood === true) {
            //         dogButton.textContent = "bad dog"
            //         dogInfo.isGoodDog = false
            //     } else {
            //         dogButton.textContent = "good dog"
            //         dogInfo.isGoodDog = true
            //     }
            // }   
            // const dogDetailButton = document.getElementById("dog-detail-button")
            // dogDetailButton.addEventListener("click", (event) =>  {
            //     dogsNature(dogInfo)
            // })
        

















// // //On the page, there is a div with the id of "dog-bar". When the page loads, use fetch to get all of the pup data from your server. When you have this information, you'll need to add a span with the pup's name to the dog bar (ex: <span>Mr. Bonkers</span>).

// // // When a user clicks on a pup's span in the div#dog-bar, that pup's info (image, name, and isGoodDog status) should show up in the div with the id of "dog-info". Display the pup's info in the div with the following elements:

// // //for link need to pull in the response one not the home one, one w the backslash

// // // When a user clicks on a pup's span in the div#dog-bar, that pup's info (image, name, and isGoodDog status) should show up in the div with the id of "dog-info". Display the pup's info in the div with the following elements:

// // // an img tag with the pup's image url
// // // an h2 with the pup's name
// // // a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is true or false. Ex:

// // // When a user clicks the Good Dog/Bad Dog button, two things should happen:

// // // The button's text should change from Good to Bad or Bad to Good
// // // The corresponding pup object in the database should be updated to reflect the new isGoodDog value

// // // You can update a dog by making a PATCH request to /pups/:id and including the updated isGoodDog status in the body of the request.

// let pups;
// let dogBar;
// let currentPupId;

// const init = () => { 
// // document.addEventListener("DOMContentLoaded", () => {
// //     init ();
// // })
// dogBar = document.getElementById("dog-bar");

// dogDetailName = document.getElementById("dog-detail-name");
// dogDetailImage = document.getElementById("dog-detail-image");
// dogDetailButton = document.getElementById("dog-detail-button");
// dogDetailButton.addEventListener("click", (event) => {
//     console.log("BUTTON CLICKED")

//     let pup = pups[currentPupId -1];

//     console.log(pup);

//     pup.isGoodDog = !pup.isGoodDog;

//     setPupDetail(pup);
// })


// fetch("http://localhost:3000/pups") 
//     .then(resp => resp.json())
//     .then(pupData => {
//         console.log(pupData)

//         pupData.map(pup => {
//             createDogNameSpan(pup);
//     })
// })
// function createDogNameSpan(pup) {
//     let dogSpan = document.createElement("span");
//     dogSpan.textContent = pup.name;
//     dogBar = appendChild(dogSpan);

//  dogSpan.addEventListener("click", () => {
//         console.log("CLICK", pup.name)
//         currentPupId = pup.id;
//         setPupDetail(pup);
//     });
// }
// function setPupDetail(pup) {
//     dogDetailName.textContent = pup.name;
//     dogDetailImage.src = pup.image;
//     dogDetailButton.textContent = (pup.isGoodDog) ? "Good Dog" : "BadD Dog!";
// }


// }
// document.addEventListener("DOMContentLoaded", init);








// let dogBar, dogDetailButton, dogDetailImage, dogDetailName;

// let pups;

// let currentPup;

// document.addEventListener("DOMContentLoaded", () => {
//     init();
// })

// function init() {
//     dogBar = document.getElementById("dog-bar")
//     dogDetailName = document.getElementById("dog-detail-name")
//     dogDetailImage = document.getElementById("dog-detail-image")
//     dogDetailButton = document.getElementById("dog-detail-button")
//     dogDetailButton.addEventListener("click", (event) => {
//         console.log("BUTTON CLICKED")

//     }

//     fetch ('http://localhost:3000/pups')
//     .then(resp => resp.json())
//     .then(pupData => {
//         console.log(pupData)

//         pupData.map(pup => {
//             createDogNameSpan(pup);
//         });
//     });
// }

// function createDogNameSpan(pup) {
//     let dogSpan = document.createElement("span");
//     dogSpan.textContent = pup.name;
//     dogBar.appendChild(dogSpan);

//     dogSpan.addEventListener("click", (event) => {
//         console.log("CLICK", pup.name)
//         currentPup = pup.id; 

//         dogDetailName.textContent = pup.name;
//         dogDetailImage.src = pup.image;
//         // if (pup.isGoodDog) {
//         //     dogDetailButton.textContent = "Good Dog!";
//         // } else {
//         //     dogDetailButton.textContent = "Bad Dog";
//         // }
//         dogDetailButton.textContent = pup.isGoodDog ? "Good Dog!" : "Bad Dog!";
       
//     });
