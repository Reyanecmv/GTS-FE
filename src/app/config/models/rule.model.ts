import { AlertTypes } from '../../alerts/models/alert.model';
import { Properties } from './properties.model';


export interface Rule {
	name: string;
	alertType: AlertTypes;
	properties: Properties[]
}
