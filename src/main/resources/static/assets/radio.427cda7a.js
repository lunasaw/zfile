import{m as $,r as w,E as X,c as v,d as k,aw as Y,a as z,f as S,p as h,Q as P,aC as F,u as e,z as C,S as K,n as g,g as E,J as T,t as U,j as D,Z as L,i as ee,o as oe,v as re,W as ae,ad as le,w as ie}from"./index.552205f5.js";import{b as y,S as j,V as G,C as N,W as de,q as se,u as R,_ as B,K as ne,aq as te,U as ue,o as pe,w as ce,j as M}from"./base.d698891e.js";import{U as I,C as be}from"./event.776e7e11.js";import{u as A}from"./index.4ab44dc8.js";const q=Symbol("radioGroupKey"),W=y({size:j,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),ve=y({...W,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),O={[I]:a=>$(a)||G(a)||N(a),[be]:a=>$(a)||G(a)||N(a)},H=(a,p)=>{const l=w(),d=X(q,void 0),n=v(()=>!!d),c=v({get(){return n.value?d.modelValue:a.modelValue},set(s){n.value?d.changeEvent(s):p&&p(I,s),l.value.checked=a.modelValue===a.label}}),u=de(v(()=>d==null?void 0:d.size)),o=se(v(()=>d==null?void 0:d.disabled)),i=w(!1),m=v(()=>o.value||n.value&&c.value!==a.label?-1:0);return{radioRef:l,isGroup:n,radioGroup:d,focus:i,size:u,disabled:o,tabIndex:m,modelValue:c}},fe=["value","name","disabled"],me={name:"ElRadio",inheritAttrs:!1},_e=k({...me,props:ve,emits:O,setup(a,{emit:p}){const l=a,d=Y(),n=v(()=>d.style),c=A({excludeListeners:!0}),u=A({excludeKeys:v(()=>Object.keys(c.value))}),o=R("radio"),{radioRef:i,radioGroup:m,focus:s,size:r,disabled:b,modelValue:t}=H(l,p);function Z(){L(()=>p("change",t.value))}return(_,f)=>{var V;return z(),S("label",C({class:[e(o).b(),e(o).is("disabled",e(b)),e(o).is("focus",e(s)),e(o).is("bordered",_.border),e(o).is("checked",e(t)===_.label),e(o).m(e(r)),e(d).class],style:e(n)},e(u)),[h("span",{class:g([e(o).e("input"),e(o).is("disabled",e(b)),e(o).is("checked",e(t)===_.label)])},[P(h("input",C({ref_key:"radioRef",ref:i,"onUpdate:modelValue":f[0]||(f[0]=x=>K(t)?t.value=x:null),class:e(o).e("original"),value:_.label,name:_.name||((V=e(m))==null?void 0:V.name),disabled:e(b),type:"radio"},e(c),{onFocus:f[1]||(f[1]=x=>s.value=!0),onBlur:f[2]||(f[2]=x=>s.value=!1),onChange:Z}),null,16,fe),[[F,e(t)]]),h("span",{class:g(e(o).e("inner"))},null,2)],2),h("span",{class:g(e(o).e("label")),onKeydown:f[3]||(f[3]=D(()=>{},["stop"]))},[E(_.$slots,"default",{},()=>[T(U(_.label),1)])],34)],16)}}});var ge=B(_e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const he=y({...W,name:{type:String,default:""}}),ye=["value","name","disabled"],xe={name:"ElRadioButton"},we=k({...xe,props:he,setup(a){const p=a,l=R("radio"),{radioRef:d,focus:n,size:c,disabled:u,modelValue:o,radioGroup:i}=H(p),m=v(()=>({backgroundColor:(i==null?void 0:i.fill)||"",borderColor:(i==null?void 0:i.fill)||"",boxShadow:i!=null&&i.fill?`-1px 0 0 0 ${i.fill}`:"",color:(i==null?void 0:i.textColor)||""}));return(s,r)=>{var b;return z(),S("label",{class:g([e(l).b("button"),e(l).is("active",e(o)===s.label),e(l).is("disabled",e(u)),e(l).is("focus",e(n)),e(l).bm("button",e(c))])},[P(h("input",{ref_key:"radioRef",ref:d,"onUpdate:modelValue":r[0]||(r[0]=t=>K(o)?o.value=t:null),class:g(e(l).be("button","original-radio")),value:s.label,type:"radio",name:s.name||((b=e(i))==null?void 0:b.name),disabled:e(u),onFocus:r[1]||(r[1]=t=>n.value=!0),onBlur:r[2]||(r[2]=t=>n.value=!1)},null,42,ye),[[F,e(o)]]),h("span",{class:g(e(l).be("button","inner")),style:ee(e(o)===s.label?e(m):{}),onKeydown:r[3]||(r[3]=D(()=>{},["stop"]))},[E(s.$slots,"default",{},()=>[T(U(s.label),1)])],38)],2)}}});var J=B(we,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const ke=y({id:{type:String,default:void 0},size:j,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0}}),ze=O,Se=["id","aria-label","aria-labelledby"],Ee={name:"ElRadioGroup"},Re=k({...Ee,props:ke,emits:ze,setup(a,{emit:p}){const l=a,d=R("radio"),n=ne(),c=w(),{formItem:u}=te(),{inputId:o,isLabeledByFormItem:i}=ue(l,{formItemContext:u}),m=r=>{p(I,r),L(()=>p("change",r))};oe(()=>{const r=c.value.querySelectorAll("[type=radio]"),b=r[0];!Array.from(r).some(t=>t.checked)&&b&&(b.tabIndex=0)});const s=v(()=>l.name||n.value);return re(q,ae({...le(l),changeEvent:m,name:s})),ie(()=>l.modelValue,()=>u==null?void 0:u.validate("change").catch(r=>pe())),(r,b)=>(z(),S("div",{id:e(o),ref_key:"radioGroupRef",ref:c,class:g(e(d).b("group")),role:"radiogroup","aria-label":e(i)?void 0:r.label||"radio-group","aria-labelledby":e(i)?e(u).labelId:void 0},[E(r.$slots,"default")],10,Se))}});var Q=B(Re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Ce=ce(ge,{RadioButton:J,RadioGroup:Q});M(Q);M(J);export{Ce as E};
