import { Component, OnInit } from '@angular/core';
import { FormArray, AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownOptions } from '../models/dropdown-options.model';
import { PropertyType } from '../models/property-type.enum';
import { ConfigService } from '../config.service';
import { InputNumberOptions } from '../models/input-number-options.enum';

@Component({
	selector: 'app-config-create',
	templateUrl: './config-create.component.html',
	styleUrls: ['./config-create.component.scss']
})
export class ConfigCreateComponent implements OnInit {
	public form: FormGroup;
	public propertiesOptions: Map<string, DropdownOptions[]>;
	public propertiesSelectedOption: DropdownOptions[] = [];
	public propertyType = PropertyType;
	public ruleTypes= InputNumberOptions;
	public alertTypesOptions = [
		{ name: 'Fire alert', code: 'FIRE', inactive: false },
		{ name: 'Sensor alert', code: 'SENSOR', inactive: true },
		{ name: 'Access control alert', code: 'ACCESS', inactive: false }
	];
	public conditionOptions = [
		{ name: 'Greater than', code: 'GREATER_THEN', inactive: false },
		{ name: 'Lesser than', code: 'LESSER_THEN', inactive: true },
		{ name: 'Equal', code: 'EQUAL', inactive: false },
		{ name: 'Between', code: 'BETWEEN', inactive: false }
	];
	public logicalOperatorOptions = [
		{ name: 'And', code: 'AND', inactive: false },
		{ name: 'Or', code: 'OR', inactive: true }
	];
	public booleanRuleOptions = [
		{ name: 'True', code: true, inactive: false },
		{ name: 'False', code: false, inactive: true }
	];

	get propertiesArray(): FormArray {
		return this.form.get("properties") as FormArray
	}

	constructor(private formBuilder: FormBuilder, private configService: ConfigService) {
		this.initDropdowns();
		this.initForm();
	}

	ngOnInit(): void {
		this.initValueListeners();
	}

	public initForm(): void {
		this.form = this.formBuilder.group({
			name: new FormControl('', [Validators.required]),
			alertType: new FormControl('', [Validators.required]),
			properties: this.formBuilder.array([this.createPropertiesForm()])
		});
	}

	public createPropertiesForm(): FormGroup {
		return this.formBuilder.group(
				{
					property: new FormControl('', [Validators.required]),
					selectedPropertyOption: this.formBuilder.array([this.createSelectedPropertyOption()])
				}
		)
	}

	public getSelectedPropertyOptionArray(formGroup: AbstractControl): FormArray {
		return formGroup.get('selectedPropertyOption') as FormArray;
	}


	public createSelectedPropertyOption(): FormGroup {
		return this.formBuilder.group({
			propertyName: new FormControl(null, [Validators.required]),
			booleanValue: new FormControl(null, [Validators.required]),
			firstValue: new FormControl(null, [Validators.required]),
			secondValue: new FormControl(null, [Validators.required]),
			logicalOperator: new FormControl(null, [Validators.required]),
		});
	}

	public addPropertiesForm(): void {
		this.propertiesArray.push(this.createPropertiesForm())
	}

	public addSelectedPropertyForm(formGroup: AbstractControl): void {
		this.getSelectedPropertyOptionArray(formGroup).push(this.createSelectedPropertyOption());
	}

	public removeSelectedPropertiesFormInstance(index: number, formGroup: AbstractControl): void {
		const array = this.getSelectedPropertyOptionArray(formGroup);
		if (array.length > 1) {
			array.removeAt(index);
		}
	}

	public removePropertyFormArray(index: number): void {
		if (this.propertiesArray.length > 1) {
			this.propertiesArray.removeAt(index);
		}
	}


	public initDropdowns(): void {
		this.propertiesOptions = new Map(
				[
					[
						'SENSOR', [
						{ name: 'Status', code: 'status', inactive: false, type: PropertyType.Boolean },
						{ name: 'Current Value', code: 'currentValue', inactive: true, type: PropertyType.Number },
						{ name: 'Alarm Status', code: 'alarmStatus', inactive: false, type: PropertyType.Boolean },
						{ name: 'Battery Level', code: 'batteryLevel', inactive: false, type: PropertyType.Number }
					]
					],
					[
						'ACCESS', [
						{ name: 'Door Status', code: 'doorStatus', inactive: false, type: PropertyType.Boolean },
						{ name: 'Access Allowed', code: 'accessAllowed', inactive: true, type: PropertyType.Boolean },
						{ name: 'Door Too Open', code: 'doorTooOpen', inactive: false, type: PropertyType.Boolean },
					]
					],
					[
						'FIRE', [
						{ name: 'Temperature', code: 'temperature', inactive: false, type: PropertyType.Number },
						{ name: 'CO2 Level', code: 'co2Lvl', inactive: true, type: PropertyType.Number },
						{ name: 'Smoke Detector Status', code: 'smokeDetectorStatus', inactive: false, type: PropertyType.Boolean },
						{ name: 'Sprinkler Status', code: 'sprinklerStatus', inactive: false, type: PropertyType.Boolean },
						{ name: 'Alarm Status', code: 'alarmStatus', inactive: false, type: PropertyType.Boolean }
					]
					]
				]
		);
	}

	public initValueListeners(): void {
		this.form.get('alertType')?.valueChanges.subscribe(value => {
			this.propertiesSelectedOption = this.propertiesOptions.get(value) as DropdownOptions[];
		});
	}

	submit(): void {
		this.configService.save(this.form.value);
	}

	cancel(): void {
		// handle cancel logic (return to the list);
	}
}
