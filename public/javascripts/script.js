// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks

// Iteration 1 using callbacks

function displayImage(imageUrl) {
  let imageTag = document.createElement('img')
  imageTag.src=imageUrl
  document.getElementById('table').appendChild(imageTag)
}


// callBack(steak)
function makeSteak() {
  addFood(steak[0], "#steak", () => {
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  displayImage('/public/images/steak.jpg')
                });
              });
            });
          });
        });
      });
    });
  });
}




// Iteration 2 using `.then()`

// Iteration 2 using `.then()`
function makePotatoes() {
  addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[1], "#mashPotatoes").then(() =>
      addFood(mashPotatoes[2], "#mashPotatoes").then(() =>
        addFood(mashPotatoes[3], "#mashPotatoes").then(() =>
          addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
            displayImage('/public/images/mashPotatoes.jpg')
          }).
          catch(
            (error = console.log(error))
          )
        )
      )
    );
  });
}



// Iteration 3 using async/await

  async function makeFood() {
    for(let i = 0; i < brusselSprouts.length; i++) {
      let response = await addFood(brusselSprouts[i], "#brusselSprouts")
     }
     displayImage('/public/images/brusselSprouts.jpg')
  }

  const readyAudio = new Audio('/public/media/dinnerIsServed.mp3')

  
  const promiseOne = makeSteak()
  const promiseTwo = makePotatoes()
  const promiseThree = makeFood()
  
  Promise.all([promiseOne,promiseTwo,promiseThree])
  .then(alertButton)
  .then(readyAudio.play())
  
