export class Purchasedetail{
    
    purdetid!: number;
    purid!: number;
    pid!: number;
    purqty!: number;
    purdate!: Date;
    ppricepu!: number;
    subtotal!: number;

    constructor(public spurid: null, public spurdate: null, public spid: null, public spurqty: null,  public sppricepu: null, public ssubtotal: null){
        this.spurid = null;
        this.spurdate = null;
        this.spid = null;
        this.sppricepu = null;
        this.spurqty = null;
        this.ssubtotal = null;
    }
}