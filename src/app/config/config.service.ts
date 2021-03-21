import { Injectable } from '@angular/core';
import { Rule } from './models/rule.model';
import { ConfigHttpService } from './config-http.service';
import { SelectedPropertyOption } from './models/selected-property-option.model';

@Injectable()
export class ConfigService {

  constructor(private configHttp: ConfigHttpService) { }


  public save(formData: any) {
    this.configHttp.saveRule(this.mapRule(formData));
  }

  public mapRule(formData: any): Rule {
    formData.properties.forEach((item: any) => {
      item.property = item.property.code;
      item.selectedPropertyOption.forEach((option: SelectedPropertyOption) => {
        if(option.booleanValue !== null){
          option.isBoolean = true;
        }
      })
    });

    return formData
  }
}
