/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { IonicModule } from '@ionic/angular';
import { OrdersPage } from './orders.page';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('OrdersPage', () => {

    let component: OrdersPage;
    let fixture: ComponentFixture<OrdersPage>;

    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({
            declarations: [ OrdersPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(OrdersPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));


    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
