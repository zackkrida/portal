// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

document.addEventListener("drop", (event) => {
	event.preventDefault()
	event.stopPropagation()

	if (event.dataTransfer.files.length === 0) return
	const firstFile = event.dataTransfer.files[0]

	const img = document.createElement("img")
	img.src = firstFile.path
	document.querySelector("body").appendChild(img)
})

document.addEventListener("dragover", (e) => {
	e.preventDefault()
	e.stopPropagation()
})

document.addEventListener("dragenter", (event) => {
	console.log("File is in the Drop Space")
})

document.addEventListener("dragleave", (event) => {
	console.log("File has left the Drop Space")
})
