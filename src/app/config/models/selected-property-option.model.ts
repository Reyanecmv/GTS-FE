import { LogicalOperator } from './logical-operator.enum';

export interface SelectedPropertyOption {
	propertyName: string;
	booleanValue: boolean;
	firstValue: number;
	secondValue: number;
	logicalOperator: LogicalOperator;
	isBoolean: boolean;
}
