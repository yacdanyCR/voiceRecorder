import { ScreenWriting } from "./Model/ScreenWriting"

ScreenWriting.render()
const $startRecording = document.querySelector(".writing__Record__Section") as HTMLImageElement
const $stopRecording = document.querySelector(".writing__StopRecord__Section") as HTMLImageElement
const $writing__Section = document.querySelector(".writing__Section--Place") as HTMLDivElement
const $writing__Eraser__Section = document.querySelector(".writing__Eraser__Section") as HTMLImageElement

const voiceRecord = new webkitSpeechRecognition()
voiceRecord.lang = "es-Es"
voiceRecord.interimResults = false
voiceRecord.continuous = true

$writing__Eraser__Section.addEventListener("click", () => {
  while ($writing__Section.firstChild) {
    $writing__Section.removeChild($writing__Section.firstChild)
  }
})

$startRecording.addEventListener("click", () => {
  $startRecording.hidden = true
  $stopRecording.hidden = false

  voiceRecord.start()
})

$stopRecording.addEventListener("click", () => {
  $startRecording.hidden = false
  $stopRecording.hidden = true
  voiceRecord.abort()
})

voiceRecord.onresult = (ev: SpeechRecognitionEvent) => {
  const data = ev.results[ev.results.length - 1][0].transcript
  $writing__Section.innerHTML += `<p>${data}</p>`
}