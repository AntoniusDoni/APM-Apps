package utils

import "time"

type ResponseSearchRujukan struct {
	MetaData struct {
		Code    string `json:"code"`
		Message string `json:"message"`
	} `json:"metaData"`
	Response         ResponseRujukan `json:"response,omitempty"`
	ListDokter       ListDokterBpjs  `json:"listdokter,"`
	JumlahSEPRujukan JumlahSEP       `json:"JmlRujukan"`
	NoSkdp           string          `json:"skdp,omitempty"`
}
type JumlahSEP struct {
	JumlahSEPRujukan string `json:"jumlahSEP"`
}
type ResponseRujukan struct {
	Rujukan Rujukan `json:"rujukan,omitempty"`
}
type Rujukan struct {
	Diagnosa struct {
		Kode string `json:"kode,omitempty"`
		Nama string `json:"nama,omitempty"`
	} `json:"diagnosa,omitempty"`
	Keluhan     string `json:"keluhan,omitempty"`
	NoKunjungan string `json:"noKunjungan,omitempty"`
	Pelayanan   struct {
		Kode string `json:"kode,omitempty"`
		Nama string `json:"nama,omitempty"`
	} `json:"pelayanan,omitempty"`
	Peserta struct {
		Cob struct {
			NmAsuransi interface{} `json:"nmAsuransi,omitempty"`
			NoAsuransi interface{} `json:"noAsuransi,omitempty"`
			TglTAT     interface{} `json:"tglTAT,omitempty"`
			TglTMT     interface{} `json:"tglTMT,omitempty"`
		} `json:"cob,omitempty"`
		HakKelas struct {
			Keterangan string `json:"keterangan,omitempty"`
			Kode       string `json:"kode,omitempty"`
		} `json:"hakKelas,omitempty"`
		Informasi struct {
			Dinsos      interface{} `json:"dinsos,omitempty"`
			NoSKTM      interface{} `json:"noSKTM,omitempty"`
			ProlanisPRB interface{} `json:"prolanisPRB,omitempty"`
		} `json:"informasi,omitempty"`
		JenisPeserta struct {
			Keterangan string `json:"keterangan,omitempty"`
			Kode       string `json:"kode,omitempty"`
		} `json:"jenisPeserta,omitempty"`
		Mr struct {
			NoMR      string      `json:"noMR,omitempty"`
			NoTelepon interface{} `json:"noTelepon,omitempty"`
		} `json:"mr,omitempty"`
		Nama     string `json:"nama,omitempty"`
		Nik      string `json:"nik,omitempty"`
		NoKartu  string `json:"noKartu,omitempty"`
		Pisa     string `json:"pisa,omitempty"`
		ProvUmum struct {
			KdProvider string `json:"kdProvider,omitempty"`
			NmProvider string `json:"nmProvider,omitempty"`
		} `json:"provUmum,omitempty"`
		Sex           string `json:"sex,omitempty"`
		StatusPeserta struct {
			Keterangan string `json:"keterangan,omitempty"`
			Kode       string `json:"kode,omitempty"`
		} `json:"statusPeserta,omitempty"`
		TglCetakKartu string `json:"tglCetakKartu,omitempty"`
		TglLahir      string `json:"tglLahir,omitempty"`
		TglTAT        string `json:"tglTAT,omitempty"`
		TglTMT        string `json:"tglTMT,omitempty"`
		Umur          struct {
			UmurSaatPelayanan string `json:"umurSaatPelayanan,omitempty"`
			UmurSekarang      string `json:"umurSekarang,omitempty"`
		} `json:"umur,omitempty"`
	} `json:"peserta,omitempty"`
	PoliRujukan struct {
		Kode string `json:"kode,omitempty"`
		Nama string `json:"nama,omitempty"`
	} `json:"poliRujukan,omitempty"`
	ProvPerujuk struct {
		Kode string `json:"kode,omitempty"`
		Nama string `json:"nama,omitempty"`
	} `json:"provPerujuk,omitempty"`
	TglKunjungan string `json:"tglKunjungan,omitempty"`
}

type ResponsePeserta struct {
	Code    string `json:"code"`
	Message string `json:"message"`
	Peserta struct {
		NoKartu string `json:"noKartu"`
		Nik     string `json:"nik"`
		Nama    string `json:"nama"`
		Pisa    string `json:"pisa"`
		Sex     string `json:"sex"`
		Mr      struct {
			NoMR      string `json:"noMR"`
			NoTelepon string `json:"noTelepon"`
		} `json:"mr"`
		TglLahir      string `json:"tglLahir"`
		TglCetakKartu string `json:"tglCetakKartu"`
		TglTAT        string `json:"tglTAT"`
		TglTMT        string `json:"tglTMT"`
		StatusPeserta struct {
			Kode       string `json:"kode"`
			Keterangan string `json:"keterangan"`
		} `json:"statusPeserta"`
		ProvUmum struct {
			KdProvider string `json:"kdProvider"`
			NmProvider string `json:"nmProvider"`
		} `json:"provUmum"`
		JenisPeserta struct {
			Kode       string `json:"kode"`
			Keterangan string `json:"keterangan"`
		} `json:"jenisPeserta"`
		HakKelas struct {
			Kode       string `json:"kode"`
			Keterangan string `json:"keterangan"`
		} `json:"hakKelas"`
		Umur struct {
			UmurSekarang      string `json:"umurSekarang"`
			UmurSaatPelayanan string `json:"umurSaatPelayanan"`
		} `json:"umur"`
		Informasi struct {
			Dinsos      interface{} `json:"dinsos"`
			ProlanisPRB string      `json:"prolanisPRB"`
			NoSKTM      interface{} `json:"noSKTM"`
		} `json:"informasi"`
		Cob struct {
			NoAsuransi interface{} `json:"noAsuransi"`
			NmAsuransi interface{} `json:"nmAsuransi"`
			TglTMT     interface{} `json:"tglTMT"`
			TglTAT     interface{} `json:"tglTAT"`
		} `json:"cob"`
	} `json:"peserta"`
}

type ListDokterBpjs struct {
	List []struct {
		Kode string `json:"kode,omitempty"`
		Nama string `json:"nama,omitempty"`
	} `json:"list,omitempty"`
}
type HeadResponse struct {
	Code    string `json:"code,omitempty"`
	Message string `json:"message,omitempty"`
}
type ResponseListSKDP struct {
	MetaData HeadResponse `json:"metaData"`
	Response struct {
		List []struct {
			NoSuratKontrol    string `json:"noSuratKontrol"`
			JnsPelayanan      string `json:"jnsPelayanan"`
			JnsKontrol        string `json:"jnsKontrol"`
			NamaJnsKontrol    string `json:"namaJnsKontrol"`
			TglRencanaKontrol string `json:"tglRencanaKontrol"`
			TglTerbitKontrol  string `json:"tglTerbitKontrol"`
			NoSepAsalKontrol  string `json:"noSepAsalKontrol"`
			PoliAsal          string `json:"poliAsal"`
			NamaPoliAsal      string `json:"namaPoliAsal"`
			PoliTujuan        string `json:"poliTujuan"`
			NamaPoliTujuan    string `json:"namaPoliTujuan"`
			TglSEP            string `json:"tglSEP"`
			KodeDokter        string `json:"kodeDokter"`
			NamaDokter        string `json:"namaDokter"`
			NoKartu           string `json:"noKartu"`
			Nama              string `json:"nama"`
			TerbitSEP         string `json:"terbitSEP"`
		} `json:"list"`
	} `json:"listdata"`
}
type ListSKDP struct {
	NoSuratKontrol    string `json:"noSuratKontrol,omitempty"`
	JnsPelayanan      string `json:"jnsPelayanan,omitempty"`
	JnsKontrol        string `json:"jnsKontrol,omitempty"`
	NamaJnsKontrol    string `json:"namaJnsKontrol,omitempty"`
	TglRencanaKontrol string `json:"tglRencanaKontrol,omitempty"`
	TglTerbitKontrol  string `json:"tglTerbitKontrol,omitempty"`
	NoSepAsalKontrol  string `json:"noSepAsalKontrol,omitempty"`
	PoliAsal          string `json:"poliAsal,omitempty"`
	NamaPoliAsal      string `json:"namaPoliAsal,omitempty"`
	PoliTujuan        string `json:"poliTujuan,omitempty"`
	NamaPoliTujuan    string `json:"namaPoliTujuan,omitempty"`
	TglSEP            string `json:"tglSEP,omitempty"`
	KodeDokter        string `json:"kodeDokter,omitempty"`
	NamaDokter        string `json:"namaDokter,omitempty"`
	NoKartu           string `json:"noKartu,omitempty"`
	Nama              string `json:"nama,omitempty"`
	TerbitSEP         string `json:"terbitSEP,omitempty"`
}
type ResponseListHistory struct {
	MetaData HeadResponse `json:"metaData"`
	Response struct {
		Histori []History `json:"histori"`
	} `json:"listdata"`
}
type ResponseCreateSKDP struct {
	MetaData HeadResponse `json:"metaData"`
}

type History struct {
	NoSep        string      `json:"noSep"`
	TglSep       string      `json:"tglSep"`
	TglPlgSep    string      `json:"tglPlgSep"`
	NoKartu      string      `json:"noKartu"`
	NamaPeserta  string      `json:"namaPeserta"`
	JnsPelayanan string      `json:"jnsPelayanan"`
	KelasRawat   string      `json:"kelasRawat"`
	Diagnosa     string      `json:"diagnosa"`
	Poli         string      `json:"poli"`
	PpkPelayanan string      `json:"ppkPelayanan"`
	NoRujukan    string      `json:"noRujukan"`
	Flag         interface{} `json:"flag"`
	Asuransi     interface{} `json:"asuransi"`
	PoliTujSep   interface{} `json:"poliTujSep"`
}

type ListPoli struct {
	MetaData HeadResponse `json:"metaData"`
	ListPoli []Poli       `json:"poli,omitempty"`
}
type Poli struct {
	Kode string `json:"kode"`
	Nama string `json:"nama"`
}
type PoliKontrol struct {
	KodePoli                    string `json:"kodePoli"`
	NamaPoli                    string `json:"namaPoli"`
	Kapasitas                   string `json:"kapasitas"`
	JmlRencanaKontroldanRujukan string `json:"jmlRencanaKontroldanRujukan"`
	Persentase                  string `json:"persentase"`
}
type ListPoliKontrol struct {
	MetaData HeadResponse `json:"metaData"`
	Response struct {
		List []PoliKontrol `json:"list"`
	} `json:"response"`
}

func ParseStrigDate(tanggal string) (string, error) {
	layout := "2006-01-02T15:04:05.000Z"
	dateStart, err := time.Parse(layout, tanggal)
	if err != nil {
		return "", err
	}
	return dateStart.Format(YYYYMMDD), nil
}
