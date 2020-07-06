(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"3feb":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("mrSG"),o=t("Xo/0"),i=t("t/Na"),r=t("qkCY"),a=t("ZZ/e"),s=function(){function n(n,l,t,e,u,o){this.http=n,this.storage=l,this.alertController=t,this.translateService=e,this.stripeservice=u,this.router=o,this.buttonDisabled=null,this.serverUrl=window.location&&window.location.hostname&&window.location.hostname.includes("localhost")?"https://localhost:44309/":"https://swsignwriterapi.azurewebsites.net/"}return n.prototype.ngOnInit=function(){return u.b(this,void 0,void 0,function(){var n,l,t,e,o,i;return u.e(this,function(u){switch(u.label){case 0:return[4,this.storage.GetCurrentUserProfile()];case 1:return(n=u.sent())&&null!==n?[3,2]:(this.router.navigate(["/login"]),[3,4]);case 2:return[4,this.storage.GetSubscription(n.email)];case 3:(l=u.sent())&&(this.SetButtonDisabled(l.endDate),t=new Date(l.endDate),e=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),o=new Intl.DateTimeFormat("en",{month:"short"}).format(t),i=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t),this.subscriptionEndDate=i+"-"+o+"-"+e,this.autoRenewal=!l.cancelatperiodend),u.label=4;case 4:return[2]}})})},n.prototype.SetButtonDisabled=function(n){var l=new Date(n)>=new Date;this.buttonDisabled=l},n.prototype.SubscribeMonthly=function(){return u.b(this,void 0,void 0,function(){return u.e(this,function(n){switch(n.label){case 0:return[4,this.createSession("plan_HHKPHgsv5Vdy49")];case 1:return n.sent(),[2]}})})},n.prototype.SubscribeYearly=function(){return u.b(this,void 0,void 0,function(){return u.e(this,function(n){switch(n.label){case 0:return[4,this.createSession("plan_HHKPf6K2bmpeN7")];case 1:return n.sent(),[2]}})})},n.prototype.createSession=function(n){return u.b(this,void 0,void 0,function(){var l,t,e,o,r;return u.e(this,function(u){switch(u.label){case 0:return[4,this.storage.GetCurrentUserProfile()];case 1:return(l=u.sent())&&null!==l||this.router.navigate(["/login"]),[4,this.storage.GetSubscription(l.email)];case 2:return t=u.sent(),e=new Date,t&&(e=t.endDate),[4,this.storage.GetTrialStartDate(l.email)];case 3:return o=u.sent(),(r=l).planId=n,r.trialStartDate=o,r.subscriptionEndDate=e,this.http.post(this.serverUrl+"api/stripe/createsession",r,{headers:new i.g({Accept:"application/json","Content-Type":"application/json"})}).subscribe(function(n){console.log(n);var l=n;Stripe("pk_live_Q4UaSLy3gZtg16efKx9JUhCh009AFVCrne").redirectToCheckout({sessionId:l}).then(function(n){n.error?console.log("There was an error with the checkout."):(console.log("Checkout was a success."),console.log(n))})},function(n){console.log(n)}),[2]}})})},n.prototype.CancelRenewal=function(){return u.b(this,void 0,void 0,function(){var n=this;return u.e(this,function(l){switch(l.label){case 0:return[4,this.alertController.create({header:this.translateService.instant("Cancel automatic renewal"),message:this.translateService.instant("Are you <strong>sure</strong> you want to remove automatic renewal?"),buttons:[{text:"Disagree",role:"cancel",cssClass:"secondary",handler:function(n){}},{text:"Agree",handler:function(){return u.b(n,void 0,void 0,function(){var n,l,t,e,o,r;return u.e(this,function(u){switch(u.label){case 0:return[4,this.storage.GetCurrentUserProfile()];case 1:return(n=u.sent())&&null!==n||this.router.navigate(["/login"]),[4,this.http.post(this.serverUrl+"api/stripe/cancelrenewal",{privatekey:"**GSew10o0uJiAg4qpTAvQ$KEMaCjC6P7@su2Dd1C9#a8Y$VISWXzYogPhYk&N6p5&cGb1k@nGFX",email:n.email},{headers:new i.g({Accept:"application/json","Content-Type":"application/json"})}).toPromise()];case 2:return u.sent(),this.stripeservice.GetandSaveStripeSubscriptionData(n.email),[4,this.storage.GetSubscription(n.email)];case 3:return l=u.sent(),t=l.endDate,e=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),o=new Intl.DateTimeFormat("en",{month:"short"}).format(t),r=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t),this.subscriptionEndDate=r+"-"+o+"-"+e,this.autoRenewal=l.CancelAtPeriodEnd,this.SetButtonDisabled(l.endDate),[2]}})})}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n}(),b=function(){return function(){}}(),c=t("pMnS"),h=t("oBZk"),p=t("A7o+"),f=t("Ip0R"),d=t("ZYCi"),m=e.nb({encapsulation:0,styles:[[""]],data:{}});function g(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,7,"ion-col",[],null,null,null,h.H,h.e)),e.ob(1,49152,null,0,a.r,[e.h,e.k,e.z],null,null),(n()(),e.Gb(2,0,[" "," "," "])),e.Bb(131072,p.i,[p.j,e.h]),(n()(),e.pb(4,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.CancelRenewal()&&e),e},h.F,h.c)),e.ob(5,49152,null,0,a.i,[e.h,e.k,e.z],null,null),(n()(),e.Gb(6,0,[" ",""])),e.Bb(131072,p.i,[p.j,e.h])],null,function(n,l){var t=l.component;n(l,2,0,e.Hb(l,2,0,e.zb(l,3).transform("Your subscription is valid until and will renew on")),t.subscriptionEndDate),n(l,6,0,e.Hb(l,6,0,e.zb(l,7).transform("Cancel Automatic Renewal")))})}function w(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,3,"ion-col",[],null,null,null,h.H,h.e)),e.ob(1,49152,null,0,a.r,[e.h,e.k,e.z],null,null),(n()(),e.Gb(2,0,[" "," "," "])),e.Bb(131072,p.i,[p.j,e.h])],null,function(n,l){var t=l.component;n(l,2,0,e.Hb(l,2,0,e.zb(l,3).transform("Your subscription is valid until")),t.subscriptionEndDate)})}function v(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,4,"ion-row",[],null,null,null,h.Z,h.w)),e.ob(1,49152,null,0,a.gb,[e.h,e.k,e.z],null,null),(n()(),e.gb(16777216,null,0,1,null,g)),e.ob(3,16384,null,0,f.k,[e.O,e.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e.gb(0,[["validuntil",2]],0,0,null,w))],function(n,l){n(l,3,0,l.component.autoRenewal,e.zb(l,4))},null)}function k(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,15,"ion-header",[],null,null,null,h.N,h.k)),e.ob(1,49152,null,0,a.z,[e.h,e.k,e.z],null,null),(n()(),e.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,h.fb,h.C)),e.ob(3,49152,null,0,a.zb,[e.h,e.k,e.z],null,null),(n()(),e.pb(4,0,null,0,7,"ion-buttons",[["slot","start"]],null,null,null,h.G,h.d)),e.ob(5,49152,null,0,a.j,[e.h,e.k,e.z],null,null),(n()(),e.pb(6,0,null,0,5,"ion-menu-toggle",[],null,null,null,h.U,h.s)),e.ob(7,49152,null,0,a.Q,[e.h,e.k,e.z],null,null),(n()(),e.pb(8,0,null,0,3,"ion-button",[],null,null,null,h.F,h.c)),e.ob(9,49152,null,0,a.i,[e.h,e.k,e.z],null,null),(n()(),e.pb(10,0,null,0,1,"ion-icon",[["name","menu"],["slot","icon-only"]],null,null,null,h.O,h.l)),e.ob(11,49152,null,0,a.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.pb(12,0,null,0,3,"ion-title",[],null,null,null,h.eb,h.B)),e.ob(13,49152,null,0,a.xb,[e.h,e.k,e.z],null,null),(n()(),e.Gb(14,0,["",""])),e.Bb(131072,p.i,[p.j,e.h]),(n()(),e.pb(16,0,null,null,25,"ion-content",[],null,null,null,h.I,h.f)),e.ob(17,49152,null,0,a.s,[e.h,e.k,e.z],null,null),(n()(),e.gb(16777216,null,0,1,null,v)),e.ob(19,16384,null,0,f.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(20,0,null,0,21,"ion-row",[],null,null,null,h.Z,h.w)),e.ob(21,49152,null,0,a.gb,[e.h,e.k,e.z],null,null),(n()(),e.pb(22,0,null,0,19,"ion-col",[],null,null,null,h.H,h.e)),e.ob(23,49152,null,0,a.r,[e.h,e.k,e.z],null,null),(n()(),e.pb(24,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),e.Gb(25,null,["1 ",""])),e.Bb(131072,p.i,[p.j,e.h]),(n()(),e.pb(27,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),e.Gb(28,null,["+ ",""])),e.Bb(131072,p.i,[p.j,e.h]),(n()(),e.pb(30,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.SubscribeYearly()&&e),e},h.F,h.c)),e.ob(31,49152,null,0,a.i,[e.h,e.k,e.z],{disabled:[0,"disabled"]},null),(n()(),e.Gb(32,0,["",""])),e.Bb(131072,p.i,[p.j,e.h]),(n()(),e.pb(34,0,null,0,0,"hr",[],null,null,null,null,null)),(n()(),e.pb(35,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),e.Gb(36,null,[" ",""])),e.Bb(131072,p.i,[p.j,e.h]),(n()(),e.pb(38,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.SubscribeMonthly()&&e),e},h.F,h.c)),e.ob(39,49152,null,0,a.i,[e.h,e.k,e.z],{disabled:[0,"disabled"]},null),(n()(),e.Gb(40,0,["",""])),e.Bb(131072,p.i,[p.j,e.h])],function(n,l){var t=l.component;n(l,11,0,"menu"),n(l,19,0,t.subscriptionEndDate),n(l,31,0,t.buttonDisabled),n(l,39,0,t.buttonDisabled)},function(n,l){n(l,14,0,e.Hb(l,14,0,e.zb(l,15).transform("Subscribe"))),n(l,25,0,e.Hb(l,25,0,e.zb(l,26).transform("Month FREE"))),n(l,28,0,e.Hb(l,28,0,e.zb(l,29).transform("$5/month for 11 months"))),n(l,32,0,e.Hb(l,32,0,e.zb(l,33).transform("Subscribe Yearly"))),n(l,36,0,e.Hb(l,36,0,e.zb(l,37).transform("$5/month"))),n(l,40,0,e.Hb(l,40,0,e.zb(l,41).transform("Subscribe Monthly")))})}function D(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"app-subscribe",[],null,null,null,k,m)),e.ob(1,114688,null,0,s,[i.c,r.a,a.a,p.j,o.a,d.n],null,null)],function(n,l){n(l,1,0)},null)}var z=e.lb("app-subscribe",s,D,{},{},[]),S=t("gIcY");t.d(l,"SubscribePageModuleNgFactory",function(){return y});var y=e.mb(b,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[c.a,z]],[3,e.j],e.x]),e.xb(4608,f.m,f.l,[e.u,[2,f.t]]),e.xb(4608,S.g,S.g,[]),e.xb(4608,a.b,a.b,[e.z,e.g]),e.xb(4608,a.Eb,a.Eb,[a.b,e.j,e.q]),e.xb(4608,a.Hb,a.Hb,[a.b,e.j,e.q]),e.xb(1073742336,f.c,f.c,[]),e.xb(1073742336,S.f,S.f,[]),e.xb(1073742336,S.a,S.a,[]),e.xb(1073742336,a.Bb,a.Bb,[]),e.xb(1073742336,p.g,p.g,[]),e.xb(1073742336,d.q,d.q,[[2,d.w],[2,d.n]]),e.xb(1073742336,b,b,[]),e.xb(1024,d.l,function(){return[[{path:"",component:s}]]},[])])})}}]);