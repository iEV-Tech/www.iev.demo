"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6488],{6488:(Y,R,a)=>{a.r(R),a.d(R,{UserPageModule:()=>X});var M=a(177),k=a(9417),s=a(4742),f=a(7625),u=a(467),I=a(23),U=a(1038),p=a(9946),F=a(6539),h=a(8517),O=a(8833),j=a(5312),_=a(8650),E=a(4393),y=a(6171),A=a(6757),n=a(4438),B=a(345),T=a(4842),N=a(9777);function V(i,d){if(1&i){const g=n.RV6();n.j41(0,"ion-item",17),n.bIt("click",function(){n.eBV(g);const t=n.XpG();return n.Njj(t.navigateByUrl(t.APP_ROUTE.CHARGING_RESERVATION))}),n.nrm(1,"ion-icon",20),n.j41(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s()()}2&i&&(n.R7$(3),n.JRh(n.bMT(4,1,"ChargingReservation")))}function S(i,d){if(1&i){const g=n.RV6();n.j41(0,"div",32)(1,"div",33)(2,"h4",34),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.j41(5,"p",35),n.EFF(6),n.nI1(7,"translate"),n.k0s()(),n.j41(8,"div",36)(9,"div",37)(10,"ion-button",38),n.bIt("click",function(){n.eBV(g),n.XpG();const t=n.sdS(105);return n.Njj(null==t?null:t.dismiss())}),n.EFF(11),n.nI1(12,"translate"),n.k0s()(),n.j41(13,"div",39)(14,"ion-button",40),n.bIt("click",function(t){n.eBV(g);const e=n.XpG(),o=n.sdS(105);return null==o||o.dismiss(),n.Njj(e.signOut(t))}),n.EFF(15),n.nI1(16,"translate"),n.k0s()()()()}2&i&&(n.R7$(3),n.JRh(n.bMT(4,4,"SignOut")),n.R7$(3),n.JRh(n.bMT(7,6,"SignOut_Confirm")),n.R7$(5),n.JRh(n.bMT(12,8,"Cancel")),n.R7$(4),n.JRh(n.bMT(16,10,"Confirm")))}const $=[{path:"",component:(()=>{var i;class d{constructor(r,t,e,o,l,m){this.router=r,this.titleService=t,this.translateService=e,this.loadingController=o,this.toastController=l,this.modalController=m,this.isAppTest=j.c.apptest,this.APP_ROUTE=O._,this.readfile_url=j.c.readfile_url,this.params={},this.APP_FUNC_FormatMobileNumber=h.IV,this.APP_FUNC_FormatTel=h.YH}ngOnInit(){var r=this;(0,u.A)(function*(){(yield(0,F.kU)())&&r.refreshData()})()}onIonRefresher(r){this.refreshData(()=>{r.target.complete()})}refreshData(r){var t=this;return(0,u.A)(function*(){(0,p.z)({loadingController:t.loadingController,callback:e=>{var o,l,m;null!=e&&e.Succeeded?(t.user=null!==(o=e.Data)&&void 0!==o?o:{},null!==(l=t.user)&&void 0!==l&&l.FullName?t.titleService.setTitle(null===(m=t.user)||void 0===m?void 0:m.FullName):t.translateService.stream("User").subscribe(c=>{t.titleService.setTitle(c)})):(0,_.cX)(t.toastController,{},e).then(c=>c.present()),r&&r()}})})()}signOut(r){return(0,u.A)(function*(){yield(0,E.SD)(),(0,I.wn)({callback:()=>{window.location.replace(O._.AUTH)}})})()}changeAvatar(r){var t=this;return(0,u.A)(function*(){(0,A.$)({modalController:t.modalController,toastController:t.toastController},function(){var e=(0,u.A)(function*(o){if(o.length){let l=yield t.modalController.create({component:y.A,componentProps:{file:o[0]},backdropDismiss:!0,keyboardClose:!0});l.onDidDismiss().then(function(){var m=(0,u.A)(function*(c){"submit"==c.role&&c.data&&(0,U.v)({loadingController:t.loadingController,params:{file:c.data,subFolder:"avatar",fileType:"image"},callback:v=>{var C;0==(null==v?void 0:v.ReturnCode)?(0,p.sh)({loadingController:t.loadingController,params:{UserId:null===(C=t.user)||void 0===C?void 0:C.UserId,Avatar:`${v.path}/${v.file.name}`},callback:P=>{null!=P&&P.Succeeded?t.refreshData():(0,_.cX)(t.toastController,{},P).then(G=>G.present())}}):(0,_.cX)(t.toastController,{},v).then(P=>P.present())}})});return function(c){return m.apply(this,arguments)}}()),l.present()}});return function(o){return e.apply(this,arguments)}}())})()}changeAvatar2(r){var t=this;return(0,u.A)(function*(){(0,h.oG)({accept:"image/*"},function(){var e=(0,u.A)(function*(o){(0,U.v)({loadingController:t.loadingController,params:{file:o[0],subFolder:"avatar",fileType:"image"},callback:l=>{var m;0==(null==l?void 0:l.ReturnCode)?(0,p.sh)({loadingController:t.loadingController,params:{UserId:null===(m=t.user)||void 0===m?void 0:m.UserId,Avatar:`${l.path}/${l.file.name}`},callback:c=>{null!=c&&c.Succeeded?t.refreshData():(0,_.cX)(t.toastController,{},c).then(b=>b.present())}}):(0,_.cX)(t.toastController,{},l).then(c=>c.present())}})});return function(o){return e.apply(this,arguments)}}())})()}navigateByUrl(r){var t=this;return(0,u.A)(function*(){t.router.navigateByUrl(r)})()}}return(i=d).\u0275fac=function(r){return new(r||i)(n.rXU(f.Ix),n.rXU(B.hE),n.rXU(T.c$),n.rXU(s.Xi),n.rXU(s.K_),n.rXU(s.W3))},i.\u0275cmp=n.VBU({type:i,selectors:[["app-user"]],decls:108,vars:55,consts:[["modalSignOut",""],["color","primary"],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"card-info"],[1,"bg"],[1,"avatar"],[3,"click"],[3,"src"],[1,"change-avatar"],["color","light",3,"click"],["src","../../../assets/icon/ion-icon/camera-shape.svg"],[1,"text-center","text-primary","mt-3","mb-0"],[1,"container","py-3"],["mode","ios","lines","none"],["button","","detail","true","color","light","detail-icon","chevron-forward-outline",3,"click"],["slot","start","src","../../../assets/icon/ion-icon/person-circle.svg",1,"fs-24"],["slot","start","src","../../../assets/icon/ion-icon/verhicle-circle.svg",1,"fs-24"],["slot","start","src","../../../assets/icon/ion-icon/bill-circle.svg",1,"fs-24"],["button","","detail","true","color","light","detail-icon","chevron-forward-outline"],["slot","start","src","../../../assets/icon/ion-icon/setting-circle.svg",1,"fs-24"],["slot","start","src","../../../assets/icon/ion-icon/feedback-circle.svg",1,"fs-24"],["slot","start","src","../../../assets/icon/ion-icon/chat-circle.svg",1,"fs-24"],["slot","start","src","../../../assets/icon/ion-icon/book-circle.svg",1,"fs-24"],["slot","start","src","../../../assets/icon/ion-icon/persons-circle.svg",1,"fs-24"],["slot","start","src","../../../assets/icon/ion-icon/book-open-circle.svg",1,"fs-24"],[1,"mt-3"],["mode","ios","color","light","expand","block","id","click-trigger-modal-signout",1,"btn-sign-out"],["slot","start","color","primary","src","../../../assets/icon/ion-icon/sign-out.svg",1,"fs-24"],["trigger","click-trigger-modal-signout",1,"ion-modal-small"],[1,"p-4"],[1,"text-center"],[1,"mb-2"],[1,"mb-4","fs-3"],[1,"row"],[1,"col-6","pr-1"],["fill","outline","color","medium","expand","block","shape","round",3,"click"],[1,"col-6","pl-1"],["color","primary","expand","block","shape","round",3,"click"]],template:function(r,t){if(1&r){const e=n.RV6();n.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-buttons",2),n.nrm(3,"ion-back-button",3),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content",4)(8,"ion-refresher",5),n.bIt("ionRefresh",function(l){return n.eBV(e),n.Njj(t.onIonRefresher(l))}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.j41(10,"div",6),n.nrm(11,"div",7),n.j41(12,"div",8)(13,"ion-avatar",9),n.bIt("click",function(l){return n.eBV(e),n.Njj(t.changeAvatar(l))}),n.nrm(14,"img",10),n.k0s(),n.j41(15,"div",11)(16,"ion-button",12),n.bIt("click",function(l){return n.eBV(e),n.Njj(t.changeAvatar(l))}),n.nrm(17,"ion-icon",13),n.k0s()()(),n.j41(18,"h5",14)(19,"b"),n.EFF(20),n.nI1(21,"translate"),n.k0s()()(),n.j41(22,"div",15)(23,"ion-list",16)(24,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.USER_INFO))}),n.nrm(25,"ion-icon",18),n.j41(26,"ion-label"),n.EFF(27),n.nI1(28,"translate"),n.k0s()(),n.j41(29,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.VEHICLE))}),n.nrm(30,"ion-icon",19),n.j41(31,"ion-label"),n.EFF(32),n.nI1(33,"translate"),n.k0s()(),n.j41(34,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.CUSTOMER_INVOICE))}),n.nrm(35,"ion-icon",20),n.j41(36,"ion-label"),n.EFF(37),n.nI1(38,"translate"),n.k0s()()(),n.j41(39,"ion-list",16),n.DNE(40,V,5,3,"ion-item",21),n.j41(41,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.ORDER_INFO))}),n.nrm(42,"ion-icon",20),n.j41(43,"ion-label"),n.EFF(44),n.nI1(45,"translate"),n.k0s()()(),n.j41(46,"ion-list",16)(47,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.SETTING))}),n.nrm(48,"ion-icon",22),n.j41(49,"ion-label"),n.EFF(50),n.nI1(51,"translate"),n.k0s()(),n.j41(52,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.FEEDBACK))}),n.nrm(53,"ion-icon",23),n.j41(54,"ion-label"),n.EFF(55),n.nI1(56,"translate"),n.k0s()(),n.j41(57,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.SUPPORT))}),n.nrm(58,"ion-icon",24),n.j41(59,"ion-label"),n.EFF(60),n.nI1(61,"translate"),n.k0s()(),n.j41(62,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.HELP))}),n.nrm(63,"ion-icon",25),n.j41(64,"ion-label"),n.EFF(65),n.nI1(66,"translate"),n.k0s()()(),n.j41(67,"ion-list",16)(68,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.ABOUT_US))}),n.nrm(69,"ion-icon",26),n.j41(70,"ion-label"),n.EFF(71),n.nI1(72,"translate"),n.k0s()(),n.j41(73,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.TERMS_AND_CONDITION))}),n.nrm(74,"ion-icon",27),n.j41(75,"ion-label"),n.EFF(76),n.nI1(77,"translate"),n.k0s()(),n.j41(78,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.PAYMENT_POLICY))}),n.nrm(79,"ion-icon",27),n.j41(80,"ion-label"),n.EFF(81),n.nI1(82,"translate"),n.k0s()(),n.j41(83,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.PRIVACY_POLICY))}),n.nrm(84,"ion-icon",27),n.j41(85,"ion-label"),n.EFF(86),n.nI1(87,"translate"),n.k0s()(),n.j41(88,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.WARRANTY_POLICY))}),n.nrm(89,"ion-icon",27),n.j41(90,"ion-label"),n.EFF(91),n.nI1(92,"translate"),n.k0s()(),n.j41(93,"ion-item",17),n.bIt("click",function(){return n.eBV(e),n.Njj(t.navigateByUrl(t.APP_ROUTE.COMPLAINT_RESOLUTION_POLICY))}),n.nrm(94,"ion-icon",27),n.j41(95,"ion-label"),n.EFF(96),n.nI1(97,"translate"),n.k0s()()(),n.j41(98,"div",28)(99,"ion-button",29),n.nrm(100,"ion-icon",30),n.j41(101,"ion-label",1),n.EFF(102),n.nI1(103,"translate"),n.k0s()()()(),n.j41(104,"ion-modal",31,0),n.DNE(106,S,17,12,"ng-template"),n.k0s()(),n.nrm(107,"app-footer-tabs")}if(2&r){let e;n.R7$(3),n.Y8G("defaultHref",t.APP_ROUTE.DEFAULT),n.R7$(2),n.JRh(n.bMT(6,21,"UserInfo")),n.R7$(2),n.Y8G("fullscreen",!0),n.R7$(7),n.Y8G("src",null!=t.user&&t.user.Avatar?t.readfile_url+(null==t.user?null:t.user.Avatar):"assets/icon/ion-img/no-avatar.svg",n.B4B),n.R7$(6),n.JRh(null!==(e=null==t.user?null:t.user.FullName)&&void 0!==e?e:n.bMT(21,23,"NotUpdate")),n.R7$(7),n.JRh(n.bMT(28,25,"UserInfo")),n.R7$(5),n.JRh(n.bMT(33,27,"Vehicle")),n.R7$(5),n.JRh(n.bMT(38,29,"ExportBillInfo")),n.R7$(3),n.vxM(40,t.isAppTest?40:-1),n.R7$(4),n.JRh(n.bMT(45,31,"OrderHistory")),n.R7$(6),n.JRh(n.bMT(51,33,"Setting")),n.R7$(5),n.JRh(n.bMT(56,35,"SendFeedback")),n.R7$(5),n.JRh(n.bMT(61,37,"FAQ")),n.R7$(5),n.JRh(n.bMT(66,39,"UseManual")),n.R7$(6),n.JRh(n.bMT(72,41,"AboutUs")),n.R7$(5),n.JRh(n.bMT(77,43,"TermsAndCondition")),n.R7$(5),n.JRh(n.bMT(82,45,"PaymentPolicy")),n.R7$(5),n.JRh(n.bMT(87,47,"PrivacyPolicy")),n.R7$(5),n.JRh(n.bMT(92,49,"WarrantyPolicy")),n.R7$(5),n.JRh(n.bMT(97,51,"ComplaintResolutionPolicy")),n.R7$(6),n.JRh(n.bMT(103,53,"SignOut"))}},dependencies:[s.mC,s.Jm,s.QW,s.W9,s.eU,s.iq,s.uz,s.he,s.nf,s.To,s.Ki,s.BC,s.ai,s.Sb,s.el,N.x,T.D9],styles:[".card-info[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{padding:3rem 1rem;background-color:var(--ion-color-primary);background-image:url(bg-charging-location.24bf138423cec5f5.svg);background-repeat:no-repeat;background-position:center center;background-size:auto 200%}.card-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{position:relative;z-index:1;width:7rem;margin:-3rem auto auto}.card-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:7rem;height:7rem;border:.125rem solid var(--ion-color-light);background-color:var(--ion-color-light)}.card-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .change-avatar[_ngcontent-%COMP%]{position:absolute;z-index:2;bottom:0;right:0}.card-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .change-avatar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:2rem;height:2rem;min-width:2rem;min-height:2rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: 50%}.card-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .change-avatar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-dark-tint)}.card-info[_ngcontent-%COMP%]   .icon-w24[_ngcontent-%COMP%]{display:inline-block;width:24px}.card-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}ion-thumbnail[_ngcontent-%COMP%]{--size: 6rem;--border-radius: 50%;margin:auto;cursor:pointer}ion-list[_ngcontent-%COMP%]{padding:.5rem 0;margin:.5rem 0 1rem;border-radius:1rem;box-shadow:0 .125rem .5rem #00000026;background:var(--ion-color-light)!important}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--min-height: 3rem}.btn-sign-out[_ngcontent-%COMP%]{--box-shadow: 0 .125rem .5rem rgba(0, 0, 0, .15)}.card-company[_ngcontent-%COMP%]{padding:1rem}.card-company.rounded[_ngcontent-%COMP%]{border-radius:.5rem!important}.card-company[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important;margin:.5rem 0}.card-company[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{table-layout:fixed;font-size:.875rem}.card-company[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem;vertical-align:top}.card-company[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:40%;padding-left:0;padding-right:.5rem;color:var(--ion-color-medium-shade)}.card-company[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;text-align:right}"]}),d})()}];let J=(()=>{var i;class d{}return(i=d).\u0275fac=function(r){return new(r||i)},i.\u0275mod=n.$C({type:i}),i.\u0275inj=n.G2t({imports:[f.iI.forChild($),f.iI]}),d})();var D=a(3890);let X=(()=>{var i;class d{}return(i=d).\u0275fac=function(r){return new(r||i)},i.\u0275mod=n.$C({type:i}),i.\u0275inj=n.G2t({imports:[M.MD,k.YN,s.bv,J,D.x]}),d})()}}]);