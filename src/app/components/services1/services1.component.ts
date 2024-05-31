import { Component } from '@angular/core';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-services1',
  standalone: true,
  imports: [],
  templateUrl: './services1.component.html',
  styleUrl: './services1.component.css'
})
export class Services1Component {
constructor (
  public global: GlobalService,
  public virtualRouter: virtualRouter
){}
}
