package utils

import (
	"changeme/backend/database/models"
	"fmt"
	"log"

	"github.com/jadefox10200/goprint"
	"github.com/jung-kurt/gofpdf"
)

func GenerateDocument(no_reg string, reg *models.BridgingSep, StatusLanjut string) (string, error) {

	docsigns := fmt.Sprintf("%s/%s/%s%s", "./document", "docsign", reg.NoSep, ".png")
	title := "SURAT ELEGIBILITAS PESERTA"
	titledoc := fmt.Sprintf("%s/%s%s", "document", reg.NoSep, ".pdf")
	title2 := "RS.Dirgahayu"
	menyetujui := " *Saya Menyetujui BPJS Kesehatan menggunakan informasi Medis Pasien jika diperlukan Peserta"
	bukti := " *SEP bukan sebagai bukti penjaminan peserta"
	cetakan := "Cetakan ke 1 :"
	tglsep := reg.Tglsep + "  ___________________________________"
	resume := "RESUME MEDIS RAWAT INAP JKN"
	hasil := "1. Hasil Pemeriksaaan  "
	hasil2 := "2. Pemeriksaaan Penunjang"
	pernyataan := "Bila pasien lanjut Rawat Inap,Maka semua rincian dan berkas pelayanan ini disatukan dengan berkas klaim rawat inap"
	pernyataan2 := "Bahwa Peserta BPJS telah menerima Pelayanan Rawat Jalan di RS.Dirgahayu"

	pdf := gofpdf.New("L", "mm", "A4", "")
	pdf.SetFont("Arial", "", 13)
	pdf.AddPage()
	pdf.Image("./document/logo/bpjslogo.png", 10, 5, 32, 14, false, "", 0, "")
	pdf.SetMargins(15, 5, 15)
	pdf.SetY(5)
	pdf.SetTopMargin(5)
	pdf.SetTitle(title, true)
	pdf.CellFormat(280, 15, title, "", 0, "C", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(300, 15, title2, "", 0, "C", false, 0, "")
	pdf.Line(10, 20, 280, 22)
	pdf.Ln(8)
	pdf.SetFont("Times", "", 10)
	pdf.CellFormat(30, 12, "No. SEP ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 12, reg.NoSep, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 12, "TGl. SEP ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, reg.Tglsep, "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 12, "No. Rawat ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 12, reg.NoRawat, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 12, "No. Kartu ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, reg.NoKartu, "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 12, "No. Reg ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 12, no_reg, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 12, "Nama Peserta ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, reg.NamaPasien, "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 12, "Peserta ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 12, reg.Peserta, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 12, "Tgl. Lahir ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, reg.TanggalLahir, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 12, "No.Telepon ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, reg.Peserta, "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 12, "COB ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, reg.Cob, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 12, "Sub/Spesialis ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, reg.Nmpolitujuan, "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 12, "Jns. Rawat ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, StatusLanjut, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 12, "Faskes Perujuk ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, reg.Nmppkrujukan, "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 12, "Kls. Rawat ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, reg.Klsrawat, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 12, "Penjamin ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, "BPJS", "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 12, "Diagnosa Awal ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, reg.Nmdiagnosaawal, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 12, "Catatan ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 12, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, reg.Catatan, "", 0, "L", false, 0, "")
	pdf.Line(10, 76, 280, 76)
	pdf.Ln(5)
	pdf.SetFont("Times", "", 9)
	pdf.CellFormat(90, 12, menyetujui, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 12, bukti, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 12, cetakan, "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 12, tglsep, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.SetFont("Times", "", 10)
	pdf.CellFormat(300, 11, resume, "", 0, "C", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(300, 11, title2, "", 0, "C", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 10, hasil, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 10, "Keadaan Umum ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 10, ":", "", 0, "L", false, 0, "")
	pdf.ClipRect(53, 107, 2, 2, true)
	pdf.SetFillColor(255, 255, 255)
	pdf.ClipEnd()
	pdf.CellFormat(30, 10, "Sakit ringan", "", 0, "L", false, 0, "")
	pdf.ClipRect(83, 107, 2, 2, true)
	pdf.SetFillColor(255, 255, 255)
	pdf.ClipEnd()
	pdf.CellFormat(30, 10, "Sakit Sedang", "", 0, "L", false, 0, "")
	pdf.ClipRect(113, 107, 2, 2, true)
	pdf.SetFillColor(255, 255, 255)
	pdf.ClipEnd()
	pdf.CellFormat(30, 10, "Sakit Berat", "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 10, "Anamnesa ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 10, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 10, " _______________________________ ", "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 10, "Pemeriksaan Fisik ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 10, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(45, 10, "1. Tekanan Darah _______,", "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 10, "2. Nadi _______,", "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 10, "3. Suhu _______,", "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 10, "4. RR _______,", "", 0, "L", false, 0, "")
	pdf.CellFormat(30, 10, "5. BB _______", "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 10, "Diagnosa Utama ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 10, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 10, "1.________________________________________________________________________(____________)", "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 10, "Diagnosa Tambahan", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 10, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 10, "2.________________________________________________________________________(____________)", "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 10, "Tindakan ", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 10, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 10, "1.________________________________________________________________________(____________)", "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 10, "Therapi", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 10, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 10, "2.________________________________________________________________________(____________)", "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 10, hasil2, "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 10, "Laboratorium", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 10, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 10, " ________________________________________________________________________(____________)", "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 10, "Radiologi", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 10, ":", "", 0, "L", false, 0, "")
	pdf.CellFormat(90, 10, "________________________________________________________________________(____________)", "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.CellFormat(30, 10, "Cara pulang", "", 0, "L", false, 0, "")
	pdf.CellFormat(10, 10, ":", "", 0, "L", false, 0, "")
	pdf.ClipRect(52, 157, 2, 2, true)
	pdf.SetFillColor(255, 255, 255)
	pdf.ClipEnd()
	pdf.CellFormat(28, 10, "Baik", "", 0, "L", false, 0, "")
	pdf.ClipRect(81, 157, 2, 2, true)
	pdf.SetFillColor(255, 255, 255)
	pdf.ClipEnd()
	pdf.CellFormat(30, 10, "Pulang Paksa", "", 0, "L", false, 0, "")
	pdf.ClipRect(111, 157, 2, 2, true)
	pdf.SetFillColor(255, 255, 255)
	pdf.ClipEnd()
	pdf.CellFormat(30, 10, "Meninggal", "", 0, "L", false, 0, "")
	pdf.ClipRect(133, 157, 2, 2, true)
	pdf.SetFillColor(255, 255, 255)
	pdf.ClipEnd()
	pdf.CellFormat(30, 10, "Dirujuk ke RS ................................", "", 0, "L", false, 0, "")
	pdf.Ln(5)
	pdf.SetFont("Times", "", 9)
	pdf.SetX(100)
	pdf.CellFormat(100, 9, pernyataan, "", 0, "C", false, 0, "")
	pdf.Ln(4)
	pdf.SetX(100)
	pdf.CellFormat(100, 9, pernyataan2, "", 0, "C", false, 0, "")
	pdf.Ln(5)
	pdf.SetX(200)
	pdf.SetFont("Times", "", 11)
	pdf.CellFormat(70, 10, "Samarinda,"+reg.Tglsep, "", 0, "R", false, 0, "")
	pdf.Ln(5)
	pdf.SetX(140)
	pdf.CellFormat(50, 10, "Dokter Pemeriksa 1", "", 0, "C", false, 0, "")
	pdf.CellFormat(50, 10, "Dokter Pemeriksa 2", "", 0, "C", false, 0, "")
	pdf.CellFormat(50, 10, "Pasien", "", 0, "C", false, 0, "")
	pdf.Ln(7)
	pdf.SetX(140)
	pdf.Line(145, 198, 187, 198)
	pdf.Line(193, 198, 237, 198)
	pdf.Image(docsigns, 243, 179, 50, 30, false, "", 0, "")
	pdf.Line(245, 198, 280, 198)
	err := pdf.OutputFileAndClose(titledoc)
	if err != nil {
		fmt.Println("ERR GENERATE DOC", err)
		return "", err
	}
	goPrintDoc(reg.NoSep)

	return reg.NoSep, nil
}

func goPrintDoc(sep string) error {
	printerName, _ := goprint.GetDefaultPrinterName()
	printerHandle, err := goprint.GoOpenPrinter(printerName)
	var erros error
	if err != nil {
		log.Fatalln("Failed to open printer")
		erros = fmt.Errorf("Gagal Terhubung dengan Printer")
		return erros
	}
	defer goprint.GoClosePrinter(printerHandle)
	filePath := fmt.Sprintf("%s/%s%s", "document", sep, ".pdf")

	//Send to printer:
	err = goprint.GoPrint(printerHandle, filePath)
	if err != nil {
		erros = fmt.Errorf("Terjadi Kendala Saat Printing")
		log.Fatalln("during the func sendToPrinter, there was an error")
		return erros
	}
	return nil
}