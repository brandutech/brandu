(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[19],{622:function(e,t,a){"use strict";a.r(t);var n=a(86),c=a(1),r=a(624),o=a(625),s=a(518),i=a(519),l=a(547),h=a(546),b=a(157),d=a(364),u=a(637),j=a(585),p=a(583),y=a(336),O=a(598),f=a(623),m=a(25),x=a(251),g=a.n(x),w=a(5);function k(e){return Object(b.a)(new Date(1e3*e),"MMMM d, p yyyy")}function M(e,t,a){var n=Number.POSITIVE_INFINITY;return e.forEach((function(e){n>e[t]&&(n=e[t])})),Math.round(n-n*a)}var v=["1 Week","1 Month","6 Months"];t.default=Object(m.a)((function(e){return{cardContentInner:{marginTop:e.spacing(-4)}}}),{withTheme:!0})((function(e){var t=e.color,a=e.data,b=e.title,m=e.classes,x=e.theme,S=e.height,C=Object(c.useState)(null),I=Object(n.a)(C,2),N=I[0],E=I[1],T=Object(c.useState)("1 Month"),W=Object(n.a)(T,2),F=W[0],L=W[1],H=Object(c.useCallback)((function(e){E(e.currentTarget)}),[E]),P=Object(c.useCallback)((function(e){return[e,b]}),[b]),z=Object(c.useCallback)((function(){switch(F){case"1 Week":return"Last week";case"1 Month":return"Last month";case"6 Months":return"Last 6 months";default:throw new Error("No branch selected in switch-statement")}}),[F]),D=Object(c.useCallback)((function(){var e;switch(F){case"1 Week":e=604800;break;case"1 Month":e=2678400;break;case"6 Months":e=16070400;break;default:throw new Error("No branch selected in switch-statement")}for(var t=new Date/1e3-e,n=[],c=0;c<a.length;c+=1)t<a[c].timestamp&&n.unshift(a[c]);return n}),[a,F]),J=Object(c.useCallback)((function(){E(null)}),[E]),K=Object(c.useCallback)((function(e){L(e),J()}),[L,J]),R=Boolean(N);return Object(w.jsxs)(d.a,{children:[Object(w.jsx)(u.a,{pt:2,px:2,pb:4,children:Object(w.jsxs)(u.a,{display:"flex",justifyContent:"space-between",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)(j.a,{variant:"subtitle1",children:b}),Object(w.jsx)(j.a,{variant:"body2",color:"textSecondary",children:z()})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(p.a,{"aria-label":"More","aria-owns":R?"long-menu":void 0,"aria-haspopup":"true",onClick:H,children:Object(w.jsx)(g.a,{})}),Object(w.jsx)(y.a,{id:"long-menu",anchorEl:N,open:R,onClose:J,PaperProps:{style:{maxHeight:216,width:200}},disableScrollLock:!0,children:v.map((function(e){return Object(w.jsx)(O.a,{selected:e===F,onClick:function(){K(e)},name:e,children:e},e)}))})]})]})}),Object(w.jsx)(f.a,{children:Object(w.jsx)(u.a,{className:m.cardContentInner,height:S,children:Object(w.jsx)(r.a,{width:"100%",height:"100%",children:Object(w.jsxs)(o.a,{data:D(),type:"number",children:[Object(w.jsx)(s.a,{dataKey:"timestamp",type:"number",domain:["dataMin","dataMax"],hide:!0}),Object(w.jsx)(i.a,{domain:[M(a,"value",.05),"dataMax"],hide:!0}),Object(w.jsx)(l.a,{type:"monotone",dataKey:"value",stroke:t,fill:t}),Object(w.jsx)(h.a,{labelFormatter:k,formatter:P,cursor:!1,contentStyle:{border:"none",padding:x.spacing(1),borderRadius:x.shape.borderRadius,boxShadow:x.shadows[1]},labelStyle:x.typography.body1,itemStyle:{fontSize:x.typography.body1.fontSize,letterSpacing:x.typography.body1.letterSpacing,fontFamily:x.typography.body1.fontFamily,lineHeight:x.typography.body1.lineHeight,fontWeight:x.typography.body1.fontWeight}})]})})})})]})}))}}]);
//# sourceMappingURL=19.41058dd1.chunk.js.map