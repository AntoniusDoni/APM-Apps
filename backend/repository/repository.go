package repository

import (
	"context"

	"gorm.io/gorm"
)

type Repository struct {
	ctx context.Context
	db  *gorm.DB
}

func NewRepository() *Repository {
	return &Repository{}
}

func (r *Repository) Setup(ctx context.Context, db *gorm.DB) {
	r.ctx = ctx
	r.db = db
}
