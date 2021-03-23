import { AlertTypes } from '../../alerts/models/alert.model';
import { Properties } from './properties.model';


export interface Rule {
	_id: string;
	name: string;
	alertType: AlertTypes;
	properties: Properties[]
}
