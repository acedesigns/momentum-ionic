/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { IonicModule } from '@ionic/angular';
import { AccountPage } from './account.page';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('AccountPage', () => {
    let component: AccountPage;
    let fixture: ComponentFixture<AccountPage>;


    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ AccountPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(AccountPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));


    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
