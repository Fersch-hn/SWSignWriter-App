(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{L6id:function(n,l,u){"use strict";u.r(l);var o=u("CcnG"),t=u("mrSG"),b=u("qkCY"),i=function(){function n(n,l){this.router=n,this.storage=l}return n.prototype.ngOnInit=function(){return t.b(this,void 0,void 0,function(){var n;return t.e(this,function(l){switch(l.label){case 0:return[4,this.storage.GetCurrentUserProfile()];case 1:return n=l.sent(),this.loggedin=!(!n||null===n),this.loggedin&&this.router.navigate(["/login"]),[2]}})})},n.prototype.goLogin=function(){this.router.navigate(["/login"])},n.prototype.goAbout=function(){this.router.navigate(["/about"])},n.prototype.goContinue=function(){this.router.navigate(["/edit"])},n}(),e=function(){return function(){}}(),r=u("pMnS"),c=u("oBZk"),a=u("ZZ/e"),g=u("A7o+"),p=u("Ip0R"),f=u("ZYCi"),s=o.nb({encapsulation:0,styles:[[""]],data:{}});function h(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),o.pb(1,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.goContinue()&&o),o},c.F,c.c)),o.ob(2,49152,null,0,a.i,[o.h,o.k,o.z],null,null),(n()(),o.Gb(3,0,["",""])),o.Bb(131072,g.i,[g.j,o.h])],null,function(n,l){n(l,3,0,o.Hb(l,3,0,o.zb(l,4).transform("Continue")))})}function k(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),o.pb(1,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.goLogin()&&o),o},c.F,c.c)),o.ob(2,49152,null,0,a.i,[o.h,o.k,o.z],null,null),(n()(),o.Gb(3,0,["",""])),o.Bb(131072,g.i,[g.j,o.h])],null,function(n,l){n(l,3,0,o.Hb(l,3,0,o.zb(l,4).transform("Login")))})}function m(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,15,"ion-header",[],null,null,null,c.N,c.k)),o.ob(1,49152,null,0,a.z,[o.h,o.k,o.z],null,null),(n()(),o.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,c.fb,c.C)),o.ob(3,49152,null,0,a.zb,[o.h,o.k,o.z],null,null),(n()(),o.pb(4,0,null,0,7,"ion-buttons",[["slot","start"]],null,null,null,c.G,c.d)),o.ob(5,49152,null,0,a.j,[o.h,o.k,o.z],null,null),(n()(),o.pb(6,0,null,0,5,"ion-menu-toggle",[],null,null,null,c.U,c.s)),o.ob(7,49152,null,0,a.Q,[o.h,o.k,o.z],null,null),(n()(),o.pb(8,0,null,0,3,"ion-button",[],null,null,null,c.F,c.c)),o.ob(9,49152,null,0,a.i,[o.h,o.k,o.z],null,null),(n()(),o.pb(10,0,null,0,1,"ion-icon",[["name","menu"],["slot","icon-only"]],null,null,null,c.O,c.l)),o.ob(11,49152,null,0,a.A,[o.h,o.k,o.z],{name:[0,"name"]},null),(n()(),o.pb(12,0,null,0,3,"ion-title",[],null,null,null,c.eb,c.B)),o.ob(13,49152,null,0,a.xb,[o.h,o.k,o.z],null,null),(n()(),o.Gb(14,0,["",""])),o.Bb(131072,g.i,[g.j,o.h]),(n()(),o.pb(16,0,null,null,10,"ion-content",[],null,null,null,c.I,c.f)),o.ob(17,49152,null,0,a.s,[o.h,o.k,o.z],null,null),(n()(),o.gb(16777216,null,0,1,null,h)),o.ob(19,16384,null,0,p.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,0,1,null,k)),o.ob(21,16384,null,0,p.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(22,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),o.pb(23,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.goAbout()&&o),o},c.F,c.c)),o.ob(24,49152,null,0,a.i,[o.h,o.k,o.z],null,null),(n()(),o.Gb(25,0,["",""])),o.Bb(131072,g.i,[g.j,o.h])],function(n,l){var u=l.component;n(l,11,0,"menu"),n(l,19,0,u.loggedin),n(l,21,0,!u.loggedin)},function(n,l){n(l,14,0,o.Hb(l,14,0,o.zb(l,15).transform("Welcome"))),n(l,25,0,o.Hb(l,25,0,o.zb(l,26).transform("About")))})}function d(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,1,"app-home",[],null,null,null,m,s)),o.ob(1,114688,null,0,i,[f.n,b.a],null,null)],function(n,l){n(l,1,0)},null)}var z=o.lb("app-home",i,d,{},{},[]),v=u("gIcY");u.d(l,"HomePageModuleNgFactory",function(){return x});var x=o.mb(e,[],function(n){return o.wb([o.xb(512,o.j,o.bb,[[8,[r.a,z]],[3,o.j],o.x]),o.xb(4608,p.m,p.l,[o.u,[2,p.t]]),o.xb(4608,v.g,v.g,[]),o.xb(4608,a.b,a.b,[o.z,o.g]),o.xb(4608,a.Eb,a.Eb,[a.b,o.j,o.q]),o.xb(4608,a.Hb,a.Hb,[a.b,o.j,o.q]),o.xb(1073742336,p.c,p.c,[]),o.xb(1073742336,v.f,v.f,[]),o.xb(1073742336,v.a,v.a,[]),o.xb(1073742336,a.Bb,a.Bb,[]),o.xb(1073742336,g.g,g.g,[]),o.xb(1073742336,f.q,f.q,[[2,f.w],[2,f.n]]),o.xb(1073742336,e,e,[]),o.xb(1024,f.l,function(){return[[{path:"",component:i}]]},[])])})}}]);