import { Component } from '@angular/core';
import { SettingsService } from 'app/core/service/settings.service';

@Component({
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.scss']
})
export class ShortcutsApplicationComponent {

    constructor(
        public settingsService: SettingsService
    ) { }

    public range(start: number, end: number): Array<number> {
        let arr = [];

        for (let i = start; i <= end; i++)
            arr.push(i);

        return arr;
    }

}
