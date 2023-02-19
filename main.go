package main

import (
	"changeme/backend/repository"
	"embed"
	"os"

	"github.com/joho/godotenv"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	r := repository.NewRepository()
	app := NewApp(r)
	godotenv.Load()
	// Create application with options
	err := wails.Run(&options.App{
		Title:  os.Getenv("REACT_APP_TITLE"),
		Width:  1280,
		Height: 678,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		Fullscreen: true,
		Frameless:  false,
		// BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup: app.startup,
		Bind: []interface{}{
			app,
			r,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
