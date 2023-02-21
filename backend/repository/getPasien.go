package repository

import "changeme/backend/database/models"

func (repo *Repository) GetPasienByNIK(nik string) *models.Pasien {
	pas := new(models.Pasien)
	repo.db.Where("no_ktp=?", nik).Find(pas)
	return pas
}
