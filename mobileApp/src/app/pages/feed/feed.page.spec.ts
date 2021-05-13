/* =======================================================
 *
 * Created by anele on 2020/05/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { FeedPage } from './feed.page';
import { IonicModule } from '@ionic/angular';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('FeedPage', () => {

    let component: FeedPage;
    let fixture: ComponentFixture<FeedPage>;


    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({
            declarations: [ FeedPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(FeedPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
