import { Component } from '@angular/core';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-services3',
  standalone: true,
  imports: [],
  templateUrl: './services3.component.html',
  styleUrl: './services3.component.css'
})
export class Services3Component {
constructor (
  public global: GlobalService,
  public virtualRouter: virtualRouter
)
{}
}
