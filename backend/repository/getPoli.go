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
	fmt.Println("Kode poli", idpoli)
	repo.db.Where("kd_poli_bpjs=?", idpoli).Find(&listpoli)
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
	fmt.Println(res.ListPoli)
	return &res
}
