/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { IonicModule } from '@ionic/angular';
import { configureTestSuite } from 'ng-bullet';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { PopoverComponent } from './popover.component';

describe('PopoverComponent', () => {

    let component: PopoverComponent;
    let fixture: ComponentFixture<PopoverComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ ],
            providers: [ ]
        });
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PopoverComponent ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(PopoverComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        //component.dataTableComp = dataTableComponentSpy;
    }));

    afterEach(() => {
        fixture.destroy();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should close modal', () => {
        component.closePopUp();
    })

});
