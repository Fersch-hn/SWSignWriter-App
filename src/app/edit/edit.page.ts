import { SubscriptionService } from './../services/subscription.service';
import { SettingsService } from './../settings.service';
import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ChooseSignPage } from '../choose-sign/choose-sign.page';
import { FoundSign, Lane } from '../signs-lookup.service';

import { DocumentService, Document } from '../document.service';

interface EdittedDocument {
  editedsigns: FoundSign[];
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage implements OnInit, AfterViewInit {
  Lane = Lane;
  public editedDocument: EdittedDocument;

  @ViewChild('searchRef', { read: ElementRef }) searchRef: ElementRef;

  constructor(
    public modalController: ModalController,
    private documentService: DocumentService,
    private settingsService: SettingsService,
    private subscriptionService: SubscriptionService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.subscriptionService.CanUse();
    this.editedDocument = {
      editedsigns: []
    };
    const isFirstTime  = await this.settingsService.getFirstTime();
    if (isFirstTime == null) {
      return this.router.navigateByUrl('/settings');
    }
    this.documentService.clearDocument();
    this.showDocument(this.documentService.getDocument());
  }

  ionViewWillEnter() {
    this.searchRef.nativeElement.value = this.documentService.getSearchSentence();
    this.showDocument(this.documentService.getDocument());
  }

  ngAfterViewInit() {
    fromEvent(this.searchRef.nativeElement, 'keyup')
      .pipe(
        map((evt: any) => evt.target.value),
        debounceTime(100),
        distinctUntilChanged()
      )
      // subscription
      .subscribe((text: string) => {
        this.documentService.searchFrase(text);
        this.showDocument(this.documentService.getDocument());
      });
  }

  showDocument(document: Document): void {
    this.editedDocument = <EdittedDocument>{ editedsigns: document.signs };
  }

  trackFound(index, foundSign: FoundSign) {
    return foundSign ? foundSign.id : undefined;
  }

  accept() {
    return this.router.navigateByUrl('/view');
  }

  async replace(index: number) {
    const searchWord: string = this.documentService.getSearchWord(index);
    const modal = await this.modalController.create({
      component: ChooseSignPage,
      componentProps: {
        searchword: searchWord
      }
    });

    await modal.present();
    const { data } = await modal.onDidDismiss();
    // Replace existing item in list
    this.documentService.replaceElement(index, data.result);
    this.showDocument(this.documentService.getDocument());
    this.searchRef.nativeElement.value = this.documentService.getSearchSentence();
  }

  resetEntries() { }

  laneStyle(lane: Lane) {
    switch (lane) {
      case (Lane.Left): return 'lane-left';
      case (Lane.Right): return 'lane-right';
      default: return 'lane-middle';
    }
  }
}
