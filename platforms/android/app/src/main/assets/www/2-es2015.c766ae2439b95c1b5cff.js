(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{CFJN:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("ofXK"),r=n("fXoL");let i=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[o.c]]}),e})()},D6Dv:function(e,t,n){"use strict";n.r(t),n.d(t,"LettersPageModule",(function(){return g}));var o=n("ofXK"),r=n("3Pt+"),i=n("TEn/"),s=n("tyNb"),a=n("fXoL"),l=n("SWHu");function c(e,t){if(1&e){const e=a.Pb();a.Ob(0,"ion-header",10),a.Ob(1,"ion-toolbar",11),a.Wb("click",(function(){return a.gc(e),a.Yb().viewProfile()})),a.Ob(2,"ion-title"),a.oc(3," Letter's By: Arvey "),a.Nb(),a.Nb(),a.Nb()}2&e&&a.dc("translucent",!0)}function d(e,t){if(1&e&&(a.Ob(0,"ion-reorder",12),a.Ob(1,"div",12),a.Ob(2,"ion-card",13),a.Ob(3,"ion-item"),a.Ob(4,"ion-label"),a.Ob(5,"ion-row"),a.Ob(6,"ion-col",14),a.oc(7),a.Nb(),a.Ob(8,"ion-col",15),a.oc(9),a.Nb(),a.Nb(),a.Kb(10,"div",16),a.Zb(11,"safeHtml"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&e){const e=t.$implicit,n=t.index;a.dc("ngClass",0==n?"top_card":""),a.zb(1),a.dc("ngClass",0==n?"":n%2==0?"transform1":n%3==0?"transform2":"transform3"),a.zb(6),a.qc("Sent By: ",e.from.name,""),a.zb(2),a.pc(e.read?"Read":"Unread"),a.zb(1),a.dc("innerHtml",a.ac(11,5,e.message),a.hc)}}const u=[{path:"",children:[{path:"",component:(()=>{class e{constructor(e){this.router=e,this.items=[1,2,3,4,5],this.letters=[{read:!0,message:"<div style='color: red'>1 Hey bro!<br>How are you man! Been a while since I wrote to you.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co </div>",from:{id:"2346576879809d7f87e0g1",handle:"Me",name:"Someone",mobile:"9902807002",privacy:{show_name:!0,display_pic:!0,show_interests:!0,show_description:!0}}},{read:!1,message:"<div>2 Hey bro!<br>How are you man! Been a while since I wrote to you Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</div>",from:{id:"2346576879809d7f87e0g2",handle:"Me",name:"Beedu",mobile:"9902807002",privacy:{show_name:!0,display_pic:!0,show_interests:!0,show_description:!0}}},{read:!0,message:"<div>3 Hey bro!<br>How are you man! Been a while since I wrote to you Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</div>",from:{id:"2346576879809d7f87e0g3",handle:"Me",name:"This Guy",mobile:"9902807002",privacy:{show_name:!0,display_pic:!0,show_interests:!0,show_description:!0}}}],console.log(this.letters)}ngOnInit(){console.log(this.router.url)}doReorder(e){console.log("Before complete",this.letters),this.letters=e.detail.complete(this.letters),console.log("After complete",this.letters)}viewLetter(e){this.router.navigateByUrl("/home/letters/view?id="+e)}writeLetter(){this.router.navigateByUrl("/home/letters/write")}viewProfile(){this.router.navigateByUrl("view-profile")}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(s.g))},e.\u0275cmp=a.Db({type:e,selectors:[["app-letters"]],decls:14,vars:5,consts:[[3,"translucent",4,"ngIf"],[1,"letter-outlet"],[1,"letter_view",3,"innerHtml"],[1,"view",3,"click"],["name","eye"],[1,"letters_list","slide-over"],["disabled","false",3,"ionItemReorder"],[3,"ngClass",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed",1,"write-letter",3,"click"],["name","pencil-outline"],[3,"translucent"],[3,"click"],[3,"ngClass"],[1,"letter_card"],[1,"ion-text-start","sentBy"],[1,"ion-text-end"],[3,"innerHtml"]],template:function(e,t){1&e&&(a.nc(0,c,4,1,"ion-header",0),a.Ob(1,"ion-content"),a.Ob(2,"div",1),a.Kb(3,"div",2),a.Zb(4,"safeHtml"),a.Ob(5,"ion-fab",3),a.Wb("click",(function(){return t.viewLetter(t.letters[0])})),a.Ob(6,"ion-fab-button"),a.Kb(7,"ion-icon",4),a.Nb(),a.Nb(),a.Nb(),a.Ob(8,"div",5),a.Ob(9,"ion-reorder-group",6),a.Wb("ionItemReorder",(function(e){return t.doReorder(e)})),a.nc(10,d,12,7,"ion-reorder",7),a.Nb(),a.Nb(),a.Ob(11,"ion-fab",8),a.Wb("click",(function(){return t.writeLetter()})),a.Ob(12,"ion-fab-button"),a.Kb(13,"ion-icon",9),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.dc("ngIf","/friends/letters"==t.router.url),a.zb(3),a.dc("innerHtml",a.ac(4,3,t.letters[0].message),a.hc),a.zb(7),a.dc("ngForOf",t.letters))},directives:[o.k,i.j,i.l,i.m,i.q,i.v,o.j,i.p,i.H,i.F,i.u,o.i,i.h,i.s,i.t,i.y,i.i],pipes:[l.a],styles:[".letter-outlet[_ngcontent-%COMP%]{padding:35px;color:#000;background:#fff;background:url(letter_bg.df00b66f9db09e464164.jpg) 0 0/100% 100% no-repeat}.letter-outlet[_ngcontent-%COMP%]   .letter_view[_ngcontent-%COMP%]{max-height:150px;overflow:hidden;text-overflow:ellipsis}.letter-outlet[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]{font-size:4em;position:absolute;right:30px;top:150px}.letter-outlet[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{--background:var(--ion-color-dark)!important}.letters_list[_ngcontent-%COMP%]{height:100%;padding:10px;position:relative;top:-10px;background:var(--ion-color-dark)}.letters_list[_ngcontent-%COMP%]   .top_card[_ngcontent-%COMP%]{margin-bottom:150px}.letters_list[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%]{height:50px}.letters_list[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{box-shadow:0 0 8px 0 #404040;border-radius:5px}.letters_list[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:url(letter_bg.df00b66f9db09e464164.jpg) 0 0/100% 100% no-repeat;--color:#000}.letters_list[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{height:140px;white-space:break-spaces}.letters_list[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .sentBy[_ngcontent-%COMP%]{font-weight:600}.letters_list[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%]   .transform1[_ngcontent-%COMP%]{transform:rotate(-2deg)}.letters_list[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%]   .transform2[_ngcontent-%COMP%]{transform:rotate(2deg)}.letters_list[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%]   .transform3[_ngcontent-%COMP%]{transform:rotate(5deg)}.write-letter[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{--background:var(--ion-color-dark)!important}"]}),e})()},{path:"view",loadChildren:()=>n.e(16).then(n.bind(null,"sG8L")).then(e=>e.ViewLetterPageModule)},{path:"write",loadChildren:()=>n.e(17).then(n.bind(null,"SYzf")).then(e=>e.WriteLetterPageModule)}]}];let b=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(u)],s.i]}),e})();var p=n("CFJN");let g=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[o.c,r.e,i.I,b,p.a]]}),e})()},SWHu:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("fXoL"),r=n("jhN1");let i=(()=>{class e{constructor(e){this.sanitizer=e}transform(e,...t){return this.sanitizer.bypassSecurityTrustHtml(e)}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(r.b))},e.\u0275pipe=o.Ib({name:"safeHtml",type:e,pure:!0}),e})()}}]);