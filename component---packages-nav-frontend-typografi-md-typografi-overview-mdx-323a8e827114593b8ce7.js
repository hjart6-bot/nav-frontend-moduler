(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"6aFe":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return p}));var s,l=n("+I+c"),r=(n("mXGw"),n("/FXl")),a=n("jPj1"),d={ingress:"Typografi-pakken vår består av flere tekstkomponenter med forhåndsbestemt størrelse og styling."},b=(s="Example",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),i={_frontmatter:d};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("nav",{className:"table-of-contents"},Object(r.b)("ol",{parentName:"nav",className:"toc-level toc-level-1"},Object(r.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(r.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#bruk-av-typografi-i-prosjekter"},"Bruk av Typografi i prosjekter")),Object(r.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(r.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#alle-vekter"},"Alle vekter")),Object(r.b)("li",{parentName:"ol",className:"toc-item toc-item-h2"},Object(r.b)("a",{parentName:"li",className:"toc-link toc-link-h2",href:"#selvbestemt-html-tag"},"Selvbestemt HTML-tag")))),Object(r.b)("h2",{id:"bruk-av-typografi-i-prosjekter"},"Bruk av Typografi i prosjekter"),Object(r.b)("p",null,"For å sikre at prosjektet ditt får riktig typografi bruker typografi-komponenten vår denne CSS-klassen fra ",Object(r.b)("inlineCode",{parentName:"p"},"nav-frontend-typografi-style"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},".app {\n  .typo-normal-mixin();\n  color: @navMorkGra;\n  font-family: @font-family;\n  line-height: @line-height-base;\n}\n")),Object(r.b)("p",null,"Det antas da at prosjektet er pakket inn under CSS-klassen ",Object(r.b)("inlineCode",{parentName:"p"},".app")," å disse blir da lagt til der. Hvis dette ikke er tilfellet i prosjektet ditt,\nkan det være greit å legge til manuelt da man sikrer at hele prosjektet får riktig typografi.\nDette kan gjøres ved å legge til"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-less"},'@import (reference) "~nav-frontend-typografi-style/src/index.less";\n')),Object(r.b)("p",null,"i ønsket less fil og da legge til klassen ",Object(r.b)("inlineCode",{parentName:"p"},"app")," på elementet som pakker in prosjektet ditt."),Object(r.b)("h2",{id:"alle-vekter"},"Alle vekter"),Object(r.b)(b,{mdxType:"Example"},Object(r.b)(a.Sidetittel,{mdxType:"Sidetittel"},"Sidetittel"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 40px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 44px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Sidetittel>Sidetittel</Sidetittel>\n<h1 className="typo-sidetittel">Sidetittel</h1>\n')),Object(r.b)(b,{mdxType:"Example"},Object(r.b)(a.Innholdstittel,{mdxType:"Innholdstittel"},"Innholdstittel"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 32px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 36px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Innholdstittel>Innholdstittel</Innholdstittel>\n<h1 className="typo-innholdstittel">Innholdstittel</h1>\n')),Object(r.b)(b,{mdxType:"Example"},Object(r.b)(a.Systemtittel,{mdxType:"Systemtittel"},"Systemtittel"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 24px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 28px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Systemtittel>Systemtittel</Systemtittel>\n<h2 className="typo-systemtittel">Systemtittel</h2>\n')),Object(r.b)(b,{mdxType:"Example"},Object(r.b)(a.Undertittel,{mdxType:"Undertittel"},"Undertittel"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 20px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 25px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Undertittel>Undertittel</Undertittel>\n<h2 className="typo-undertittel">Undertittel</h2>\n')),Object(r.b)(b,{mdxType:"Example"},Object(r.b)(a.Ingress,{mdxType:"Ingress"},"Ingress"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 18px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 26px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 400 regular")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Ingress>Ingress</Ingress>\n<p className="typo-ingress">Ingress</p>\n')),Object(r.b)(b,{mdxType:"Example"},Object(r.b)(a.Element,{mdxType:"Element"},"Element"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 16px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 22px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Element>Element</Element>\n<p className="typo-element">Element</p>\n')),Object(r.b)(b,{mdxType:"Example"},Object(r.b)(a.Feilmelding,{mdxType:"Feilmelding"},"Feilmelding"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 16px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 22px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Feilmelding>Feilmelding</Feilmelding>\n<p className="typo-feilmelding">Feilmelding</p>\n')),Object(r.b)(b,{mdxType:"Example"},Object(r.b)(a.Normaltekst,{mdxType:"Normaltekst"},"Normaltekst"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 16px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 22px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 400 regular")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Normaltekst>Normaltekst</Normaltekst>\n<p className="typo-normal">Normaltekst</p>\n')),Object(r.b)(b,{mdxType:"Example"},Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Undertekst"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 14px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 20px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 400 regular")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Undertekst>Undertekst</Undertekst>\n<p className="typo-undertekst">Undertekst</p>\n')),Object(r.b)(b,{mdxType:"Example"},Object(r.b)(a.UndertekstBold,{mdxType:"UndertekstBold"},"UndertekstBold"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font size: 14px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Line height: 20px"),Object(r.b)(a.Undertekst,{mdxType:"Undertekst"},"Font weight: 600 semi bold")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<UndertekstBold>UndertekstBold</UndertekstBold>\n<p className="typo-undertekst-bold">UndertekstBold</p>\n')),Object(r.b)("h2",{id:"selvbestemt-html-tag"},"Selvbestemt HTML-tag"),Object(r.b)("p",null,"Du kan selv bestemme hvilken HTML-tag de forskjellige typografi-vektene skal bruke. For eksempel kan du overstyre ",Object(r.b)("inlineCode",{parentName:"p"},"h1"),"-defaulten for\n",Object(r.b)("inlineCode",{parentName:"p"},"Sidetittel")," med ",Object(r.b)("inlineCode",{parentName:"p"},"h4")," slik:"),Object(r.b)(b,{mdxType:"Example"},Object(r.b)(a.Sidetittel,{tag:"h4",mdxType:"Sidetittel"},"Sidetittel")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Sidetittel tag="h4">Sidetittel</Sidetittel>\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-nav-frontend-typografi-md-typografi-overview-mdx-323a8e827114593b8ce7.js.map