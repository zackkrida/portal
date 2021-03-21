const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {
	imageAdded: (dimensions) => ipcRenderer.send("image-added", dimensions),
})
