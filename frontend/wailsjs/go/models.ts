export namespace models {
	
	export class MapingDokterDpjpvclaim {
	    kd_dokter: string;
	    kd_dokter_bpjs: string;
	    nm_dokter_bpjs: string;
	
	    static createFrom(source: any = {}) {
	        return new MapingDokterDpjpvclaim(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.kd_dokter = source["kd_dokter"];
	        this.kd_dokter_bpjs = source["kd_dokter_bpjs"];
	        this.nm_dokter_bpjs = source["nm_dokter_bpjs"];
	    }
	}
	export class MapingPoliBpjs {
	    kd_poli_rs: string;
	    kd_poli_bpjs: string;
	    nm_poli_bpjs: string;
	
	    static createFrom(source: any = {}) {
	        return new MapingPoliBpjs(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.kd_poli_rs = source["kd_poli_rs"];
	        this.kd_poli_bpjs = source["kd_poli_bpjs"];
	        this.nm_poli_bpjs = source["nm_poli_bpjs"];
	    }
	}
	export class Pasien {
	    no_rkm_medis?: string;
	    nm_pasien?: string;
	    no_ktp?: string;
	    jk?: string;
	    tmp_lahir?: string;
	    // Go type: time.Time
	    tgl_lahir?: any;
	    nm_ibu?: string;
	    alamat?: string;
	    gol_darah?: string;
	    pekerjaan?: string;
	    stts_nikah?: string;
	    agama?: string;
	    // Go type: time.Time
	    tgl_daftar?: any;
	    no_tlp?: string;
	    umur?: string;
	    pnd?: string;
	    keluarga?: string;
	    namakeluarga?: string;
	    kd_pj?: string;
	    no_peserta?: string;
	    kd_kel?: number;
	    kd_kec?: number;
	    kd_kab?: number;
	    pekerjaanpj?: string;
	    alamatpj?: string;
	    kelurahanpj?: string;
	    kecamatanpj?: string;
	    kabupatenpj?: string;
	    perusahaan_pasien?: string;
	    suku_bangsa?: number;
	    bahasa_pasien?: number;
	    cacat_fisik?: number;
	    email?: string;
	    nip?: string;
	    kd_prop?: number;
	    propinsipj?: string;
	
	    static createFrom(source: any = {}) {
	        return new Pasien(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.no_rkm_medis = source["no_rkm_medis"];
	        this.nm_pasien = source["nm_pasien"];
	        this.no_ktp = source["no_ktp"];
	        this.jk = source["jk"];
	        this.tmp_lahir = source["tmp_lahir"];
	        this.tgl_lahir = this.convertValues(source["tgl_lahir"], null);
	        this.nm_ibu = source["nm_ibu"];
	        this.alamat = source["alamat"];
	        this.gol_darah = source["gol_darah"];
	        this.pekerjaan = source["pekerjaan"];
	        this.stts_nikah = source["stts_nikah"];
	        this.agama = source["agama"];
	        this.tgl_daftar = this.convertValues(source["tgl_daftar"], null);
	        this.no_tlp = source["no_tlp"];
	        this.umur = source["umur"];
	        this.pnd = source["pnd"];
	        this.keluarga = source["keluarga"];
	        this.namakeluarga = source["namakeluarga"];
	        this.kd_pj = source["kd_pj"];
	        this.no_peserta = source["no_peserta"];
	        this.kd_kel = source["kd_kel"];
	        this.kd_kec = source["kd_kec"];
	        this.kd_kab = source["kd_kab"];
	        this.pekerjaanpj = source["pekerjaanpj"];
	        this.alamatpj = source["alamatpj"];
	        this.kelurahanpj = source["kelurahanpj"];
	        this.kecamatanpj = source["kecamatanpj"];
	        this.kabupatenpj = source["kabupatenpj"];
	        this.perusahaan_pasien = source["perusahaan_pasien"];
	        this.suku_bangsa = source["suku_bangsa"];
	        this.bahasa_pasien = source["bahasa_pasien"];
	        this.cacat_fisik = source["cacat_fisik"];
	        this.email = source["email"];
	        this.nip = source["nip"];
	        this.kd_prop = source["kd_prop"];
	        this.propinsipj = source["propinsipj"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace utils {
	
	export class DaftarDokterKontrol {
	    kodeDokter: string;
	    namaDokter: string;
	    jadwalPraktek: string;
	    kapasitas: string;
	
	    static createFrom(source: any = {}) {
	        return new DaftarDokterKontrol(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.kodeDokter = source["kodeDokter"];
	        this.namaDokter = source["namaDokter"];
	        this.jadwalPraktek = source["jadwalPraktek"];
	        this.kapasitas = source["kapasitas"];
	    }
	}
	export class HeadResponse {
	    code?: string;
	    message?: string;
	
	    static createFrom(source: any = {}) {
	        return new HeadResponse(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.code = source["code"];
	        this.message = source["message"];
	    }
	}
	export class History {
	    noSep: string;
	    tglSep: string;
	    tglPlgSep: string;
	    noKartu: string;
	    namaPeserta: string;
	    jnsPelayanan: string;
	    kelasRawat: string;
	    diagnosa: string;
	    poli: string;
	    ppkPelayanan: string;
	    noRujukan: string;
	    flag: any;
	    asuransi: any;
	    poliTujSep: any;
	
	    static createFrom(source: any = {}) {
	        return new History(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.noSep = source["noSep"];
	        this.tglSep = source["tglSep"];
	        this.tglPlgSep = source["tglPlgSep"];
	        this.noKartu = source["noKartu"];
	        this.namaPeserta = source["namaPeserta"];
	        this.jnsPelayanan = source["jnsPelayanan"];
	        this.kelasRawat = source["kelasRawat"];
	        this.diagnosa = source["diagnosa"];
	        this.poli = source["poli"];
	        this.ppkPelayanan = source["ppkPelayanan"];
	        this.noRujukan = source["noRujukan"];
	        this.flag = source["flag"];
	        this.asuransi = source["asuransi"];
	        this.poliTujSep = source["poliTujSep"];
	    }
	}
	export class JumlahSEP {
	    jumlahSEP: string;
	
	    static createFrom(source: any = {}) {
	        return new JumlahSEP(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.jumlahSEP = source["jumlahSEP"];
	    }
	}
	export class  {
	    kode?: string;
	    nama?: string;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.kode = source["kode"];
	        this.nama = source["nama"];
	    }
	}
	export class ListDokterBpjs {
	    list?: [];
	
	    static createFrom(source: any = {}) {
	        return new ListDokterBpjs(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.list = this.convertValues(source["list"], );
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ListDokterKontrol {
	    metaData: HeadResponse;
	    list?: DaftarDokterKontrol[];
	
	    static createFrom(source: any = {}) {
	        return new ListDokterKontrol(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.metaData = this.convertValues(source["metaData"], HeadResponse);
	        this.list = this.convertValues(source["list"], DaftarDokterKontrol);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Poli {
	    kode: string;
	    nama: string;
	
	    static createFrom(source: any = {}) {
	        return new Poli(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.kode = source["kode"];
	        this.nama = source["nama"];
	    }
	}
	export class ListPoli {
	    metaData: HeadResponse;
	    poli?: Poli[];
	
	    static createFrom(source: any = {}) {
	        return new ListPoli(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.metaData = this.convertValues(source["metaData"], HeadResponse);
	        this.poli = this.convertValues(source["poli"], Poli);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ListPoliKontrol {
	    metaData: HeadResponse;
	    response: struct { List []utils.PoliKontrol "json:\"list\"" };
	
	    static createFrom(source: any = {}) {
	        return new ListPoliKontrol(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.metaData = this.convertValues(source["metaData"], HeadResponse);
	        this.response = this.convertValues(source["response"], Object);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ListSKDP {
	    noSuratKontrol?: string;
	    jnsPelayanan?: string;
	    jnsKontrol?: string;
	    namaJnsKontrol?: string;
	    tglRencanaKontrol?: string;
	    tglTerbitKontrol?: string;
	    noSepAsalKontrol?: string;
	    poliAsal?: string;
	    namaPoliAsal?: string;
	    poliTujuan?: string;
	    namaPoliTujuan?: string;
	    tglSEP?: string;
	    kodeDokter?: string;
	    namaDokter?: string;
	    noKartu?: string;
	    nama?: string;
	    terbitSEP?: string;
	
	    static createFrom(source: any = {}) {
	        return new ListSKDP(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.noSuratKontrol = source["noSuratKontrol"];
	        this.jnsPelayanan = source["jnsPelayanan"];
	        this.jnsKontrol = source["jnsKontrol"];
	        this.namaJnsKontrol = source["namaJnsKontrol"];
	        this.tglRencanaKontrol = source["tglRencanaKontrol"];
	        this.tglTerbitKontrol = source["tglTerbitKontrol"];
	        this.noSepAsalKontrol = source["noSepAsalKontrol"];
	        this.poliAsal = source["poliAsal"];
	        this.namaPoliAsal = source["namaPoliAsal"];
	        this.poliTujuan = source["poliTujuan"];
	        this.namaPoliTujuan = source["namaPoliTujuan"];
	        this.tglSEP = source["tglSEP"];
	        this.kodeDokter = source["kodeDokter"];
	        this.namaDokter = source["namaDokter"];
	        this.noKartu = source["noKartu"];
	        this.nama = source["nama"];
	        this.terbitSEP = source["terbitSEP"];
	    }
	}
	
	export class PoliKontrol {
	    kodePoli: string;
	    namaPoli: string;
	    kapasitas: string;
	    jmlRencanaKontroldanRujukan: string;
	    persentase: string;
	
	    static createFrom(source: any = {}) {
	        return new PoliKontrol(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.kodePoli = source["kodePoli"];
	        this.namaPoli = source["namaPoli"];
	        this.kapasitas = source["kapasitas"];
	        this.jmlRencanaKontroldanRujukan = source["jmlRencanaKontroldanRujukan"];
	        this.persentase = source["persentase"];
	    }
	}
	export class RequestPendaftaran {
	    no_ka?: string;
	    no_rujukan?: string;
	    tglKunjungan?: string;
	    nama?: string;
	    nik?: string;
	    noMR?: string;
	    noTelepon?: string;
	    tglLahir?: string;
	    alamat?: string;
	    kdPPK?: string;
	    nmProvider?: string;
	    hakKelas?: string;
	    kodeKelas?: string;
	    jenisPeserta?: string;
	    status?: string;
	    prolanisPRB?: string;
	    kdicd?: string;
	    nmIcd?: string;
	    kdPoli?: string;
	    nmPoli?: string;
	    jnsPelayanan?: string;
	    kodeJnsPelayanan?: string;
	    umurSekarang?: string;
	    umurSaatPelayanan: string;
	    kodeDokter?: string;
	    skdp?: string;
	    tujuanKunj: string;
	    flagProcedure?: string;
	    assesmentPel?: string;
	    kdPenunjang?: string;
	
	    static createFrom(source: any = {}) {
	        return new RequestPendaftaran(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.no_ka = source["no_ka"];
	        this.no_rujukan = source["no_rujukan"];
	        this.tglKunjungan = source["tglKunjungan"];
	        this.nama = source["nama"];
	        this.nik = source["nik"];
	        this.noMR = source["noMR"];
	        this.noTelepon = source["noTelepon"];
	        this.tglLahir = source["tglLahir"];
	        this.alamat = source["alamat"];
	        this.kdPPK = source["kdPPK"];
	        this.nmProvider = source["nmProvider"];
	        this.hakKelas = source["hakKelas"];
	        this.kodeKelas = source["kodeKelas"];
	        this.jenisPeserta = source["jenisPeserta"];
	        this.status = source["status"];
	        this.prolanisPRB = source["prolanisPRB"];
	        this.kdicd = source["kdicd"];
	        this.nmIcd = source["nmIcd"];
	        this.kdPoli = source["kdPoli"];
	        this.nmPoli = source["nmPoli"];
	        this.jnsPelayanan = source["jnsPelayanan"];
	        this.kodeJnsPelayanan = source["kodeJnsPelayanan"];
	        this.umurSekarang = source["umurSekarang"];
	        this.umurSaatPelayanan = source["umurSaatPelayanan"];
	        this.kodeDokter = source["kodeDokter"];
	        this.skdp = source["skdp"];
	        this.tujuanKunj = source["tujuanKunj"];
	        this.flagProcedure = source["flagProcedure"];
	        this.assesmentPel = source["assesmentPel"];
	        this.kdPenunjang = source["kdPenunjang"];
	    }
	}
	export class RequestSKDP {
	    noSEP?: string;
	    kodeDokter?: string;
	    poliKontrol?: string;
	    tglRencanaKontrol?: string;
	    noka: string;
	    namaPoli: string;
	    nmdokter: string;
	
	    static createFrom(source: any = {}) {
	        return new RequestSKDP(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.noSEP = source["noSEP"];
	        this.kodeDokter = source["kodeDokter"];
	        this.poliKontrol = source["poliKontrol"];
	        this.tglRencanaKontrol = source["tglRencanaKontrol"];
	        this.noka = source["noka"];
	        this.namaPoli = source["namaPoli"];
	        this.nmdokter = source["nmdokter"];
	    }
	}
	export class ResponseCreateSKDP {
	    metaData: HeadResponse;
	    response: ListSKDP;
	
	    static createFrom(source: any = {}) {
	        return new ResponseCreateSKDP(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.metaData = this.convertValues(source["metaData"], HeadResponse);
	        this.response = this.convertValues(source["response"], ListSKDP);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ResponseListHistory {
	    metaData: HeadResponse;
	    listdata: struct { Histori []utils.History "json:\"histori\"" };
	
	    static createFrom(source: any = {}) {
	        return new ResponseListHistory(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.metaData = this.convertValues(source["metaData"], HeadResponse);
	        this.listdata = this.convertValues(source["listdata"], Object);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ResponseListSKDP {
	    metaData: HeadResponse;
	    // Go type: struct { List []struct { NoSuratKontrol string "json:\"noSuratKontrol\""; JnsPelayanan string "json:\"jnsPelayanan\""; JnsKontrol string "json:\"jnsKontrol\""; NamaJnsKontrol string "json:\"namaJnsKontrol\""; TglRencanaKontrol string "json:\"tglRencanaKontrol\""; TglTerbitKontrol string "json:\"tglTerbitKontrol\""; NoSepAsalKontrol string "json:\"noSepAsalKontrol\""; PoliAsal string "json:\"poliAsal\""; NamaPoliAsal string "json:\"namaPoliAsal\""; PoliTujuan string "json:\"poliTujuan\""; NamaPoliTujuan string "json:\"namaPoliTujuan\""; TglSEP string "json:\"tglSEP\""; KodeDokter string "json:\"kodeDokter\""; NamaDokter string "json:\"namaDokter\""; NoKartu string "json:\"noKartu\""; Nama string "json:\"nama\""; TerbitSEP string "json:\"terbitSEP\"" } "json:\"list\"" }
	    listdata: any;
	
	    static createFrom(source: any = {}) {
	        return new ResponseListSKDP(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.metaData = this.convertValues(source["metaData"], HeadResponse);
	        this.listdata = this.convertValues(source["listdata"], Object);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ResponsePeserta {
	    code: string;
	    message: string;
	    // Go type: struct { NoKartu string "json:\"noKartu\""; Nik string "json:\"nik\""; Nama string "json:\"nama\""; Pisa string "json:\"pisa\""; Sex string "json:\"sex\""; Mr struct { NoMR string "json:\"noMR\""; NoTelepon string "json:\"noTelepon\"" } "json:\"mr\""; TglLahir string "json:\"tglLahir\""; TglCetakKartu string "json:\"tglCetakKartu\""; TglTAT string "json:\"tglTAT\""; TglTMT string "json:\"tglTMT\""; StatusPeserta struct { Kode string "json:\"kode\""; Keterangan string "json:\"keterangan\"" } "json:\"statusPeserta\""; ProvUmum struct { KdProvider string "json:\"kdProvider\""; NmProvider string "json:\"nmProvider\"" } "json:\"provUmum\""; JenisPeserta struct { Kode string "json:\"kode\""; Keterangan string "json:\"keterangan\"" } "json:\"jenisPeserta\""; HakKelas struct { Kode string "json:\"kode\""; Keterangan string "json:\"keterangan\"" } "json:\"hakKelas\""; Umur struct { UmurSekarang string "json:\"umurSekarang\""; UmurSaatPelayanan string "json:\"umurSaatPelayanan\"" } "json:\"umur\""; Informasi struct { Dinsos interface {} "json:\"dinsos\""; ProlanisPRB string "json:\"prolanisPRB\""; NoSKTM interface {} "json:\"noSKTM\"" } "json:\"informasi\""; Cob struct { NoAsuransi interface {} "json:\"noAsuransi\""; NmAsuransi interface {} "json:\"nmAsuransi\""; TglTMT interface {} "json:\"tglTMT\""; TglTAT interface {} "json:\"tglTAT\"" } "json:\"cob\"" }
	    peserta: any;
	
	    static createFrom(source: any = {}) {
	        return new ResponsePeserta(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.code = source["code"];
	        this.message = source["message"];
	        this.peserta = this.convertValues(source["peserta"], Object);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ResponseRegistrasi {
	    metaData: HeadResponse;
	    doc?: string;
	
	    static createFrom(source: any = {}) {
	        return new ResponseRegistrasi(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.metaData = this.convertValues(source["metaData"], HeadResponse);
	        this.doc = source["doc"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Rujukan {
	    // Go type: struct { Kode string "json:\"kode,omitempty\""; Nama string "json:\"nama,omitempty\"" }
	    diagnosa?: any;
	    keluhan?: string;
	    noKunjungan?: string;
	    // Go type: struct { Kode string "json:\"kode,omitempty\""; Nama string "json:\"nama,omitempty\"" }
	    pelayanan?: any;
	    // Go type: struct { Cob struct { NmAsuransi interface {} "json:\"nmAsuransi,omitempty\""; NoAsuransi interface {} "json:\"noAsuransi,omitempty\""; TglTAT interface {} "json:\"tglTAT,omitempty\""; TglTMT interface {} "json:\"tglTMT,omitempty\"" } "json:\"cob,omitempty\""; HakKelas struct { Keterangan string "json:\"keterangan,omitempty\""; Kode string "json:\"kode,omitempty\"" } "json:\"hakKelas,omitempty\""; Informasi struct { Dinsos interface {} "json:\"dinsos,omitempty\""; NoSKTM interface {} "json:\"noSKTM,omitempty\""; ProlanisPRB interface {} "json:\"prolanisPRB,omitempty\"" } "json:\"informasi,omitempty\""; JenisPeserta struct { Keterangan string "json:\"keterangan,omitempty\""; Kode string "json:\"kode,omitempty\"" } "json:\"jenisPeserta,omitempty\""; Mr struct { NoMR string "json:\"noMR,omitempty\""; NoTelepon interface {} "json:\"noTelepon,omitempty\"" } "json:\"mr,omitempty\""; Nama string "json:\"nama,omitempty\""; Nik string "json:\"nik,omitempty\""; NoKartu string "json:\"noKartu,omitempty\""; Pisa string "json:\"pisa,omitempty\""; Alamat string "json:\"alamat,omitempty\""; ProvUmum struct { KdProvider string "json:\"kdProvider,omitempty\""; NmProvider string "json:\"nmProvider,omitempty\"" } "json:\"provUmum,omitempty\""; Sex string "json:\"sex,omitempty\""; StatusPeserta struct { Keterangan string "json:\"keterangan,omitempty\""; Kode string "json:\"kode,omitempty\"" } "json:\"statusPeserta,omitempty\""; TglCetakKartu string "json:\"tglCetakKartu,omitempty\""; TglLahir string "json:\"tglLahir,omitempty\""; TglTAT string "json:\"tglTAT,omitempty\""; TglTMT string "json:\"tglTMT,omitempty\""; Umur struct { UmurSaatPelayanan string "json:\"umurSaatPelayanan,omitempty\""; UmurSekarang string "json:\"umurSekarang,omitempty\"" } "json:\"umur,omitempty\"" }
	    peserta?: any;
	    // Go type: struct { Kode string "json:\"kode,omitempty\""; Nama string "json:\"nama,omitempty\"" }
	    poliRujukan?: any;
	    // Go type: struct { Kode string "json:\"kode,omitempty\""; Nama string "json:\"nama,omitempty\"" }
	    provPerujuk?: any;
	    tglKunjungan?: string;
	
	    static createFrom(source: any = {}) {
	        return new Rujukan(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.diagnosa = this.convertValues(source["diagnosa"], Object);
	        this.keluhan = source["keluhan"];
	        this.noKunjungan = source["noKunjungan"];
	        this.pelayanan = this.convertValues(source["pelayanan"], Object);
	        this.peserta = this.convertValues(source["peserta"], Object);
	        this.poliRujukan = this.convertValues(source["poliRujukan"], Object);
	        this.provPerujuk = this.convertValues(source["provPerujuk"], Object);
	        this.tglKunjungan = source["tglKunjungan"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ResponseRujukan {
	    rujukan?: Rujukan;
	
	    static createFrom(source: any = {}) {
	        return new ResponseRujukan(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.rujukan = this.convertValues(source["rujukan"], Rujukan);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ResponseSearchRujukan {
	    // Go type: struct { Code string "json:\"code\""; Message string "json:\"message\"" }
	    metaData: any;
	    response?: ResponseRujukan;
	    listdokter: ListDokterBpjs;
	    JmlRujukan: JumlahSEP;
	    skdp?: string;
	
	    static createFrom(source: any = {}) {
	        return new ResponseSearchRujukan(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.metaData = this.convertValues(source["metaData"], Object);
	        this.response = this.convertValues(source["response"], ResponseRujukan);
	        this.listdokter = this.convertValues(source["listdokter"], ListDokterBpjs);
	        this.JmlRujukan = this.convertValues(source["JmlRujukan"], JumlahSEP);
	        this.skdp = source["skdp"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

