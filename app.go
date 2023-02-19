package main

import (
	"changeme/backend/database"
	"changeme/backend/repository"
	"context"

	"gorm.io/gorm"
)

// App struct
type App struct {
	ctx  context.Context
	db   *gorm.DB
	repo *repository.Repository
}

// NewApp creates a new App application struct
func NewApp(r *repository.Repository) *App {
	return &App{
		repo: r,
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (app *App) startup(ctx context.Context) {
	app.ctx = ctx
	app.db = database.NewDb(ctx)
	app.repo.Setup(ctx, app.db)
}
