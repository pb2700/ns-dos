import {lessonData} from './lessonData.js'
let currentStep = 10
let currentStepIndex = 0
const dialogText = document.querySelector('.dialog_text')
const mainWindow = document.querySelector('.window1')
const startWindow = document.querySelector('.window2')
const endScreen = document.querySelector('.end_screen')
let userName = ''
let nextStepIndex = 0


const goNextStep = (stepIndex = null) =>{
  if(stepIndex === null){
    stepIndex = currentStepIndex
  }
  nextStepIndex = lessonData.steps.findIndex((element, index)=>{
      if(element.id === lessonData.steps[stepIndex].target){
        return true
      }
  })
  displayStep(nextStepIndex)
}

async function displayStep(step){

  currentStepIndex = step
  const options = document.querySelector('.options')
  const okButton = document.querySelector('.ok_button')
  const loadBar = document.querySelector('.load_bar')

  if(lessonData.steps[currentStepIndex].type === 'end'){
    okButton.classList.add('hide')
    options.classList.add('hide')
    loadBar.classList.add('hide')
    endScreen.classList.remove('hide')
    return
  }
  if(lessonData.steps[currentStepIndex].type === 'load'){
    mainWindow.classList.remove('hide')
    okButton.classList.add('hide')
    options.classList.add('hide')
    loadBar.classList.remove('hide')
    dialogText.innerHTML = lessonData.steps[currentStepIndex].text.replace('username', userName)
    let loadDelay = new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve()}, 5000)
    })
    await loadDelay
    loadBar.classList.add('hide')
    goNextStep()
    return
  }
  if(lessonData.steps[currentStepIndex].type === 'option'){
    okButton.classList.add('hide')
    options.classList.remove('hide')
    options.innerHTML = ''
    lessonData.steps[currentStepIndex].targets.forEach((item, i)=>{
      let option = document.createElement('div')
      option.classList.add('button')
      let optionText = document.createTextNode(item.text)
      option.appendChild(optionText)
      option.addEventListener("click", ()=>{clickOption(item.target)})
      options.appendChild(option)
    })
    dialogText.innerHTML = lessonData.steps[currentStepIndex].text.replace('username', userName)
    return
  }
  if(lessonData.steps[currentStepIndex].type === 'normal'){
    mainWindow.classList.remove('hide')
    options.classList.add('hide')
    okButton.classList.remove('hide')
    dialogText.innerHTML = lessonData.steps[currentStepIndex].text.replace('username', userName)
    return
  }
  if(lessonData.steps[currentStepIndex].type === 'input'){
    startWindow.classList.remove('hide')
    options.classList.add('hide')
    okButton.classList.remove('hide')
    mainWindow.classList.add('hide')
    dialogText.innerHTML = lessonData.steps[currentStepIndex].text.replace('username', userName)
    return
  }
}

const clickOption = (id) =>{
  nextStepIndex = lessonData.steps.findIndex((element, index)=>{
      if(element.id === id){
        return true
      }
  })

  displayStep(nextStepIndex)
}

const startGame = ()=>{
  startWindow.classList.add('hide')
  mainWindow.classList.remove('hide')
  userName = document.querySelector('.login_input').value
  displayStep(2)
}

userName = ''
document.querySelector(".submit_button").addEventListener("click", () => {startGame()})
document.querySelector(".ok_button").addEventListener("click", () => {goNextStep()})
displayStep(0)

