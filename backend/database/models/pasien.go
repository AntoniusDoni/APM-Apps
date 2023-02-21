package models

import "time"

type Pasien struct {
	NoRkmMedis        string    `json:"no_rkm_medis,omitempty"`
	NmPasien          string    `json:"nm_pasien,omitempty"`
	NoKtp             string    `json:"no_ktp,omitempty"`
	Jk                string    `json:"jk,omitempty"`
	TmpLahir          string    `json:"tmp_lahir,omitempty"`
	TglLahir          time.Time `json:"tgl_lahir,omitempty"`
	NmIbu             string    `json:"nm_ibu,omitempty"`
	Alamat            string    `json:"alamat,omitempty"`
	GolDarah          string    `json:"gol_darah,omitempty"`
	Pekerjaan         string    `json:"pekerjaan,omitempty"`
	Stts_nikah        string    `json:"stts_nikah,omitempty"`
	Agama             string    `json:"agama,omitempty"`
	Tgl_daftar        time.Time `json:"tgl_daftar,omitempty"`
	No_tlp            string    `json:"no_tlp,omitempty"`
	Umur              string    `json:"umur,omitempty"`
	Pnd               string    `json:"pnd,omitempty"`
	Keluarga          string    `json:"keluarga,omitempty"`
	Namakeluarga      string    `json:"namakeluarga,omitempty"`
	Kd_pj             string    `json:"kd_pj,omitempty"`
	No_peserta        string    `json:"no_peserta,omitempty"`
	Kd_kel            int       `json:"kd_kel,omitempty"`
	Kd_kec            int       `json:"kd_kec,omitempty"`
	Kd_kab            int       `json:"kd_kab,omitempty"`
	Pekerjaanpj       string    `json:"pekerjaanpj,omitempty"`
	Alamatpj          string    `json:"alamatpj,omitempty"`
	Kelurahanpj       string    `json:"kelurahanpj,omitempty"`
	Kecamatanpj       string    `json:"kecamatanpj,omitempty"`
	Kabupatenpj       string    `json:"kabupatenpj,omitempty"`
	Perusahaan_pasien string    `json:"perusahaan_pasien,omitempty"`
	Suku_bangsa       int       `json:"suku_bangsa,omitempty"`
	Bahasa_pasien     int       `json:"bahasa_pasien,omitempty"`
	Cacat_fisik       int       `json:"cacat_fisik,omitempty"`
	Email             string    `json:"email,omitempty"`
	Nip               string    `json:"nip,omitempty"`
	Kd_prop           int       `json:"kd_prop,omitempty"`
	Propinsipj        string    `json:"propinsipj,omitempty"`
}
