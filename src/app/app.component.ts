import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { virtualRouter } from './services/virtualRouter.service'; // Asegúrate de que la ruta sea correcta
import { GlobalService } from './services/global.service'; // Asegúrate de que la ruta sea correcta
import { ScriptService } from './services/script.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TopNavbarComponent } from './components/ui/top-navbar/top-navbar.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/ui/footer/footer.component';
import { NgxDatesPickerModule } from 'ngx-dates-picker';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { Services2Component } from './components/services2/services2.component';
import { Services1Component } from './components/services1/services1.component';
import { Services3Component } from './components/services3/services3.component';
import { AboutComponent } from './components/about/about.component';
import { Gallery } from 'ng-gallery';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    NgxSpinnerModule,
    CommonModule, 
    RouterOutlet,
    TopNavbarComponent,
    FileManagerComponent,
    FooterComponent,
    NgxDaterangepickerMd,
    ContactComponent,
    ServicesComponent,
    Services2Component,
    Services1Component,
    Services3Component,
    AboutComponent,
    GalleryComponent,
    HomeComponent,
    PhotoGalleryModule
    
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vendricom';
  layoutStyle: string = "default";
  deviceInfo: any = null
  constructor(
    private deviceService: DeviceDetectorService,
    public script: ScriptService,
    public virtualRouter: virtualRouter,
    public global: GlobalService
    ) {


    this.script.load(
      'bundle',
      'jquery',
      'viewport',
      'niceSelect',
      'waypoints',
      'counterup',
      'swiper',
      'meanMenu',
      'magnificPopup',
      'wow',
      'main',
      

    )
      .then(() => {
        // console.log('Todos los scripts se cargaron correctamente');
      })
      .catch(error => console.log(error));
      this.global.getConfig();
      this.epicFunction();
      // this.global.isLogin();

    }
    ngOnInit(): void {
      this.global.getConfig().subscribe(
        (data) => {
          this.global.configs = data;
           // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
      this.global.getClientes().subscribe(
        (data) => {
          this.global.clientes = data.items; // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
      this.global.getCategories().subscribe(
        (data) => {
          this.global.categories = data.items; // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );

      this.global.getTemas().subscribe(
        (data) => {
          this.global.temas = data.items; // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );

      this.global.getDocuments().subscribe(
        (data) => {
          this.global.documents = data.items; // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
    }
    toggleLayoutStyle() {
      if (this.layoutStyle === "default") {
        this.layoutStyle = "collapsed";
      } else {
        this.layoutStyle = "default";
      }
    }
    epicFunction() {
      this.deviceInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
      if (isMobile) {
        this.global.device = "Mobile";
        // console.log("Mobile");
      };
      if (isTablet) {
        this.global.device = "Tablet";
      };
      if (isDesktopDevice) {
        this.global.device = "Desktop";
        // console.log("Desktop");
      };
  
    }
}
