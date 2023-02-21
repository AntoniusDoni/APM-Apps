package repository

import (
	"changeme/backend/utils"
	"encoding/json"
	"fmt"
	"time"
)

func (repo *Repository) GetListDockterBPJS(kodepoli string) utils.ListDokterBpjs {
	now := time.Now().Local()
	date := now.Format(utils.YYYYMMDD)
	url := fmt.Sprintf(utils.GET_DOKTER_BPJS, utils.GET_CLAIM, date, kodepoli)
	resBpjs, err := utils.GETBPJSAPI(&utils.ReqInfo{URL: url}, 30*time.Second)
	var res utils.ListDokterBpjs
	if err != nil {
		return utils.ListDokterBpjs{List: nil}
	}
	json.Unmarshal(resBpjs.Body, &res)
	return res
}

func (repo *Repository) GetListDokterKontrol(kodepoli, jenis, tanggal string) *utils.ListDokterKontrol {
	fmt.Println(tanggal)
	tanggal, err := utils.ParseStrigDate(tanggal)
	var res utils.ListDokterKontrol
	if err != nil {
		fmt.Println("ERROR PARSE DATE :", err)
		res.MetaData.Code = "503"
		res.MetaData.Message = utils.Failed
		return &res
	}
	Urlreq := fmt.Sprintf(utils.GET_LIST_DOKTOR_KONTROL, utils.GET_CLAIM, jenis, kodepoli, tanggal)
	resBpjs, err := utils.GETBPJSAPI(&utils.ReqInfo{URL: Urlreq}, 30*time.Second)
	res.MetaData.Code = resBpjs.MetaData.Code
	res.MetaData.Message = resBpjs.MetaData.Message
	if err != nil {
		fmt.Println("ERROR REQUEST :", err)
		return &res
	}
	json.Unmarshal(resBpjs.Body, &res)

	return &res
}
