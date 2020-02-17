


console.log("Which JavaScript Error Are You?")

const onStartedRecording = async () => {
  startLooping()
  await sleep(3)
  stopLooping()
  console.log(`You are ${getRandomJavascriptError()}`)
}

const getRandomJavascriptError = () => {
  var randomNumber = Math.random() * javascriptErrors.length
  var randomIndex = Math.round(randomNumber)
  return javascriptErrors[randomIndex]
}

const sleep = (duration) => new Promise(
  resolve => setTimeout(resolve, duration * 1000)
)

const javascriptErrors = [
  "EvalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError"
]

let looping = false
let loopIndex = 0
const loop = async () => {
  if (looping) {
    console.log(javascriptErrors[loopIndex])
    loopIndex ++
    if (loopIndex > javascriptErrors.length -1 ) {
      loopIndex = 0
    }
    await sleep(0.1)
    loop()
  }
}

const startLooping = () => {
  looping = true
  loop()
}

const stopLooping = () => looping = false

onStartedRecording()




















