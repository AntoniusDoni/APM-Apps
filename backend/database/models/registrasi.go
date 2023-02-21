package models

import "time"

type RegPeriksa struct {
	NoReg         string  `gorm:"column:no_reg" json:"no_reg"`
	NoRawat       string  `gorm:"column:no_rawat" json:"no_rawat"`
	TglRegistrasi string  `gorm:"column:tgl_registrasi" json:"tgl_registrasi"`
	JamReg        string  `gorm:"column:jam_reg" json:"jam_reg"`
	KdDokter      string  `gorm:"column:kd_dokter" json:"kd_dokter"`
	NoRkmMedis    string  `gorm:"column:no_rkmMedis" json:"no_rkmMedis"`
	KdPoli        string  `gorm:"column:kd_poli" json:"kd_poli"`
	PJawab        string  `gorm:"column:p_jawab" json:"p_jawab"`
	AlmtPj        string  `gorm:"column:almt_pj" json:"almt_pj"`
	Hubunganpj    string  `gorm:"column:hubunganpj" json:"hubunganpj"`
	BiayaReg      float64 `gorm:"column:biaya_reg" json:"biaya_reg"`
	Stts          string  `gorm:"column:stts" json:"stts"`
	SttsDaftar    string  `gorm:"column:stts_daftar" json:"stts_daftar"`
	StatusLanjut  string  `gorm:"column:status_lanjut" json:"status_lanjut"`
	KdPj          string  `gorm:"column:dd_pj" json:"dd_pj"`
	Umurdaftar    int     `gorm:"column:umurdaftar" json:"umurdaftar"`
	Sttsumur      string  `gorm:"column:sttsumur" json:"sttsumur"`
	StatusBayar   string  `gorm:"column:status_bayar" json:"status_bayar"`
	StatusPoli    string  `gorm:"column:status_poli" json:"status_poli"`
}
type BridgingSep struct {
	NoSep            string    `json:"no_sep"`
	NoRawat          string    `json:"no_rawat"`
	Tglsep           time.Time `json:"tglsep"`
	Tglrujukan       time.Time `json:"tglrujukan"`
	NoRujukan        string    `json:"no_rujukan"`
	Kdppkrujukan     string    `json:"kdppkrujukan"`
	Nmppkrujukan     string    `json:"nmppkrujukan"`
	Kdppkpelayanan   string    `json:"kdppkpelayanan"`
	Nmppkpelayanan   string    `json:"nmppkpelayanan"`
	Jnspelayanan     string    `json:"jnspelayanan"`
	Catatan          string    `json:"catatan"`
	Diagawal         string    `json:"diagawal"`
	Nmdiagnosaawal   string    `json:"nmdiagnosaawal"`
	Kdpolitujuan     string    `json:"kdpolitujuan"`
	Nmpolitujuan     string    `json:"nmpolitujuan"`
	Klsrawat         string    `json:"klsrawat"`
	Klsnaik          string    `json:"klsnaik"`
	Pembiayaan       string    `json:"pembiayaan"`
	Pjnaikkelas      string    `json:"pjnaikkelas"`
	Lakalantas       string    `json:"lakalantas"`
	User             string    `json:"user"`
	Nomr             string    `json:"nomr"`
	NamaPasien       string    `json:"nama_pasien"`
	TanggalLahir     string    `json:"tanggal_lahir"`
	Peserta          string    `json:"peserta"`
	Jkel             string    `json:"jkel"`
	NoKartu          string    `json:"no_kartu"`
	Tglpulang        string    `json:"tglpulang"`
	AsalRujukan      string    `json:"asal_rujukan"`
	Eksekutif        string    `json:"eksekutif"`
	Cob              string    `json:"cob"`
	Notelep          string    `json:"notelep"`
	Katarak          string    `json:"katarak"`
	Tglkkl           time.Time `json:"tglkkl"`
	Keterangankkl    string    `json:"keterangankkl"`
	Suplesi          string    `json:"suplesi"`
	NoSepSuplesi     string    `json:"no_sep_suplesi"`
	Kdprop           string    `json:"kdprop"`
	Nmprop           string    `json:"nmprop"`
	Kdkab            string    `json:"kdkab"`
	Nmkab            string    `json:"nmkab"`
	Kdkec            string    `json:"kdkec"`
	Nmkec            string    `json:"nmkec"`
	Noskdp           string    `json:"noskdp"`
	Kddpjp           string    `json:"kddpjp"`
	Nmdpdjp          string    `json:"nmdpdjp"`
	Tujuankunjungan  string    `json:"tujuankunjungan"`
	Flagprosedur     string    `json:"flagprosedur"`
	Penunjang        string    `json:"penunjang"`
	Asesmenpelayanan string    `json:"asesmenpelayanan"`
	Kddpjplayanan    string    `json:"kddpjplayanan"`
	Nmdpjplayanan    string    `json:"nmdpjplayanan"`
}
