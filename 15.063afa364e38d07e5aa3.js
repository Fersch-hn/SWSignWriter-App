(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"4fRq":function(n,l){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var e=new Uint8Array(16);n.exports=function(){return t(e),e}}else{var u=new Array(16);n.exports=function(){for(var n,l=0;l<16;l++)0==(3&l)&&(n=4294967296*Math.random()),u[l]=n>>>((3&l)<<3)&255;return u}}},EcEN:function(n,l,t){var e=t("xDdU"),u=t("xk4V"),o=u;o.v1=e,o.v4=u,n.exports=o},I2ZF:function(n,l){for(var t=[],e=0;e<256;++e)t[e]=(e+256).toString(16).substr(1);n.exports=function(n,l){var e=l||0;return[t[n[e++]],t[n[e++]],t[n[e++]],t[n[e++]],"-",t[n[e++]],t[n[e++]],"-",t[n[e++]],t[n[e++]],"-",t[n[e++]],t[n[e++]],"-",t[n[e++]],t[n[e++]],t[n[e++]],t[n[e++]],t[n[e++]],t[n[e++]]].join("")}},ksNu:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("mrSG"),o=t("bne5"),r=t("67Y/"),i=t("Gi3i"),c=t("ad02"),s=t("ZZ/e"),a=t("ACu4"),p=t("sCZD"),b=t("Q/j7"),d=t("EcEN"),f=t("2/4T"),h=function(){function n(n,l,t,e,u){this.modalController=n,this.normalize=l,this.signsLookupService=t,this.documentService=e,this.router=u}return n.prototype.ngOnInit=function(){this.documentService.clearDocument(),this.showDocument(this.documentService.getDocument())},n.prototype.resetEntries=function(){this.signsLookupService.loadSigns()},n.prototype.ngAfterViewInit=function(){var n=this;Object(o.a)(this.searchRef.nativeElement,"keyup").pipe(Object(r.a)(function(n){return n.target.value}),Object(i.a)(100),Object(c.a)()).subscribe(function(l){var t=n.searchFrase(l);n.updateSigns(t)})},n.prototype.updateSigns=function(n){this.documentService.updateSigns(n),this.showDocument(this.documentService.getDocument())},n.prototype.showDocument=function(n){this.editedDocument={editedsigns:n.signs}},n.prototype.trackFound=function(n,l){return l?l.id:void 0},n.prototype.searchFrase=function(n){var l=this;return n.split(" ").filter(function(n){return!(!n||0===n.length)}).map(function(n){return l.findSign(n)})},n.prototype.findSign=function(n){var l,t=this.signsLookupService.search(n);if(t.length>0){var e=this.findmatchingresult(t,n);l={sign:e,text:n,id:e.key+n,svg:ssw.svg(e.fsw)}}return l||(l={sign:null,text:n+" sign not found",id:Object(d.v4)()+n,svg:""}),l},n.prototype.findmatchingresult=function(n,l){var t=this.normalize.normalizeForSearch(l),e=n.find(function(n){return n.gloss===l});return e||(n.find(function(n){return n.normalized===t})||n.find(function(n){return n.normalized.includes(t)})||n[0])},n.prototype.replace=function(n){return u.b(this,void 0,void 0,function(){var l,t,e,o;return u.e(this,function(u){switch(u.label){case 0:return l=this.documentService.getDocument(),[4,this.modalController.create({component:a.a,componentProps:{searchword:l.signs[n].text}})];case 1:return[4,(t=u.sent()).present()];case 2:return e=u.sent(),[4,t.onDidDismiss()];case 3:return o=u.sent().data,console.log(o),l.signs=this.replaceElement(this.documentService.getDocument().signs,n,o),this.documentService.updateDocument(l),this.showDocument(this.documentService.getDocument()),[2,e]}})})},n.prototype.replaceElement=function(n,l,t){var e=n[l],u=this.signsLookupService.getsign(t.result);if(e&&u){var o=n.indexOf(e);o>=0&&(n[o]={sign:u,text:u.gloss,id:u.key+u.gloss,svg:ssw.svg(u.fsw)})}return n},n.prototype.accept=function(){return this.router.navigateByUrl("/view")},n}(),v=function(){return function(){}}(),g=t("pMnS"),m=t("oBZk"),k=t("ZJwn"),x=t("ZYjt"),y=t("gIcY"),w=t("Ip0R"),S=t("ZYCi"),D=e.nb({encapsulation:0,styles:[[".sign[_ngcontent-%COMP%]{min-width:100px;padding:10px}.editbutton[_ngcontent-%COMP%]{margin:10px;padding:5px}"]],data:{}});function C(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,8,"ion-item",[],null,null,null,m.J,m.l)),e.ob(1,49152,null,0,s.E,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,6,"button",[["class","editbutton"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.replace(n.context.index)&&e),e},null,null)),(n()(),e.pb(3,0,null,null,2,"div",[["class","sign"]],null,null,null,null,null)),(n()(),e.pb(4,0,null,null,1,"span",[],[[8,"innerHTML",1]],null,null,null,null)),e.Cb(5,1),(n()(),e.pb(6,0,null,null,2,"ion-label",[],null,null,null,m.K,m.m)),e.ob(7,49152,null,0,s.K,[e.h,e.k],null,null),(n()(),e.Gb(8,0,[""," "]))],null,function(n,l){var t=e.Hb(l,4,0,n(l,5,0,e.zb(l.parent,0),l.context.$implicit.svg));n(l,4,0,t),n(l,8,0,l.context.$implicit.text)})}function E(n){return e.Ib(0,[e.Bb(0,k.a,[x.b]),e.Eb(402653184,1,{searchRef:0}),(n()(),e.pb(2,0,null,null,19,"ion-header",[],null,null,null,m.H,m.j)),e.ob(3,49152,null,0,s.y,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,8,"ion-toolbar",[],null,null,null,m.V,m.x)),e.ob(5,49152,null,0,s.yb,[e.h,e.k],null,null),(n()(),e.pb(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,m.A,m.c)),e.ob(7,49152,null,0,s.i,[e.h,e.k],null,null),(n()(),e.pb(8,0,null,0,1,"ion-menu-button",[],null,null,null,m.M,m.p)),e.ob(9,49152,null,0,s.O,[e.h,e.k],null,null),(n()(),e.pb(10,0,null,0,2,"ion-title",[],null,null,null,m.U,m.w)),e.ob(11,49152,null,0,s.wb,[e.h,e.k],null,null),(n()(),e.Gb(-1,0,["Edit"])),(n()(),e.pb(13,0,null,0,8,"ion-item",[],null,null,null,m.J,m.l)),e.ob(14,49152,null,0,s.E,[e.h,e.k],null,null),(n()(),e.pb(15,0,[[1,0]],0,3,"ion-textarea",[["placeholder","Enter words to search here..."]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.zb(n,18)._handleBlurEvent()&&u),"ionChange"===l&&(u=!1!==e.zb(n,18)._handleInputEvent(t.target.value)&&u),u},m.T,m.v)),e.Db(5120,null,y.b,function(n){return[n]},[s.Jb]),e.ob(17,49152,[["searchRef",4]],0,s.ub,[e.h,e.k],{placeholder:[0,"placeholder"]},null),e.ob(18,16384,null,0,s.Jb,[e.k],null,null),(n()(),e.pb(19,0,null,0,2,"ion-button",[["style","display:none"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.resetEntries()&&e),e},m.z,m.b)),e.ob(20,49152,null,0,s.h,[e.h,e.k],null,null),(n()(),e.Gb(-1,0,["Reset"])),(n()(),e.pb(22,0,null,null,11,"ion-content",[["padding",""]],null,null,null,m.C,m.e)),e.ob(23,49152,null,0,s.r,[e.h,e.k],null,null),(n()(),e.pb(24,0,null,0,3,"ion-list",[],null,null,null,m.L,m.n)),e.ob(25,49152,null,0,s.L,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,C)),e.ob(27,278528,null,0,w.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(n()(),e.pb(28,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,m.E,m.f)),e.ob(29,49152,null,0,s.t,[e.h,e.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.pb(30,0,null,0,3,"ion-fab-button",[],null,null,null,m.D,m.g)),e.ob(31,49152,null,0,s.u,[e.h,e.k],null,null),(n()(),e.pb(32,0,null,0,1,"ion-icon",[["name","checkmark"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.accept()&&e),e},m.I,m.k)),e.ob(33,49152,null,0,s.z,[e.h,e.k],{name:[0,"name"]},null)],function(n,l){var t=l.component;n(l,17,0,"Enter words to search here..."),n(l,27,0,t.editedDocument.editedsigns,t.trackFound),n(l,29,0,"end","bottom"),n(l,33,0,"checkmark")},null)}function F(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"app-edit",[],null,null,null,E,D)),e.ob(1,4308992,null,0,h,[s.Cb,p.a,b.a,f.a,S.n],null,null)],function(n,l){n(l,1,0)},null)}var j=e.lb("app-edit",h,F,{},{},[]),z=t("iTUp");t.d(l,"EditPageModuleNgFactory",function(){return O});var O=e.mb(v,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[g.a,j]],[3,e.j],e.x]),e.xb(4608,w.k,w.j,[e.u,[2,w.r]]),e.xb(4608,y.d,y.d,[]),e.xb(4608,s.a,s.a,[e.z,e.g]),e.xb(4608,s.Cb,s.Cb,[s.a,e.j,e.q,w.c]),e.xb(4608,s.Fb,s.Fb,[s.a,e.j,e.q,w.c]),e.xb(1073742336,w.b,w.b,[]),e.xb(1073742336,y.c,y.c,[]),e.xb(1073742336,y.a,y.a,[]),e.xb(1073742336,s.Ab,s.Ab,[]),e.xb(1073742336,S.p,S.p,[[2,S.v],[2,S.n]]),e.xb(1073742336,z.a,z.a,[]),e.xb(1073742336,v,v,[]),e.xb(1024,S.l,function(){return[[{path:"",component:h}]]},[])])})},xDdU:function(n,l,t){var e,u,o=t("4fRq"),r=t("I2ZF"),i=0,c=0;n.exports=function(n,l,t){var s=l&&t||0,a=l||[],p=(n=n||{}).node||e,b=void 0!==n.clockseq?n.clockseq:u;if(null==p||null==b){var d=o();null==p&&(p=e=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==b&&(b=u=16383&(d[6]<<8|d[7]))}var f=void 0!==n.msecs?n.msecs:(new Date).getTime(),h=void 0!==n.nsecs?n.nsecs:c+1,v=f-i+(h-c)/1e4;if(v<0&&void 0===n.clockseq&&(b=b+1&16383),(v<0||f>i)&&void 0===n.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=f,c=h,u=b;var g=(1e4*(268435455&(f+=122192928e5))+h)%4294967296;a[s++]=g>>>24&255,a[s++]=g>>>16&255,a[s++]=g>>>8&255,a[s++]=255&g;var m=f/4294967296*1e4&268435455;a[s++]=m>>>8&255,a[s++]=255&m,a[s++]=m>>>24&15|16,a[s++]=m>>>16&255,a[s++]=b>>>8|128,a[s++]=255&b;for(var k=0;k<6;++k)a[s+k]=p[k];return l||r(a)}},xk4V:function(n,l,t){var e=t("4fRq"),u=t("I2ZF");n.exports=function(n,l,t){var o=l&&t||0;"string"==typeof n&&(l="binary"===n?new Array(16):null,n=null);var r=(n=n||{}).random||(n.rng||e)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,l)for(var i=0;i<16;++i)l[o+i]=r[i];return l||u(r)}}}]);