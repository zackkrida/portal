document.addEventListener("drop", (event) => {
	event.preventDefault()
	event.stopPropagation()

	if (event.dataTransfer.files.length === 0) return
	const firstFile = event.dataTransfer.files[0]

	const img = document.createElement("img")
	img.src = firstFile.path
	document.querySelector("body").appendChild(img)
	window.electron.imageAdded({ width: 400, height: 400 })
})

document.addEventListener("dragover", (e) => {
	e.preventDefault()
	e.stopPropagation()
})

// document.addEventListener("dragenter", (event) => {
// 	console.log("File is in the Drop Space")
// })

// document.addEventListener("dragleave", (event) => {
// 	console.log("File has left the Drop Space")
// })
