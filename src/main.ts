import { ScreenWriting } from "./Model/ScreenWriting"

ScreenWriting.render()

const voiceRecord = new webkitSpeechRecognition()
voiceRecord.lang = "es-Es"
voiceRecord.interimResults = false
voiceRecord.continuous = true

voiceRecord.start()

voiceRecord.onresult = (ev: SpeechRecognitionEvent) => {
  console.log(ev.results[ev.results.length - 1][0].transcript)
}