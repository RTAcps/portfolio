import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/component/header/header.component';
import { FooterComponent } from '../../core/component/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
