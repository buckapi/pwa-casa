import { Component } from '@angular/core';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-services2',
  standalone: true,
  imports: [],
  templateUrl: './services2.component.html',
  styleUrl: './services2.component.css'
})
export class Services2Component {
  constructor (
    public global: GlobalService,
    public virtualRouter: virtualRouter
  )
  {}
}
