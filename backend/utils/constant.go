package utils

const HMAC_TIMESTAMP_FORMAT = `2006-01-02 00:00:00`
const YYYYMMDD = "2006-01-02"
const YYYYMMDD1 = "2006/01/02"
const FORMATDATE = "20060102"
const (
	GET_CLAIM               = "https://apijkn.bpjs-kesehatan.go.id/vclaim-rest/"
	GET_BYNO_KARTU          = "%sPeserta/nokartu/%s/tglSEP/%s"
	GET_BYNO_RUJUKAN        = "%sRujukan/%s"
	GETRUJUKAN_BYNO_KA      = "%sRujukan/Peserta/%s"
	GET_DOKTER_BPJS         = "%sreferensi/dokter/pelayanan/2/tglPelayanan/%s/Spesialis/%s"
	GET_LISTSKDP            = "%sRencanaKontrol/ListRencanaKontrol/Bulan/%s/Tahun/%s/Nokartu/%s/filter/1"
	GET_LIST_HISTORY        = "%smonitoring/HistoriPelayanan/NoKartu/%s/tglMulai/%s/tglAkhir/%s"
	GET_LIST_POLI           = "%sreferensi/poli/%s"
	GET_LIST_POLI_KONTROL   = "%sRencanaKontrol/ListSpesialistik/JnsKontrol/%s/nomor/%s/TglRencanaKontrol/%s"
	GET_LIST_DOKTOR_KONTROL = "%sRencanaKontrol/JadwalPraktekDokter/JnsKontrol/%s/KdPoli/%s/TglRencanaKontrol/%s"
	DELETE_SEP              = "%sSEP/2.0/delete"
	DELETE_SKDP             = "%sRencanaKontrol/Delete"
	INSERTSKDP              = "%sRencanaKontrol/insert"
)
const Pasiet_NOT_EXIST = "Anda Tidak Terdaftar Sebagai Pasien..,Silahkan hubungi admisi kami..,Terimakasih"
const Failed = "Mohon Maaf Sedang Terjadi kendala pada Sistem kami..,Silahkan hubungi admisi kami..,Terimakasih"
const SUCSSES = "Sucsses"
