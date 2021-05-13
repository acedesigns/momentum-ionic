/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { AboutPage } from './about.page';
import { IonicModule } from '@ionic/angular';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('AboutPage', () => {

    let component: AboutPage;
    let fixture: ComponentFixture<AboutPage>;


    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ AboutPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(AboutPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));


    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
