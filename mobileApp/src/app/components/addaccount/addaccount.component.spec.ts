/* =======================================================
 *
 * Created by anele on 2020/09/20.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { IonicModule } from "@ionic/angular";
import { configureTestSuite } from "ng-bullet";
import { AddAccountComponent } from "./addaccount.component";
import { async, ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";


describe('PolicyComponent', () => {
    let component: AddAccountComponent;
    let fixture: ComponentFixture<AddAccountComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ ],
            providers: [ ]
        });
    });


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddAccountComponent ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(AddAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should close modal', () => {
        component.dismiss();
    })

});
