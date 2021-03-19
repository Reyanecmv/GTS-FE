

export interface SensorAlertModel {
	status: EquipmentStatus;
	currentValue: number;
	alarmStatus: EquipmentStatus;
	batteryLevel: number;
}

export enum EquipmentStatus {
	On,
	Off
}
