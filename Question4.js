const obj = {
    name: "John",
    address: {
      city: "New York",
      zip: 10001
    }
  };
  function deepCopy(obj){
    if(obj===null || typeof obj !== "object"){
        return  obj;
    }
    let copy = Array.isArray(obj)?[]:{}
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
  }
  const copy = deepCopy(obj);
  console.log(copy);
  // Output: { name: "John", address: { city: "New York", zip: 10001 } }
  
  