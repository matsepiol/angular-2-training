export class Course {
	public title: string;
	public duration: string;
	public startDate: Date;
	public description: string;
	public id: number;

	constructor(title: string, duration: string, startDate: Date, description: string, id: number) {
		this.title = title;
		this.duration = duration;
		this.startDate = startDate;
		this.description = description;
		this.id = id;
	}
}
