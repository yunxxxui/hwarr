(this.webpackJsonphwarr=this.webpackJsonphwarr||[]).push([[0],{36:function(n,t,e){"use strict";e.r(t);var c,i,o,a,r,s,l,d,j,b,x,h,p,u,O,f,g,m,y,w,v,k,z,E,S,F,A,H=e(0),Y=e.n(H),N=e(20),L=e.n(N),C=e(13),R=e(4),D=e(14),P=e(3),Q=e(2),B=e(1),M=Object(Q.b)(c||(c=Object(P.a)(["\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    padding-top: 56px;\n"]))),_=Object(Q.d)(i||(i=Object(P.a)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]))),q=Q.c.div(o||(o=Object(P.a)(["\n    max-width: 832px;\n    margin:0 auto;\n    padding: 0 16px;\n"]))),G=Q.c.div(a||(a=Object(P.a)(["\n    position: -webkit-sticky;\n    position: sticky;\n    margin-top: 44px;\n    top:-1px;\n    z-index: 1;\n    transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);\n    transition-property: background-color, backdrop-filter, -webkit-backdrop-filter;\n"]))),I=Q.c.ul(r||(r=Object(P.a)(["\n    max-width: 832px;\n    margin: 0 auto;\n    padding: 16px;\n    display: flex;\n    align-items: center;\n    height: 56px;\n"]))),J=Q.c.li(s||(s=Object(P.a)(["\n    font-weight: bold;\n    color: rgba(255, 255, 255, 1);\n    overflow:hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n\n    margin-right: 32px;\n    &:active {\n        color: white;\n    }\n"]))),T=Q.c.a(l||(l=Object(P.a)(["\n    font-size: 12px;\n    background: #FE3078;\n\n    margin-left: auto;\n    padding: 4px 12px;\n    border-radius: 24px;\n\n    min-width: 72px;\n    min-height: 24px;\n\n    &:hover {\n        background: white;\n        color: #FE3078;\n    }\n"]))),K=Q.c.div(d||(d=Object(P.a)(["\n    margin-top: -48px;\n"]))),X=Q.c.section(j||(j=Object(P.a)(["\n    padding-top: 48px;\n"]))),U=Q.c.section(b||(b=Object(P.a)(["\n"]))),V=Q.c.section(x||(x=Object(P.a)(["\n"]))),W=Q.c.section(h||(h=Object(P.a)(["\n"]))),Z=Q.c.img(p||(p=Object(P.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 40px auto;\n    padding-top: 15vh;\n"]))),$=Q.c.div(u||(u=Object(P.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    opacity: 0;\n    ",";\n"])),M),nn=Q.c.h1(O||(O=Object(P.a)(["\n    font-family: 'Spoqa Han Sans Neo';\n    font-size: 64px;\n    font-weight: 700;\n    line-height: 1.2;\n    text-align: center;\n\n    \n    @media only screen and (max-width: 700px) {\n        font-size: 40px;\n    }\n"]))),tn=Q.c.h2(f||(f=Object(P.a)(["\n    font-size: 32px;\n    font-weight: bold;\n    text-align: center;\n\n    color: #FE3078;\n\n    @media only screen and (max-width: 700px) {\n        font-size: 16px;\n    }\n"]))),en=Q.c.h3(g||(g=Object(P.a)(["\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    color: #FE3078;\n\n    animation: "," 2s ease-in-out 0s infinite  alternate;\n"])),_),cn=(Q.c.p(m||(m=Object(P.a)(["\n    font-size: 24px;\n    font-weight: bold;\n    line-height: 36px;\n    text-align: center;\n"]))),function(){return window.scrollTo(0,0)}),on=[{heightNum:5}],an=function(n,t){var e=[],c=n[2];return c.start<=t&&t<=c.end?e=(t-c.start)/(c.end-c.start)*(n[1]-n[0])+n[0]:t<c.start?e=n[0]:c.end<t&&(e=n[1]),e},rn=function(){var n=function(n){var t=Object(H.useRef)();return Object(H.useEffect)((function(){var e=t.current;return e&&e.addEventListener("click",n),function(){e&&e.removeEventListener("click",n)}}),[n]),t}(cn),t=function(){var n=Object(H.useState)({scrollY:0,totlaRatioY:0,sceneHeight:0,currentScene:1}),t=Object(D.a)(n,2),e=t[0],c=t[1],i=function(){c({scrollY:window.scrollY,sceneHeight:on[0].heightNum*window.innerHeight,totlaRatioY:window.scrollY/(on[0].heightNum*window.innerHeight),currentScene:parseInt(window.scrollY/(on[0].heightNum*window.innerHeight)+1)})};return Object(H.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}),[]),Object(H.useEffect)((function(){return window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}}),[]),Object(H.useEffect)((function(){return i(),function(){return i()}}),[]),e}(),e=t.scrollY,c=t.totlaRatioY,i=t.sceneHeight,o=t.currentScene,a=function(n,t){var e={},c=[0,1,{start:.05,end:.1}],i=[1,0,{start:.25,end:.32}],o=[5,0,{start:.1,end:.21}],a=[0,-5,{start:.23,end:.32}],r=[0,1,{start:.3,end:.35}],s=[1,0,{start:.55,end:.62}],l=[5,0,{start:.3,end:.51}],d=[0,-5,{start:.53,end:.62}],j=[0,1,{start:.6,end:.65}],b=[1,0,{start:.85,end:.95}],x=[5,0,{start:.6,end:.65}],h=[0,-5,{start:.83,end:.95}],p=[0,30,{start:.05,end:.5}],u=[0,1,{start:.05,end:.1}],O=[1,0,{start:.45,end:.5}];switch(t){case 1:n<.22?(e.action1=an(c,n),e.action2=an(o,n)):(e.action1=an(i,n),e.action2=an(a,n)),n<.52?(e.action3=an(r,n),e.action4=an(l,n)):(e.action3=an(s,n),e.action4=an(d,n)),n<.82?(e.action5=an(j,n),e.action6=an(x,n)):(e.action5=an(b,n),e.action6=an(h,n));break;case 2:e.action7=an(p,n),e.action8=an(n<.22?u:O,n);break;case 3:break;default:console.log("fucking not Any scene")}return e}(c-(o-1),o);return console.log(a),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(G,{keyframe:on.messageA_opacity_in,style:{backdropFilter:e>52?"saturate(180%) blur(20px)":"",backgroundColor:e>52?"rgba(29,29,31,0.72)":"",borderBottom:e>52?"1px solid rgba(255,255,255,0.1)":""},children:Object(B.jsxs)(I,{children:[Object(B.jsx)(J,{children:Object(B.jsx)("span",{ref:n,children:"\uc2a4\ud1a0\ub9ac \ub9c8\ucf00\ud305 \ud68c\uc0ac, \ud654\ub974\ub974"})}),Object(B.jsx)(T,{children:"\uc5f0\ub77d\ud558\uae30"})]})}),Object(B.jsx)(q,{children:Object(B.jsxs)(K,{children:[Object(B.jsxs)(X,{style:{height:"".concat(i,"px")},children:[Object(B.jsx)(Z,{src:"img/01_Hi.png",alt:"charcter"}),Object(B.jsx)(nn,{children:"\uc2a4\ud29c\ub514\uc624 \ud654\ub974\ub974"}),Object(B.jsx)(en,{id:"blink",children:"\u2193 \uc2a4\ud06c\ub864\uc744 \ud574\uc8fc\uc138\uc694. \u2193"}),Object(B.jsxs)($,{style:{display:1===o?"flex":"none",opacity:"".concat(a.action1),transform:"translate3d(0,".concat(a.action2,"%,0)")},children:[Object(B.jsx)(tn,{children:"\uce90\ub9ad\ud130\ub85c \uc2dc\uc791\ud558\ub294 \ub9c8\ucf00\ud305"}),Object(B.jsx)(nn,{children:"\uc5ec\ub7ec\ubd84 \uc774\uc57c\uae30\uc758"}),Object(B.jsx)(nn,{children:"\ubd88\uc744 \uc9c0\ud3b4\uc694"})]}),Object(B.jsxs)($,{style:{display:1===o?"flex":"none",opacity:"".concat(a.action3),transform:"translate3d(0,".concat(a.action4,"%,0)")},children:[Object(B.jsx)(nn,{children:"\uae30\uacc4\uc801, \ubc18\ubcf5\uc801"}),Object(B.jsx)(nn,{children:"\uad11\uace0\uac00 \uc544\ub2cc"})]}),Object(B.jsxs)($,{style:{display:1===o?"flex":"none",opacity:"".concat(a.action5),transform:"translate3d(0,".concat(a.action6,"%,0)")},children:[Object(B.jsx)(nn,{children:"\ub2e8, \ud558\ub098\ubfd0\uc778"}),Object(B.jsx)(nn,{children:"\ub2f9\uc2e0\uc758 \uc774\uc57c\uae30."})]})]}),Object(B.jsx)(U,{style:{height:"".concat(i,"px")},children:Object(B.jsxs)($,{style:{display:2===o?"flex":"none",opacity:"".concat(a.action8),transform:"scale(".concat(a.action7,", ").concat(a.action7,") translateY(-4%)")},children:[Object(B.jsx)(nn,{children:"SEX"}),Object(B.jsx)(nn,{children:"On the Beach"})]})}),Object(B.jsx)(V,{style:{height:"".concat(i,"px")}}),Object(B.jsx)(W,{style:{height:"".concat(i,"px")}})]})})]})},sn=function(){return"About"},ln=function(){return"Projects"},dn=function(){return"FAQ"},jn=Q.c.header(y||(y=Object(P.a)(["\n    top: 0;\n    position: absolute;\n    width: 100%;\n    font-weight: bold;\n"]))),bn=Q.c.div(w||(w=Object(P.a)(["\n    display: flex;\n    align-items: center;\n    margin: 0 auto;\n    max-width: 832px;\n    height: 48px;\n    padding: 0 16px;\n\n    @media only screen and (max-width: 700px){\n        justify-content: space-between;\n        padding: 0;\n        padding: 0 16px;\n    }\n"]))),xn=Q.c.ul(v||(v=Object(P.a)(["\n    display: flex;\n    margin-left: auto;\n    z-index: 99;\n\n    @media only screen and (max-width: 700px){\n        display: none;\n    }\n"]))),hn=Q.c.ul(k||(k=Object(P.a)(["\n    flex-direction: column;\n    background-color: black;\n    width: 100%;\n    position: fixed;\n    top:0;\n    right:0;\n    height: 100vh;\n    z-index: 99;\n    padding-top: 52px;\n    opacity: 0;\n    transition: all 0.2s ease-in-out;\n"]))),pn=Q.c.div(z||(z=Object(P.a)(["\n    flex: none;\n    z-index: 100;\n    @media only screen and (max-width: 700px){\n        display: block;\n    }\n"]))),un=Q.c.li(E||(E=Object(P.a)(["\n    margin-left: 32px;\n    color: rgba(255, 255, 255, 0.7);\n    transform: translate3d(5%, 0, 0);\n    transition: all 0.3s ease-in-out;\n    &:hover {\n        color: white;\n    }\n    @media only screen and (max-width: 700px){\n        margin: 0 16px;\n        padding: 16px 0;\n        border-bottom: 1px solid rgba(255,255,255,0.3);\n    }\n"]))),On=Object(Q.c)(C.b)(S||(S=Object(P.a)(["\n    display: flex;\n    align-items: center;\n"]))),fn=Q.c.button(F||(F=Object(P.a)(["\n    display: none;\n    background: none;\n    border:none;\n\n    @media only screen and (max-width: 700px){\n        display: block;\n        z-index: 100;\n    }\n"]))),gn=function(){var n=Object(H.useState)(!1),t=Object(D.a)(n,2),e=t[0],c=t[1],i=function(){c(!1),window.scrollTo(0,0)};return Object(B.jsx)(jn,{children:Object(B.jsxs)(bn,{children:[Object(B.jsx)(pn,{style:{position:e?"fixed":"",left:e?"16px":""},children:Object(B.jsx)(On,{to:"/",onClick:i,children:Object(B.jsx)("img",{src:"./img/Logo.svg",alt:"Logo"})})}),Object(B.jsxs)(xn,{children:[Object(B.jsx)(un,{children:Object(B.jsx)(On,{to:"/About",children:"\ud68c\uc0ac \uc18c\uac1c"})}),Object(B.jsx)(un,{children:Object(B.jsx)(On,{to:"/Projects",children:"\ud504\ub85c\uc81d\ud2b8"})}),Object(B.jsx)(un,{children:Object(B.jsx)(On,{to:"/FAQ",children:"\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38"})})]}),Object(B.jsxs)(hn,{style:{display:e?"flex":"hidden",opacity:e?"1":"0",right:e?"0":"-100vh"},children:[Object(B.jsx)(un,{style:{transform:e?"translate3d(0, 0, 0)":"",transitionDelay:"0.1s"},children:Object(B.jsx)(On,{to:"/About",onClick:i,children:"\ud68c\uc0ac \uc18c\uac1c"})}),Object(B.jsx)(un,{style:{transform:e?"translate3d(0, 0, 0)":"",transitionDelay:"0.2s"},children:Object(B.jsx)(On,{to:"/Projects",onClick:i,children:"\ud504\ub85c\uc81d\ud2b8"})}),Object(B.jsx)(un,{style:{transform:e?"translate3d(0, 0, 0)":"",transitionDelay:"0.3s"},children:Object(B.jsx)(On,{to:"/FAQ",onClick:i,children:"\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38"})})]}),Object(B.jsx)(fn,{onClick:function(){c((function(n){return!n}))},style:{position:e?"fixed":"",right:e?"16px":""},children:Object(B.jsx)("img",{src:"./img/Menu.svg",alt:"menu"})})]})})},mn=function(){return Object(B.jsx)(C.a,{children:Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(gn,{}),Object(B.jsxs)(R.d,{children:[Object(B.jsx)(R.b,{path:"/",exact:!0,component:rn}),Object(B.jsx)(R.b,{path:"/About",component:sn}),Object(B.jsx)(R.b,{path:"/Projects",component:ln}),Object(B.jsx)(R.b,{path:"/FAQ",component:dn}),Object(B.jsx)(R.a,{from:"*",to:"/"})]})]})})},yn=e(24),wn=Object(Q.a)(A||(A=Object(P.a)(["\n    ",";\n\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    *{\n        box-sizing: border-box;\n    }\n    body {\n        overflow-x: hidden;\n        width: 100%;\n        color: white;\n        font: -apple-system,'SF Pro Display','Spoqa Han Sans Neo', 'Helvetica Neue',  'Apple SD Gothic Neo', 'Roboto', 'Noto Sans KR', 'Malgun Gothic', sans-serif;\n        font-size: 16px;\n        line-height: 1.7;\n        background-color: black;\n    }\n"])),yn.a);var vn=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(mn,{}),Object(B.jsx)(wn,{})]})};L.a.render(Object(B.jsx)(Y.a.StrictMode,{children:Object(B.jsx)(vn,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b8606f42.chunk.js.map