import { Byte } from "@angular/compiler/src/util";

export interface candidature{
    idCandidature : number;	
    debutMobilite : Date;
    relevéDeNote : Blob;
    cv : Blob;
    statutCandidature : any;
    moyenne : any;
    archive : any;

}