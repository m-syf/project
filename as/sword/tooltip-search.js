(function($,a,b){var c={a:$(b.body).append('<div id="extra-stuff-container"><div class="tooltip-search" id="tooltip-search"></div></div>'),b:$('#tooltip-search'),c:$('#toggle-code-view')},d={a:function(){var j1="";if(a.getSelection){j1=a.getSelection()}else if(b.getSelection){j1=b.getSelection()}else if(b.selection){j1=b.selection.createRange().text}return j1},b:{a:function(a1,a2,a3){var a4,a5;if(a3){a4=new Date();a4.setTime(a4.getTime()+(a3*24*60*60*1000));a5="; expires="+a4.toGMTString()}else{a5=""}b.cookie=a1+"="+a2+a5+"; path=/"},b:function(b1){var b2=b1+"=",b3=b.cookie.split(';'),b4;for(var i=0;i<b3.length;i++){b4=b3[i];while(b4.charAt(0)==' ')b4=b4.substring(1,b4.length);if(b4.indexOf(b2)===0)return b4.substring(b2.length,b4.length)}return null}}};c.c.on("change",function(){c.a[this.checked?"addClass":"removeClass"]('bright-code');d.b.a('pre',(this.checked?true:false),(this.checked?1000:-1))}).prop('checked',d.b.b('pre'));c.a[d.b.b('pre')?"addClass":"removeClass"]('bright-code');c.a.on("mouseup",function(e1){if(/pre|code/.test(e1.target.nodeName.toLowerCase())||$(e1.target).closest('pre').length>0)return;var e2=d.a().toString().replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e3=e1.pageX-100,e4=e1.pageY;a.setTimeout(function(){c.b.css({'display':(e2!==""&&e2.length<70)?'block':'none','top':e4+'px','left':e3+'px'}).html('<a class="anchor" href="/search?q='+e2+'" title="Telusuri &#8220;'+e2+'&#8221; di blog" target="_blank">Telusuri <strong>&#8220;'+e2+'&#8221;</strong> di blog</span><a class="anchor" href="http://www.google.com/search?q='+e2+'" title="Telusuri &#8220;'+e2+'&#8221; dengan Google" target="_blank">Telusuri <strong>&#8220;'+e2+'&#8221;</strong> dengan Google</span>')},50)})})(jQuery,window,document);
