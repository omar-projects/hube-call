import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      "logo-c",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/Logo-c.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "logo-full",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/Logo-full.svg")
    );
  }
}
