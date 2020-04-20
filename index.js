function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    console.log(katzDeliLine[0])  
  }
  else {
    console.log("There is nobody waiting to be served!")
  }
}
