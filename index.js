const nonCapitalizedWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.substr(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string) {
    const splitString = string.split(" ")
    splitString[0] = splitString[0][0].toUpperCase() + splitString[0].substr(1)
    for (let i=1; i<splitString.length; i++) {
      if (nonCapitalizedWords.includes(splitString[i]) === false) {
        splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substr(1)
      } 
    }
    return splitString.join(" ")
  }
  //add static methods here
}