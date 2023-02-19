export const defaultSKDP= () => {
    return [1, 2, 3, 4, 5].map(_ => {
        return {
            noSuratKontrol:'',
            noSepAsalKontrol:"",
            namaPoliTujuan:"",
            tglRencanaKontrol:"",
        }
    })
}
export const defaultdockter=()=>{
    return [1].map(_=>{
        return {
            kode:"",
            name:"--Pilih Dokter--"
        }
    })
}