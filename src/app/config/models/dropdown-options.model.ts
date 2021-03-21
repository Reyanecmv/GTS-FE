import { PropertyType } from './property-type.enum';

export interface DropdownOptions {
	name: string,
	code: string,
	inactive: boolean,
	type: PropertyType
}
