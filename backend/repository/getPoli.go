package repository

import (
	"changeme/backend/database/models"
	"changeme/backend/utils"
	"encoding/json"
	"fmt"
	"time"
)

func (repo *Repository) GetListPoli(idpoli string) []*models.MapingPoliBpjs {
	listpoli := []*models.MapingPoliBpjs{}
	repo.db.Find(&listpoli).Where("kd_poli_bpjs=?", idpoli)
	return listpoli
}
func (repo *Repository) GetMapPoli(idpoli string) *models.MapingPoliBpjs {
	listpoli := new(models.MapingPoliBpjs)
	// fmt.Println("Kode poli", idpoli)
	repo.db.Where("kd_poli_bpjs=?", idpoli).Find(&listpoli)
	return listpoli
}
func (repo *Repository) GetMapPoliBpjs(idpoli string) *models.MapingPoliBpjs {
	listpoli := new(models.MapingPoliBpjs)
	// fmt.Println("Kode poli", idpoli)
	repo.db.Where("kd_poli_rs=?", idpoli).Find(&listpoli)
	return listpoli
}
func (repo *Repository) GetKodePoliBPJS(poli string) *utils.ListPoli {
	urlReq := fmt.Sprintf(utils.GET_LIST_POLI, utils.GET_CLAIM, poli)
	resBpjs, err := utils.GETBPJSAPI(&utils.ReqInfo{URL: urlReq}, 30*time.Second)
	var res utils.ListPoli
	if err != nil {
		return &utils.ListPoli{
			MetaData: utils.HeadResponse{Code: "404", Message: utils.Failed},
		}
	}
	res.MetaData.Code = resBpjs.MetaData.Code
	json.Unmarshal(resBpjs.Body, &res)
	return &res
}

func (repo *Repository) GetPoliKontrolBPJS(nomor, jenis, tanggal string) *utils.ListPoliKontrol {
	tanggalKontrol, err := utils.ParseStrigDate(tanggal)
	if err != nil {
		return &utils.ListPoliKontrol{
			MetaData: utils.HeadResponse{Code: "503", Message: utils.Failed},
		}
	}
	urlReq := fmt.Sprintf(utils.GET_LIST_POLI_KONTROL, utils.GET_CLAIM, jenis, nomor, tanggalKontrol)
	resBpjs, err := utils.GETBPJSAPI(&utils.ReqInfo{URL: urlReq}, 30*time.Second)
	var res utils.ListPoliKontrol
	if err != nil {
		return &utils.ListPoliKontrol{
			MetaData: utils.HeadResponse{Code: "404", Message: utils.Failed},
		}
	}
	res.MetaData.Code = resBpjs.MetaData.Code
	json.Unmarshal(resBpjs.Body, &res.Response)
	return &res
}
