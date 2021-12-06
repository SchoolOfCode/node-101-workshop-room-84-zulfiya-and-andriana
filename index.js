let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

  console.log(myCollection);

// 2c.

  function describeItem (item){
        console.log(item.length);
  }
describeItem(myCollection);

  function describeFirtstItem (item){
    console.log(item);
}

describeFirtstItem(myCollection[0].name);

// 2d.
// Now make a function called describeCollection that takes in an array as a parameter.
// The function should loop through the array, and for each item, it should call the describeItem function so it displays a message according to how many you have in your collection.

function describeCollection (array){
    for (let i=0; i < array.length; i++){
        describeItem(array[i]);
        console.log(describeItem(array[i]));
    }
}

describeCollection(myCollection);