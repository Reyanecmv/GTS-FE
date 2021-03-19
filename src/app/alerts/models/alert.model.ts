export interface AlertModel {
	alertType: AlertTypes;
	dateCreated: Date;
	properties: string
}

export enum AlertTypes {
	Fire = 'Fire Alert',
	AccessControl = 'Access Control Alert',
	Sensor = 'Sensor Alert'
}
