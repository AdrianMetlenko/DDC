(this.webpackJsonpddc=this.webpackJsonpddc||[]).push([[0],{109:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),a=i(33),l=i.n(a),r=(i(99),i(26)),d=i(13),c=i(78),s=i(169),b=i(177),u=i(163),h=i(165),f=i(166),p=i(67),g=i(74),y={};function j(e,t){var i="";e.notes&&(i=" (".concat(e.notes,")"));var n=e.code.slice(0,2)+"0";return 0===t.filter((function(t){return t.id===e.code})).length&&"200"!==e.code&&(3===e.code.length&&"2"===e.code[0]&&"0"===e.code[2]&&(y[e.code]=e.title),t.push({id:e.code,label:"".concat(e.code,": ").concat(e.title)+i,group:"".concat(n,": ").concat(y[n]),disabled:!e.enabled})),e.children&&e.children.forEach((function(e){return j(e,t)})),t}var m=i(168),x=i(171),O=i(172),v=i(173),C=i(158),F=i(37),E=i(150),k=i(41),S=i(151),A=i(152),P={50:"#F0F7FF",100:"#C2E0FF",200:"#A5D8FF",300:"#66B2FF",400:"#3399FF",main:"#007FFF",500:"#007FFF",600:"#0072E5",700:"#0059B2",800:"#004C99",900:"#003A75"},D={50:"#E2EDF8",100:"#CEE0F3",200:"#91B9E3",300:"#5090D3",main:"#5090D3",400:"#265D97",500:"#1E4976",600:"#173A5E",700:"#132F4C",800:"#001E3C",900:"#0A1929"},w={50:"#F3F6F9",100:"#EAEEF3",200:"#E5E8EC",300:"#D7DCE1",400:"#BFC7CF",500:"#AAB4BE",600:"#7F8E9D",700:"#46505A",800:"#2F3A45",900:"#20262D"},B=i(2);function G(e,t,i,n,o){"."===e.code.slice(0,n).slice(-1)&&(n+=1);var a=e.code.slice(0,n),l=!1;t&&(l=t.slice(0,n)===a);var r=function(e){switch(e){case 1:return F.a;case 2:return E.a;case 3:return k.a;case 4:case 5:return S.a;case 6:return A.a;default:return D}}(n)["light"===o.palette.mode?"500":"400"],d=l?r:o.palette.text.primary;return e.children?Object(B.jsxs)(m.a,{disableGutters:!0,elevation:e.enabled?3:1,disabled:!e.enabled,expanded:l,onChange:function(){if(t===e.code)if(e.code.length>4)i(e.code.slice(0,-1));else{for(var n=e.code.replace(/[.0]/g,"").slice(0,-1);n.length<3;)n+="0";i("000"===n?"200":n)}else i(e.code)},sx:{pl:1,borderLeft:l?3:0,borderTop:l?3:0,borderColor:r,"&:before":{display:"none"},"&.Mui-disabled":{bgcolor:"background.paper"}},children:[Object(B.jsxs)(x.a,{expandIcon:Object(B.jsx)(C.a,{sx:{color:d}}),sx:{display:"flex",ml:4,borderRadius:0},children:[Object(B.jsx)(O.a,{sx:{color:d,flex:1,pr:"5%",fontWeight:"bold"},children:e.code}),Object(B.jsxs)("div",{style:{flex:10},children:[Object(B.jsx)(O.a,{sx:{fontWeight:"bold",color:d},children:e.title}),Object(B.jsx)(O.a,{sx:{color:d},variant:"caption",children:e.notes})]})]}),Object(B.jsx)(v.a,{children:e.children.map((function(e){return G(e,t,i,n+1,o)}))})]}):Object(B.jsx)(m.a,{disableGutters:!0,elevation:e.enabled?3:1,disabled:!e.enabled,expanded:t===e.code,sx:{pl:1,borderLeft:t===e.code?3:0,borderTop:t===e.code?3:0,borderColor:r,"&:before":{display:"none"},color:d,fontWeight:"bold","&.Mui-disabled":{bgcolor:"background.paper"}},onChange:function(){return i(e.code)},children:Object(B.jsxs)(x.a,{sx:{display:"flex",ml:4},children:[Object(B.jsx)(O.a,{sx:{flex:1,pr:"5%",fontWeight:"bold",color:d},children:e.code}),Object(B.jsxs)("div",{style:{flex:10},children:[Object(B.jsx)(O.a,{sx:{fontWeight:"bold",color:d},children:e.title}),Object(B.jsx)(O.a,{sx:{color:d},variant:"caption",children:e.notes})]})]})})}var T=i(22),M=i(174),W=i(175),H=i(176),L=i(161),R=i(162),I=i(160),J=o.a.createContext({toggleColorMode:function(){}});var N=function(e){var t=e.height,i=Object(n.useContext)(J),o=Object(T.a)();return Object(B.jsx)(M.a,{position:"fixed",elevation:5,sx:{height:t,justifyContent:"center"},children:Object(B.jsxs)(W.a,{sx:{width:"100%"},children:[Object(B.jsx)("div",{style:{flex:1}}),Object(B.jsx)(O.a,{variant:"h5",sx:{flex:1,textAlign:"center"},children:"Dewey Decimal Classification"}),Object(B.jsx)("div",{style:{flex:1,display:"flex"},children:Object(B.jsx)(H.a,{style:{marginLeft:"auto"},onClick:i.toggleColorMode,color:"inherit",children:"dark"===o.palette.mode?Object(B.jsx)(L.a,{}):Object(B.jsx)(R.a,{})})})]})})};var U=function(){var e=Object(n.useState)("light"),t=Object(d.a)(e,2),i=t[0],o=t[1],a=Object(n.useMemo)((function(){return{toggleColorMode:function(){o((function(e){return"light"===e?"dark":"light"}))}}}),[]),l=Object(n.useMemo)((function(){return Object(c.a)(function(e){return{palette:Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({primary:Object(r.a)(Object(r.a)({},P),"dark"===e&&{main:P[400]}),divider:"dark"===e?D[700]:w[200],primaryDark:D,mode:e},"dark"===e&&{background:{default:D[900],paper:D[800]}}),"light"===e&&{text:{primary:w[900],secondary:w[700]}}),"dark"===e&&{text:{primary:"#fff",secondary:w[500]}}),"light"===e&&{background:{default:I.a[50],paper:"#FFFFFF"}}),{},{grey:w}),shape:{borderRadius:0},spacing:10}}(i))}),[i]),y=Object(n.useState)("200"),m=Object(d.a)(y,2),x=m[0],O=m[1],v=Object(n.useState)([]),C=Object(d.a)(v,2),F=C[0],E=C[1],k=Object(n.useState)([]),S=Object(d.a)(k,2),A=S[0],T=S[1];return Object(n.useEffect)((function(){E(p);var e=p.map((function(e){return j(e,[])}))[2];T(e)}),[]),Object(B.jsx)(J.Provider,{value:a,children:Object(B.jsxs)(s.a,{theme:l,children:[Object(B.jsx)(N,{height:70}),Object(B.jsxs)(b.a,{sx:{mt:7,display:"flex",alignItems:"center",flexDirection:"column",bgcolor:"background.default"},children:[Object(B.jsx)(g.a,{children:Object(B.jsx)("title",{children:"DDC Index"})}),Object(B.jsx)(u.a,{}),Object(B.jsx)(b.a,{sx:{textAlign:"center",paddingLeft:2,paddingTop:2,paddingRight:2,width:"100%",maxWidth:900},children:Object(B.jsx)(b.a,{sx:{textAlign:"left",marginBottom:1,width:"100%",bgcolor:"background.paper"},children:Object(B.jsx)(h.a,{options:A,getOptionDisabled:function(e){return e.disabled},groupBy:function(e){return e.group},onChange:function(e,t){O(t?t.id:t)},renderInput:function(e){return Object(B.jsx)(f.a,Object(r.a)(Object(r.a)({},e),{},{variant:"outlined",label:"Search..."}))}})})}),Object(B.jsx)("div",{style:{maxWidth:900,padding:20,width:"100%"},children:null===F||void 0===F?void 0:F.map((function(e){return G(e,x,O,1,l)}))})]})]})})};l.a.render(Object(B.jsx)(o.a.StrictMode,{children:Object(B.jsx)(U,{})}),document.getElementById("root"))},67:function(e){e.exports=JSON.parse('[{"code":"000","title":"Computer science, information and general works","enabled":false},{"code":"100","title":"Philosophy and psychology","enabled":false},{"code":"200","title":"Religion","enabled":true,"children":[{"code":"210","title":"Philosophy and theory of religion","notes":"Scientific and Psychological Principles","enabled":true,"children":[{"code":"211","title":"Concepts of God","enabled":false},{"code":"212","title":"Existence of God, ways of knowing God, attributes of God","enabled":false},{"code":"213","title":"Creation","notes":"Evolution, (Use 231 for Christian)","enabled":true},{"code":"214","title":"Theodicy","notes":"Good & Evil, Justify or defend God in the face of evil...","enabled":true},{"code":"215","title":"Science and religion","notes":"Technology & Religion, Physics, Biology","enabled":true},{"code":"218","title":"Humankind","notes":"Immortality","enabled":true}]},{"code":"220","title":"The Bible","enabled":true,"children":[{"code":"220","title":"The Bible","enabled":true,"children":[{"code":"220.1","title":"Origins and authenticity","notes":"Canons, Biblical prophecies, (See 268 for eduction/studies)","enabled":true},{"code":"220.3","title":"Encyclopedias and topical dictionaries","notes":"Biblical dictionaries","enabled":true},{"code":"220.4","title":"Original texts, early versions, early translations","notes":"The \\"Actual\\" Bible","enabled":true},{"code":"220.5","title":"Modern versions and translations","enabled":false},{"code":"220.6","title":"Interpretation and criticism (Exegesis)","enabled":false},{"code":"220.7","title":"Commentaries","enabled":false},{"code":"220.8","title":"Nonreligious subjects treated in Bible","enabled":false},{"code":"220.9","title":"Geography, history, chronology, persons of Bible lands in Bible times","enabled":true}]},{"code":"221","title":"Old Testament","enabled":true},{"code":"222","title":"Historical books of Old Testament","enabled":true},{"code":"223","title":"Poetic books of Old Testament","enabled":true},{"code":"224","title":"Prophetic books of Old Testament","enabled":true},{"code":"225","title":"New Testament","enabled":true},{"code":"226","title":"Gospels and Acts","enabled":true},{"code":"227","title":"Epistles","enabled":true},{"code":"228","title":"Revelation (Apocalypse)","enabled":true},{"code":"229","title":"Apocrypha, pseudepigrapha, and inter-testamental works","enabled":false}]},{"code":"230","title":"Christianity","enabled":true,"children":[{"code":"230","title":"Christianity","enabled":true},{"code":"231","title":"God","notes":"Miracles, Ways of knowing God, Attributes of God, Holy Trinity, Relation to the world, Creation, Good & Evil","enabled":true},{"code":"232","title":"Jesus Christ and His family","notes":"The Mother of God, John the Baptist, Sacrifices & Resurrection of Christ","enabled":true},{"code":"233","title":"Humankind","notes":"Creation & fall, Free will","enabled":true},{"code":"234","title":"Salvation and grace","notes":"Spiritual gifts, Working of miracles, Sacraments, Repentance & forgiveness","enabled":true},{"code":"235","title":"Spiritual beings","enabled":true,"children":[{"code":"235.2","title":"Saints","notes":"Canonisation, Lives of Saints, Comprehensive Works","enabled":true},{"code":"235.3","title":"Angels","enabled":true},{"code":"235.4","title":"Demons","notes":"Spiritual Warfare","enabled":true}]},{"code":"236","title":"Eschatology","notes":"Antichrist","enabled":true,"children":[{"code":"236.1","title":"Death","enabled":true},{"code":"236.2","title":"Life after death","notes":"Eternity, Immortality, Heaven & Hell","enabled":true},{"code":"236.9","title":"Last Judgement","notes":"Armageddon, End of the world","enabled":true}]},{"code":"238","title":"Creeds, confessions of faith, covenants, and catechisms","enabled":true},{"code":"239","title":"Apologetics and polemics","notes":"Argumentation in defense of the divine origin and authority of Christianity, Controversial Debate","enabled":true}]},{"code":"240","title":"Christian moral and devotional theology","notes":"Writings of the Holy Fathers","enabled":true,"children":[{"code":"241","title":"Christian ethics","notes":"Moral theology, Conscience, Sins & vices, Virtues","enabled":true},{"code":"242","title":"Devotions & Prayer","notes":"","enabled":true,"children":[{"code":"242.2","title":"Daily use","enabled":true},{"code":"242.3","title":"Major feast-days","enabled":true,"children":[{"code":"242.33","title":"Nativity","enabled":true},{"code":"242.34","title":"Lent","enabled":true},{"code":"242.35","title":"Holy Week","enabled":true},{"code":"242.36","title":"Pascha","enabled":true},{"code":"242.37","title":"Other feast-days","enabled":true}]},{"code":"242.4","title":"Illness, trouble, bereavement","enabled":true},{"code":"242.5","title":"Prayers and meditations based on passages from the Bible","notes":"Psalter","enabled":true},{"code":"242.6","title":"Prayers and meditations for specific groups of people","enabled":false},{"code":"242.7","title":"Specific prayers and groups of prayers","notes":"Akathists, Prayers to Saints & Angels etc.","enabled":true},{"code":"242.8","title":"Collections of prayers","notes":"Service books","enabled":true}]},{"code":"243","title":"Evangelistic writings for individuals and families","enabled":false},{"code":"246","title":"Use of art in Christianity","notes":"Religious meaning, significance, purpose","enabled":true,"children":[{"code":"246.5","title":"Icons, symbols, insignia","enabled":true},{"code":"246.7","title":"Dramatic, musical, rhythmic arts","enabled":true},{"code":"246.9","title":"Architecture","enabled":true}]},{"code":"247","title":"Church furnishings and related articles","notes":"Memorials, sculptures, vestments","enabled":false},{"code":"248","title":"Christian experience, practice, life","enabled":true,"children":[{"code":"248.2","title":"Religious experience","notes":"Mysticism, conversion, religious experiences/visions","enabled":true},{"code":"248.3","title":"Worship","notes":"Praying","enabled":true},{"code":"248.4","title":"Christian life and practice","notes":"Asceticism, fasting and abstinence, poverty, solitude","enabled":true},{"code":"248.8","title":"Guides to Christian life for specific groups of people","notes":"Men, women, young people, stages of adulthood, parents, illness, bereavement etc.","enabled":true}]},{"code":"249","title":"Christian observances in family life","notes":"Christian marriage and family","enabled":true}]},{"code":"250","title":"Local Christian church and Christian religious orders","notes":"Communities","enabled":true,"children":[{"code":"251","title":"Preaching (Homiletics)","notes":"Preparation of sermons","enabled":true},{"code":"252","title":"Texts of sermons","enabled":true},{"code":"253","title":"Pastoral office and work (Pastoral theology)","enabled":false},{"code":"254","title":"Parish administration","enabled":true},{"code":"259","title":"Pastoral care of families, of specific groups of people","enabled":false}]},{"code":"260","title":"Social and ecclesiastical theology","enabled":true,"children":[{"code":"261","title":"Social theology and interreligious relations and attitudes","notes":"Christian church in society, psychology, occultism, science, technology, medicine","enabled":false},{"code":"262","title":"Ecclesiology","notes":"Ecumenism, schism, church law and discipline, theological interpretations","enabled":true},{"code":"263","title":"Days, times, places of holy observance","notes":"Feast days","enabled":true,"children":[{"code":"263.9","title":"Church year and other days and times","enabled":true,"children":[{"code":"263.91","title":"Nativity","enabled":true},{"code":"263.92","title":"Lent","enabled":true},{"code":"263.93","title":"Pascha","enabled":true},{"code":"263.97","title":"Other feast and fast days","enabled":true}]}]},{"code":"264","title":"Public worship","notes":"Services","enabled":true},{"code":"265","title":"Sacraments, other rites and acts","enabled":true},{"code":"268","title":"Religious education","notes":"Law of God","enabled":true}]},{"code":"270","title":"History of Christianity","notes":"Patristics, History of the church, leaders and fathers, ","enabled":true,"children":[{"code":"272","title":"Persecutions in general church history","enabled":true},{"code":"273","title":"Doctrinal controversies and heresies in general church history\\n","enabled":true}]},{"code":"280","title":"Christian denominations","enabled":true},{"code":"290","title":"Other religions","enabled":false}]},{"code":"300","title":"Social sciences","enabled":false},{"code":"400","title":"Language","enabled":false},{"code":"500","title":"Pure Science","enabled":false},{"code":"600","title":"Technology","enabled":false},{"code":"700","title":"Arts and recreation","enabled":false},{"code":"800","title":"Literature","enabled":false},{"code":"900","title":"History and geography","enabled":false}]')},99:function(e,t,i){}},[[109,1,2]]]);
//# sourceMappingURL=main.d0636ac7.chunk.js.map