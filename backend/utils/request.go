package utils

type RequestDeleteSKDP struct {
	Request RequestDeleteSuratKontrol `json:"request"`
}
type RequestDeleteSuratKontrol struct {
	SuratKontrol TSuratkontrol `json:"t_suratkontrol"`
}
type TSuratkontrol struct {
	NoSuratKontrol string `json:"noSuratKontrol"`
	User           string `json:"user"`
}
type DelSEP struct {
	NoSep string `json:"noSep,omitempty"`
	User  string `json:"user,omitempty"`
}
type RequestDeleteSEP struct {
	Request struct {
		DelSEP DelSEP `json:"t_sep,omitempty"`
	} `json:"request"`
}
type RequestInsertSEP struct {
	Request struct {
		TSep struct {
			NoKartu      string `json:"noKartu"`
			TglSep       string `json:"tglSep"`
			PpkPelayanan string `json:"ppkPelayanan"`
			JnsPelayanan string `json:"jnsPelayanan"`
			KlsRawat     struct {
				KlsRawatHak     string `json:"klsRawatHak"`
				KlsRawatNaik    string `json:"klsRawatNaik"`
				Pembiayaan      string `json:"pembiayaan"`
				PenanggungJawab string `json:"penanggungJawab"`
			} `json:"klsRawat"`
			NoMR    string `json:"noMR"`
			Rujukan struct {
				AsalRujukan string `json:"asalRujukan"`
				TglRujukan  string `json:"tglRujukan"`
				NoRujukan   string `json:"noRujukan"`
				PpkRujukan  string `json:"ppkRujukan"`
			} `json:"rujukan"`
			Catatan  string `json:"catatan"`
			DiagAwal string `json:"diagAwal"`
			Poli     struct {
				Tujuan    string `json:"tujuan"`
				Eksekutif string `json:"eksekutif"`
			} `json:"poli"`
			Cob struct {
				Cob string `json:"cob"`
			} `json:"cob"`
			Katarak struct {
				Katarak string `json:"katarak"`
			} `json:"katarak"`
			Jaminan struct {
				LakaLantas string `json:"lakaLantas"`
				NoLP       string `json:"noLP"`
				Penjamin   struct {
					TglKejadian string `json:"tglKejadian"`
					Keterangan  string `json:"keterangan"`
					Suplesi     struct {
						Suplesi      string `json:"suplesi"`
						NoSepSuplesi string `json:"noSepSuplesi"`
						LokasiLaka   struct {
							KdPropinsi  string `json:"kdPropinsi"`
							KdKabupaten string `json:"kdKabupaten"`
							KdKecamatan string `json:"kdKecamatan"`
						} `json:"lokasiLaka"`
					} `json:"suplesi"`
				} `json:"penjamin"`
			} `json:"jaminan"`
			TujuanKunj    string `json:"tujuanKunj"`
			FlagProcedure string `json:"flagProcedure"`
			KdPenunjang   string `json:"kdPenunjang"`
			AssesmentPel  string `json:"assesmentPel"`
			Skdp          struct {
				NoSurat  string `json:"noSurat"`
				KodeDPJP string `json:"kodeDPJP"`
			} `json:"skdp"`
			DpjpLayan string `json:"dpjpLayan"`
			NoTelp    string `json:"noTelp"`
			User      string `json:"user"`
		} `json:"t_sep"`
	} `json:"request"`
}
type SKDP struct {
	NoSuratKontrol    string `json:"noSuratKontrol,omitempty"`
	NoSEP             string `json:"noSEP,omitempty"`
	KodeDokter        string `json:"kodeDokter,omitempty"`
	PoliKontrol       string `json:"poliKontrol,omitempty"`
	TglRencanaKontrol string `json:"tglRencanaKontrol,omitempty"`
	User              string `json:"user,omitempty"`
}
type RequestSKDP struct {
	NoSuratKontrol      string `json:"noSuratKontrol,omitempty"`
	NoSEP               string `json:"noSEP,omitempty"`
	KodeDokter          string `json:"kodeDokter,omitempty"`
	PoliKontrol         string `json:"poliKontrol,omitempty"`
	TglRencanaKontrol   string `json:"tglRencanaKontrol,omitempty"`
	NoKa                string `json:"noka"`
	NmPoliBpjs          string `json:"namaPoli"`
	NmDokterBpjs        string `json:"nmdokter"`
	TglPembuatanKontrol string `json:"tglPembuatanKontrol"`
}
type InsertSKDP struct {
	Request SKDP `json:"request"`
}
type DeleteSKDP struct {
	Request struct {
		Tsurat TSuratkontrol `json:"t_suratkontrol"`
	} `json:"request"`
}

type RequestPendaftaran struct {
	NoKa              string `json:"no_ka,omitempty"`
	NoRujukan         string `json:"no_rujukan,omitempty"`
	TglKunjungan      string `json:"tglKunjungan,omitempty"`
	Nama              string `json:"nama,omitempty"`
	Nik               string `json:"nik,omitempty"`
	NoMR              string `json:"noMR,omitempty"`
	NoTelepon         string `json:"noTelepon,omitempty"`
	TglLahir          string `json:"tglLahir,omitempty"`
	Alamat            string `json:"alamat,omitempty"`
	KdPPK             string `json:"kdPPK,omitempty"`
	NmProvider        string `json:"nmProvider,omitempty"`
	HakKelas          string `json:"hakKelas,omitempty"`
	KodeKelas         string `json:"kodeKelas,omitempty"`
	JenisPeserta      string `json:"jenisPeserta,omitempty"`
	Status            string `json:"status,omitempty"`
	ProlanisPRB       string `json:"prolanisPRB,omitempty"`
	Kdicd             string `json:"kdicd,omitempty"`
	NmIcd             string `json:"nmIcd,omitempty"`
	KdPoli            string `json:"kdPoli,omitempty"`
	NmPoli            string `json:"nmPoli,omitempty"`
	JnsPelayanan      string `json:"jnsPelayanan,omitempty"`
	KodeJnsPelayanan  string `json:"kodeJnsPelayanan,omitempty"`
	UmurSekarang      string `json:"umurSekarang,omitempty"`
	UmurSaatPelayanan string `json:"umurSaatPelayanan"`
	KodeDokter        string `json:"kodeDokter,omitempty"`
	Skdp              string `json:"skdp,omitempty"`
	TujuanKunj        string `json:"tujuanKunj"`
	FlagProcedure     string `json:"flagProcedure,omitempty"`
	AssesmentPel      string `json:"assesmentPel,omitempty"`
	KdPenunjang       string `json:"kdPenunjang,omitempty"`
	JmlRujukan        string `json:"JmlRujukan,omitempty"`
}

type CheckPasien struct {
	Isexists bool
	Alamat   string
}
