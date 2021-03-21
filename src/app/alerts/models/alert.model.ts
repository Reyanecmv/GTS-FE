export interface AlertModel {
	alertType: AlertTypes;
	dateCreated: Date;
	properties: string
}

export enum AlertTypes {
	Fire = 'FIRE',
	AccessControl = 'ACCESS',
	Sensor = 'SENSOR'
}

export interface AlertDTO {
	alertType: AlertTypes,
	doorStatus: boolean,
	accessAllowed: boolean,
	doorTooOpen: boolean,
	date: Date,
	temperature: number,
	co2Lvl: number,
	smokeDetectorStatus: boolean,
	sprinklerStatus: boolean,
	status: boolean,
	currentValue: number,
	alarmStatus: boolean,
	batteryLevel: number
}
