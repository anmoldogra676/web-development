let add = {
    city: "Delhi",
    region: "Pitampura",
    pin: 110001,
  };
  
  // variable declare krne ka tarika
  let { region, pin, city, myVar } = add; // variable ka naam and key name same hona chahie 
  // region = add.region
  // city = add.city
  // pin = add.pin
  //  these 3 statements are same as above 7 line which is written 
  // these are for shorter syntax 


  console.log(region);
  console.log(pin);
  console.log(city);
    // myVar is not the key in add so it will return undefined
  console.log(myVar);