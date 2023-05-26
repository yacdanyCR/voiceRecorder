class ScreenWriting {
	static render() {
		const $app = document.querySelector("#app") as HTMLDivElement
		const section = document.createElement("section") as HTMLElement
		const div_writing__Section = document.createElement("div") as HTMLDivElement
		const div_writing__Section_place = document.createElement("div") as HTMLDivElement
		const div_recordIcon = document.createElement("div") as HTMLDivElement

		$app.append(section)
		div_writing__Section.className = "writing__Section"
		section.append(div_writing__Section)
		div_writing__Section_place.className = "writing__Section--Place"
		div_writing__Section.append(div_writing__Section_place)

		div_recordIcon.className = "writing_Section--Icon"
		div_writing__Section.append(div_recordIcon)
	}
}

export {
	ScreenWriting
}