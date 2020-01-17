import { Component, OnInit, Inject } from '@angular/core';
import { Config } from '@spartacus/core';

@Component({
  selector: 'app-config-display',
  templateUrl: './config-display.component.html',
  styleUrls: ['./config-display.component.scss']
})
export class ConfigDisplayComponent implements OnInit {

  constructor(@Inject(Config) private config: any) { }

  ngOnInit() {
    console.log(this.config);
  }

}
