import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
  public buttonDisabled: boolean | null = null;
  public subscriptionEndDate: string;

  constructor(private http: HttpClient,
    private storage: StorageService,
    private router: Router
     ) { }
  private serverUrl = 'https://swsignwriterapi.azurewebsites.net/';

  async ngOnInit() {
    const profile = await this.storage.GetCurrentUserProfile();
    if (!profile) {
      this.router.navigate(['/login']);
    }
    const subscription = await this.storage.GetSubscription(profile.email);
    const subscribed = subscription && subscription.endDate && !subscription.cancelatperiodend;
    if (subscribed) {
      this.buttonDisabled = true;

      const d = new Date(subscription.endDate);
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
      const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
      this.subscriptionEndDate =  `${da}-${mo}-${ye}`;

    } else {
      this.buttonDisabled = null;
    }
  }

  async SubscribeMonthly() {
    const planId = 'plan_GEcB3WZYgKsVER';
    await this.createSession(planId);
  }

  async SubscribeYearly() {
    const planId = 'plan_GEcEaSP0i9BI5L';
    await this.createSession(planId);
  }

  private async createSession(planId: string) {
    const profile = await this.storage.GetCurrentUserProfile();

    const subscription = await this.storage.GetSubscription(profile.email);
    let subscriptionEndDate: Date = new Date();
    if (subscription) {
      subscriptionEndDate = subscription.endDate;
  }
    const trialStartDate = await this.storage.GetTrialStartDate(profile.email);
    console.log(profile);

    const request: any  = profile;
    request.planId = planId;
    request.trialStartDate = trialStartDate;
    request.subscriptionEndDate = subscriptionEndDate;

    this.http.post(this.serverUrl + 'api/stripe/createsession', request, {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
    })
      .subscribe(data => {
        console.log(data);
        const CHECKOUT_SESSION_ID = data;
        const stripe = Stripe('pk_test_l5XnhomUyeQmxzROJWndWDXD00M33eN4jl');
        stripe.redirectToCheckout({
          sessionId: CHECKOUT_SESSION_ID
        }).then(function (result) {
          if (result.error) {
            console.log('There was an error with the checkout.');
          } else {
            console.log('Checkout was a success.');
            console.log(result);
          }
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
      }, error => {
        console.log(error);
      });
  }
}
