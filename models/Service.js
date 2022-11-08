export class Service {
  id: Number;
  title: String;
  icon: String;
  description: String;
  briefDescription: String;

  constructor(id: Number, title: String, icon: String, description: String, briefDescription: String) {
    this.id = id;
    this.title = title;
    this.icon = icon;
    this.description = description;
    this.briefDescription = briefDescription;
  }
}
