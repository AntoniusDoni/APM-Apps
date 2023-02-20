package models

type BridgingSuratKontrolBpjs struct {
	NoSEP        string `json:"no_sep"`
	TglSurat     string `json:"tgl_surat"`
	NoSurat      string `json:"no_surat"`
	TglRencana   string `json:"tgl_rencana"`
	KdDokterBpjs string `json:"kd_dokter_bpjs"`
	NmDokterBpjs string `json:"nm_dokter_bpjs"`
	KdPoliBpjs   string `json:"kd_poli_bpjs"`
	NmPoliBpjs   string `json:"nm_poli_bpjs"`
}
