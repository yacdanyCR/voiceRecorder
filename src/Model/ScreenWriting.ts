class ScreenWriting {
	static render() {
		const $app = document.querySelector("#app") as HTMLDivElement
		const section = document.createElement("section") as HTMLElement
		const div_writing__Section = document.createElement("div") as HTMLDivElement
		const div_writing__Section_place = document.createElement("div") as HTMLDivElement
		const div_recordIcon = document.createElement("div") as HTMLDivElement
		const iconStartMicrophone = document.createElement("img") as HTMLImageElement
		const iconStopMicrophone = document.createElement("img") as HTMLImageElement
		const eraserIcon = document.createElement("img") as HTMLImageElement

		$app.append(section)
		div_writing__Section.className = "writing__Section"
		section.append(div_writing__Section)
		div_writing__Section_place.className = "writing__Section--Place paper container"
		div_writing__Section.append(div_writing__Section_place)

		div_recordIcon.className = "writing_Section--Icon"
		div_writing__Section.append(div_recordIcon)

		iconStartMicrophone.className = "writing__Record__Section"
		iconStartMicrophone.alt = "icon"
		iconStartMicrophone.src = "/start_microphone.svg"
		iconStartMicrophone.width = 70

		iconStopMicrophone.className = "writing__StopRecord__Section"
		iconStopMicrophone.alt = "icon"
		iconStopMicrophone.src = "/stop_microphone.svg"
		iconStopMicrophone.width = 70
		iconStopMicrophone.hidden = true

		eraserIcon.className = "writing__Eraser__Section"
		eraserIcon.alt = "icon"
		eraserIcon.src = "/eraser.svg"
		eraserIcon.width = 70

		div_recordIcon.append(iconStartMicrophone)
		div_recordIcon.append(iconStopMicrophone)
		div_recordIcon.append(eraserIcon)
	}
}

export {
	ScreenWriting
}