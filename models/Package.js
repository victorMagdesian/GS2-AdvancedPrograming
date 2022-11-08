export class Package {
  trackingNumber: Number;
  title: String;
  reqDate: String;
  deliveryDate: String;
  status: String;
  flagged: Boolean;

  constructor(trackingNumber: Number, title: String, reqDate: String, deliveryDate: String, status: String, flagged: Boolean = false) {
    this.trackingNumber = trackingNumber;
    this.title = title;
    this.reqDate = reqDate;
    this.deliveryDate = deliveryDate;
    this.status = status;
    this.flagged = flagged;
  }
}
