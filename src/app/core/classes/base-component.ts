import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { BrowserType } from "../enums/browser-type";
import { MobileSystemType } from "../enums/mobile-system-type";
import * as LocalEnum from 'locale-enum';
import { ExtraLargeScreen, LargeScreen, MediumScreen, SmallScreen, TinyScreen } from "../variables/screen-width";
import { ScreenWidthType } from "../enums/screen-width-type";
import { StatusType } from "../enums/status-type";

@Component({
    template: '',
    styleUrls: [
        '../../../styles.scss'
    ]
})

export abstract class BaseComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    /**
     * Returns `true` if screen is greater or equal {@link ExtraLargeScreen}
     */
    get isExtraLargeScreen(): boolean {
        return this.getScreenWidth() >= ExtraLargeScreen;
    }

    /**
     * Returns `true` if screen is greater or equal {@link LargeScreen}
     */
    get isLargeScreen(): boolean {
        return this.getScreenWidth() >= LargeScreen;
    }

    /**
     * Returns `true` if screen is greater or equal {@link MediumScreen}
     */
    get isMediumScreen(): boolean {
        return this.getScreenWidth() >= MediumScreen;
    }

    /**
     * Returns `true` if screen is greater or equal {@link SmallScreen}
     */
    get isSmallScreen(): boolean {
        return this.getScreenWidth() >= SmallScreen;
    }

    /**
     * Returns `true` if screen is greater or equal {@link TinyScreen}
     */
    get isTinyScreen(): boolean {
        return this.getScreenWidth() >= TinyScreen;
    }

    get time(): Date {
        return new Date();
    }

    public readonly Size = ScreenWidthType;
    private readonly Status = StatusType;

    constructor() {}

    getBrowserTypes(): Array<BrowserType> {
        var u = navigator.userAgent.toLowerCase();
        var v : Array<BrowserType> = [];
        if(/firefox/i.test(u)) { v.push(BrowserType.Firefox); }
        if(/chrome/i.test(u)) { v.push(BrowserType.Chrome); }
        if(/safari/i.test(u)) { v.push(BrowserType.Safari); }
        if(/trident/i.test(u)) { v.push(BrowserType.InternetExplorer); }
        if(/edg/i.test(u)) { v.push(BrowserType.Edge); }
        if(/opr/i.test(u)) { v.push(BrowserType.Opera); }
        if(/vivaldi/i.test(u)) { v.push(BrowserType.Vivaldi); }
        if(/yabrowser/i.test(u)) { v.push(BrowserType.Yandex); }
        return v;
    }
    
    checkForBrowserTyp(type: BrowserType): boolean {
        return this.getBrowserTypes().includes(type);
    }

    getClientLanguage(): LocalEnum.Locale {
        return LocalEnum.Locale[navigator.language as keyof typeof LocalEnum.Locale];
    }

    getMobileSystemTypes(): Array<MobileSystemType> {
        var u = navigator.userAgent.toLowerCase();
        var v : Array<MobileSystemType> = [];
        if(/android/i.test(u)) { v.push(MobileSystemType.Android); }
        if(/webos/i.test(u)) { v.push(MobileSystemType.webOS); }
        if(/iphone/i.test(u)) { v.push(MobileSystemType.iPhone); }
        if(/ipad/i.test(u)) { v.push(MobileSystemType.iPad); }
        if(/blackberry/i.test(u)) { v.push(MobileSystemType.BlackBerry); }
        if(/iemobile/i.test(u)) { v.push(MobileSystemType.IEMobile); }
        if(/opera mini/i.test(u)) { v.push(MobileSystemType.Opera_Mini); }
        if(/mobile/i.test(u)) { v.push(MobileSystemType.Mobile); }
        if(/crios/i.test(u)) { v.push(MobileSystemType.CriOS); }
        return v;
    }

    checkForMobileSystemType(type: MobileSystemType): boolean {
        return this.getMobileSystemTypes().includes(type);
    }

    getScreenHeight(): number {
        return screen.availHeight;
    }

    getScreenWidth(): number {
        return screen.availWidth;
    }

    getTimeZone() {
        return (new Date()).getTimezoneOffset()/60;
    }

    isCookiesEnabled(): boolean {
        return navigator.cookieEnabled;
    }

    isMobile(): boolean {
        return this.getMobileSystemTypes().length > 0;
    }

    //#region AngularLifecycle
    /**
     * @private
     */
    ngOnInit(): void {
        this.onInit();
    }
    /**
     * Called once, after the first {@link ngOnChanges()}. {@link ngOnInit()} is still called even when {@link ngOnChanges()} is not (which is the case when there are no template-bound inputs).
     * @override
     */
    onInit(): void {}

    /**
     * @private
     */
    ngDoCheck(): void {
        this.doCheck();
    }
    /**
     * Called immediately after {@link ngOnChanges()} on every change detection run, and immediately after {@link ngOnInit()} on the first run.
     * @override
     */
    doCheck(): void {

    }

    /**
     * @private
     */
    ngAfterViewInit(): void {
        this.afterViewInit();
    }
    /**
     * Called once after the first {@link ngAfterContentChecked()}.
     * @override
     */
    afterViewInit(): void {}

    /**
     * @private
     */
    ngAfterViewChecked(): void {
        this.afterViewChecked();
    }
    /**
     * Called after the {@link ngAfterViewInit()} and every subsequent {@link ngAfterContentChecked()}.
     * @override
     */
    afterViewChecked(): void {}

    /**
     * @private
     */
    ngOnChanges(changes: SimpleChanges) : void{
        this.onChanges(changes);
    }
    /**
     * Called before {@link ngOnInit()} (if the component has bound inputs) and whenever one or more data-bound input properties change.
     * @param changes Loads a instance of `Simple Changes` which can be used to compare potentially changed values.
     * @override
     */
    onChanges(changes: SimpleChanges): void {}

    /**
     * @private
     */
    ngAfterContentInit(): void {
        this.afterContentInit();
    }
    /**
     * Called once after the first {@link ngDoCheck()}.
     * @override
     */
    afterContentInit(): void {}

    /**
     * @private
     */
    ngAfterContentChecked(): void {
        this.afterContentChecked();
    }
    /**
     * Called after {@link ngAfterContentInit()} and every subsequent {@link ngDoCheck()}.
     * @override
     */
    afterContentChecked(): void {}

    /**
     * @þrivate
     */
    ngOnDestroy(): void {
        this.onDestroy();
    }
    /**
     * Called immediately before Angular destroys the directive or component.
     * @override
     */
    onDestroy(): void {}
    //#endregion AngularLifecycle
}