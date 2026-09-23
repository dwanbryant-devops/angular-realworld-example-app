import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// The app is zoneless (provideZonelessChangeDetection in app.config.ts) and zone.js is
// not a dependency, so tests run zoneless too.
@NgModule({ providers: [provideZonelessChangeDetection()] })
class ZonelessTestingModule {}

const testingModules = [BrowserDynamicTestingModule, ZonelessTestingModule];

getTestBed().initTestEnvironment(testingModules, platformBrowserDynamicTesting(), {
  teardown: { destroyAfterEach: true },
});
