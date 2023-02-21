package repository

import (
	"changeme/backend/database/models"
	"changeme/backend/utils"
	"encoding/json"
	"fmt"
	"log"
	"time"
)

func (repo *Repository) SearchPasien(no_rujukan, no_ka string) *utils.ResponseSearchRujukan {
	var res utils.ResponseSearchRujukan
	var exists bool
	err := repo.db.Model(&models.Pasien{}).Select("count(*) > 0").Where("no_peserta=?", no_ka).Find(&exists).Error
	if err != nil {
		res.MetaData.Code = "503"
		res.MetaData.Message = "Terjadi Kendala Jaringan"
		return &res
	}
	if exists == false {
		res.MetaData.Code = "404"
		res.MetaData.Message = utils.Pasiet_NOT_EXIST
		return &res
	} else {
		return repo.SearchRujukanByNorujukan(no_rujukan, no_ka)
	}

}

func (repo *Repository) SearchRujukanByNorujukan(no_rujukan, no_ka string) *utils.ResponseSearchRujukan {

	urlreq := fmt.Sprintf(utils.GET_BYNO_RUJUKAN, utils.GET_CLAIM, no_rujukan)
	urlgetjml := fmt.Sprintf(utils.GET_BYNO_RUJUKAN, utils.GET_CLAIM, fmt.Sprintf("JumlahSEP/1/%s", no_rujukan))
	var res utils.ResponseSearchRujukan
	resJmlrujukan, err := utils.GETBPJSAPI(&utils.ReqInfo{URL: urlgetjml}, 30*time.Second)
	if err != nil {
		res.MetaData.Code = "503"
		res.MetaData.Message = "Terjadi Kendala Jaringan"
		return &res
	}
	json.Unmarshal(resJmlrujukan.Body, &res.JumlahSEPRujukan)
	resBpjs, err := utils.GETBPJSAPI(&utils.ReqInfo{URL: urlreq}, 30*time.Second)
	if err != nil {
		res.MetaData.Code = "503"
		res.MetaData.Message = "Terjadi Kendala Jaringan"
		return &res
	}

	res.MetaData.Code = resBpjs.MetaData.Code
	res.MetaData.Message = resBpjs.MetaData.Message
	json.Unmarshal(resBpjs.Body, &res.Response)
	res.ListDokter = repo.GetListDockterBPJS(res.Response.Rujukan.PoliRujukan.Kode)
	poli := repo.GetMapPoli(res.Response.Rujukan.PoliRujukan.Kode)
	if poli.KdPoliBpjs != "" {
		res.Response.Rujukan.PoliRujukan.Kode = poli.KdPoliRs
	}
	return &res
}
func (repo *Repository) SearchRujukanByNoKa(no_ka, noSuratKontrol string) *utils.ResponseSearchRujukan {
	var res utils.ResponseSearchRujukan
	urlreq := fmt.Sprintf(utils.GETRUJUKAN_BYNO_KA, utils.GET_CLAIM, no_ka)
	resBpjs, err := utils.GETBPJSAPI(&utils.ReqInfo{URL: urlreq}, 30*time.Second)
	if err != nil {
		res.MetaData.Code = "503"
		res.MetaData.Message = "Terjadi Kendala Jaringan"
		return &res
	}

	res.MetaData.Code = resBpjs.MetaData.Code
	res.MetaData.Message = resBpjs.MetaData.Message
	json.Unmarshal(resBpjs.Body, &res.Response)
	res.ListDokter = repo.GetListDockterBPJS(res.Response.Rujukan.PoliRujukan.Kode)
	urlgetjml := fmt.Sprintf(utils.GET_BYNO_RUJUKAN, utils.GET_CLAIM, fmt.Sprintf("JumlahSEP/1/%s", res.Response.Rujukan.NoKunjungan))
	resJmlrujukan, err := utils.GETBPJSAPI(&utils.ReqInfo{URL: urlgetjml}, 30*time.Second)
	if err != nil {
		res.MetaData.Code = "503"
		res.MetaData.Message = "Terjadi Kendala Jaringan"
		return &res
	}
	json.Unmarshal(resJmlrujukan.Body, &res.JumlahSEPRujukan)
	res.NoSkdp = noSuratKontrol
	poli := repo.GetMapPoli(res.Response.Rujukan.PoliRujukan.Kode)
	if poli.KdPoliBpjs != "" {
		res.Response.Rujukan.PoliRujukan.Kode = poli.KdPoliRs
	}

	return &res
}
func (repo *Repository) SearchNoKartu(no_rujukan, no_ka string) *utils.ResponsePeserta {
	now := time.Now().UTC()
	date := now.Format(utils.YYYYMMDD)
	var res utils.ResponsePeserta
	urlreq := fmt.Sprintf(utils.GET_BYNO_KARTU, utils.GET_CLAIM, no_ka, date)
	resBpjs, err := utils.GETBPJSAPI(&utils.ReqInfo{URL: urlreq}, 30*time.Second)
	if err != nil {
		return &utils.ResponsePeserta{
			Code:    "503",
			Message: "Terjadi Kendala Jaringan",
		}
	}

	res.Code = resBpjs.MetaData.Code
	res.Message = resBpjs.MetaData.Message
	json.Unmarshal(resBpjs.Body, &res)
	return &res
}

func (repo *Repository) ListSKDP(no_ka, tanggal string) *utils.ResponseListSKDP {
	var month string
	var year string
	layout := "2006-01-02T15:04:05.000Z"
	if tanggal == "" {
		now := time.Now()
		if int(now.Month()) < 10 {
			month = fmt.Sprintf("0%v", int(now.Month()))
		} else {
			month = fmt.Sprintf("%v", int(now.Month()))
		}
		if int(now.Year()) < 10 {
			year = fmt.Sprintf("0%v", int(now.Year()))
		} else {
			year = fmt.Sprintf("%v", int(now.Year()))
		}
	} else {
		now, err := time.Parse(layout, tanggal)
		if err != nil {
			return &utils.ResponseListSKDP{
				MetaData: utils.HeadResponse{Code: "404", Message: utils.Failed},
			}
		}
		if int(now.Month()) < 10 {
			month = fmt.Sprintf("0%v", int(now.Month()))
		} else {
			month = fmt.Sprintf("%v", int(now.Month()))
		}
		if int(now.Year()) < 10 {
			year = fmt.Sprintf("0%v", int(now.Year()))
		} else {
			year = fmt.Sprintf("%v", int(now.Year()))
		}
	}

	urlreq := fmt.Sprintf(utils.GET_LISTSKDP, utils.GET_CLAIM, month, year, no_ka)
	resBpjs, err := utils.GETBPJSAPI(&utils.ReqInfo{URL: urlreq}, 30*time.Second)
	var res utils.ResponseListSKDP
	if err != nil {
		return &utils.ResponseListSKDP{
			MetaData: utils.HeadResponse{Code: "503", Message: utils.Failed},
		}
	}
	res.MetaData.Code = resBpjs.MetaData.Code
	res.MetaData.Message = resBpjs.MetaData.Message
	json.Unmarshal(resBpjs.Body, &res.Response)

	return &res
}

func (repo *Repository) ListHistory(tglmulai, tglakhir, no_ka string) *utils.ResponseListHistory {
	dateStart, err := utils.ParseStrigDate(tglmulai)
	if err != nil {
		return &utils.ResponseListHistory{
			MetaData: utils.HeadResponse{Code: "503", Message: utils.Failed},
		}
	}
	dateEnd, err := utils.ParseStrigDate(tglakhir)
	if err != nil {
		return &utils.ResponseListHistory{
			MetaData: utils.HeadResponse{Code: "503", Message: utils.Failed},
		}
	}
	urlreq := fmt.Sprintf(utils.GET_LIST_HISTORY, utils.GET_CLAIM, no_ka, dateStart, dateEnd)
	resBpjs, err := utils.GETBPJSAPI(&utils.ReqInfo{URL: urlreq}, 30*time.Second)
	var res utils.ResponseListHistory
	if err != nil {
		return &utils.ResponseListHistory{
			MetaData: utils.HeadResponse{Code: "503", Message: utils.Failed},
		}
	}
	res.MetaData.Code = resBpjs.MetaData.Code
	res.MetaData.Message = resBpjs.MetaData.Message
	json.Unmarshal(resBpjs.Body, &res.Response)
	return &res
}

func (repo *Repository) CreateSKDP(req *utils.RequestSKDP) *utils.ResponseCreateSKDP {
	tglrecana, _ := utils.ParseStrigDate(req.TglRencanaKontrol)
	now := time.Now().UTC()
	date := now.Format(utils.YYYYMMDD)

	requestbody := new(utils.InsertSKDP)
	requestbody.Request.KodeDokter = req.KodeDokter
	requestbody.Request.NoSEP = req.NoSEP
	requestbody.Request.PoliKontrol = req.PoliKontrol
	requestbody.Request.TglRencanaKontrol = tglrecana
	requestbody.Request.User = "Admin APM"

	UrlCreateSKDP := fmt.Sprintf(utils.INSERTSKDP, utils.GET_CLAIM)
	reqbyte, err := json.Marshal(requestbody)
	resBpjs, err := utils.POSTBPJSAPI(&utils.ReqInfo{URL: UrlCreateSKDP, Body: reqbyte}, 30*time.Second, "POST")
	var res utils.ResponseCreateSKDP
	json.Unmarshal(resBpjs.Body, &res.Response)
	res.MetaData.Code = resBpjs.MetaData.Code
	res.MetaData.Message = resBpjs.MetaData.Message
	if err != nil {
		return &res
	}
	if resBpjs.MetaData.Code == "200" {
		skdpdb := new(models.BridgingSuratKontrolBpjs)
		skdpdb.KdDokterBpjs = req.KodeDokter
		skdpdb.KdPoliBpjs = req.PoliKontrol
		skdpdb.NmDokterBpjs = req.NmDokterBpjs
		skdpdb.NmPoliBpjs = req.NmPoliBpjs
		skdpdb.NoSEP = req.NoSEP
		skdpdb.NoSurat = res.Response.NoSuratKontrol
		skdpdb.TglRencana = tglrecana
		skdpdb.TglSurat = date
		errs := repo.db.Create(skdpdb).Error
		if errs != nil {
			// fmt.Println(errs)
			log.Println(errs)
			return &res

		}
		return &res
	}

	return &res

}

func (repo *Repository) DELETESKDP(nomorsurat string) *utils.HeadResponse {

	urlReq := fmt.Sprintf(utils.DELETE_SKDP, utils.GET_CLAIM)
	requestbody := new(utils.DeleteSKDP)
	requestbody.Request.Tsurat.NoSuratKontrol = nomorsurat
	requestbody.Request.Tsurat.User = "Admin"

	reqbyte, err := json.Marshal(requestbody)
	resBpjs, err := utils.POSTBPJSAPI(&utils.ReqInfo{URL: urlReq, Body: reqbyte}, 30*time.Second, "DELETE")
	var res utils.HeadResponse
	res.Code = resBpjs.MetaData.Code
	res.Message = resBpjs.MetaData.Message
	if err != nil {
		return &res
	}
	return &res
}

func (repo *Repository) CreateRegis() {

}
