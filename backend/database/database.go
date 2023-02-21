package database

import (
	"context"
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"gorm.io/gorm/schema"
)

func NewDb(ctx context.Context) *gorm.DB {
	godotenv.Load()
	var err error
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		os.Getenv("DB_User"),
		os.Getenv("DB_Password"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_Port"),
		os.Getenv("DB_Name"),
	)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{Logger: logger.Default.LogMode(logger.Info), NamingStrategy: schema.NamingStrategy{SingularTable: true}})
	if err != nil {
		runtime.LogDebug(ctx, "DB CONNECT ERROR")
		return nil
	}

	return db
}
func GetInstanceConnect(ctx context.Context) *gorm.DB {
	godotenv.Load()
	var err error
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		os.Getenv("DB_User"),
		os.Getenv("DB_Password"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_Port"),
		os.Getenv("DB_Name"),
	)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{Logger: logger.Default.LogMode(logger.Silent)})

	if err != nil {
		runtime.LogDebug(ctx, "DB CONNECT ERROR")
	}
	return db
}
