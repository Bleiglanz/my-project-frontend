import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ControlComponent } from './control/control.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anton';
}
