(function(J,c){var W=J.location.href,B=c.getElementById("astin_query-comments-block"),z=c.getElementById("astin_emo-bar"),A=c.getElementById("astin_query-comments-total"),F=c.getElementById("astin_query-comments-pager"),E=c.getElementById("astin_query-comments-css"),y=c.getElementById("comment-editor"),q=c.getElementById("astin_form-comment-button-cancel"),C=B.getElementsByClassName("button-reply"),t=y.src.split("#"),a=B.innerHTML,S=[],G=[],v=[],m=0,H="",b="",D="",R=0,Q=0,P=0,O=0,x="",w="",u="";J.astin_Cm=function(g,f){var e=f,d=" <i data-emo='https://rawgit.com/m-syf/project/master/as/emo/",h="' class='emo'></i>";e=e.replace(/^(<br ?\/?>|&nbsp;)+/i,"").replace(/(<br ?\/?>)+(:|;|\^|=)/ig,"<br> $2").replace(/^(&nbsp;|<br ?\/?>| <br ?\/?>)+/ig,"").replace(/\@<a href="\#c([0-9]+)\"( rel="nofollow")?>.*?<\/a>\:? ?/g,"").replace(/\s:\)/g,d+"smile.gif' title=':)"+h).replace(/\s;\)/g,d+"wink.gif' title=';)"+h).replace(/\s:D/g,d+"haha.gif' title=':D"+h).replace(/\s=D/g,d+"hihi.gif' title='=D"+h).replace(/\s\^:D/g,d+"above-me-haha.gif' title='^:D"+h).replace(/\s\^\_?\^/g,d+"senyum-tulus.gif' title='^_^"+h).replace(/\s:\(/g,d+"sad.gif' title=':("+h).replace(/\s=\(/g,d+"sad-2.gif' title='=("+h).replace(/\s@@,/g,d+"roll-eyes.gif' title='@@,"+h).replace(/\s:yaya:/ig,d+"yaya.gif' title=':yaya:"+h).replace(/\s:s/ig,d+"sullen.gif' title=':s"+h).replace(/\s:(\\|\/)/ig,d+"memble.gif' title=':&#92;"+h).replace(/\s:('|\&\#39\;)\(/g,d+"cry.gif' title=':&#39;("+h).replace(/\s:waaa:/ig,d+"wa.gif' title=':waaa:"+h).replace(/\sT\_T/ig,d+"tear.gif' title='T_T"+h).replace(/\sB\)/g,d+"cool.gif' title='B)"+h).replace(/\s:Q/g,d+"smoking.gif' title=':Q"+h).replace(/\s\*\*p/ig,d+"crazy.gif' title='**p"+h).replace(/\s7:\(/g,d+"conf.gif' title='7:("+h).replace(/\s(:|=)p\*/ig,d+"ball2.gif' title='=p*"+h).replace(/\s:p/ig,d+"wee.gif' title=':p"+h).replace(/\s:Oz+/ig,d+"sleep.gif' title=':Ozz"+h).replace(/\s7:O/ig,d+"angry.gif' title='7:O"+h).replace(/\s\\o\//ig,d+"applause.gif' title='&#92;o/"+h).replace(/\s\\m\//ig,d+"metal.gif' title='&#92;m/"+h).replace(/\s(&lt;3|:\*)/g,d+"love.gif' title='&amp;amp;lt;3"+h).replace(/\s0:\)/g,d+"angelgreen.gif' title='0:)"+h).replace(/\s\^o\^/ig,d+"angel-white.gif' title='^o^"+h).replace(/\s:\-a/ig,d+"vomit.gif' title=':-a"+h).replace(/\s\*fck\*/ig,d+"fuck.gif' title='*fck*"+h).replace(/\sxV/ig,d+"shout.gif' title='xV"+h).replace(/\sx@/g,d+"marahbesar.gif' title='x@"+h).replace(/\sX@/ig,d+"arrgh.gif' title='X@"+h).replace(/\s:\-d/g,d+"top-top.gif' title=':-d"+h).replace(/\s:\-bd/g,d+"topmarkotop.gif' title=':-bd"+h).replace(/\s\~x\(+/ig,d+"ugh.gif' title='~x("+h).replace(/\s:bye:/ig,d+"bye.gif' title=':bye:"+h).replace(/\s:W/g,d+"explain.gif' title=':W"+h).replace(/\s\(\-\.\-,\)/g,d+"pumpkin.gif' title='(-.-,)"+h).replace(/\s\*=p/ig,d+"playing-1.gif' title='*=p"+h).replace(/\s:(i-am-here|di-sini):/ig,d+"i-am-here.gif' title=':disini:"+h).replace(/\s:cendol:/ig,d+"cendol.gif' title=':cendol:"+h).replace(/\s&lt;:\)/g,d+"festival-1.gif' title='&amp;amp;lt;:)"+h).replace(/\s&lt;=\)/g,d+"festival-2.gif' title='&amp;amp;lt;=)"+h).replace(/\s:(rolled|guling):/ig,d+"rolled.gif' title=':guling:"+h).replace(/\s\*bang\*/ig,d+"bang.gif' title='*bang*"+h).replace(/\s\'\'J/ig,d+"call.gif' title='&#39;&#39;J"+h).replace(/\s:(drum|drummer):/ig,d+"drum.gif' title=':drummer:"+h).replace(/\s:(guitarist|gitaris|guitar|gitar):/ig,d+"guitar.gif' title=':gitaris:"+h).replace(/\s:(vocalist|vokalis):/ig,d+"vocal.gif' title=':vokalis:"+h).replace(/\s:emo1:/ig,d+"emo1.gif' title=':emo1:"+h).replace(/\s:emo2:/ig,d+"emo2.gif' title=':emo2:"+h).replace(/\s:emo3:/ig,d+"emo3.gif' title=':emo3:"+h).replace(/\s:emo4:/ig,d+"emo4.gif' title=':emo4:"+h).replace(/\s:emo5:/ig,d+"emo5.gif' title=':emo5:"+h).replace(/\s:emo6:/ig,d+"emo6.gif' title=':emo6:"+h).replace(/\s:emo7:/ig,d+"emo7.gif' title=':emo7:"+h).replace(/\s:emo8:/ig,d+"emo8.gif' title=':emo8:"+h).replace(/\s:emo9:/ig,d+"emo9.gif' title=':emo9:"+h).replace(/\s:emo10:/ig,d+"emo10.gif' title=':emo10:"+h).replace(/\s:emo11:/ig,d+"emo11.gif' title=':emo11:"+h).replace(/\s:emo12:/ig,d+"emo12.gif' title=':emo12:"+h).replace(/\s:emo13:/ig,d+"emo13.gif' title=':emo13:"+h).replace(/\s:emo14:/ig,d+"emo14.gif' title=':emo14:"+h).replace(/\s:emo15:/ig,d+"emo15.gif' title=':emo15:"+h).replace(/\s:emo16:/ig,d+"emo16.gif' title=':emo16:"+h).replace(/\s:emo17:/ig,d+"emo17.gif' title=':emo17:"+h).replace(/\s:emo18:/ig,d+"emo18.gif' title=':emo18:"+h).replace(/\s:emo19:/ig,d+"emo19.gif' title=':emo19:"+h).replace(/\s:emo20:/ig,d+"emo20.gif' title=':emo20:"+h).replace(/\s:emo21:/ig,d+"emo21.gif' title=':emo21:"+h).replace(/\s:emo22:/ig,d+"emo22.gif' title=':emo22:"+h).replace(/\s:emo23:/ig,d+"emo23.gif' title=':emo23:"+h).replace(/\s:emo24:/ig,d+"emo24.gif' title=':emo24:"+h).replace(/\s:emo25:/ig,d+"emo25.gif' title=':emo25:"+h).replace(/\s:emo26:/ig,d+"emo26.gif' title=':emo26:"+h).replace(/\s:emo27:/ig,d+"emo27.gif' title=':emo27:"+h).replace(/\s:emo28:/ig,d+"emo28.gif' title=':emo28:"+h).replace(/\s:emo29:/ig,d+"emo29.gif' title=':emo29:"+h).replace(/\s:emo30:/ig,d+"emo30.gif' title=':emo30:"+h).replace(/\s:emo31:/ig,d+"emo31.gif' title=':emo31:"+h).replace(/\s:emo32:/ig,d+"emo32.gif' title=':emo32:"+h).replace(/\s:emo33:/ig,d+"emo33.gif' title=':emo33:"+h).replace(/\s:emo34:/ig,d+"emo34.gif' title=':emo34:"+h).replace(/\s:emo35:/ig,d+"emo35.gif' title=':emo35:"+h).replace(/\s:emo36:/ig,d+"emo36.gif' title=':emo36:"+h).replace(/\s:emo37:/ig,d+"emo37.gif' title=':emo37:"+h).replace(/\s:emo38:/ig,d+"emo38.gif' title=':emo38:"+h).replace(/\s:emo39:/ig,d+"emo38.gif' title=':emo39:"+h).replace(/\s:emo40:/ig,d+"emo40.gif' title=':emo40:"+h).replace(/\s:emo41:/ig,d+"emo41.gif' title=':emo41:"+h).replace(/\s:emo42:/ig,d+"emo42.gif' title=':emo42:"+h).replace(/\s:emo43:/ig,d+"emo43.gif' title=':emo43:"+h).replace(/\s:emo44:/ig,d+"emo44.gif' title=':emo44:"+h).replace(/\s:emo45:/ig,d+"emo45.gif' title=':emo45:"+h).replace(/\s:emo46:/ig,d+"emo46.gif' title=':emo46:"+h).replace(/\s:emo47:/ig,d+"emo47.gif' title=':emo47:"+h).replace(/\s:emo48:/ig,d+"emo48.gif' title=':emo48:"+h).replace(/\s:emo49:/ig,d+"emo49.gif' title=':emo49:"+h).replace(/\s:emo50:/ig,d+"emo50.gif' title=':emo50:"+h).replace(/\s:emo51:/ig,d+"emo51.gif' title=':emo51:"+h).replace(/\s:emo52:/ig,d+"emo52.gif' title=':emo52:"+h).replace(/\s:emo53:/ig,d+"emo53.gif' title=':emo53:"+h).replace(/\s:emo54:/ig,d+"emo54.gif' title=':emo54:"+h).replace(/\s:emo55:/ig,d+"emo55.gif' title=':emo55:"+h).replace(/\s:emo56:/ig,d+"emo56.gif' title=':emo56:"+h).replace(/\s:emo57:/ig,d+"emo57.gif' title=':emo57:"+h).replace(/\s:emo58:/ig,d+"emo58.gif' title=':emo58:"+h).replace(/\s:emo59:/ig,d+"emo59.gif' title=':emo59:"+h).replace(/\s:emo60:/ig,d+"emo60.gif' title=':emo60:"+h).replace(/\s:emo61:/ig,d+"emo61.gif' title=':emo61:"+h).replace(/\s:emo62:/ig,d+"emo62.gif' title=':emo62:"+h).replace(/\s:emo63:/ig,d+"emo63.gif' title=':emo63:"+h).replace(/\s:emo64:/ig,d+"emo64.gif' title=':emo64:"+h).replace(/\s:emo65:/ig,d+"emo65.gif' title=':emo65:"+h).replace(/\s:emo66:/ig,d+"emo66.gif' title=':emo66:"+h).replace(/\s:emo67:/ig,d+"emo67.gif' title=':emo67:"+h).replace(/\s:emo68:/ig,d+"emo68.gif' title=':emo68:"+h).replace(/\s:emo69:/ig,d+"emo69.gif' title=':emo69:"+h).replace(/\s:emo70:/ig,d+"emo70.gif' title=':emo70:"+h).replace(/\s:emo71:/ig,d+"emo71.gif' title=':emo71:"+h).replace(/\s:emo72:/ig,d+"emo72.gif' title=':emo72:"+h).replace(/\s:emo73:/ig,d+"emo73.gif' title=':emo73:"+h).replace(/\s:emo74:/ig,d+"emo74.gif' title=':emo74:"+h).replace(/\s:emo75:/ig,d+"emo75.gif' title=':emo75:"+h).replace(/\s:emo76:/ig,d+"emo76.gif' title=':emo76:"+h).replace(/\s:emo77:/ig,d+"emo77.gif' title=':emo77:"+h).replace(/\s:emo78:/ig,d+"emo78.gif' title=':emo78:"+h).replace(/\s:emo79:/ig,d+"emo79.gif' title=':emo79:"+h).replace(/\s:emo80:/ig,d+"emo80.gif' title=':emo80:"+h).replace(/\s:emo81:/ig,d+"emo81.gif' title=':emo81:"+h).replace(/\s:emo82:/ig,d+"emo82.gif' title=':emo82:"+h).replace(/\s:emo83:/ig,d+"emo83.gif' title=':emo83:"+h).replace(/\s:emo84:/ig,d+"emo84.gif' title=':emo84:"+h).replace(/\s:emo85:/ig,d+"emo85.gif' title=':emo85:"+h).replace(/\s:emo86:/ig,d+"emo86.gif' title=':emo86:"+h).replace(/\s:emo87:/ig,d+"emo87.gif' title=':emo87:"+h).replace(/\s:emo88:/ig,d+"emo88.gif' title=':emo88:"+h).replace(/\s:emo89:/ig,d+"emo89.gif' title=':emo89:"+h).replace(/\s:emo90:/ig,d+"emo90.gif' title=':emo90:"+h).replace(/\s:emo91:/ig,d+"emo91.gif' title=':emo91:"+h).replace(/\s:emo92:/ig,d+"emo92.gif' title=':emo92:"+h).replace(/\s:emo93:/ig,d+"emo93.gif' title=':emo93:"+h).replace(/\s:emo94:/ig,d+"emo94.gif' title=':emo94:"+h).replace(/\s:emo95:/ig,d+"emo95.gif' title=':emo95:"+h).replace(/\s:emo96:/ig,d+"emo96.gif' title=':emo96:"+h).replace(/\s:emo97:/ig,d+"emo97.gif' title=':emo97:"+h).replace(/\s:emo98:/ig,d+"emo98.gif' title=':emo98:"+h).replace(/\s:emo99:/ig,d+"emo99.gif' title=':emo99:"+h).replace(/\s:emo100:/ig,d+"emo100.gif' title=':emo100:"+h).replace(/\s:emo101:/ig,d+"emo101.gif' title=':emo101:"+h).replace(/\s:emo102:/ig,d+"emo102.gif' title=':emo102:"+h).replace(/\s:emo103:/ig,d+"emo103.gif' title=':emo103:"+h).replace(/\s:emo104:/ig,d+"emo104.gif' title=':emo104:"+h).replace(/\s:emo105:/ig,d+"emo105.gif' title=':emo105:"+h).replace(/\s:emo106:/ig,d+"emo106.gif' title=':emo106:"+h).replace(/\s:emo107:/ig,d+"emo107.gif' title=':emo107:"+h).replace(/\[note\](.*?)\[\/note\]/ig,"<div class='note'>$1</div>").replace(/\[(youtube|iframe)\](.*?)\[\/(youtube|iframe)\]/ig,"<div class='fluid-video loader'><iframe class='video' data-src='$2' frameborder='0'></iframe></div>").replace(/<em rel="note">(.*?)<\/em>/ig,"<div class='note'>$1</div>").replace(/<i rel="code">(.*?)<\/i>/ig,"<code>$1</code>").replace(/<b rel="h([0-6])">(.*?)<\/b>/ig,"<h$1>$2</h$1>").replace(/<i rel="anchor">(.*?)<\/i>/ig,"<a class='allow' href='$1' rel='nofollow'>$1</a>").replace(/\[(link|url)\](.*?)\[\/(link|url)\]/ig,"<a class='allow' href='$2' rel='nofollow'>$2</a>").replace(/\[url\=('|")?(.*?)('|")?\](.*?)\[\/url\]/ig,"<a class='allow' href='$2' rel='nofollow'>$4</a>").replace(/(<i rel="image">|\[img\])(.*?)(<\/i>|\[\/img\])/ig,"<img class='center img-attachment' data-src='$2' alt='Loading...'>").replace(/<\/h([0-6])>(<br ?\/?>)+/g,"</h$1>");g.innerHTML=e};if(!B||!z||!A||!F||!E){return}function s(){var e=-1;if(navigator.appName=="Microsoft Internet Explorer"){var d=navigator.userAgent;var f=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(f.exec(d)!==null){e=parseFloat(RegExp.$1)}}return e}var V=s();if(V==-1||V>=9){while(a.search(/<div id\=\"c[0-9]+/)!=-1){Q=a.indexOf('id="c');a=a.substring(Q+4);Q=a.indexOf('"');S[m]=a.substring(0,Q);a=a.substring(Q);if(/c[0-9]+/.test(S[m])&&document.getElementById(S[m])){G[m]=c.getElementById(S[m]).innerHTML;v[m]=0;m++}}for(Q=0;Q<m-1;++Q){for(P=Q+1;P<m;++P){if(G[P].indexOf(S[Q])!=-1){H=S[P];b=G[P];v[P]=v[Q]+1;D=v[P];for(R=Q+1;R<P;++R){if(v[R]<D){break}}for(O=P;O>R;O=O-1){S[O]=S[O-1];G[O]=G[O-1];v[O]=v[O-1]}S[R]=H;G[R]=b;v[R]=D}}}for(Q=0;Q<m;++Q){P=G[Q].indexOf('astin_query-comment-body">@<a class="allow" href="#c');if(P!=-1){w=G[Q].substring(0,P+26);u=G[Q].substring(P+1);P=u.indexOf("</a>");u=u.substring(P+4);G[Q]=w+u}P=G[Q].indexOf('class="astin_query-comment ');if(P!=-1){w=G[Q].substring(0,P);u=G[Q].substring(P);if(v[Q]>5){v[Q]=5}G[Q]=w+'style="margin-left:'+(v[Q]*5)+'%;" '+u}x+=G[Q]}astin_Cm(B,x);B.style.visibility="visible";var U=A.innerHTML,M=parseInt(U,10);if(M>200){x='<div class="pull-left">Halaman ';var T=(M-M%200)/200+1,L="",K=1;Q=W.indexOf(".html");if(Q!=-1){L=W.substring(0,Q+5)}else{L=W}Q=L.indexOf("#astin_query-comments");if(Q!=-1){L=L.substring(0,Q)}Q=W.indexOf("?commentPage=");if(Q==-1){K=1}else{K=parseInt(W.substring(Q+13),10)}for(Q=1;Q<=T;++Q){if(Q==K){x+="<span>"+Q+"</span>"}else{x+='<a href="'+L+"?commentPage="+Q+'#astin_query-comments">'+Q+"</a>"}}if(K*200<=M){x+='</div><div class="pull-right">'+(((K-1)*200)+1)+" - "+(K*200)+" dari "+M+" Komentar</div>"}else{x+='</div><div class="pull-right">Halaman Terakhir</div>'}F.innerHTML=x;F=c.getElementById("astin_query-comments-pager-copy");F.innerHTML=x;if(K<T){x="";E.innerHTML=x}}}else{astin_Cm(B,"<h4><em>Old IE Suck!</em></h4>")}astin_Cm(z,z.innerHTML);J.astin_r=function(e){if(!y){return}var d=c.getElementById((e!="cancel"?"cp"+e:"astin_query-comments"));y.src=(e!="cancel")?t[0]+"&parentID="+e+"#"+t[1]:t.join("#");y.className+=" transparent";y.parentNode.className+=" loader";y.onload=function(){this.className=this.className.replace(/ transparent/g,"");this.parentNode.className=this.parentNode.className.replace(/ loader/g,"")};d.insertBefore(y.parentNode.parentNode,null)};if(c.getElementsByClassName){for(var I=0,N=C.length;I<N;++I){C[I].href='javascript:astin_r("'+C[I].getAttribute("data-rt")+'");'}}if(q){q.setAttribute("onclick",'javascript:astin_r("cancel")')}})(window,document);