(this.webpackJsonpddc=this.webpackJsonpddc||[]).push([[0],{106:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),a=i(33),l=i.n(a),d=(i(96),i(28)),r=i(13),c=i(76),s=i(162),b=i(170),u=i(156),h=i(163),f=i(158),g=i(159),p=i(65),y=i(72),j={};function m(e,t){var i="";e.notes&&(i=" (".concat(e.notes,")"));var n=e.code.slice(0,2)+"0";return 0===t.filter((function(t){return t.id===e.code})).length&&"200"!==e.code&&(3===e.code.length&&"2"===e.code[0]&&"0"===e.code[2]&&(j[e.code]=e.title),t.push({id:e.code,label:"".concat(e.code,": ").concat(e.title)+i,group:"".concat(n,": ").concat(j[n]),disabled:!e.enabled})),e.children&&e.children.forEach((function(e){return m(e,t)})),t}var x=i(161),O=i(164),v=i(165),C=i(166),E=i(152),F=i(2);function k(e,t,i,n,o){"."===e.code.slice(0,n).slice(-1)&&(n+=1);var a=e.code.slice(0,n),l=!1;t&&(l=t.slice(0,n)===a);var d=l?o.palette.primary.main:o.palette.text.primary;return e.children?Object(F.jsxs)(x.a,{elevation:e.enabled?4:0,disabled:!e.enabled,expanded:l,onChange:function(){if(t===e.code)if(e.code.length>4)i(e.code.slice(0,-1));else{for(var n=e.code.replace(/[.0]/g,"").slice(0,-1);n.length<3;)n+="0";i("000"===n?"200":n)}else i(e.code)},sx:{bgcolor:"background.default"},children:[Object(F.jsxs)(O.a,{expandIcon:Object(F.jsx)(E.a,{}),sx:{display:"flex",ml:4},children:[Object(F.jsx)(v.a,{sx:{color:d,flex:1,pr:"5%",fontWeight:"bold"},children:e.code}),Object(F.jsxs)("div",{style:{flex:10},children:[Object(F.jsx)(v.a,{sx:{color:d,fontWeight:"bold"},children:e.title}),Object(F.jsx)(v.a,{variant:"caption",sx:{color:"text.secondary"},children:e.notes})]})]}),Object(F.jsx)(C.a,{children:e.children.map((function(e){return k(e,t,i,n+1,o)}))})]}):Object(F.jsx)(x.a,{elevation:e.enabled?4:0,disabled:!e.enabled,expanded:t===e.code,sx:{bgcolor:"background.default"},children:Object(F.jsxs)(O.a,{sx:{display:"flex",ml:4},children:[Object(F.jsx)(v.a,{style:{flex:1,paddingRight:"5%",fontWeight:"bold"},children:e.code}),Object(F.jsxs)("div",{style:{flex:10},children:[Object(F.jsx)(v.a,{style:{color:d,fontWeight:"bold"},children:e.title}),Object(F.jsx)(v.a,{variant:"caption",sx:{color:"text.secondary"},children:e.notes})]})]})})}var S=i(22),A=i(167),P=i(168),D=i(169),w=i(154),B=i(155),G={50:"#F0F7FF",100:"#C2E0FF",200:"#A5D8FF",300:"#66B2FF",400:"#3399FF",main:"#007FFF",500:"#007FFF",600:"#0072E5",700:"#0059B2",800:"#004C99",900:"#003A75"},T={50:"#E2EDF8",100:"#CEE0F3",200:"#91B9E3",300:"#5090D3",main:"#5090D3",400:"#265D97",500:"#1E4976",600:"#173A5E",700:"#132F4C",800:"#001E3C",900:"#0A1929"},M={50:"#F3F6F9",100:"#EAEEF3",200:"#E5E8EC",300:"#D7DCE1",400:"#BFC7CF",500:"#AAB4BE",600:"#7F8E9D",700:"#46505A",800:"#2F3A45",900:"#20262D"},H=o.a.createContext({toggleColorMode:function(){}});var R=function(e){var t=e.height,i=Object(n.useContext)(H),o=Object(S.a)();return Object(F.jsx)(A.a,{position:"fixed",elevation:5,sx:{height:t,justifyContent:"center"},children:Object(F.jsxs)(P.a,{sx:{width:"100%"},children:[Object(F.jsx)("div",{style:{flex:1}}),Object(F.jsx)(v.a,{variant:"h5",sx:{flex:1,textAlign:"center"},children:"Dewey Decimal Classification"}),Object(F.jsx)("div",{style:{flex:1,display:"flex"},children:Object(F.jsx)(D.a,{style:{marginLeft:"auto"},onClick:i.toggleColorMode,color:"inherit",children:"dark"===o.palette.mode?Object(F.jsx)(w.a,{}):Object(F.jsx)(B.a,{})})})]})})};var W=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),i=t[0],o=t[1],a=Object(n.useMemo)((function(){return{toggleColorMode:function(){o((function(e){return"light"===e?"dark":"light"}))}}}),[]),l=Object(n.useMemo)((function(){return Object(c.a)(function(e){return{palette:Object(d.a)(Object(d.a)(Object(d.a)(Object(d.a)({primary:Object(d.a)(Object(d.a)({},G),"dark"===e&&{main:G[400]}),divider:"dark"===e?T[700]:M[200],primaryDark:T,mode:e},"dark"===e&&{background:{default:T[800],paper:T[900]}}),"light"===e&&{text:{primary:M[900],secondary:M[700]}}),"dark"===e&&{text:{primary:"#fff",secondary:M[500]}}),{},{grey:M}),shape:{borderRadius:10},spacing:10}}(i))}),[i]),j=Object(n.useState)("200"),x=Object(r.a)(j,2),O=x[0],v=x[1],C=Object(n.useState)([]),E=Object(r.a)(C,2),S=E[0],A=E[1],P=Object(n.useState)([]),D=Object(r.a)(P,2),w=D[0],B=D[1];return Object(n.useEffect)((function(){A(p);var e=p.map((function(e){return m(e,[])}))[2];B(e)}),[]),Object(F.jsx)(H.Provider,{value:a,children:Object(F.jsxs)(s.a,{theme:l,children:[Object(F.jsx)(R,{height:70}),Object(F.jsxs)(b.a,{sx:{mt:7,display:"flex",alignItems:"center",flexDirection:"column",bgcolor:"background.paper"},children:[Object(F.jsx)(y.a,{children:Object(F.jsx)("title",{children:"DDC Index"})}),Object(F.jsx)(u.a,{}),Object(F.jsx)(b.a,{sx:{textAlign:"center",paddingLeft:2,paddingTop:2,paddingRight:2,width:"100%",maxWidth:900},children:Object(F.jsx)(h.a,{style:{textAlign:"left",marginBottom:10,width:"100%",padding:15},children:Object(F.jsx)(f.a,{options:w,getOptionDisabled:function(e){return e.disabled},groupBy:function(e){return e.group},onChange:function(e,t){v(t?t.id:t)},renderInput:function(e){return Object(F.jsx)(g.a,Object(d.a)(Object(d.a)({},e),{},{variant:"outlined",label:"Search..."}))}})})}),Object(F.jsx)("div",{style:{maxWidth:900,padding:20,width:"100%"},children:null===S||void 0===S?void 0:S.map((function(e){return k(e,O,v,1,l)}))})]})]})})};l.a.render(Object(F.jsx)(o.a.StrictMode,{children:Object(F.jsx)(W,{})}),document.getElementById("root"))},65:function(e){e.exports=JSON.parse('[{"code":"000","title":"Computer science, information and general works","enabled":false},{"code":"100","title":"Philosophy and psychology","enabled":false},{"code":"200","title":"Religion","enabled":true,"children":[{"code":"210","title":"Philosophy and theory of religion","notes":"Scientific and Psychological Principles","enabled":true,"children":[{"code":"211","title":"Concepts of God","enabled":false},{"code":"212","title":"Existence of God, ways of knowing God, attributes of God","enabled":false},{"code":"213","title":"Creation","notes":"Evolution, (Use 231 for Christian)","enabled":true},{"code":"214","title":"Theodicy","notes":"Good & Evil, Justify or defend God in the face of evil...","enabled":true},{"code":"215","title":"Science and religion","notes":"Technology & Religion, Physics, Biology","enabled":true},{"code":"218","title":"Humankind","notes":"Immortality","enabled":true}]},{"code":"220","title":"The Bible","enabled":true,"children":[{"code":"220","title":"The Bible","enabled":true,"children":[{"code":"220.1","title":"Origins and authenticity","notes":"Canons, Biblical prophecies, (See 268 for eduction/studies)","enabled":true},{"code":"220.3","title":"Encyclopedias and topical dictionaries","notes":"Biblical dictionaries","enabled":true},{"code":"220.4","title":"Original texts, early versions, early translations","notes":"The \\"Actual\\" Bible","enabled":true},{"code":"220.5","title":"Modern versions and translations","enabled":false},{"code":"220.6","title":"Interpretation and criticism (Exegesis)","enabled":false},{"code":"220.7","title":"Commentaries","enabled":false},{"code":"220.8","title":"Nonreligious subjects treated in Bible","enabled":false},{"code":"220.9","title":"Geography, history, chronology, persons of Bible lands in Bible times","enabled":true}]},{"code":"221","title":"Old Testament","enabled":true},{"code":"222","title":"Historical books of Old Testament","enabled":true},{"code":"223","title":"Poetic books of Old Testament","enabled":true},{"code":"224","title":"Prophetic books of Old Testament","enabled":true},{"code":"225","title":"New Testament","enabled":true},{"code":"226","title":"Gospels and Acts","enabled":true},{"code":"227","title":"Epistles","enabled":true},{"code":"228","title":"Revelation (Apocalypse)","enabled":true},{"code":"229","title":"Apocrypha, pseudepigrapha, and inter-testamental works","enabled":false}]},{"code":"230","title":"Christianity","enabled":true,"children":[{"code":"230","title":"Christianity","enabled":true},{"code":"231","title":"God","notes":"Miracles, Ways of knowing God, Attributes of God, Holy Trinity, Relation to the world, Creation, Good & Evil","enabled":true},{"code":"232","title":"Jesus Christ and His family","notes":"The Mother of God, John the Baptist, Sacrifices & Resurrection of Christ","enabled":true},{"code":"233","title":"Humankind","notes":"Creation & fall, Free will","enabled":true},{"code":"234","title":"Salvation and grace","notes":"Spiritual gifts, Working of miracles, Sacraments, Repentance & forgiveness","enabled":true},{"code":"235","title":"Spiritual beings","enabled":true,"children":[{"code":"235.2","title":"Saints","notes":"Canonisation, Lives of Saints, Comprehensive Works","enabled":true},{"code":"235.3","title":"Angels","enabled":true},{"code":"235.4","title":"Demons","notes":"Spiritual Warfare","enabled":true}]},{"code":"236","title":"Eschatology","notes":"Antichrist","enabled":true,"children":[{"code":"236.1","title":"Death","enabled":true},{"code":"236.2","title":"Life after death","notes":"Eternity, Immortality, Heaven & Hell","enabled":true},{"code":"236.9","title":"Last Judgement","notes":"Armageddon, End of the world","enabled":true}]},{"code":"238","title":"Creeds, confessions of faith, covenants, and catechisms","enabled":true},{"code":"239","title":"Apologetics and polemics","notes":"Argumentation in defense of the divine origin and authority of Christianity, Controversial Debate","enabled":true}]},{"code":"240","title":"Christian moral and devotional theology","enabled":true,"children":[{"code":"241","title":"Christian ethics","notes":"Moral theology, Conscience, Sins & vices, Virtues","enabled":true},{"code":"242","title":"Devotions & Prayer","notes":"","enabled":true,"children":[{"code":"242.2","title":"Daily use","enabled":true},{"code":"242.3","title":"Major feast-days","enabled":true,"children":[{"code":"242.33","title":"Nativity","enabled":true},{"code":"242.34","title":"Lent","enabled":true},{"code":"242.35","title":"Holy Week","enabled":true},{"code":"242.36","title":"Pascha","enabled":true},{"code":"242.37","title":"Other feast-days","enabled":true}]},{"code":"242.4","title":"Illness, trouble, bereavement","enabled":true},{"code":"242.5","title":"Prayers and meditations based on passages from the Bible","notes":"Psalter","enabled":true},{"code":"242.6","title":"Prayers and meditations for specific groups of people","enabled":false},{"code":"242.7","title":"Specific prayers and groups of prayers","notes":"Akathists, Prayers to Saints & Angels etc.","enabled":true},{"code":"242.8","title":"Collections of prayers","notes":"Service books","enabled":true}]},{"code":"243","title":"Evangelistic writings for individuals and families","enabled":false},{"code":"246","title":"Use of art in Christianity","notes":"Religious meaning, significance, purpose","enabled":true,"children":[{"code":"246.5","title":"Icons, symbols, insignia","enabled":true},{"code":"246.7","title":"Dramatic, musical, rhythmic arts","enabled":true},{"code":"246.9","title":"Architecture","enabled":true}]},{"code":"247","title":"Church furnishings and related articles","notes":"Memorials, sculptures, vestments","enabled":false},{"code":"248","title":"Christian experience, practice, life","enabled":true,"children":[{"code":"248.2","title":"Religious experience","notes":"Mysticism, conversion, religious experiences/visions","enabled":true},{"code":"248.3","title":"Worship","notes":"Praying","enabled":true},{"code":"248.4","title":"Christian life and practice","notes":"Asceticism, fasting and abstinence, poverty, solitude","enabled":true},{"code":"248.8","title":"Guides to Christian life for specific groups of people","notes":"Men, women, young people, stages of adulthood, parents, illness, bereavement etc.","enabled":true}]},{"code":"249","title":"Christian observances in family life","notes":"Christian marriage and family","enabled":true}]},{"code":"250","title":"Local Christian church and Christian religious orders","notes":"Communities","enabled":true,"children":[{"code":"251","title":"Preaching (Homiletics)","notes":"Preparation of sermons","enabled":true},{"code":"252","title":"Texts of sermons","enabled":true},{"code":"253","title":"Pastoral office and work (Pastoral theology)","enabled":false},{"code":"254","title":"Parish administration","enabled":true},{"code":"259","title":"Pastoral care of families, of specific groups of people","enabled":false}]},{"code":"260","title":"Social and ecclesiastical theology","enabled":true,"children":[{"code":"261","title":"Social theology and interreligious relations and attitudes","notes":"Christian church in society, psychology, occultism, science, technology, medicine","enabled":false},{"code":"262","title":"Ecclesiology","notes":"Ecumenism, schism, church law and discipline, theological interpretations","enabled":true},{"code":"263","title":"Days, times, places of holy observance","notes":"Feast days","enabled":true,"children":[{"code":"263.9","title":"Church year and other days and times","enabled":true,"children":[{"code":"263.91","title":"Nativity","enabled":true},{"code":"263.92","title":"Lent","enabled":true},{"code":"263.93","title":"Pascha","enabled":true},{"code":"263.97","title":"Other feast and fast days","enabled":true}]}]},{"code":"264","title":"Public worship","notes":"Services","enabled":true},{"code":"265","title":"Sacraments, other rites and acts","enabled":true},{"code":"268","title":"Religious education","notes":"Law of God","enabled":true}]},{"code":"270","title":"History of Christianity","notes":"Patristics, History of church leaders and fathers","enabled":true,"children":[{"code":"272","title":"Persecutions in general church history","enabled":true},{"code":"273","title":"Doctrinal controversies and heresies in general church history\\n","enabled":true}]},{"code":"280","title":"Christian denominations","enabled":false},{"code":"290","title":"Other religions","enabled":false}]},{"code":"300","title":"Social sciences","enabled":false},{"code":"400","title":"Language","enabled":false},{"code":"500","title":"Pure Science","enabled":false},{"code":"600","title":"Technology","enabled":false},{"code":"700","title":"Arts and recreation","enabled":false},{"code":"800","title":"Literature","enabled":false},{"code":"900","title":"History and geography","enabled":false}]')},96:function(e,t,i){}},[[106,1,2]]]);
//# sourceMappingURL=main.24584376.chunk.js.map