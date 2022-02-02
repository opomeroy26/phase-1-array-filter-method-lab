function findMatching (drivers, string) {
  return drivers.filter(function(el){
    if (el.toLowerCase() === string.toLowerCase()) {
      return el
    } 
  })
}

function fuzzyMatch (drivers, string) {
  return drivers.filter(function(el){
    if  (el.startsWith(string)){
      return el
    }
  })
}

function matchName (driver, string) {
  return driver.filter(function(el){
    if (el.name === string){
      return el
    }

  })
}