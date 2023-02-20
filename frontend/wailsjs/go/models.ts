export namespace models {
	
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

}

export namespace utils {
	
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
	
	    static createFrom(source: any = {}) {
	        return new ResponseCreateSKDP(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.metaData = this.convertValues(source["metaData"], HeadResponse);
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
	export class Rujukan {
	    // Go type: struct { Kode string "json:\"kode,omitempty\""; Nama string "json:\"nama,omitempty\"" }
	    diagnosa?: any;
	    keluhan?: string;
	    noKunjungan?: string;
	    // Go type: struct { Kode string "json:\"kode,omitempty\""; Nama string "json:\"nama,omitempty\"" }
	    pelayanan?: any;
	    // Go type: struct { Cob struct { NmAsuransi interface {} "json:\"nmAsuransi,omitempty\""; NoAsuransi interface {} "json:\"noAsuransi,omitempty\""; TglTAT interface {} "json:\"tglTAT,omitempty\""; TglTMT interface {} "json:\"tglTMT,omitempty\"" } "json:\"cob,omitempty\""; HakKelas struct { Keterangan string "json:\"keterangan,omitempty\""; Kode string "json:\"kode,omitempty\"" } "json:\"hakKelas,omitempty\""; Informasi struct { Dinsos interface {} "json:\"dinsos,omitempty\""; NoSKTM interface {} "json:\"noSKTM,omitempty\""; ProlanisPRB interface {} "json:\"prolanisPRB,omitempty\"" } "json:\"informasi,omitempty\""; JenisPeserta struct { Keterangan string "json:\"keterangan,omitempty\""; Kode string "json:\"kode,omitempty\"" } "json:\"jenisPeserta,omitempty\""; Mr struct { NoMR string "json:\"noMR,omitempty\""; NoTelepon interface {} "json:\"noTelepon,omitempty\"" } "json:\"mr,omitempty\""; Nama string "json:\"nama,omitempty\""; Nik string "json:\"nik,omitempty\""; NoKartu string "json:\"noKartu,omitempty\""; Pisa string "json:\"pisa,omitempty\""; ProvUmum struct { KdProvider string "json:\"kdProvider,omitempty\""; NmProvider string "json:\"nmProvider,omitempty\"" } "json:\"provUmum,omitempty\""; Sex string "json:\"sex,omitempty\""; StatusPeserta struct { Keterangan string "json:\"keterangan,omitempty\""; Kode string "json:\"kode,omitempty\"" } "json:\"statusPeserta,omitempty\""; TglCetakKartu string "json:\"tglCetakKartu,omitempty\""; TglLahir string "json:\"tglLahir,omitempty\""; TglTAT string "json:\"tglTAT,omitempty\""; TglTMT string "json:\"tglTMT,omitempty\""; Umur struct { UmurSaatPelayanan string "json:\"umurSaatPelayanan,omitempty\""; UmurSekarang string "json:\"umurSekarang,omitempty\"" } "json:\"umur,omitempty\"" }
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

