window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  // Recipe:

  // create a variable for the rides data
  let ridesData = json 

  // loop through the rides data
  for (i=0; i < ridesData.length; i++) {

    // create a variable to store each ride in memory
    let rideElement = ridesData[i]

    // create a variable for the HTML element we are going to add to
    let rideList = document.querySelector(`.rides`)

    // create variable for noober purple service level and number of passengers
    let nooberPurple = rideElement.purpleRequested 
    let partySize = rideElement.numberOfPassengers

    // create variables for any rides data elements which need to be combined before adding to HTML
    let passengerName = `${rideElement.passengerDetails.first} ${rideElement.passengerDetails.last}`
    let phoneNumber = rideElement.passengerDetails.phoneNumber
    let pickupAddress = rideElement.pickupLocation.address
    let pickupCity = rideElement.pickupLocation.city 
    let pickupState = rideElement.pickupLocation.state 
    let pickupZip = rideElement.pickupLocation.zip 
    let dropoffAddress = rideElement.dropoffLocation.address
    let dropoffCity = rideElement.dropoffLocation.city
    let dropoffState = rideElement.dropoffLocation.state
    let dropoffZip = rideElement.dropoffLocation.zip 


    // create a conditional to determine the level of service for each ride
    if (nooberPurple == true) {
      // insert HTML for noober purple
      rideList.insertAdjacentHTML(`beforeend`,`
          <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>Noober Purple</span>
        </h1>

        <div class="border-4 border-gray-500 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${partySize} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${pickupAddress}</p>
              <p>${pickupCity}, ${pickupState} ${pickupZip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${dropoffAddress}</p>
              <p>${dropoffCity}, ${dropoffState} ${dropoffZip}</p>
            </div>
          </div>
        </div>
      `)

    } else if (partySize > 3) {
      // insert HTML for noober XL
      rideList.insertAdjacentHTML(`beforeend`,`
          <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>Noober XL</span>
        </h1>

        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${partySize} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${pickupAddress}</p>
              <p>${pickupCity}, ${pickupState} ${pickupZip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${dropoffAddress}</p>
              <p>${dropoffCity}, ${dropoffState} ${dropoffZip}</p>
            </div>
          </div>
        </div>
      `)

    } else {
      // insert HTML for noober X
      rideList.insertAdjacentHTML(`beforeend`,`
          <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>Noober X</span>
        </h1>

        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${partySize} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${pickupAddress}</p>
              <p>${pickupCity}, ${pickupState} ${pickupZip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${dropoffAddress}</p>
              <p>${dropoffCity}, ${dropoffState} ${dropoffZip}</p>
            </div>
          </div>
        </div>
      `)
    }


  }

})