(this.webpackJsonpddc=this.webpackJsonpddc||[]).push([[0],{100:function(e,t,i){},110:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),a=i(32),l=i.n(a),r=(i(100),i(12)),s=i(79),c=i(173),d=i(180),u=i(167),b=i(71),h=i(75),f={};function p(e,t){var i="";e.notes&&(i=" (".concat(e.notes,")"));var n=e.code.slice(0,2)+"0";return 0===t.filter((function(t){return t.id===e.code})).length&&"200"!==e.code&&(3===e.code.length&&"2"===e.code[0]&&"0"===e.code[2]&&(f[e.code]=e.title),t.push({id:e.code,label:"".concat(e.code,": ").concat(e.title)+i,group:"".concat(n,": ").concat(f[n]),disabled:!e.enabled,title:e.title})),e.children&&e.children.forEach((function(e){return p(e,t)})),t}var g=i(171),y=i(175),j=i(176),x=i(177),m=i(160),O=i(37),v=i(152),C=i(42),k=i(153),E=i(154),S={50:"#E2EDF8",100:"#CEE0F3",200:"#91B9E3",300:"#5090D3",main:"#5090D3",400:"#265D97",500:"#1E4976",600:"#173A5E",700:"#132F4C",800:"#001E3C",900:"#0A1929"},w="#E5E8EC",P="#46505A",D="#20262D",A=i(1);function M(e,t,i,n,o){"."===e.code.slice(0,n).slice(-1)&&(n+=1);var a=e.code.slice(0,n),l=!1;t&&(l=t.slice(0,n)===a);var r=function(e){switch(e){case 1:return O.a;case 2:return v.a;case 3:return C.a;case 4:case 5:return k.a;case 6:return E.a;default:return S}}(n)["light"===o.palette.mode?"500":"400"],s=l?r:o.palette.text.primary;return e.children?Object(A.jsxs)(g.a,{disableGutters:!0,elevation:e.enabled?3:1,disabled:!e.enabled,expanded:l,onChange:function(){if(t===e.code)if(e.code.length>4)i(e.code.slice(0,-1));else{for(var n=e.code.replace(/[.0]/g,"").slice(0,-1);n.length<3;)n+="0";i("000"===n?null:n)}else i(e.code)},sx:{pl:1,borderLeft:l?3:0,borderTop:l?3:0,borderColor:r,"&:before":{display:"none"},"&.Mui-disabled":{bgcolor:"background.paper"}},children:[Object(A.jsxs)(y.a,{expandIcon:Object(A.jsx)(m.a,{sx:{color:s}}),sx:{display:"flex",ml:4},children:[Object(A.jsx)(j.a,{sx:{color:s,flex:1,pr:"5%",fontWeight:"bold"},children:e.code}),Object(A.jsxs)("div",{style:{flex:10},children:[Object(A.jsx)(j.a,{sx:{fontWeight:"bold",color:s},children:e.title}),Object(A.jsx)(j.a,{sx:{color:s},variant:"caption",children:e.notes})]})]}),Object(A.jsx)(x.a,{children:e.children.map((function(e){return M(e,t,i,n+1,o)}))})]}):Object(A.jsx)(g.a,{disableGutters:!0,elevation:e.enabled?3:1,disabled:!e.enabled,expanded:t===e.code,sx:{pl:1,borderLeft:t===e.code?3:0,borderTop:t===e.code?3:0,borderColor:r,"&:before":{display:"none"},color:s,fontWeight:"bold","&.Mui-disabled":{bgcolor:"background.paper"}},onChange:function(){return i(e.code)},children:Object(A.jsxs)(y.a,{sx:{display:"flex",ml:4},children:[Object(A.jsx)(j.a,{sx:{flex:1,pr:"5%",fontWeight:"bold",color:s},children:e.code}),Object(A.jsxs)("div",{style:{flex:10},children:[Object(A.jsx)(j.a,{sx:{fontWeight:"bold",color:s},children:e.title}),Object(A.jsx)(j.a,{sx:{color:s},variant:"caption",children:e.notes})]})]})})}var G=i(23),T=i(178),W=i(179),B=i(181),H=i(172),I=i(163),L=i(164),R=i(165),J=i(33),F=i(162),N=i(38),z=o.a.createContext({toggleColorMode:function(){}});var U=function(e){var t=e.openCodes,i=e.setExpanded,o=Object(n.useContext)(z),a=Object(G.a)();return Object(A.jsx)(T.a,{position:"fixed",elevation:2,sx:{height:{mobile:100,laptop:70},justifyContent:"center",bgcolor:"primary.dark"},children:Object(A.jsxs)(W.a,{sx:{width:1,display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(A.jsxs)(d.a,{sx:{width:1,display:{mobile:"flex",laptop:"none"},alignItems:"center"},children:[Object(A.jsx)(j.a,{variant:"h5",sx:{color:"primary.text",fontWeight:600},children:"Dewey Decimal Classification"}),Object(A.jsx)(d.a,{sx:{flex:1,display:"flex"},children:Object(A.jsx)(B.a,{style:{marginLeft:"auto"},onClick:o.toggleColorMode,color:"inherit",children:"dark"===a.palette.mode?Object(A.jsx)(I.a,{}):Object(A.jsx)(L.a,{})})})]}),Object(A.jsxs)(d.a,{sx:{width:1,display:"flex",alignItems:"center"},children:[Object(A.jsxs)(H.a,{sx:{flex:4},separator:Object(A.jsx)(R.a,{fontSize:"medium",sx:{color:"primary.text"}}),children:[Object(A.jsx)(j.a,{variant:"h5",sx:{color:"primary.text",fontWeight:600,display:{mobile:"none",laptop:"inherit"}},children:"Dewey Decimal Classification"}),t.map((function(e){return Object(A.jsx)(j.a,{variant:"crumbs",sx:{color:"primary.text","&:hover":{color:"primary.hover"}},onClick:function(){return i(e.code)},children:e.title})}))]}),Object(A.jsx)(d.a,{sx:{flex:1,display:{mobile:"none",laptop:"flex"}},children:Object(A.jsx)(B.a,{style:{marginLeft:"auto"},onClick:o.toggleColorMode,color:"inherit",children:"dark"===a.palette.mode?Object(A.jsx)(I.a,{}):Object(A.jsx)(L.a,{})})})]})]})})},V=i(168),$=i(169);var q=function(e){var t=e.searchOptions,i=e.setExpanded;return Object(A.jsx)(T.a,{position:"fixed",elevation:5,sx:{height:80,justifyContent:"center",mt:{mobile:10,laptop:7},zIndex:1090,bgcolor:"primary.light",display:"flex"},children:Object(A.jsx)(W.a,{sx:{width:"100%",justifyContent:"center"},children:Object(A.jsx)(V.a,{sx:{width:1,maxWidth:900,padding:2},options:t,getOptionDisabled:function(e){return e.disabled},groupBy:function(e){return e.group},onChange:function(e,t){i(t?t.id:t)},renderInput:function(e){return Object(A.jsx)($.a,Object(J.a)(Object(J.a)({},e),{},{variant:"outlined",label:"Search..."}))}})})})};var K=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),i=t[0],o=t[1],a=Object(n.useMemo)((function(){return{toggleColorMode:function(){o((function(e){return"light"===e?"dark":"light"}))}}}),[]),l=Object(n.useMemo)((function(){return Object(s.a)(function(e){return{palette:Object(J.a)(Object(J.a)(Object(J.a)(Object(J.a)({},"light"===e&&{primary:{main:F.a[100],dark:F.a[500],light:F.a[50],text:F.a[50],hover:F.a[300]},secondary:S,background:{default:F.a[100],paper:F.a[50]}}),"dark"===e&&{primary:{main:S[800],dark:S[900],light:S[700],text:F.a[50],hover:F.a[300]},secondary:N.a,background:{default:S[900],paper:S[800]}}),{},{divider:"dark"===e?S[700]:w},"light"===e&&{text:{primary:D,secondary:P}}),"dark"===e&&{text:{primary:F.a[200],secondary:F.a[300]}}),shape:{borderRadius:10},spacing:10,breakpoints:{values:{mobile:0,tablet:640,laptop:1024,desktop:1200}},typography:{crumbs:{fontSize:18}}}}(i))}),[i]),f=Object(n.useState)("200"),g=Object(r.a)(f,2),y=g[0],j=g[1],x=Object(n.useState)([]),m=Object(r.a)(x,2),O=m[0],v=m[1],C=Object(n.useState)([]),k=Object(r.a)(C,2),E=k[0],G=k[1],T=Object(n.useState)([]),W=Object(r.a)(T,2),B=W[0],H=W[1];return Object(n.useEffect)((function(){v(b);var e=b.map((function(e){return p(e,[])}))[2];G(e)}),[]),Object(n.useEffect)((function(){H(y?function(e,t){for(var i=[],n=e.replace(/0*$/,"").split("");n.length>0;){if("."!==n[n.length-1]){for(var o=n.join("");o.length<3;)o+="0";i.push(o)}n.pop()}return i.map((function(e){if("200"===e)return{code:"200",title:"Religion"};var i=t.filter((function(t){return t.id===e}))[0];return{code:i.id,title:i.title}}))}(y,E).reverse():[])}),[y,E]),Object(A.jsx)(z.Provider,{value:a,children:Object(A.jsxs)(c.a,{theme:l,children:[Object(A.jsx)(U,{openCodes:B,setExpanded:j}),Object(A.jsx)(q,{searchOptions:E,setExpanded:j}),Object(A.jsxs)(d.a,{sx:{mt:{mobile:18,laptop:15},display:"flex",alignItems:"center",flexDirection:"column",bgcolor:"background.default"},children:[Object(A.jsx)(h.a,{children:Object(A.jsx)("title",{children:"DDC Index"})}),Object(A.jsx)(u.a,{}),Object(A.jsx)("div",{style:{maxWidth:900,padding:20,width:"100%"},children:null===O||void 0===O?void 0:O.map((function(e){return M(e,y,j,1,l)}))})]})]})})};l.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(K,{})}),document.getElementById("root"))},71:function(e){e.exports=JSON.parse('[{"code":"000","title":"Computer science, information and general works","enabled":false},{"code":"100","title":"Philosophy and psychology","enabled":false},{"code":"200","title":"Religion","enabled":true,"children":[{"code":"210","title":"Philosophy and theory of religion","notes":"Scientific and Psychological Principles","enabled":true,"children":[{"code":"211","title":"Concepts of God","enabled":false},{"code":"212","title":"Existence of God, ways of knowing God, attributes of God","enabled":false},{"code":"213","title":"Creation","notes":"Evolution, (Use 231 for Christian)","enabled":true},{"code":"214","title":"Theodicy","notes":"Good & Evil, Justify or defend God in the face of evil...","enabled":true},{"code":"215","title":"Science and religion","notes":"Technology & Religion, Physics, Biology","enabled":true},{"code":"218","title":"Humankind","notes":"Immortality","enabled":true}]},{"code":"220","title":"The Bible","enabled":true,"children":[{"code":"220","title":"The Bible","enabled":true,"children":[{"code":"220.1","title":"Origins and authenticity","notes":"Canons, Biblical prophecies, (See 268 for eduction/studies)","enabled":true},{"code":"220.3","title":"Encyclopedias and topical dictionaries","notes":"Biblical dictionaries","enabled":true},{"code":"220.4","title":"Original texts, early versions, early translations","notes":"The \\"Actual\\" Bible","enabled":true},{"code":"220.5","title":"Modern versions and translations","enabled":false},{"code":"220.6","title":"Interpretation and criticism (Exegesis)","enabled":false},{"code":"220.7","title":"Commentaries","enabled":false},{"code":"220.8","title":"Nonreligious subjects treated in Bible","enabled":false},{"code":"220.9","title":"Geography, history, chronology, persons of Bible lands in Bible times","enabled":true}]},{"code":"221","title":"Old Testament","enabled":true},{"code":"222","title":"Historical books of Old Testament","enabled":true},{"code":"223","title":"Poetic books of Old Testament","enabled":true},{"code":"224","title":"Prophetic books of Old Testament","enabled":true},{"code":"225","title":"New Testament","enabled":true},{"code":"226","title":"Gospels and Acts","enabled":true},{"code":"227","title":"Epistles","enabled":true},{"code":"228","title":"Revelation (Apocalypse)","enabled":true},{"code":"229","title":"Apocrypha, pseudepigrapha, and inter-testamental works","enabled":false}]},{"code":"230","title":"Christianity","enabled":true,"children":[{"code":"230","title":"Christianity","enabled":true},{"code":"231","title":"God","notes":"Miracles, Ways of knowing God, Attributes of God, Holy Trinity, Relation to the world, Creation, Good & Evil","enabled":true},{"code":"232","title":"Jesus Christ and His family","notes":"The Mother of God, John the Baptist, Sacrifices & Resurrection of Christ","enabled":true},{"code":"233","title":"Humankind","notes":"Creation & fall, Free will","enabled":true},{"code":"234","title":"Salvation and grace","notes":"Spiritual gifts, Working of miracles, Sacraments, Repentance & forgiveness","enabled":true},{"code":"235","title":"Spiritual beings","enabled":true,"children":[{"code":"235.2","title":"Saints","notes":"Canonisation, Lives of Saints, Comprehensive Works","enabled":true},{"code":"235.3","title":"Angels","enabled":true},{"code":"235.4","title":"Demons","notes":"Spiritual Warfare","enabled":true}]},{"code":"236","title":"Eschatology","notes":"Antichrist","enabled":true,"children":[{"code":"236.1","title":"Death","enabled":true},{"code":"236.2","title":"Life after death","notes":"Eternity, Immortality, Heaven & Hell","enabled":true},{"code":"236.9","title":"Last Judgement","notes":"Armageddon, End of the world","enabled":true}]},{"code":"238","title":"Creeds, confessions of faith, covenants, and catechisms","enabled":true},{"code":"239","title":"Apologetics and polemics","notes":"Argumentation in defense of the divine origin and authority of Christianity, Controversial Debate","enabled":true}]},{"code":"240","title":"Christian moral and devotional theology","notes":"Writings of the Holy Fathers","enabled":true,"children":[{"code":"241","title":"Christian ethics","notes":"Moral theology, Conscience, Sins & vices, Virtues","enabled":true},{"code":"242","title":"Devotions & Prayer","notes":"","enabled":true,"children":[{"code":"242.2","title":"Daily use","enabled":true},{"code":"242.3","title":"Major feast-days","enabled":true,"children":[{"code":"242.33","title":"Nativity","enabled":true},{"code":"242.34","title":"Lent","enabled":true},{"code":"242.35","title":"Holy Week","enabled":true},{"code":"242.36","title":"Pascha","enabled":true},{"code":"242.37","title":"Other feast-days","enabled":true}]},{"code":"242.4","title":"Illness, trouble, bereavement","enabled":true},{"code":"242.5","title":"Prayers and meditations based on passages from the Bible","notes":"Psalter","enabled":true},{"code":"242.6","title":"Prayers and meditations for specific groups of people","enabled":false},{"code":"242.7","title":"Specific prayers and groups of prayers","notes":"Akathists, Prayers to Saints & Angels etc.","enabled":true},{"code":"242.8","title":"Collections of prayers","notes":"Service books","enabled":true}]},{"code":"243","title":"Evangelistic writings for individuals and families","enabled":false},{"code":"246","title":"Use of art in Christianity","notes":"Religious meaning, significance, purpose","enabled":true,"children":[{"code":"246.5","title":"Icons, symbols, insignia","enabled":true},{"code":"246.7","title":"Dramatic, musical, rhythmic arts","enabled":true},{"code":"246.9","title":"Architecture","enabled":true}]},{"code":"247","title":"Church furnishings and related articles","notes":"Memorials, sculptures, vestments","enabled":false},{"code":"248","title":"Christian experience, practice, life","enabled":true,"children":[{"code":"248.2","title":"Religious experience","notes":"Mysticism, conversion, religious experiences/visions","enabled":true},{"code":"248.3","title":"Worship","notes":"Praying","enabled":true},{"code":"248.4","title":"Christian life and practice","notes":"Asceticism, fasting and abstinence, poverty, solitude","enabled":true},{"code":"248.8","title":"Guides to Christian life for specific groups of people","notes":"Men, women, young people, stages of adulthood, parents, illness, bereavement etc.","enabled":true}]},{"code":"249","title":"Christian observances in family life","notes":"Christian marriage and family","enabled":true}]},{"code":"250","title":"Local Christian church and Christian religious orders","notes":"Communities","enabled":true,"children":[{"code":"251","title":"Preaching (Homiletics)","notes":"Preparation of sermons","enabled":true},{"code":"252","title":"Texts of sermons","enabled":true},{"code":"253","title":"Pastoral office and work (Pastoral theology)","enabled":false},{"code":"254","title":"Parish administration","enabled":true},{"code":"259","title":"Pastoral care of families, of specific groups of people","enabled":false}]},{"code":"260","title":"Social and ecclesiastical theology","enabled":true,"children":[{"code":"261","title":"Social theology and interreligious relations and attitudes","notes":"Christian church in society, psychology, occultism, science, technology, medicine","enabled":false},{"code":"262","title":"Ecclesiology","notes":"Ecumenism, schism, church law and discipline, theological interpretations","enabled":true},{"code":"263","title":"Days, times, places of holy observance","notes":"Feast days","enabled":true,"children":[{"code":"263.9","title":"Church year and other days and times","enabled":true,"children":[{"code":"263.91","title":"Nativity","enabled":true},{"code":"263.92","title":"Lent","enabled":true},{"code":"263.93","title":"Pascha","enabled":true},{"code":"263.97","title":"Other feast and fast days","enabled":true}]}]},{"code":"264","title":"Public worship","notes":"Services","enabled":true},{"code":"265","title":"Sacraments, other rites and acts","enabled":true},{"code":"268","title":"Religious education","notes":"Law of God","enabled":true}]},{"code":"270","title":"History of Christianity","notes":"Patristics, History of the church, leaders and fathers, ","enabled":true,"children":[{"code":"271","title":"Religious congregations","notes":"Monasteries, Convents, Seminaries","enabled":true},{"code":"272","title":"Persecutions in general church history","enabled":true},{"code":"273","title":"Doctrinal controversies and heresies in general church history\\n","enabled":true}]},{"code":"280","title":"Christian denominations","enabled":true},{"code":"290","title":"Other religions","enabled":false}]},{"code":"300","title":"Social sciences","enabled":false},{"code":"400","title":"Language","enabled":false},{"code":"500","title":"Pure Science","enabled":false},{"code":"600","title":"Technology","enabled":false},{"code":"700","title":"Arts and recreation","enabled":false},{"code":"800","title":"Literature","enabled":false},{"code":"900","title":"History and geography","enabled":false}]')}},[[110,1,2]]]);
//# sourceMappingURL=main.7aa13455.chunk.js.map