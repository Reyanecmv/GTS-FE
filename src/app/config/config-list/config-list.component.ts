import { Component, OnInit } from '@angular/core';
import { ConfigHttpService } from '../config-http.service';
import { Rule } from '../models/rule.model';

@Component({
	selector: 'app-config-list',
	templateUrl: './config-list.component.html',
	styleUrls: ['./config-list.component.scss']
})
export class ConfigListComponent implements OnInit {
	public rulesList: Rule[];

	constructor(private configService: ConfigHttpService) {
	}

	ngOnInit(): void {
		this.configService.getRules().subscribe(resp => this.rulesList = resp)
	}

	deleteRule(id: string) {
		this.configService.deleteRule(id).subscribe(resp => {
			const index = this.rulesList.findIndex(rule => rule._id === id);
			this.rulesList.splice(index, 1);
		})
	}
}
