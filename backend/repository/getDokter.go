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
