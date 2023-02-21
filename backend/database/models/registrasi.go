package models

import "time"

type RegPeriksa struct {
	NoReg         string    `json:"no_reg"`
	NoRawat       string    `json:"no_rawat"`
	TglRegistrasi time.Time `json:"tgl_registrasi"`
	JamReg        time.Time `json:"jam_reg"`
	KdDokter      string    `json:"kd_dokter"`
	NoRkmMedis    string    `json:"no_rkmMedis"`
	KdPoli        string    `json:"kd_poli"`
	PJawab        string    `json:"p_jawab"`
	AlmtPj        string    `json:"almt_pj"`
	Hubunganpj    string    `json:"hubunganpj"`
	BiayaReg      float64   `json:"biaya_reg"`
	Stts          string    `json:"stts"`
	SttsDaftar    string    `json:"stts_daftar"`
	StatusLanjut  string    `json:"status_lanjut"`
	KdPj          string    `json:"dd_pj"`
	Umurdaftar    int       `json:"umurdaftar"`
	Sttsumur      string    `json:"sttsumur"`
	StatusBayar   string    `json:"status_bayar"`
	StatusPoli    string    `json:"status_poli"`
}
type BridgingSep struct {
	no_sep           string
	no_rawat         string
	tglsep           time.Time
	tglrujukan       time.Time
	no_rujukan       string
	kdppkrujukan     string
	nmppkrujukan     string
	kdppkpelayanan   string
	nmppkpelayanan   string
	jnspelayanan     string
	catatan          string
	diagawal         string
	nmdiagnosaawal   string
	kdpolitujuan     string
	nmpolitujuan     string
	klsrawat         string
	klsnaik          string
	pembiayaan       string
	pjnaikkelas      string
	lakalantas       string
	user             string
	nomr             string
	nama_pasien      string
	tanggal_lahir    string
	peserta          string
	jkel             string
	no_kartu         string
	tglpulang        string
	asal_rujukan     string
	eksekutif        string
	cob              string
	notelep          string
	katarak          string
	tglkkl           time.Time
	keterangankkl    string
	suplesi          string
	no_sep_suplesi   string
	kdprop           string
	nmprop           string
	kdkab            string
	nmkab            string
	kdkec            string
	nmkec            string
	noskdp           string
	kddpjp           string
	nmdpdjp          string
	tujuankunjungan  string
	flagprosedur     string
	penunjang        string
	asesmenpelayanan string
	kddpjplayanan    string
	nmdpjplayanan    string
}
