// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {utils} from '../models';
import {models} from '../models';
import {context} from '../models';
import {gorm} from '../models';

export function CreateSKDP(arg1:utils.RequestSKDP):Promise<utils.ResponseCreateSKDP>;

export function GetKodePoliBPJS(arg1:string):Promise<utils.ListPoli>;

export function GetListDockterBPJS(arg1:string):Promise<utils.ListDokterBpjs>;

export function GetListPoli(arg1:string):Promise<Array<models.MapingPoliBpjs>>;

export function GetMapPoli(arg1:string):Promise<models.MapingPoliBpjs>;

export function GetPoliKontrolBPJS(arg1:string,arg2:string,arg3:string):Promise<utils.ListPoliKontrol>;

export function ListHistory(arg1:string,arg2:string,arg3:string):Promise<utils.ResponseListHistory>;

export function ListSKDP(arg1:string,arg2:string):Promise<utils.ResponseListSKDP>;

export function SearchNoKartu(arg1:string,arg2:string):Promise<utils.ResponsePeserta>;

export function SearchPasien(arg1:string,arg2:string):Promise<utils.ResponseSearchRujukan>;

export function SearchRujukanByNoKa(arg1:string,arg2:string):Promise<utils.ResponseSearchRujukan>;

export function SearchRujukanByNorujukan(arg1:string,arg2:string):Promise<utils.ResponseSearchRujukan>;

export function Setup(arg1:context.Context,arg2:gorm.DB):Promise<void>;
