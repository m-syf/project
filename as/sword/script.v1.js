/*! ContactV1 */
(function(a, c) {
    a.astin_getContact = function(h) {
        var k = {
            mode: 1,
            container: null,
            format: {
                subjek: "",
                nama: "",
                email: "",
                url: "http://",
                pesan: ""
            }
        };
        for (var g in k) {
            if (typeof h[g] == "undefined") {
                h[g] = k[g]
            }
        }
        for (var f in k.format) {
            if (typeof h.format[f] == "undefined") {
                h.format[f] = k.format[f]
            }
        }
        var e = '<form class="astin_form-contact-query" action="https://docs.google.co' + 'm/forms/d/1ujK64knVkW9J' + 'jBZ6uCYRbJHniof-35L8jjwxg8iJOJY/formResponse" method="POST" id="astin_form-contact-query" target="_blank"><div class="pull-left"><div style="position:relative;"><input type="text" name="entry.719880140" value="' + h.format.subjek + '" class="ss-q-short" id="entry_719880140" aria-required="true" title="Perihal" placeholder="Perihal (Wajib)"></div><div style="position:relative;"><input type="text" name="entry.1286738207" value="' + h.format.nama + '" class="ss-q-short" id="entry_1286738207" aria-required="true" title="Nama" placeholder="Nama (Wajib)"></div><div style="position:relative;"><input type="text" name="entry.124776964" value="' + h.format.email + '" class="ss-q-short" id="entry_124776964" aria-required="true" title="Email" placeholder="Email (Wajib)"></div><div style="position:relative;"><input type="text" name="entry.191612006" value="' + h.format.url + '" class="ss-q-short" id="entry_191612006" title="Alamat Situs" placeholder="Alamat Situs"></div></div><div class="pull-left"><div style="position:relative;"><textarea name="entry.1632895361" class="ss-q-long" id="entry_1632895361" aria-required="true" title="Pesan" placeholder="Pesan (Wajib)">' + h.format.pesan + '</textarea></div></div><input type="hidden" name="draftResponse" value="[]"><input type="hidden" name="pageHistory" value="0"><input type="submit" name="submit" value="Kirim" id="ss-submit" class="hidden"></form>';
        h.container.innerHTML = e;
        a.setTimeout(function() {
            var t = h.container.getElementsByTagName('textarea')[0];
            t.scrollTop = t.scrollHeight - t.clientHeight
        }, 2);
        b()
    };

    function b() {
        function i(e) {
            return c.getElementById(e)
        }
        var h = i("astin_form-contact-query"),
            f = /\(Wajib\)|(Bidang ini wajib diisi\!)/i;

        function j(k) {
            var l = i(k),
                e = l.getAttribute("placeholder");
            l.value = l.value !== "" ? l.value : e;
            l.removeAttribute("placeholder");
            l.onfocus = function() {
                if (this.value == e || this.value == "Bidang ini wajib diisi!") {
                    this.value = ""
                }
                this.style.color = ""
            };
            l.onblur = function() {
                if (this.value === "") {
                    this.value = e
                }
            }
        }

        function g(e) {
            if (i(e).value == "" || f.test(i(e).value)) {
                i(e).value = "Bidang ini wajib diisi!";
                i(e).style.color = "#ED5555"
            }
        }

        function d() {
            g("entry_719880140");
            g("entry_1286738207");
            g("entry_124776964");
            g("entry_1632895361")
        }
        j("entry_719880140");
        j("entry_1286738207");
        j("entry_124776964");
        j("entry_191612006");
        j("entry_1632895361");
        h.onsubmit = function() {
            if (i("entry_719880140").value == "" || i("entry_1286738207").value == "" || i("entry_124776964").value == "" || i("entry_1632895361").value == "") {
                d();
                return false
            }
            if (f.test(i("entry_719880140").value) || f.test(i("entry_1286738207").value) || f.test(i("entry_124776964").value) || f.test(i("entry_1632895361").value)) {
                d();
                return false
            }
        }
    }
})(window, document);

/*! LnumberV1 */
window.astin_autoSelect = function(a) {
    a.ondblclick = function() {
        var b, r;
        if (window.getSelection) {
            b = window.getSelection();
            r = document.createRange();
            r.selectNodeContents(a);
            b.removeAllRanges();
            b.addRange(r)
        } else if (document.selection) {
            b = document.selection.createRange().text;
            r = document.body.createTextRange();
            r.moveToElementText(a);
            r.select()
        }
    }
};
window.astin_addNumber = function() {
    var a = document.getElementsByTagName('pre'),
        pl = a.length,
        s;
    for (var i = 0; i < pl; ++i) {
        s = '<span class="line-number">';
        a[i].id = !a[i].id ? 'code-block:' + (i + 1) : a[i].id;
        if (/(^| )numbered( |$)/.test(a[i].className)) {
            var b = a[i].getElementsByTagName('code')[0];
            for (var j = 0, k = b.innerHTML.split(/\n/).length; j < k; ++j) {
                s += '<span id="code-line:' + (i + 1) + '-' + (j + 1) + '"><a href="#code-line:' + (i + 1) + '-' + (j + 1) + '">' + (j + 1) + '</a><em>code-line:' + (i + 1) + '-' + (j + 1) + '</em></span>'
            }
            a[i].innerHTML = s += '</span>' + a[i].innerHTML + '<span class="cl"></span>'
        }
        astin_autoSelect(a[i].getElementsByTagName('code')[0]);
        if (window.location.hash && /code\-line\:([0-9]+)\-([0-9]+)|code\-block\:([0-9]+)/.test(window.location.hash)) {
            var h = window.location.hash;
            window.location.hash = h
        }
    }
};

/*! GLfeedsV1 */
(function(e, t) {
    var n, r, i, s, o, u, a, f, l, s, c, h, p, d, v = "http://astinquery.googlecode.com/svn/trunk/host/image/no-images.png",
        m = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        g;
    e.astin_feed_1 = function(e) {
        ct = t.getElementById("astin_search-query-result-container");
        g = t.getElementById("astin_form-search-query").getAttribute("data-cached-keyword");
        if ("entry" in e.feed) {
            n = e.feed.entry, r, i, s, o = "<h4>Hasil penelusuran untuk kata kunci &#8220;" + g + '&#8221;</h4><ul class="list-media-query">';
            if (!ct) {
                return
            }
            for (var u = 0, a = n.length; u < a; u++) {
                i = "summary" in n[u] ? n[u].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, 170) + "&hellip;" : "Tidak ada teks.";
                s = "media$thumbnail" in n[u] ? n[u].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, "/s40-c") : v;
                for (var f = 0, l = n[u].link.length; f < l; f++) {
                    r = n[u].link[f].rel == "alternate" ? n[u].link[f].href : "/404"
                }
                o += '<li><img class="list-media-query-thumbnail" alt="Memuat..." width="40" height="40" src="' + s + '"><strong class="list-media-query-title"><a href="' + r + '">' + n[u].title.$t + '</a></strong><span class="list-media-query-content">' + i + "</span></li>"
            }
            ct.innerHTML = o + '</ul><br><p class="text-center"><a href="#previous-results" class="button button-small previous-results">Sebelumnya</a> <a href="#next-results" class="button button-small next-results">Berikutnya</a></p>'
        } else {
            ct.innerHTML = "<h4>Penelusuran posting dengan kata kunci &#8220;" + g + "&#8221; tidak ditemukan.</h4>"
        }
        if (typeof jQuery != "undefined" && "hl" in jQuery.fn) {
            jQuery("#astin_search-query-result .list-media-query").hl(g)
        }
    };
    e.astin_feed_2 = function(e) {
        n = e.feed.entry;
        o = '<h2>Terakhir Diperbaharui</h2><div class="widget-content"><ul class="list-media-query">';
        ct = t.getElementById("astin_latest-updated-query");
        if (!ct) {
            return
        }
        for (var u = 0, f = n.length; u < f; u++) {
            a = n[u].published.$t.substring(0, 10).split("-");
            i = "summary" in n[u] ? n[u].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, 70) + "&hellip;" : "Tidak ada teks.";
            s = "media$thumbnail" in n[u] ? n[u].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, "/s40-c") : v;
            for (var l = 0, c = n[u].link.length; l < c; l++) {
                if (n[u].link[l].rel == "alternate") {
                    r = n[u].link[l].href;
                    break
                }
            }
            o += '<li><img class="list-media-query-thumbnail" alt="Memuat..." width="40" height="40" src="' + s + '"><strong class="list-media-query-title"><a href="' + r + '">' + n[u].title.$t + '</a></strong><span class="list-media-query-content sr">' + i + '</span><span class="list-media-query-meta"><time datetime="' + a.join("-") + '">' + (a[2] + " " + m[parseInt(a[1], 10) - 1] + " " + a[0]) + "</time></span></li>"
        }
        ct.innerHTML = o + "</ul></div>"
    };
    e.astin_feed_3 = function(e) {
        n = e.feed.entry;
        o = '<h2>Potongan Kode</h2><div class="widget-content"><ul>';
        ct = t.getElementById("astin_latest-snippet-query");
        if (!ct) {
            return
        }
        for (var i = 0, s = n.length; i < s; i++) {
            c = n[i].title.$t;
            for (var u = 0, a = n[i].link.length; u < a; u++) {
                if (n[i].link[u].rel == "alternate") {
                    r = n[i].link[u].href;
                    break
                }
            }
            o += '<li><a href="' + r + '" title="' + c + '">' + c + "</a></li>"
        }
        ct.innerHTML = o + '<li><a title="Selengkapnya..." href="/search/label/Code%20Snippet?max-results=20"><i data-icon="&#xe059;"></i><span class="sr">+</span></a></li></ul></div>'
    };
    e.astin_feed_4 = function(e) {
        u = e.feed.entry;
        o = '<a href="#close" class="close" title="Tutup" onclick="document.getElementById(&#39;astin_latest-comments&#39;).removeAttribute(&#39;style&#39;);return false;"><span class="sr">Tutup</span></a><ul class="list-media-query recent-comments">';
        ct = t.getElementById("astin_latest-comments");
        if (!ct) {
            return
        }
        for (var n = 0, v = u.length; n < v; n++) {
            i = "content" in u[n] ? u[n].content.$t : "Tidak ada komentar.";
            f = u[n].author[0].name.$t;
            l = u[n].author[0].uri.$t;
            s = u[n].author[0]["gd$image"].src.replace(/\/s[0-9]+(\-c)?/, "/s40-c");
            a = u[n].published.$t.substring(0, 16).split("-");
            h = u[n].id.$t.replace(/^.*?blog\-([0-9]+).*?post\-([0-9]+)/, "http://www.blogger.com/delete-comment.g?blogID=$1&postID=$2");
            p = u[n]["thr$in-reply-to"].source.split("default/")[1];
            d = u[n].id.$t.replace(/^.*?blog\-([0-9]+).*?post\-([0-9]+)/, "http://www.blogger.com/comment-iframe.g?blogID=$1&postID=" + p + "&parentID=$2");
            for (var g = 0, y = u[n].link.length; g < y; g++) {
                if (u[n].link[g].rel == "alternate") {
                    r = u[n].link[g].href;
                    break
                }
            }
            c = r.substring(r.lastIndexOf("/") + 1, r.lastIndexOf(".html")).replace(/-/g, " ");
            o += '<li><img class="list-media-query-thumbnail" alt="Memuat..." width="40" height="40" src="' + s + '"><strong class="list-media-query-title"><a href="' + l + '" title="URL Profil">' + f + '</a> pada <a href="' + r + '" target="_blank" title="URL Permalink Komentar">' + c.split("")[0].toUpperCase() + c.slice(1) + '...</a></strong><span class="list-media-query-content">' + i + '</span><span class="list-media-query-meta text-right"><time datetime="' + a.join("-") + '"><b>' + (a[2].split("T")[1] + "</b> - " + a[2].split("T")[0] + " " + m[parseInt(a[1], 10) - 1] + " " + a[0]) + '</time> &middot; <a href="' + d + '" onclick="window.open(this.href,&#39;_cf&#39;,&#39;scrollbars=1,width=470,height=250,left=355,top=135&#39;);return false;" title="Balas komentar ini...">Balas</a> <a href="' + h + '" title="Hapus komentar ini..." target="_blank">Hapus</a></span></li>'
        }
        if (typeof astin_Cm != "undefined") {
            astin_Cm(ct, o + "</ul>")
        } else {
            ct.innerHTML = o + "</ul>"
        }
    };
    e.astin_feed_5 = function(t) {
        e._z = parseInt(/blog\-[0-9]+/.exec(t.feed.id.$t)[0].slice(5), 10)
    }
})(window, document);
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-52920727-1"]);
_gaq.push(["_trackPageview"]);
window._cookie = {
    set: function(e, t, n) {
        var r, i;
        if (n) {
            r = new Date;
            r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3);
            i = "; expires=" + r.toGMTString()
        } else {
            i = ""
        }
        document.cookie = e + "=" + t + i + "; path=/"
    },
    get: function(e) {
        var t = e + "=",
            n = document.cookie.split(";"),
            r;
        for (var i = 0; i < n.length; i++) {
            r = n[i];
            while (r.charAt(0) == " ") {
                r = r.substring(1, r.length)
            }
            if (r.indexOf(t) == 0) {
                return r.substring(t.length, r.length)
            }
        }
        return null
    },
    del: function(e) {
        this.set(e, "", -1)
    }
};

/*! JeasingV1 */
(function(a) {
    a.easing.jswing = a.easing.swing;
    a.extend(a.easing, {
        def: "easeOutQuad",
        swing: function(f, g, e, i, h) {
            return a.easing[a.easing.def](f, g, e, i, h)
        },
        easeInQuad: function(f, g, e, i, h) {
            return i * (g /= h) * g + e
        },
        easeOutQuad: function(f, g, e, i, h) {
            return -i * (g /= h) * (g - 2) + e
        },
        easeInOutQuad: function(f, g, e, i, h) {
            if ((g /= h / 2) < 1) {
                return i / 2 * g * g + e
            }
            return -i / 2 * ((--g) * (g - 2) - 1) + e
        },
        easeInCubic: function(f, g, e, i, h) {
            return i * (g /= h) * g * g + e
        },
        easeOutCubic: function(f, g, e, i, h) {
            return i * ((g = g / h - 1) * g * g + 1) + e
        },
        easeInOutCubic: function(f, g, e, i, h) {
            if ((g /= h / 2) < 1) {
                return i / 2 * g * g * g + e
            }
            return i / 2 * ((g -= 2) * g * g + 2) + e
        },
        easeInQuart: function(f, g, e, i, h) {
            return i * (g /= h) * g * g * g + e
        },
        easeOutQuart: function(f, g, e, i, h) {
            return -i * ((g = g / h - 1) * g * g * g - 1) + e
        },
        easeInOutQuart: function(f, g, e, i, h) {
            if ((g /= h / 2) < 1) {
                return i / 2 * g * g * g * g + e
            }
            return -i / 2 * ((g -= 2) * g * g * g - 2) + e
        },
        easeInQuint: function(f, g, e, i, h) {
            return i * (g /= h) * g * g * g * g + e
        },
        easeOutQuint: function(f, g, e, i, h) {
            return i * ((g = g / h - 1) * g * g * g * g + 1) + e
        },
        easeInOutQuint: function(f, g, e, i, h) {
            if ((g /= h / 2) < 1) {
                return i / 2 * g * g * g * g * g + e
            }
            return i / 2 * ((g -= 2) * g * g * g * g + 2) + e
        },
        easeInSine: function(f, g, e, i, h) {
            return -i * Math.cos(g / h * (Math.PI / 2)) + i + e
        },
        easeOutSine: function(f, g, e, i, h) {
            return i * Math.sin(g / h * (Math.PI / 2)) + e
        },
        easeInOutSine: function(f, g, e, i, h) {
            return -i / 2 * (Math.cos(Math.PI * g / h) - 1) + e
        },
        easeInExpo: function(f, g, e, i, h) {
            return (g == 0) ? e : i * Math.pow(2, 10 * (g / h - 1)) + e
        },
        easeOutExpo: function(f, g, e, i, h) {
            return (g == h) ? e + i : i * (-Math.pow(2, -10 * g / h) + 1) + e
        },
        easeInOutExpo: function(f, g, e, i, h) {
            if (g == 0) {
                return e
            }
            if (g == h) {
                return e + i
            }
            if ((g /= h / 2) < 1) {
                return i / 2 * Math.pow(2, 10 * (g - 1)) + e
            }
            return i / 2 * (-Math.pow(2, -10 * --g) + 2) + e
        },
        easeInCirc: function(f, g, e, i, h) {
            return -i * (Math.sqrt(1 - (g /= h) * g) - 1) + e
        },
        easeOutCirc: function(f, g, e, i, h) {
            return i * Math.sqrt(1 - (g = g / h - 1) * g) + e
        },
        easeInOutCirc: function(f, g, e, i, h) {
            if ((g /= h / 2) < 1) {
                return -i / 2 * (Math.sqrt(1 - g * g) - 1) + e
            }
            return i / 2 * (Math.sqrt(1 - (g -= 2) * g) + 1) + e
        },
        easeInElastic: function(f, h, e, l, k) {
            var i = 1.70158;
            var j = 0;
            var g = l;
            if (h == 0) {
                return e
            }
            if ((h /= k) == 1) {
                return e + l
            }
            if (!j) {
                j = k * 0.3
            }
            if (g < Math.abs(l)) {
                g = l;
                var i = j / 4
            } else {
                var i = j / (2 * Math.PI) * Math.asin(l / g)
            }
            return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        },
        easeOutElastic: function(f, h, e, l, k) {
            var i = 1.70158;
            var j = 0;
            var g = l;
            if (h == 0) {
                return e
            }
            if ((h /= k) == 1) {
                return e + l
            }
            if (!j) {
                j = k * 0.3
            }
            if (g < Math.abs(l)) {
                g = l;
                var i = j / 4
            } else {
                var i = j / (2 * Math.PI) * Math.asin(l / g)
            }
            return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
        },
        easeInOutElastic: function(f, h, e, l, k) {
            var i = 1.70158;
            var j = 0;
            var g = l;
            if (h == 0) {
                return e
            }
            if ((h /= k / 2) == 2) {
                return e + l
            }
            if (!j) {
                j = k * (0.3 * 1.5)
            }
            if (g < Math.abs(l)) {
                g = l;
                var i = j / 4
            } else {
                var i = j / (2 * Math.PI) * Math.asin(l / g)
            }
            if (h < 1) {
                return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
            }
            return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
        },
        easeInBack: function(f, g, e, j, i, h) {
            if (h == undefined) {
                h = 1.70158
            }
            return j * (g /= i) * g * ((h + 1) * g - h) + e
        },
        easeOutBack: function(f, g, e, j, i, h) {
            if (h == undefined) {
                h = 1.70158
            }
            return j * ((g = g / i - 1) * g * ((h + 1) * g + h) + 1) + e
        },
        easeInOutBack: function(f, g, e, j, i, h) {
            if (h == undefined) {
                h = 1.70158
            }
            if ((g /= i / 2) < 1) {
                return j / 2 * (g * g * (((h *= (1.525)) + 1) * g - h)) + e
            }
            return j / 2 * ((g -= 2) * g * (((h *= (1.525)) + 1) * g + h) + 2) + e
        },
        easeInBounce: function(f, g, e, i, h) {
            return i - a.easing.easeOutBounce(f, h - g, 0, i, h) + e
        },
        easeOutBounce: function(f, g, e, i, h) {
            if ((g /= h) < (1 / 2.75)) {
                return i * (7.5625 * g * g) + e
            } else {
                if (g < (2 / 2.75)) {
                    return i * (7.5625 * (g -= (1.5 / 2.75)) * g + 0.75) + e
                } else {
                    if (g < (2.5 / 2.75)) {
                        return i * (7.5625 * (g -= (2.25 / 2.75)) * g + 0.9375) + e
                    } else {
                        return i * (7.5625 * (g -= (2.625 / 2.75)) * g + 0.984375) + e
                    }
                }
            }
        },
        easeInOutBounce: function(f, g, e, i, h) {
            if (g < h / 2) {
                return a.easing.easeInBounce(f, g * 2, 0, i, h) * 0.5 + e
            }
            return a.easing.easeOutBounce(f, g * 2 - h, 0, i, h) * 0.5 + i * 0.5 + e
        }
    })
})(jQuery);

/*! Transform */
(function(g) {
    var b = document.createElement("div"),
        d = b.style;
    g.cssProps.transform = d.MozTransform === "" ? "MozTransform" : (d.msTransform === "" ? "msTransform" : (d.WebkitTransform === "" ? "WebkitTransform" : (d.OTransform === "" ? "OTransform" : (d.Transform === "" ? "Transform" : false))));
    g.cssProps.transformOrigin = d.MozTransformOrigin === "" ? "MozTransformOrigin" : (d.msTransformOrigin === "" ? "msTransformOrigin" : (d.WebkitTransformOrigin === "" ? "WebkitTransformOrigin" : (d.OTransformOrigin === "" ? "OTransformOrigin" : (d.TransformOrigin === "" ? "TransformOrigin" : false))));
    g.support.transform = g.cssProps.transform !== false || d.filter === "" ? true : false;
    g.support.transformOrigin = g.cssProps.transformOrigin !== false ? true : false;
    g.support.matrixFilter = (d.filter === "" && g.cssProps.transform === false) ? true : false;
    b = null;
    if (g.support.transform === false) {
        return
    }
    g.cssNumber.skew = g.cssNumber.skewX = g.cssNumber.skewY = g.cssNumber.scale = g.cssNumber.scaleX = g.cssNumber.scaleY = g.cssNumber.rotate = g.cssNumber.matrix = true;
    g.cssNumber.transformOrigin = g.cssNumber.transformOriginX = g.cssNumber.transformOriginY = true;
    if (g.support.matrixFilter) {
        g.cssNumber.transformOrigin = g.cssNumber.transformOriginX = g.cssNumber.transformOriginY = true;
        g.cssProps.transformOrigin = "matrixFilter"
    }
    g.cssHooks.transform = {
        set: function(o, p, n) {
            if (g.support.matrixFilter) {
                o.style.filter = [p].join("")
            } else {
                o.style[g.cssProps.transform] = p + "%"
            }
        },
        get: function(o, n) {
            if (g.support.matrixFilter) {
                return o.style.filter
            } else {
                return o.style[g.cssProps.transform]
            }
        }
    };
    g.cssHooks.transformOrigin = {
        set: function(o, p, n) {
            if (!g.support.matrixFilter) {
                p = (typeof p === "string") ? p : p + (n || "%");
                o.style[g.cssProps.transformOrigin] = p
            } else {
                p = p.split(",");
                g.cssHooks.transformOriginX.set(o, p[0]);
                if (p.length > 1) {
                    g.cssHooks.transformOriginY.set(o, p[1])
                }
            }
        },
        get: function(q, p) {
            if (!g.support.matrixFilter) {
                return q.style[g.cssProps.transformOrigin]
            } else {
                var o = g.data(q, "transformOriginX");
                var n = g.data(q, "transformOriginY");
                return o && n && o === n ? o : "50%"
            }
        }
    };
    g.fx.step.transformOrigin = function(n) {
        g.cssHooks.transformOrigin.set(n.elem, n.now, n.unit)
    };
    g.cssHooks.transformOriginX = {
        set: function(o, p, n) {
            if (!g.support.matrixFilter) {
                p = (typeof p === "string") ? p : p + (n || "%");
                o.style[g.cssProps.transformOrigin + "X"] = p
            } else {
                g.data(o, "transformOriginX", n ? p + n : p);
                l(o)
            }
        },
        get: function(p, o) {
            if (!g.support.matrixFilter) {
                return p.style[g.cssProps.transformOrigin + "X"]
            } else {
                var n = g.data(p, "transformOriginX");
                switch (n) {
                    case "left":
                        return "0%";
                    case "center":
                        return "50%";
                    case "right":
                        return "100%"
                }
                return n ? n : "50%"
            }
        }
    };
    g.fx.step.transformOriginX = function(n) {
        g.cssHooks.transformOriginX.set(n.elem, n.now, n.unit)
    };
    g.cssHooks.transformOriginY = {
        set: function(o, p, n) {
            if (!g.support.matrixFilter) {
                p = (typeof p === "string") ? p : p + (n || "%");
                o.style[g.cssProps.transformOrigin + "Y"] = p
            } else {
                g.data(o, "transformOriginY", n ? p + n : p);
                l(o)
            }
        },
        get: function(p, o) {
            if (!g.support.matrixFilter) {
                return p.style[g.cssProps.transformOrigin + "Y"]
            } else {
                var n = g.data(p, "transformOriginY");
                switch (n) {
                    case "top":
                        return "0%";
                    case "center":
                        return "50%";
                    case "bottom":
                        return "100%"
                }
                return n ? n : "50%"
            }
        }
    };
    g.fx.step.transformOriginY = function(n) {
        g.cssHooks.transformOriginY.set(n.elem, n.now, n.unit)
    };
    var i = function(n) {
        return n
    };
    var m = [
        ["X", "Y"], "X", "Y"
    ];
    var c = [
        ["A", "B", "C", "D", "X", "Y"], "A", "B", "C", "D", "X", "Y"
    ];
    var k = [{
        prop: "rotate",
        matrix: [function(n) {
            return Math.cos(n)
        }, function(n) {
            return -Math.sin(n)
        }, function(n) {
            return Math.sin(n)
        }, function(n) {
            return Math.cos(n)
        }],
        unit: "rad",
        subProps: [""],
        fnc: f
    }, {
        prop: "scale",
        matrix: [
            [i, 0, 0, i],
            [i, 0, 0, 1],
            [1, 0, 0, i]
        ],
        unit: "",
        subProps: m,
        fnc: parseFloat,
        _default: 1
    }, {
        prop: "skew",
        matrix: [
            [1, i, i, 1],
            [1, i, 0, 1],
            [1, 0, i, 1]
        ],
        unit: "rad",
        subProps: m,
        fnc: f
    }, {
        prop: "translate",
        matrix: [
            [1, 0, 0, 1, i, i],
            [1, 0, 0, 1, i, 0],
            [1, 0, 0, 1, 0, i]
        ],
        standardUnit: "px",
        subProps: m,
        fnc: parseFloat
    }, {
        prop: "matrix",
        matrix: [
            [i, i, i, i, i, i],
            [i, 0, 0, 1, 0, 0],
            [1, i, 0, 1, 0, 0],
            [1, 0, i, 1, 0, 0],
            [1, 0, 0, i, 0, 0],
            [1, 0, 0, 1, 0, i]
        ],
        subProps: c,
        fnc: parseFloat
    }];
    jQuery.each(k, function(p, o) {
        jQuery.each(o.subProps, function(q, r) {
            var n, t = o;
            if (g.isArray(r)) {
                n = t.prop;
                var s = r;
                g.cssHooks[n] = {
                    set: function(v, w, u) {
                        jQuery.each(s, function(z, y) {
                            g.cssHooks[n + y].set(v, w, u)
                        })
                    },
                    get: function(v, u) {
                        var w = [];
                        jQuery.each(s, function(z, y) {
                            w.push(g.cssHooks[n + y].get(v, w))
                        });
                        return w[0] || w[1]
                    }
                }
            } else {
                n = t.prop + r;
                g.cssHooks[n] = {
                    set: function(v, w, u) {
                        g.data(v, n, u ? w + u : w);
                        e(v, t.fnc(u ? w + u : w), n, t.unit || u || t.standardUnit)
                    },
                    get: function(v, u) {
                        var w = g.data(v, n);
                        return w && w !== undefined ? w : t._default || 0
                    }
                }
            }
            g.fx.step[n] = function(v) {
                v.unit = v.unit === "px" && g.cssNumber[n] ? t.standardUnit : v.unit;
                var u = (g.cssNumber[n] ? "" : v.unit);
                g.cssHooks[n].set(v.elem, v.now, v.unit)
            }
        })
    });

    function e(p, o, n, v) {
        if (g.support.matrixFilter) {
            return l(p, o)
        }
        var t = j(p);
        var u = /[X|Y]/.exec(n);
        u = (u === null ? "" : u[0] ? u[0] : u);
        n = /.*[^XY]/.exec(n)[0];
        v = v === undefined ? "" : v;
        var x = "";
        var r = false;
        var s;
        if (t !== null) {
            for (var w in t) {
                s = t[w];
                if (n === w) {
                    if (n !== "matrix") {
                        x += n + "(";
                        x += u === "X" || u === "" ? o + v : (s[0] !== "" ? s[0] : g.cssHooks[n + "X"].get(p) + v);
                        x += u === "Y" ? ", " + o + v : (s[1] !== "" ? ", " + s[1] : (n + "Y" in g.cssHooks ? ", " + g.cssHooks[n + "Y"].get(p) + v : ""));
                        x += ") "
                    } else {
                        x += o + " "
                    }
                    r = true
                } else {
                    x += w + "(";
                    for (var q = 0; q < s.length; q++) {
                        x += s[q];
                        if (q < s.length - 1 && s[q + 1] !== "") {
                            x += ", "
                        } else {
                            break
                        }
                    }
                    x += ") "
                }
            }
        }
        if (!r) {
            x += n + u + "(" + o + v + ") "
        }
        p.style[g.cssProps.transform] = x
    }

    function j(q) {
        var p, r, o, n;
        g(q.style[g.cssProps.transform].replace(/(?:\,\s|\)|\()/g, "|").split(" ")).each(function(s, t) {
            if (t !== "") {
                if (p === undefined) {
                    p = {}
                }
                r = t.split("|");
                o = r.shift();
                n = /.*[^XY]/.exec(o)[0];
                if (!p[n]) {
                    p[n] = ["", "", "", "", "", ""]
                }
                if (!/Y/.test(o)) {
                    p[n][0] = r[0]
                }
                if (!/X/.test(o)) {
                    p[n][1] = r[1]
                }
                if (r.length == 6) {
                    p[n][2] = r[2];
                    p[n][3] = r[3];
                    p[n][4] = r[4];
                    p[n][5] = r[5]
                }
            }
        });
        return p !== undefined ? p : null
    }

    function a(q, r, p) {
        return p * (q - r)
    }

    function f(n) {
        if (typeof n === "number") {
            return parseFloat(n)
        }
        if (n.indexOf("deg") != -1) {
            return parseInt(n, 10) * (Math.PI * 2 / 360)
        } else {
            if (n.indexOf("grad") != -1) {
                return parseInt(n, 10) * (Math.PI / 200)
            }
        }
    }
    g.rotate = {
        radToDeg: function h(n) {
            return n * 180 / Math.PI
        }
    };

    function l(p, A) {
        var r, t, q, D, C, B, z = g.cssProps.transformOrigin === "matrixFilter" ? true : false;
        t = [g.cssHooks.scaleX.get(p), f(g.cssHooks.skewY.get(p)), f(g.cssHooks.skewX.get(p)), g.cssHooks.scaleY.get(p), g.cssHooks.translateX.get(p), g.cssHooks.translateY.get(p)];
        if (z) {
            p.style.filter = ["progid:DXImageTransform.Microsoft.Matrix(M11=1,M12=0,M21=0,M22=1,SizingMethod='auto expand')"].join("");
            var w = g.cssHooks.transformOriginX.get(p);
            var n = g.cssHooks.transformOriginY.get(p);
            w = w.indexOf("%") > 0 ? (/[\d]*/.exec(w) / 100) : w;
            n = n.indexOf("%") > 0 ? (/[\d]*/.exec(n) / 100) : n;
            var s = p.offsetWidth;
            var v = p.offsetHeight
        }
        if (typeof A !== "array" || A.length !== 6) {
            A = t
        } else {
            A = [((t[0] * A[0]) + (t[1] * A[2])), ((t[0] * A[1]) + (t[1] * A[3])), ((t[2] * A[0]) + (t[3] * A[2])), ((t[2] * A[1]) + (t[3] * A[3])), A[4], A[5]]
        }
        q = g.data(p, "rotate");
        if (q) {
            q = f(q);
            var y = Math.cos(q);
            var u = Math.sin(q);
            q = [y, -u, u, y];
            A = [((A[0] * q[0]) + (A[1] * q[2])), ((A[0] * q[1]) + (A[1] * q[3])), ((A[2] * q[0]) + (A[3] * q[2])), ((A[2] * q[1]) + (A[3] * q[3])), A[4], A[5]]
        }
        p.style.filter = ["progid:DXImageTransform.Microsoft.Matrix(", "M11=" + A[0] + ", ", "M12=" + A[1] + ", ", "M21=" + A[2] + ", ", "M22=" + A[3] + ", ", "SizingMethod='auto expand'", ")"].join("");
        if (z) {
            var x = p.offsetWidth;
            var o = p.offsetHeight;
            p.style.position = "relative";
            p.style.left = w * (s - x) + (parseInt(A[4]) || 0);
            p.style.top = n * (v - o) + (parseInt(A[5]) || 0)
        }
    }
})(jQuery);

/*! HglightV1 */
(function($) {
    $.fn.hl = function(c) {
        function e(b, c) {
            var d = 0;
            if (3 == b.nodeType) {
                var a = b.data.toUpperCase().indexOf(c);
                if (0 <= a) {
                    d = document.createElement("mark");
                    d.className = "highlight";
                    a = b.splitText(a);
                    a.splitText(c.length);
                    var f = a.cloneNode(!0);
                    d.appendChild(f);
                    a.parentNode.replaceChild(d, a);
                    d = 1
                }
            } else if (1 == b.nodeType && b.childNodes && !/(script|style)/i.test(b.tagName))
                for (a = 0; a < b.childNodes.length; ++a) a += e(b.childNodes[a], c);
            return d
        }
        return this.length && c && c.length ? this.each(function() {
            e(this, c.toUpperCase())
        }) : this
    };
    $.fn.rhl = function() {
        return this.find("mark.highlight").each(function() {
            this.parentNode.firstChild.nodeName;
            with(this.parentNode) replaceChild(this.firstChild, this), normalize()
        }).end()
    }
})(jQuery);

/*! Scrollbar */
(function(a) {
    a.tiny = a.tiny || {};
    a.tiny.scrollbar = {
        options: {
            axis: "y",
            wheel: 30,
            scroll: true,
            lockscroll: true,
            size: "auto",
            sizethumb: "auto",
            invertscroll: false,
            keyboard: true,
            step: 30,
            insidethumb: "<span></span>"
        }
    };
    a.fn.ts = function(e) {
        var c = a.extend({}, a.tiny.scrollbar.options, e),
            d = this;
        d.each(function() {
            a(this).addClass("js").attr("tabindex", 1).css("overflow", "hidden").wrapInner('<div class="scroll-inner" style="overflow:hidden;"><div class="scroll-content"></div></div>').append('<span class="scrollbar disable"><span class="track"><span class="thumb">' + c.insidethumb + "</span></span></span>").data("tsb", new b(a(this), c))
        }).on("focus", function() {
            if (c.keyboard) {
                a(this).on("keydown", function(f) {
                    if (f.keyCode == 38 || f.keyCode == 37) {
                        a(this).ts_ks(c.step);
                        return false
                    } else {
                        if (f.keyCode == 40 || f.keyCode == 39) {
                            a(this).ts_ks(-c.step);
                            return false
                        }
                    }
                })
            }
        });
        a(window).on("resize", function() {
            d.ts_u("relative")
        });
        return d
    };
    a.fn.ts_u = function(c) {
        return a(this).data("tsb").update(c)
    };
    a.fn.ts_ks = function(c) {
        return a(this).data("tsb").keystep(c)
    };

    function b(q, g) {
        var k = this,
            t = q,
            j = {
                obj: a(".scroll-inner", q)
            },
            h = {
                obj: a(".scroll-content", q)
            },
            d = {
                obj: a(".scrollbar", q)
            },
            m = {
                obj: a(".track", d.obj)
            },
            p = {
                obj: a(".thumb", d.obj)
            },
            l = g.axis === "x",
            n = l ? "left" : "top",
            v = l ? "Width" : "Height",
            r = 0,
            y = {
                start: 0,
                now: 0
            },
            o = {},
            e = "ontouchstart" in document.documentElement;

        function c() {
            k.update();
            s();
            return k
        }
        this.keystep = function(z) {
            if (h.ratio < 1) {
                r -= z;
                r = Math.min((h[g.axis] - j[g.axis]), Math.max(0, r));
                p.obj.css(n, r / d.ratio);
                h.obj.css(n, -r)
            }
        };
        this.update = function(z) {
            j[g.axis] = j.obj[0]["offset" + v];
            h[g.axis] = h.obj[0]["scroll" + v];
            h.ratio = j[g.axis] / h[g.axis];
            d.obj.toggleClass("disable", h.ratio >= 1);
            m[g.axis] = g.size === "auto" ? j[g.axis] : g.size;
            p[g.axis] = Math.min(m[g.axis], Math.max(0, (g.sizethumb === "auto" ? (m[g.axis] * h.ratio) : g.sizethumb)));
            d.ratio = g.sizethumb === "auto" ? (h[g.axis] / m[g.axis]) : (h[g.axis] - j[g.axis]) / (m[g.axis] - p[g.axis]);
            r = (z === "relative" && h.ratio <= 1) ? Math.min((h[g.axis] - j[g.axis]), Math.max(0, r)) : 0;
            r = (z === "bottom" && h.ratio <= 1) ? (h[g.axis] - j[g.axis]) : isNaN(parseInt(z, 10)) ? r : parseInt(z, 10);
            w()
        };

        function w() {
            var z = v.toLowerCase();
            p.obj.css(n, r / d.ratio);
            h.obj.css(n, -r);
            o.start = p.obj.offset()[n];
            d.obj.css(z, m[g.axis]);
            m.obj.css(z, m[g.axis]);
            p.obj.css(z, p[g.axis])
        }

        function s() {
            if (!e) {
                p.obj.on("mousedown", i);
                m.obj.on("mouseup", u)
            } else {
                j.obj[0].ontouchstart = function(z) {
                    if (1 === z.touches.length) {
                        i(z.touches[0]);
                        z.stopPropagation()
                    }
                }
            }
            if (g.scroll && window.addEventListener) {
                t[0].addEventListener("DOMMouseScroll", x, false);
                t[0].addEventListener("mousewheel", x, false);
                t[0].addEventListener("MozMousePixelScroll", function(z) {
                    z.preventDefault()
                }, false)
            } else {
                if (g.scroll) {
                    t[0].onmousewheel = x
                }
            }
        }

        function i(A) {
            var z = parseInt(p.obj.css(n), 10);
            o.start = l ? A.pageX : A.pageY;
            y.start = z == "auto" ? 0 : z;
            if (!e) {
                a(document).on("mousemove", u);
                a(document).on("mouseup", f);
                p.obj.addClass("hold").on("mouseup", f)
            } else {
                document.ontouchmove = function(B) {
                    B.preventDefault();
                    u(B.touches[0])
                };
                document.ontouchend = f
            }
            return false
        }

        function x(B) {
            if (h.ratio < 1) {
                var A = B || window.event,
                    z = A.wheelDelta ? A.wheelDelta / 120 : -A.detail / 3;
                r -= z * g.wheel;
                r = Math.min((h[g.axis] - j[g.axis]), Math.max(0, r));
                p.obj.css(n, r / d.ratio);
                h.obj.css(n, -r);
                if (g.lockscroll || (r !== (h[g.axis] - j[g.axis]) && r !== 0)) {
                    A = a.event.fix(A);
                    A.preventDefault()
                }
            }
        }

        function u(z) {
            if (h.ratio < 1) {
                if (g.invertscroll && e) {
                    y.now = Math.min((m[g.axis] - p[g.axis]), Math.max(0, (y.start + (o.start - (l ? z.pageX : z.pageY)))))
                } else {
                    y.now = Math.min((m[g.axis] - p[g.axis]), Math.max(0, (y.start + ((l ? z.pageX : z.pageY) - o.start))))
                }
                r = y.now * d.ratio;
                h.obj.css(n, -r);
                p.obj.css(n, y.now)
            }
        }

        function f() {
            a(document).off("mousemove", u);
            a(document).off("mouseup", f);
            p.obj.removeClass("hold").off("mouseup", f);
            document.ontouchmove = document.ontouchend = null
        }
        return c()
    }
}(jQuery));

/*! JQswordV1 */
(function(e, t, n) {
    e.fn.extend({
        A: function(e, t, n, r) {
            return this.stop().animate(e, t, n, r)
        },
        B: function(e) {
            return this.addClass(e)
        },
        C: function(e) {
            return this.removeClass(e)
        },
        D: function(e) {
            return this.toggleClass(e)
        },
        E: function(e) {
            return this.hasClass(e)
        },
        F: function(e, t, n) {
            return this.fadeIn(e, t, n)
        },
        G: function(e, t, n) {
            return this.fadeOut(e, t, n)
        },
        H: function(e, t, n) {
            return this.fadeToggle(e, t, n)
        },
        I: function(e, t, n) {
            return this.slideDown(e, t, n)
        },
        J: function(e, t, n) {
            return this.slideUp(e, t, n)
        },
        K: function(e, t, n) {
            return this.slideToggle(e, t, n)
        },
        L: function(e) {
            return this.removeAttr(e)
        },
        M: function(e) {
            return this.find(e)
        },
        N: function(e) {
            return this.children(e)
        },
        P: function() {
            return this.parent()
        },
        Q: function(e) {
            return this.closest(e)
        },
        R: function() {
            return this.siblings()
        },
        S: function(e) {
            return this.wrapInner(e)
        },
        T: function() {
            return this.remove()
        },
        U: function(e, t, n) {
            return this.show(e, t, n)
        },
        V: function(e, t, n) {
            return this.hide(e, t, n)
        },
        W: function(e, t, n) {
            return this.toggle(e, t, n)
        },
        X: function(e) {
            return this.replaceWith(e)
        },
        Y: function(e) {
            return this.removeData(e)
        },
        _E: function() {
            return this.prev()
        },
        _F: function() {
            return this.next()
        },
        _G: function(e) {
            return this.trigger(e)
        },
        _H: function(e) {
            return this.triggerHandler(e)
        },
        _I: function(e) {
            return this.filter(e)
        },
        _J: function(e) {
            return this.appendTo(e)
        }
    });
    var r = {
            a: "decodeURIComponent",
            b: "encodeURIComponent",
            c: "setTimeout",
            d: "clearTimeout",
            e: "setInterval",
            f: "clearInterval",
            g: "width",
            h: "height",
            i: "outerWidth",
            j: "outerHeight",
            k: "replace",
            l: "substring",
            m: "toLowerCase",
            n: "toUpperCase",
            o: "capitalize",
            p: "scrollTop",
            q: "offset",
            r: "removeChild",
            s: "appendChild",
            t: "insertBefore",
            u: "easeOutQuart",
            v: "easeInQuart",
            w: "easeOutElastic",
            x: "easeOutBounce",
            y: "easeOutExpo",
            z: "easeInExpo",
            A: "easeInOutExpo",
            B: "stopPropagation",
            C: "preventDefault",
            D: "innerHTML",
            E: "innerText"
        },
        i = {
            a: t.location,
            b: t.location.hostname,
            c: t.location.protocol,
            d: t.location.origin,
            e: t.location.pathname,
            f: t.location.search,
            g: t.location.hash,
            h: t.location.port,
            i: t.location.origin,
            j: t.location.href,
            k: ["9634", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x6f\x6f\x67\x6c\x65\x64\x72\x69\x76\x65\x2e\x63\x6f\x6d\x2f\x68\x6f\x73\x74\x2f\x30\x42\x39\x5a\x6f\x71\x6d\x65\x32\x64\x78\x4e\x64\x66\x6c\x4e\x72\x4d\x58\x52\x78\x62\x7a\x5a\x71\x56\x6d\x52\x4b\x62\x57\x78\x70\x54\x30\x49\x77\x4d\x31\x45\x79\x4c\x55\x6f\x78\x62\x30\x5a\x47\x4e\x46\x6f\x33\x5a\x6d\x78\x4e\x62\x48\x45\x77\x52\x55\x64\x35\x65\x6a\x4e\x56\x51\x55\x55\x2f", "Meer Campbell", "%5B ANIME GUNDAM %3D%22Njs_ttoNxhkyKp8Rlolcba8h_tK9hgtkyxSAulolexRv_t", "v%7De%7Cr%3Fi%7Cficati%7Co%3Fn%22%5D", "\x61\x73\x74\x69\x6e\x5f\x71\x75\x65\x72\x79"]
        },
        u = {
            dt: n.title,
            wd: e(t),
            dc: e(n),
            htm: e(n.documentElement),
            who: e(n.body).M("*"),
            hd: n.getElementsByTagName("head")[0],
            bd: e(n.body).attr("spellcheck", false),
            ws: e("#astin_scroll-query"),
            wo: e("#astin_outer-query"),
            wh: e("#astin_header-query"),
            tte: e("abbr[title],acronym[title],dfn[title],.dfn[title]").append(function() {
                return '<span class="tooltip t r' + (this.title.length > 54 ? " tooltip-long" : "") + '">' + this.title + "</span>"
            }).L("title"),
            tt: e(".tooltip"),
            to: e(".toggle-option"),
            dm: e(".astin_form-search-query-options"),
            ass: e(".astin_asquery"),
            gr: e(".astin_asquery .gear"),
            md: e(".astin_modal-query"),
            mdh: e(".astin_modal-query-header"),
            mdc: e(".astin_modal-query-content"),
            mdf: e(".astin_modal-query-footer"),
            ba: e(".button_query-cement"),
            mds: e("#astin_modal-query-single"),
            mdr: e(".astin_asquery-b .close"),
            arm: e(".astin_asquery-b .arm"),
            nv: e("#astin_nav-query"),
            td: e(".trigger-dialog"),
            dms: e("#astin_main-query"),
            wct: e(".astin_content-query"),
            pct: e(".astin_post-query-content"),
            bcm: e(".astin_breadcrumb-query"),
            fs: e("#astin_form-search-query"),
            sr: e("#astin_search-query-result"),
            snp: e("#astin_latest-snippet-query"),
            edt: e("#button-edit").attr({
                "data-modal-title": "Ajukan Saran Penyuntingan",
                "data-modal-content": "Memuat...",
                "data-modal-action": '<button class="button-small" onclick="jQuery(&#39;#astin_form-contact-query&#39;).find(&#39;:submit&#39;).trigger(&quot;click&quot;);">Kirim</button>'
            }),
            tn: e(".toggle-nav-query"),
            cmm: e("#astin_query-comments"),
            cmmf: e("#astin_form-comment"),
            ced: e("#comment-editor"),
            cmmc: "#astin_form-comment .button-cancel",
            lcmm: e("#astin_latest-comments"),
            jfd: e(".jsfiddle-demo"),
            emo: e("i.emo"),
            cd: e("code"),
            nop: 'a[href$="#nope"]',
            ctl: e(".contact-link").attr({
                "data-modal-title": "Kontak Saya",
                "data-modal-content": "Memuat...",
                "data-modal-action": '<button class="button-small" onclick="jQuery(&#39;#astin_form-contact-query&#39;).find(&#39;:submit&#39;).trigger(&quot;click&quot;);">Kirim Pesan</button>'
            }),
            sab: e(".show-about"),
            hab: e(".hide-about"),
            abp: e("#astin_about-query"),
            wf: e("#astin_footer-query"),
            tl: e("#astin_link-query-top"),
            ts: e(".scroll-area").ts(),
            stp: e("#astin_sticked-panel-query"),
            dct: e("#astin_query-comments-total"),
            lop: e(".local-permalink"),
            rq: e("#astin_random-quotes"),
            cim: e("img.img-attachment")
        },
        a = false,
        f = u.wd[r.g]() <= 700,
        l = null,
        c = null,
        h = null,
        p = u.ced.length > 0 ? u.ced.attr("src").split("#") : [],
        d = false,
        v = {
            a: 60,
            b: 0,
            c: -1,
            d: u.wo[r.j]() - u.wf[r.j](),
            e: "0;3;4;5;7;8;11;14;17;20;22;23;26;27;30;31;33;35;36;39;40;42;44;45;46;48;50;51;54;56;59;61;64;67;69;72;74;75;77;80;82;83;86;88".split(";"),
            f: false,
            g: false,
            h: "",
            i: false,
            j: "7905",
            k: 0
        },
        m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABPCAYAAAHdM6gQAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJgSURBVHjaYjzDwPCfgQjAxEAkoKFCEyQaG5sJJnAGiyln0E08Q4TVjAMXPAAAAAD//2IcijGDHktYTTTBwcZQeAYpOs8MnuABAAAA//8i2mqq2zy4DESPRxMs8cmAQxxngkDmn8GT74kqJPCVB4R8NBrLlAMAAAAA//8aDcNRA6lhoAmJpQ0DJaUNIcNwVny4WhsMRJRETIQ0k2IYUTUuoZLahFBexlVKY/OBCSU1+GhOGTUQAQAAAAD//6J6shn0Ph514KgDRx1IZ8BCSl8BvcozwaPvDJlmEu1AExIcfgZHw+AMiWaS3Gc8Q0KvjNiYINVMFkIdWgYqhAKxZp4ht6ozoXIaJNSUG62LRx046sBRB446EAEAAAAA///s2EsKwCAMRVFwTW//K8iiOm+pxHxKoNehg3B8CYKOvgcXrQUHDhw4cOD+g2v5wrBETXdyCp5YRTXDbb0/nO3LmZOzRSctP625qmDepC2T3BTYA6eGuVHHVaLNvhVD32qurpQqxmL0H14qOQvCeFSDAwcOHDhw4MCVrQsAAP//7JpBDoAwCASN4Un8/wV9lCevahHoamZvHtqsU0AalJ/HcrLAQ8ADHvCABzwEPOABD3gIeHWyrI2ivwXcrZ/Zo8NnKjxvWJcxt3SlyPPi08+aXHth2u6K4M7nsSgrSiLPL1662uhM9HX5tCi4sWmq06e9iTZlaB0+LVIzur+U0dpW7bO9SVZN96VNclb0PCnsKgeQNnqc7dx9UeRK3TAy0tc/muoMvbtvGAh4wAMe8ICHgAc84AEPAQ94wPuHDgAAAP//AwAcMXcLnVkUGAAAAABJRU5ErkJggg==",
        g = /\/[0-9]+/.exec("http://www.gravatar.com/avatar/1852211410110111619289215501558323281129813209813261011715712101172171011798115578917217?d=mm&s=45")[0].slice(1),
        y = null,
        b = m.split("");

    function w(e, t, i, o) {
        var a;
        if (e == "js") {
            a = n.createElement("script");
            a.id = i;
            a.src = t
        } else {
            if (e == "css") {
                a = n.createElement("link");
                a = "stylesheet";
                a.id = i;
                a.href = t
            }
        }
        a.onload = function() {
            if (typeof o == "function") {
                o()
            }
            o = null
        };
        a.onreadystatechange = function() {
            if (s.readyState == 4 || s.readyState == "complete") {
                if (typeof o == "function") {
                    o()
                }
                o = null
            }
        };
        u.hd[r.s](a)
    }

    function E(t, n, i) {
        e(t).X(function() {
            return n + this[r.D] + i
        })
    }

    function S(e) {
        u.ass.C("off error").B("on").M(".tooltip").html(e).stop(true, true).F(600)
    }

    function x() {
        var e = "";
        if (t.getSelection) {
            e = t.getSelection()
        } else {
            if (n.getSelection) {
                e = n.getSelection()
            } else {
                if (n.selection) {
                    e = n.selection.createRange().text
                }
            }
        }
        return e
    }

    function T(e, n) {
        if (typeof t.astin_getContact == "function") {
            t.astin_getContact(e);
            N(u.md.M("textarea")[0]);
            if (typeof n == "function") {
                n()
            }
        } else {
            w("js", i.k[1] + "js/contact.v1.js", "astin_contact-js", function() {
                t.astin_getContact(e);
                N(u.md.M("textarea")[0]);
                if (typeof n == "function") {
                    n()
                }
            })
        }
    }

    function N(e) {
        e.focus();
        if (typeof e.selectionStart == "number") {
            e.selectionStart = e.selectionEnd = e.value.length
        } else {
            if (typeof e.createTextRange != "undefined") {
                e.focus();
                var t = e.createTextRange();
                t.collapse(false);
                t.select()
            }
        }
    }

    function C(e, n) {
        a = true;
        u.ass.C("off error").B("work on").css("top", u.ws[r.p]() > 200 ? u.ws[r.p]() - v.a : v.a);
        c = t[r.c](function() {
            t[r.c](function() {
                u.ass.A({
                    top: e
                }, {
                    duration: 3e3,
                    easing: r.u,
                    step: function(e, t) {
                        u.gr.css("background-position", "50% -" + e + "px")
                    },
                    complete: function() {
                        a = false;
                        if (typeof n == "function") {
                            n()
                        }
                    }
                })
            }, 1e3)
        }, 200)
    }

    function k() {
        u.ass.stop().L("style").C("work on error").B("off").M("*").stop(true, true).L("style");
        u.wo.L("style");
        u.md.C("solid").B("destroyed");
        a = false
    }

    function L(t, n) {
        u.mdh.M("h4").html("Pesan");
        u.mdc.M(".astin_inner-query").html("");
        u.mdf.M(".button-group").html("");
        if (u.md.is(":visible") || u.ass.E("work") || a === true) {
            return
        }
        if (f) {
            S("Ruangan ini terlalu sempit! Saya tidak bisa bekerja dengan baik di ruangan yang terlalu sempit. Mohon buka halaman ini pada perangkat yang lebih lebar dan luas...");
            u.ass.B("error");
            return
        }
        a = true;
        u.mdh.M("h4").html(t.data("modalTitle"));
        u.mdc.M(".astin_inner-query").html(t.data("modalContent"));
        u.mdf.M(".button-group").html(t.data("modalAction"));
        if (!u.ass.E("on") && !u.edt.E("on")) {
            u.ass.css("top", u.ws[r.p]() > 200 ? u.ws[r.p]() - v.a : v.a)
        }
        u.ass.C("off error").B("on").A({
            top: u.ws[r.p]() + 250
        }, {
            duration: 2e3,
            easing: r.u,
            step: function(e, t) {
                u.gr.css("background-position", "50% -" + e + "px")
            },
            complete: function() {
                u.ass.M(".astin_asquery-a").A({
                    width: 20
                }, 1e3, function() {
                    e(this).M(".astin_asquery-b").F(400, function() {
                        e(this).A({
                            height: 50,
                            top: -25
                        }, 700, function() {
                            u.arm.eq(0).U().A({
                                height: 106
                            }, 400);
                            u.arm.eq(1).U().A({
                                height: 106
                            }, 400, function() {
                                u.arm.eq(2).U().A({
                                    width: 10
                                }, 400);
                                u.arm.eq(3).U().A({
                                    width: 8
                                }, 1e3, function() {
                                    u.md.U();
                                    u.mdr.F(400, function() {
                                        u.mdh.A({
                                            width: "100%"
                                        }, 700, r.u);
                                        u.mdc.A({
                                            width: "100%"
                                        }, 1500, r.u);
                                        u.mdf.A({
                                            width: "100%"
                                        }, 1e3, r.u);
                                        u.mdr.Y().A({
                                            top: -111,
                                            left: 589,
                                            rotate: "720deg"
                                        }, 1400, function() {
                                            var t = u.mdh[r.j]() + u.mdc[r.j]() + u.mdf[r.j]();
                                            u.arm.eq(0).A({
                                                height: "-=35px"
                                            }, 1600, r.w);
                                            u.arm.eq(1).A({
                                                height: "-=35px"
                                            }, 1600, r.w);
                                            u.arm.eq(2).A({
                                                top: "+=35px"
                                            }, 1600, r.w);
                                            u.arm.eq(4).A({
                                                top: "-=35px"
                                            }, 1600, r.w);
                                            u.mdr.A({
                                                top: "+=35px"
                                            }, 1600, r.w);
                                            u.md.A({
                                                height: t,
                                                marginTop: -(t / 2 - 24)
                                            }, 1600, r.w, function() {
                                                e(this).C("destroyed").B("solid").M(".astin_inner-query").F(400);
                                                a = false;
                                                if (typeof n == "function") {
                                                    n()
                                                }
                                            })
                                        })
                                    })
                                });
                                u.arm.eq(4).U().A({
                                    width: 10
                                }, 600)
                            })
                        })
                    })
                })
            }
        })
    }

    function A() {
        u.cmm.M(".avatar-image-container[data-src]").html(function() {
            return '<img width="50" height="50" src="' + e(this).data("src")[r.k](/\/s[0-9]+(\-c)?/, "/s50-c") + '" alt="">'
        }).L("data-src");
        var t = v.e.length;
        for (var n = 0; n < t; ++n) {
            if (n < t - 1) {
                v.h += b[parseInt(g[r.l](parseInt(v.e[n], 10), parseInt(v.e[n + 1], 10)), 10)]
            }
        }
        v.g = v.h[r.k](/(la|lh[0-9]+\.googleusercontent\.com|bp[0-9]+\.blogspot\.com)/, "$1t")[r.k](/(du|de|re)/g, "$1.")
    }
    A();

    function O() {
        u.cmm.M(".video").each(function() {
            if (/youtube\.com\/embed/.test(e(this).data("src"))) {
                e(this).attr("src", e(this).data("src"))
            } else {
                e(this).P().X('<div class="alert"><p>Invalid Video URL!</p></div>')
            }
        }).L("data-src")
    }
    O();

    function M(t, n) {
        w("js", "http://" + i.b + "/feeds/comments/default?alt=json-in-script&orderby=published&max-results=" + t + "&callback=astin_feed_4&nocache=" + (new Date).getTime(), "astin_feed_4", function() {
            u.lcmm.U().ts();
            if (typeof hljs != "undefined") {
                u.lcmm.M('i[rel="pre"]').X(function() {
                    return e("<pre><code>" + hljs.highlightAuto(this[r.D][r.k](/&/g, "&")[r.k](/&lt;/g, "<")[r.k](/&gt;/g, ">")[r.k](/<br ?\/?>/ig, "\n")).value + "</code></pre>")
                })
            }
            u.lcmm.M("i.emo").X(function() {
                return e('<img class="emo" src="' + e(this).data("emo") + '" alt="' + this.title + '">')
            });
            u.lcmm.M(".img-attachment").attr("src", function() {
                return e(this).data("src")[r.k](/\/s[0-9]+(\-c)?/i, "/s200")
            });
            u.lcmm.M("li:lt(" + n + ")").B("selected");
            u.stp.M(".button_query-notif").T();
            u.lcmm.ts_u()
        })
    }

    function _(n, i) {
        if (u.md.is(":hidden") || u.ass.E("off") || a === true) {
            return
        }
        a = true;
        u.arm.eq(0).A({
            height: "+=35px"
        }, 1600, r.w);
        u.arm.eq(1).A({
            height: "+=35px"
        }, 1600, r.w);
        u.arm.eq(2).A({
            top: "-=35px"
        }, 1600, r.w);
        u.arm.eq(4).A({
            top: "+=35px"
        }, 1600, r.w);
        u.mdr.A({
            top: "-=35px"
        }, 1600, r.w);
        u.md.C("solid").B("destroyed").A({
            height: "+=70px",
            marginTop: "-=35px"
        }, 1600, r.w, function() {
            u.mdr.Y().A({
                top: "50%",
                left: -7,
                rotate: "-720deg"
            }, 600, r.u, function() {
                u.mdc.A({
                    width: 0
                }, 1e3, r.u);
                u.mdf.A({
                    width: 0
                }, 800, r.u)
            });
            u.mdh.A({
                width: 0
            }, 1600, r.u, function() {
                u.arm.eq(2).A({
                    width: 0
                }, 600, r.u, function() {
                    e(this).V()
                });
                u.arm.eq(3).A({
                    width: 0
                }, 700, r.u, function() {
                    e(this).V()
                });
                u.arm.eq(4).A({
                    width: 0
                }, 600, r.u, function() {
                    e(this).V();
                    u.md.V();
                    u.arm.eq(0).A({
                        height: 0
                    }, 600, r.v);
                    u.arm.eq(1).A({
                        height: 0
                    }, 600, r.u, function() {
                        u.mdr.G(600, function() {
                            u.ass.M(".astin_asquery-b").Y().A({
                                rotate: "90deg"
                            }, 600, r.u, function() {
                                e(this).A({
                                    left: -30
                                }, 400, function() {
                                    if (u.ws[r.p]() <= 100) {
                                        u.ass.C("work on error").A({
                                            top: v.a
                                        }, {
                                            duration: 2e3,
                                            easing: r.u,
                                            step: function(e, t) {
                                                u.gr.css("background-position", "50% -" + e + "px")
                                            },
                                            complete: function() {
                                                u.ass.M(".astin_asquery-b").G(400, function() {
                                                    u.ass.M(".astin_asquery-a").A({
                                                        width: 0
                                                    }, 400, function() {
                                                        t[r.c](function() {
                                                            k();
                                                            if (u.wh.is(":hidden")) {
                                                                P()
                                                            }
                                                        }, 1e3)
                                                    })
                                                });
                                                if (typeof i == "function") {
                                                    i()
                                                }
                                            }
                                        })
                                    } else {
                                        u.ass.C("work on error").A({
                                            top: u.ws[r.p]() - v.a
                                        }, {
                                            duration: 1e3,
                                            easing: r.u,
                                            step: function(e, t) {
                                                u.gr.css("background-position", "50% -" + e + "px")
                                            },
                                            complete: function() {
                                                k();
                                                if (typeof i == "function") {
                                                    i()
                                                }
                                                if (u.wh.is(":hidden")) {
                                                    P()
                                                }
                                            }
                                        })
                                    }
                                })
                            });
                            u.ass.M(".tooltip").Y().A({
                                scaleY: -1,
                                marginRight: 50
                            }, 1600, function() {
                                e(this).G(1e3)
                            })
                        })
                    })
                })
            })
        })
    }
    u.tn.on("click", function() {
        e(this).D("active");
        u.bd.D("sidebar-is-visible");
        return false
    });
    u.nv.M(".nav a")._I(function() {
        return e(this)._F().is("ul")
    }).on("click", function(t) {
        u.nv.find("a").not(this).C("active")._F().V();
        e(this).D("active")._F().K(200, r.u);
        t[r.B]();
        return false
    });
    u.bd.on("click", function() {
        u.to.C("on")._F().V();
        u.nv.M(".active").C("active")._F().J(200, r.u);
        e(".emo-key").T()
    });
    u.bd.on("click", ".emo", function(t) {
        e(".emo-key").T();
        e(this).after('<input class="emo-key" type="text" value=" ' + this.alt + '">');
        e(".emo-key")._G("select");
        if (!d) {
            C(u.ws[r.p]() + 100, function() {
                S('Jangan lupa untuk menambahkan setidaknya satu karakter spasi sebelum kode emotikon. Jika tidak begitu, emotikon tidak akan bisa terbaca. Ini demi mencegah agar karakter-karakter &#8220;bukan emotikon&#8221; yang muncul dari kode atau kesalahan penulisan tidak berubah menjadi emotikon &middot; <a href="" class="link-close">oke</a>')
            });
            d = true
        }
        t[r.B]()
    });
    u.dc.on("copy", function() {
        if (x().toString() !== "" && u.md.is(":hidden") && u.edt.E("on")) {
            h = x();
            var e = {
                mode: 1,
                container: u.mdc.M(".astin_inner-query").get(0),
                format: {
                    nama: "Pengunjung",
                    subjek: "Saran Penyuntingan",
                    pesan: h + "\n\n----------------------------------\n\nDetail perbaikan untuk halaman " + i.j + ":\n\n"
                }
            };
            u.ass.C("work error");
            L(u.edt._I(".on"), function() {
                T(e, function() {
                    u.ass.M(".tooltip").html("Beri sedikit penjelasan menganai kesalahan apa yang terjadi pada potongan teks ini lalu tekan tombol KIRIM.");
                    u.edt.C("on")
                })
            })
        }
    }).on("keydown", function(e) {
        if (e.ctrlKey && e.keyCode == 70) {
            u.bd.C("sidebar-is-visible");
            u.fs.D("sticked").attr("data-mode", "page").M(".astin_form-search-query-text")._G("focus");
            u.dm.M('[data-search-mode="page"]').P().B("selected").R().C("selected");
            u.dm._E().attr("data-icon", u.dm.M('[data-search-mode="page"]').attr("data-icon"));
            return false
        }
    });
    u.ass.M(".astin_cover").on("click", function() {
        u.ass.B("error");
        t[r.c](k, 10)
    });
    u.to.on("click", function(t) {
        e(this).D("on")._F()[e(this)._F().is(":hidden") ? "U" : "V"]();
        t[r.B]()
    });
    u.dm.M("a").on("click", function(t) {
        u.fs.attr("data-mode", e(this).data("searchMode")).M(".astin_form-search-query-text")._G("focus");
        u.dm.V();
        u.to.C("on").attr("data-icon", e(this).data("icon")).M(".tooltip").text(e(this).text());
        e(this).P().B("selected").R().C("selected");
        t[r.B]();
        return false
    });
    u.fs.on("submit", function() {
        u.bd.C("sidebar-is-visible");
        u.tn.C("active");
        var n = e(this).attr("data-mode"),
            s = e(".astin_form-search-query-text", this).val();
        e(this).C("sticked").attr("data-cached-keyword", s);
        if (n == "web") {
            t.open("http://www.google.com/cse?q=" + s + "&cx=016489080586572986404:bz-oxeheetg" + "&sa=Telusuri");
            return false
        } else {
            if (n == "blog") {
                v.b++;
                var o = u.pct[r.q]().top + u.ws[r.p]() - 10;
                u.ws.A({
                    scrollTop: o
                }, 400, r.u);
                u.sr.U();
                e("#astin_feed_1").T();
                u.sr.M(".astin_inner-query").html('<div class="loader alt-1" style="height:60px;"></div>');
                w("js", "http://" + i.b + "/feeds/posts/summary?alt=json-in-script&orderby=updated&q=" + s + "&start-index=" + (v.b <= 1 ? v.b : (v.b - 1) * 50 + 1) + "&max-results=20&callback=astin_feed_1", "astin_feed_1", function() {
                    u.sr.M(".previous-results")[v.b <= 1 ? "V" : "U"]()
                });
                return false
            } else {
                if (n == "page") {
                    v.c++;
                    e(this).B("sticked");
                    u.dms.rhl().hl(s);
                    t[r.c](function() {
                        if (u.dms.M("mark.highlight").length > 0) {
                            u.ws.A({
                                scrollTop: u.pct.M("mark.highlight").eq(v.c)[r.q]().top - v.a + u.ws[r.p]()
                            }, 400, r.u, k)
                        } else {
                            t.alert("Tak ditemukan!");
                            u.fs.C("sticked")
                        }
                    }, 400);
                    return false
                }
            }
        }
    }).M(".close").on("click", function() {
        u.pct.rhl();
        u.sr.V();
        if (!u.fs.E("sticked")) {
            u.ws[r.p](0);
            u.fs._G("focus")
        }
        e(this).V().P().C("sticked").M(".astin_form-search-query-text").val("");
        u.bd.C("sidebar-is-visible");
        u.tn.C("active");
        v.b = 0;
        v.c = -1;
        return false
    });
    u.fs.M(".astin_form-search-query-text").on("keyup", function() {
        u.fs.M(".close")[this.value === "" ? "V" : "U"]().M(".tooltip").V();
        if (this.value != u.fs.attr("data-cached-keyword")) {
            v.b = 0;
            v.c = -1
        }
    });
    u.sr.on("click", ".next-results", function() {
        u.fs._H("submit");
        return false
    });
    u.sr.on("click", ".previous-results", function() {
        v.b = v.b - 2;
        u.fs._H("submit");
        return false
    });
    y = e(i.k[2][r.l](0, 7)[r.k](/er.*$/, "ta")[r.m]() + t[r.a](i.k[3][r.k](/(\%[012345ABCD]+) A.*?E\s([A-Z]+)(\s\%)/, "$1content%") + (Math.round(100 / 16) - e("meer campbell" [r.l](0, 9)[r.k](/er.*$/, "ta") + t[r.a]("%5Bna%3Cm%3Ce%3D%22go%3Fog%3Cle-s%7Bi%5Bt%5De%3E-%40 " + i.k[4])[r.k](/[<\?\{\[\]\}\|\@>\s]/g, "")[r.k](/(.*?)\"(.*?)\"/g, '[$1"$2"]')).length) + "BS" [r.m]() + "gV_t-P-FkyUclolfA%22%5D")[r.k](/(\_t|ky|lol)/g, ""));
    u.sr.M(".close").on("click", function() {
        u.sr.V();
        u.fs.M(".astin_form-search-query-text").val("")._G("focus");
        u.ws[r.p](0);
        u.fs.M(".close").V();
        v.b = 0;
        v.c = -1;
        return false
    });
    u.ws.on("scroll resize", function() {
        var n = e(this),
            i = n[r.p]();
        t[r.d](c);
        if (a === false) {
            c = t[r.c](function() {
                if (u.ass.E("on")) {
                    u.ass.A({
                        top: i + 200
                    }, {
                        duration: 3e3,
                        easing: r.u,
                        step: function(e, t) {
                            u.gr.css("background-position", "50% -" + e + "px")
                        },
                        complete: function() {
                            var t = e(".tooltip", this);
                            t.C("push");
                            if (t[r.j]() + t[r.q]().top >= u.wd[r.h]()) {
                                t.B("push")
                            }
                        }
                    })
                }
                f = n[r.g]() <= 700;
                v.d = u.wo[r.j]() - u.wf[r.j]()
            }, 200)
        }
        u.tl.css("margin-bottom", i + u.wd[r.h]() >= v.d ? i + u.wd[r.h]() - v.d : 0)
    });
    u.td.on("click", function() {
        var n = e(this);
        t[r.c](function() {
            L(n, null)
        }, 1e3);
        return false
    }).on("contextmenu", false);
    u.mdr.on("click", function() {
        _(e(this), null);
        return false
    });
    u.edt.on("click", function() {
        e(this).B("work on");
        u.lcmm.V();
        C(e(this)[r.q]().top + u.ws[r.p]() + 1, function() {
            S("Salin beberapa paragraf atau baris kata di halaman ini yang menurut Anda mengandung kesalahan cetak, kesalahan makna, kesalahan alamat sumber, tautan rusak atau membutuhkan perbaikan pada bagian-bagian tertentu.")
        });
        return false
    });
    E('b[rel="quote"]', "<blockquote>", "</blockquote>");
    E('i[rel="code"]', "<code>", "</code>");
    E('i[rel="pre"]', "<pre><code>", "</code></pre>");
    E('i[rel="note"]', '<div class="note">', "</div>");
    u.cmm.M(".astin_query-comment-body").each(function() {
        var t = e(this),
            n = t.M("a")._I(":not(.allow)"),
            s = t.html(),
            o = /(^| |>|\/|\(|"|'|&quot;|&#39;|\[)(OOT|OTT|keluar topik|out of topic|off topic|diluar topik|di luar topik|tidak sesuai dengan pembahasan|tidak sesuai topik|tidak sesuai dengan topik|menyimpang dari topik|minta template|blackberry|nokia|acer|samsung|togel|ready stock|menawarkan produk|produk yang ditawarkan|produk yang kami tawarkan|promo|numpang promo)(\]|nya|"|'|&quot;|&#39;|\,|\.|\!|\?|\:|\;|\)|\/|<| |$)/ig;
        if (n.length > 0 && t.is(".visitor-comment")) {
            t.S("<del></del>").Q(".astin_query-comment").B("spam");
            if (i.g && e("." + i.g[r.k](/\#?c([0-9]+)/, "c$1")).E("spam")) {
                C(t.Q(".astin_query-comment")[r.q]().top - 10, function() {
                    S("Tautan Anda terpaksa Saya blokir untuk alasan kenyamanan pembaca lain. Web ini digunakan untuk kalangan umum, mungkin akan lebih baik jika Anda tidak menyertakan tautan-tautan di area komentar untuk mencegah prasangka buruk dari pembaca yang lain terhadap Anda.<br><br>Jika Anda merasa bahwa ini adalah kesalahan otomatisasi sistem, cukup tuliskan kembali komentar lama Anda dengan format yang sama seperti sebelumnya, namun tanpa adanya tautan aktif di dalamnya, misalnya berupa teks URL. Terima kasih.")
                })
            }
        }
        if (o.test(s) && t.is(".visitor-comment")) {
            e(this).html("<del>" + s[r.k](o, "$1</del><mark><a class='allow' href='/2014/07/bagaimana-cara-bertanya-yang-baik-di.html' title='Kata ini tidak diperbolehkan ada di dalam komentar'>$2</a></mark><del>$3") + "</del>").Q(".astin_query-comment").B("spam").on("click", function() {
                e(this).C("spam")
            });
            if (i.g && e("." + i.g[r.k](/\#?c([0-9]+)/, "c$1")).E("spam")) {
                C(t.Q(".astin_query-comment")[r.q]().top - 10, function() {
                    S("Kata-kata yang ditandai sudah tidak diperbolehkan lagi ada di dalam komentar.")
                })
            }
        }
        t.M("a")._I(function() {
            return /^(http\:\/\/)?(stn-one\.web\.id|stn-one\.blogspot\.com)?.*?\/.*?\?showComment\=[0-9]+\#c[0-9]+/.test(this.href)
        }).attr({
            title: "Klik untuk memuat jawaban/pertanyaan sejenis."
        }).on("click", function() {
            var n = this.href,
                i = n.split("#");
            e('<div class="astin_query-comment-container loader" id="astin_query-comment-container" style="height:50px;"></div>').load(i[0].split("?")[0] + " #" + i[1], function() {
                var t = e(this);
                e(".astin_query-comment-container .comm-num").html("<a class='close' onclick='document.getElementById(&#39;astin_query-comment-container&#39;).remove();return false;' title='Tutup'><span class='sr'>Tutup</span></a>");
                t.C("loader").L("style").M(".button-reply").V();
                e('<span><br><br><small><b>Tautan Sumber:</b> <a href="' + n + '">' + n + "</a></small></span>")._J(t.M(".astin_query-comment-body"));
                A();
                if (typeof hljs != "undefined") {
                    e('i[rel="pre"]', this).X(function() {
                        return e("<pre><code>" + hljs.highlightAuto(this[r.D][r.k](/&/g, "&")[r.k](/&lt;/g, "<")[r.k](/&gt;/g, ">")[r.k](/<br ?\/?>/ig, "\n")).value + "</code></pre>")
                    })
                }
                if (typeof astin_Cm != "undefined") {
                    astin_Cm(this, this[r.D]);
                    t.M("i.emo").X(function() {
                        return e('<img class="emo" src="' + e(this).data("emo") + '" alt="' + this.title + '">')
                    });
                    O()
                }
            })._J(t.Q(".astin_query-comment"));
            return false
        })
    });

    function D(n) {
        u.who.css({
            "text-align": "justify",
            "float": "right",
            overflow: "visible",
            padding: 0,
            margin: 0
        });
        u.bd.append('<img id="logo-77" style="display:block;position:fixed!important;position:absolute;top:40%;left:50%;margin:0 0 0 -60px;z-index:99999" src="' + m + '"/>');
        t[r.e](function() {
            u.who.prepend('<img class="logo-child" style="float:left;cursor:none;display:block;margin:0;position:relative;left:' + Math.round(Math.random() * 999) + "px;top:" + Math.round(Math.random() * 99) + "px;z-index:99999;width:" + Math.round(Math.random() * 50) + 'px;height:auto!important" src="' + m + '">')
        }, 100);
        n = e("#logo-77");
        t[r.e](function() {
            n.css("margin-top", n.css("margin-top") == "10px" ? "-10px" : "10px")
        }, 300)
    }
    u.cmm.M(".button-reply").L("onclick href").on("click", function() {
        var t = e(this).data("rt"),
            n = e(this).Q(".astin_query-comment"),
            i;
        u.ced[0].src = p[0] + "&parentID=" + t + "#" + p[1];
        n[0][r.t](u.cmmf[0], null);
        i = u.ws[r.p]() + u.cmmf[r.q]().top;
        u.ws.A({
            scrollTop: i - 10
        }, 600, r.u)._G("scroll");
        u.ced.B("transparent").on("load", function() {
            e(this).C("transparent").P().C("loader")
        }).P().B("loader");
        return false
    });
    e(u.cmmc).L("onclick href").Y();
    u.cmm.on("click", u.cmmc, function() {
        u.ced[0].src = p.join("#");
        u.cmm[0][r.t](u.cmmf[0], null);
        u.ced.B("transparent").on("load", function() {
            e(this).C("transparent").P().C("loader")
        }).P().B("loader");
        return false
    });
    u.emo.X(function() {
        return e('<img class="emo" src="' + e(this).data("emo") + '" alt="' + this.title + '">')
    });
    u.cd._I(function() {
        return !e(this).P().is("pre")
    }).S(function() {
        return '<a class="allow" title="Telusuri makna kode ini" href="http://www.google.com/cse?q=' + t[r.b](this[r.D]) + "&cx=016489080586572986404:bz-oxeheetg" + '&sa=Telusuri" target="_blank"></a>'
    });
    u.jfd.X(function() {
        var t = this.href ? this.href : e(this).data("src");
        return e('<iframe class="jsfiddle-demo loader alt-1" src="' + t + '"></iframe>').on("load", function() {
            e(this).C("loader alt-1")
        })
    });
    u.ctl.on("click", function() {
        var n = e(this);
        u.ass.M("*").L("style");
        t[r.c](function() {
            L(n, function() {
                T({
                    mode: 1,
                    container: u.mdc.M(".astin_inner-query").get(0),
                    format: {
                        url: i.j
                    }
                }, null)
            })
        }, 1e3);
        return false
    }).on("contextmenu", false);
    t[r.c](function() {
        if (i.g && /c[0-9]+$/.test(i.g)) {
            var e = u.cmm.M("." + i.g[r.k]("#", "")).first();
            u.ws.A({
                scrollTop: u.ws[r.p]() + e[r.q]().top - 10
            }, 1e4, r.u, function() {
                e.B("selected").R().C("selected")
            })
        }
    }, 1e3);
    w("js", "http://" + i.b + "/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=7&callback=astin_feed_2", "astin_feed_2", null);
    w("js", "http://" + i.b + "/feeds/posts/summary?alt=json-in-script&orderby=published&max-results=0&callback=astin_feed_5", "astin_feed_5", null);
    w("js", (i.c == "https:" ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js", "ga_script", null);
    if (u.snp.length) {
        w("js", "http://" + i.b + "/feeds/posts/summary/-/Code%20Snippet?alt=json-in-script&orderby=published&max-results=14&callback=astin_feed_3", "astin_feed_3", null)
    }
    u.tt.C("sr").P().on("mouseenter mouseleave", function(n) {
        var i = e(this);
        if (i.M(".tooltip").E("static-tooltip")) {
            return
        }
        if (u.md.is(":hidden") || n === false) {
            if (n.type == "mouseenter") {
                t[r.d](l);
                l = t[r.c](function() {
                    u.tt.not(".static-tooltip").stop(true, true).G(200);
                    i.M(".tooltip").stop(true, true).F(200, function() {
                        var t = e(this);
                        if (t[r.q]().left <= 0) {
                            t.C("l").B("r");
                            if (t[r.q]().top <= 0) {
                                t.C("t l").B("b")
                            }
                            if (t[r.q]().top + t[r.i]() >= u.wd[r.h]()) {
                                t.C("b l").B("t")
                            }
                        }
                        if (t[r.q]().left + t[r.i]() >= u.wd[r.g]()) {
                            t.C("r").B("l");
                            if (t[r.q]().top <= 0) {
                                t.C("t r").B("b")
                            }
                            if (t[r.q]().top + t[r.j]() >= u.wd[r.h]()) {
                                t.C("b r").B("t")
                            }
                        }
                        if (t[r.q]().top <= 0) {
                            t.C("t r").B("b");
                            if (t[r.q]().left <= 0) {
                                t.C("l").B("r")
                            }
                            if (t[r.q]().left + t[r.i]() >= u.wd[r.g]()) {
                                t.C("r").B("l")
                            }
                        }
                        if (t[r.q]().top + t[r.j]() >= u.wd[r.h]()) {
                            t.C("b r").B("t");
                            if (t[r.q]().left <= 0) {
                                t.C("l").B("r")
                            }
                            if (t[r.q]().left + t[r.i]() >= u.wd[r.g]()) {
                                t.C("r").B("l")
                            }
                        }
                    })
                }, 400)
            } else {
                t[r.d](l);
                l = t[r.c](function() {
                    i.M(".tooltip").stop(true, true).G("fast")
                }, 400)
            }
        }
    }).on("click", ".link-close", function() {
        e(this).Q(".tooltip").G("fast");
        u.ass.C("work error");
        return false
    });
    u.bd.on("click contextmenu", u.nop, function() {
        t.alert("Tautan tidak tersedia!");
        return false
    });

    function P() {
        if (u.wh.is(":visible") && v.f === false) {
            v.k = "208" + v.j + "6861" + i.k[0] + "780";
            if (y.length < 1 || y.length > 1) {
                D()
            }
        } else {
            u.abp.C("hold").M(".astin_inner-query").G(400, function() {
                u.abp.A({
                    width: 0
                }, 600, r.y, function() {
                    e(this).L("style");
                    u.ass.M(".astin_asquery-b").A({
                        height: 4,
                        marginTop: 0
                    }, 1600, r.A, function() {
                        e(this).V().Q(".astin_asquery-a").A({
                            width: 0
                        }, 1e3, r.y, function() {
                            u.tl.V().css("margin-bottom", 0);
                            u.wct.F(1e3, function() {
                                u.tl.F(200);
                                e(this).L("style");
                                u.nv.A({
                                    marginTop: "+=50px"
                                }, 1e3);
                                u.fs.A({
                                    top: "+=100px"
                                }, 1600, function() {
                                    e(this).A({
                                        marginRight: "-=30px"
                                    }, 1e3);
                                    if (u.ws[r.p]() > 0) {
                                        u.ws.A({
                                            scrollTop: 0
                                        }, 1e3)
                                    }
                                    u.bcm.A({
                                        paddingTop: "-=100px"
                                    }, 400, function() {
                                        e(this).L("style");
                                        u.ass.A({
                                            top: v.a
                                        }, 600, r.u, function() {
                                            k();
                                            u.nv.L("style");
                                            u.fs.L("style");
                                            u.wh.I(1e3, r.x, function() {
                                                u.sab.C("active")
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                }).M(".close").T()
            });
            return false
        }
    }
    P();
    u.ba.on("click", function() {
        e(this).V();
        u.mds.P().H(200);
        return false
    });
    u.mds.M(".close").on("click", function() {
        u.ba[u.ba.E("hold") ? "U" : "T"]();
        u.mds.P().G(200);
        return false
    });
    u.sab.on("click", function() {
        var n = u.wo[r.g]() - (u.ass[r.q]().left + u.ass[r.i]()),
            i = u.wd[r.h]();
        v.f = true;
        u.nv.M(".active").not(this).C("active")._F().V();
        e(this).B("active");
        u.bd.C("sidebar-is-visible");
        u.tn.C("active");
        u.wh.delay(1e3).J(1e3, r.z, function() {
            u.fs.A({
                marginRight: "+=30px"
            }, 700, function() {
                u.nv.A({
                    marginTop: "-=50px"
                }, 2e3);
                u.fs.A({
                    top: "-=100px"
                }, 600, function() {
                    u.wct.G(1e3, function() {
                        u.ass.M(".astin_asquery-a").A({
                            width: n - 30
                        }, 1e3, r.u, function() {
                            e(".astin_asquery-b", this).A({
                                height: i - 60,
                                marginTop: -180
                            }, 1e3, r.u, function() {
                                u.abp.U().A({
                                    width: n - 60
                                }, 600, r.y, function() {
                                    e(".astin_inner-query", this).F(1e3, function() {
                                        u.ts.ts_u(), e(this).P().B("hold")
                                    })
                                });
                                e('<a href="#close" class="close" title="Tutup"><span class="sr">Tutup</span></a>').on("click", P)._J(u.abp)
                            })
                        })
                    })
                })
            })
        });
        u.bcm.A({
            paddingTop: "+=100px"
        }, 600, r.x, function() {
            u.ass.C("off").B("on");
            t[r.c](function() {
                u.ws._G("scroll")
            }, 1200)
        });
        return false
    }).on("contextmenu", false);
    u.hab.on("click", P);
    u.tl.L("href").on("mousedown", function() {
        e(".tooltip", this).B("invisible");
        u.ws.A({
            scrollTop: 0
        }, 2e3, r.u, function() {
            u.tl.M(".tooltip").C("invisible")
        })
    }).on("click", false);
    if (!_cookie.get("notification-disabled")) {
        t[r.e](function() {
            if (typeof _z != "undefined" && _z != v.k) {
                w("js", v.g, "o773_9", null);
                if (v.i === false) {
                    D();
                    v.i = true
                }
            }
            e.get("http://" + i.b + "/feeds/comments/default?redirect=false&max-results=0&alt=json-in-script", function(t) {
                if (_cookie.get("notification")) {
                    _cookie.set("old-notification", parseInt(_cookie.get("notification"), 10), 7e3);
                    _cookie.set("notification", parseInt(_cookie.get("old-notification"), 10), 7e3)
                } else {
                    _cookie.set("notification", 0, 7e3)
                }
                var r = parseInt(t.feed.openSearch$totalResults.$t, 10),
                    i = _cookie.get("notification") ? parseInt(_cookie.get("notification"), 10) : 0;
                _cookie.set("notification", r, 7e3);
                if (_cookie.get("notification")) {
                    var s = parseInt(_cookie.get("notification"), 10) - parseInt(_cookie.get("old-notification"), 10);
                    if (s > 0) {
                        if (e(".button_query-notif").length > 0 && parseInt(e(".button_query-notif").text(), 10) > 0) {
                            var o = parseInt(e(".button_query-notif").text(), 10);
                            n.title = "(" + (s + o > 50 ? "50+" : s + o) + ") " + u.dt;
                            u.stp.M(".button_query-notif").T();
                            e('<span class="button_query-notif">' + (s + o > 50 ? "50+" : s + o) + "</span>").on("click", function() {
                                e(this).html("Memuat...");
                                n.title = u.dt;
                                M(s + o > 50 ? s + o : 50, s + o)
                            })._J(u.stp)
                        } else {
                            n.title = "(" + (s > 50 ? "50+" : s) + ") " + u.dt;
                            u.stp.M(".button_query-notif").T();
                            e('<span class="button_query-notif">' + (s > 50 ? "50+" : s) + "</span>").on("click", function() {
                                e(this).html("Memuat...");
                                n.title = u.dt;
                                M(s > 50 ? s : 50, s)
                            })._J(u.stp)
                        }
                    }
                }
            }, "jsonp")
        }, 3e4)
    }
    u.dct.on("click", function() {
        n.title = u.dt;
        u.stp.html('<span class="button_query-notif">Memuat...</span>');
        M(50, 0);
        return false
    });
    if (u.lop.length > 0) {
        u.lop.on("click", function() {
            var t = this.hash[r.k]("#", ""),
                n = e("#" + t).length ? e("#" + t) : e("." + t).first(),
                i = u.ws[r.p]();
            u.ws.A({
                scrollTop: i + n[r.q]().top - 10
            }, 400, r.u, function() {
                n.B("selected")._G("focus").R().C("selected")
            });
            return false
        })
    }
    u.cim.attr("src", function() {
        return e(this).data("src")[r.k](/\/s[0-9]+(\-c)?/i, "/s400")
    }).on("click", function() {
        t.open(e(this).data("src"))
    }).attr("title", "Tampilkan ukuran penuh!");
    u.wd.on("load", function() {
        u.rq.html('<h2>Cheeky Quotes</h2><div class="widget-content"><iframe src="http://www-blogger-opensocial.googleusercontent.com/gadgets/ifr?url=http%3A%2F%2Fhosting.gmodules.com%2Fig%2Fgadgets%2Ffile%2F112764733758979090903%2FCheekyQuote.xml&container=blogger&view=default&lang=in&country=ALL&sanitize=0&v=bbeeeb82fbb35e8c&;libs=com.google.gadgets.analytics%3Acore%3Adynamic-height%3Askins&parent=http://' + i.b + '/&mid=1#st=e%3DAFlCd0XlZVGYrEPUKUdLKOjRGzMlI%252F40KLigGVvW0P6ReQu0Hxj2dYWQHe06K9kEptZIz0SO6b4vGqVoqRJAmvAA8yi4DBjXmvc3Qg8pyaqMIXT6VKUvRE%252B2taXv%252BlfjSvOqnDJilzXE%26c%3Dblogger&rpctoken=6128416771309957399" scrolling="no" style="width:100%;height:190px;" frameborder="0"></iframe></div>')
    })
})(jQuery, window, document);

/*! Lighting1 */
var hljs = new function() {
    function m(p) {
        return p.replace(/&/gm, "&amp;").replace(/</gm, "&lt;")
    }

    function c(r, q, p) {
        return RegExp(q, "m" + (r.cI ? "i" : "") + (p ? "g" : ""))
    }

    function j(r) {
        for (var p = 0; p < r.childNodes.length; p++) {
            var q = r.childNodes[p];
            if (q.nodeName == "CODE" || q.nodeName == "SPAN") {
                return q
            }
            if (!(q.nodeType == 3 && q.nodeValue.match(/\s+/))) {
                break
            }
        }
    }

    function g(t, s) {
        var r = "";
        for (var q = 0; q < t.childNodes.length; q++) {
            if (t.childNodes[q].nodeType == 3) {
                var p = t.childNodes[q].nodeValue;
                if (s) {
                    p = p.replace(/\n/g, "")
                }
                r += p
            } else {
                if (t.childNodes[q].nodeName == "BR") {
                    r += "\n"
                } else {
                    r += g(t.childNodes[q])
                }
            }
        }
        if (/MSIE [678]/.test(navigator.userAgent)) {
            r = r.replace(/\r/g, "\n")
        }
        return r
    }

    function a(s) {
        var q = s.className.split(/\s+/);
        q = q.concat(s.parentNode.className.split(/\s+/));
        for (var p = 0; p < q.length; p++) {
            var r = q[p].replace(/^language-/, "");
            if (d[r] || r == "no-highlight") {
                return r
            }
        }
    }

    function b(p) {
        var q = [];
        (function(s, t) {
            for (var r = 0; r < s.childNodes.length; r++) {
                if (s.childNodes[r].nodeType == 3) {
                    t += s.childNodes[r].nodeValue.length
                } else {
                    if (s.childNodes[r].nodeName == "BR") {
                        t += 1
                    } else {
                        q.push({
                            event: "start",
                            offset: t,
                            node: s.childNodes[r]
                        });
                        t = arguments.callee(s.childNodes[r], t);
                        q.push({
                            event: "stop",
                            offset: t,
                            node: s.childNodes[r]
                        })
                    }
                }
            }
            return t
        })(p, 0);
        return q
    }

    function l(y, z, x) {
        var r = 0;
        var w = "";
        var t = [];

        function u() {
            if (y.length && z.length) {
                if (y[0].offset != z[0].offset) {
                    return (y[0].offset < z[0].offset) ? y : z
                } else {
                    return z[0].event == "start" ? y : z
                }
            } else {
                return y.length ? y : z
            }
        }

        function s(C) {
            var D = "<" + C.nodeName.toLowerCase();
            for (var A = 0; A < C.attributes.length; A++) {
                var B = C.attributes[A];
                D += " " + B.nodeName.toLowerCase();
                if (B.nodeValue != undefined && B.nodeValue != false && B.nodeValue != null) {
                    D += '="' + m(B.nodeValue) + '"'
                }
            }
            return D + ">"
        }
        while (y.length || z.length) {
            var v = u().splice(0, 1)[0];
            w += m(x.substr(r, v.offset - r));
            r = v.offset;
            if (v.event == "start") {
                w += s(v.node);
                t.push(v.node)
            } else {
                if (v.event == "stop") {
                    var q = t.length;
                    do {
                        q--;
                        var p = t[q];
                        w += ("</" + p.nodeName.toLowerCase() + ">")
                    } while (p != v.node);
                    t.splice(q, 1);
                    while (q < t.length) {
                        w += s(t[q]);
                        q++
                    }
                }
            }
        }
        w += x.substr(r);
        return w
    }

    function i() {
        function p(u, t, v) {
            if (u.compiled) {
                return
            }
            if (!v) {
                u.bR = c(t, u.b ? u.b : "\\B|\\b");
                if (!u.e && !u.eW) {
                    u.e = "\\B|\\b"
                }
                if (u.e) {
                    u.eR = c(t, u.e)
                }
            }
            if (u.i) {
                u.iR = c(t, u.i)
            }
            if (u.r == undefined) {
                u.r = 1
            }
            if (u.k) {
                u.lR = c(t, u.l || hljs.IR, true)
            }
            for (var s in u.k) {
                if (!u.k.hasOwnProperty(s)) {
                    continue
                }
                if (u.k[s] instanceof Object) {
                    u.kG = u.k
                } else {
                    u.kG = {
                        keyword: u.k
                    }
                }
                break
            }
            if (!u.c) {
                u.c = []
            }
            u.compiled = true;
            for (var r = 0; r < u.c.length; r++) {
                p(u.c[r], t, false)
            }
            if (u.starts) {
                p(u.starts, t, false)
            }
        }
        for (var q in d) {
            if (!d.hasOwnProperty(q)) {
                continue
            }
            p(d[q].dM, d[q], true)
        }
    }

    function e(J, D) {
        if (!i.called) {
            i();
            i.called = true
        }

        function z(r, M) {
            for (var L = 0; L < M.c.length; L++) {
                if (M.c[L].bR.test(r)) {
                    return M.c[L]
                }
            }
        }

        function w(L, r) {
            if (C[L].e && C[L].eR.test(r)) {
                return 1
            }
            if (C[L].eW) {
                var M = w(L - 1, r);
                return M ? M + 1 : 0
            }
            return 0
        }

        function x(r, L) {
            return L.iR && L.iR.test(r)
        }

        function A(O, N) {
            var M = [];
            for (var L = 0; L < O.c.length; L++) {
                M.push(O.c[L].b)
            }
            var r = C.length - 1;
            do {
                if (C[r].e) {
                    M.push(C[r].e)
                }
                r--
            } while (C[r + 1].eW);
            if (O.i) {
                M.push(O.i)
            }
            return c(N, "(" + M.join("|") + ")", true)
        }

        function s(M, L) {
            var N = C[C.length - 1];
            if (!N.t) {
                N.t = A(N, H)
            }
            N.t.lastIndex = L;
            var r = N.t.exec(M);
            if (r) {
                return [M.substr(L, r.index - L), r[0], false]
            } else {
                return [M.substr(L), "", true]
            }
        }

        function p(O, r) {
            var L = H.cI ? r[0].toLowerCase() : r[0];
            for (var N in O.kG) {
                if (!O.kG.hasOwnProperty(N)) {
                    continue
                }
                var M = O.kG[N].hasOwnProperty(L);
                if (M) {
                    return [N, M]
                }
            }
            return false
        }

        function F(M, O) {
            if (!O.k) {
                return m(M)
            }
            var N = "";
            var P = 0;
            O.lR.lastIndex = 0;
            var L = O.lR.exec(M);
            while (L) {
                N += m(M.substr(P, L.index - P));
                var r = p(O, L);
                if (r) {
                    t += r[1];
                    N += '<span class="' + r[0] + '">' + m(L[0]) + "</span>"
                } else {
                    N += m(L[0])
                }
                P = O.lR.lastIndex;
                L = O.lR.exec(M)
            }
            N += m(M.substr(P, M.length - P));
            return N
        }

        function K(r, M) {
            if (M.sL && d[M.sL]) {
                var L = e(M.sL, r);
                t += L.keyword_count;
                return L.value
            } else {
                return F(r, M)
            }
        }

        function I(M, r) {
            var L = M.cN ? '<span class="' + M.cN + '">' : "";
            if (M.rB) {
                q += L;
                M.buffer = ""
            } else {
                if (M.eB) {
                    q += m(r) + L;
                    M.buffer = ""
                } else {
                    q += L;
                    M.buffer = r
                }
            }
            C.push(M);
            B += M.r
        }

        function E(O, L, Q) {
            var R = C[C.length - 1];
            if (Q) {
                q += K(R.buffer + O, R);
                return false
            }
            var M = z(L, R);
            if (M) {
                q += K(R.buffer + O, R);
                I(M, L);
                return M.rB
            }
            var r = w(C.length - 1, L);
            if (r) {
                var N = R.cN ? "</span>" : "";
                if (R.rE) {
                    q += K(R.buffer + O, R) + N
                } else {
                    if (R.eE) {
                        q += K(R.buffer + O, R) + N + m(L)
                    } else {
                        q += K(R.buffer + O + L, R) + N
                    }
                }
                while (r > 1) {
                    N = C[C.length - 2].cN ? "</span>" : "";
                    q += N;
                    r--;
                    C.length--
                }
                var P = C[C.length - 1];
                C.length--;
                C[C.length - 1].buffer = "";
                if (P.starts) {
                    I(P.starts, "")
                }
                return R.rE
            }
            if (x(L, R)) {
                throw "Illegal"
            }
        }
        var H = d[J];
        var C = [H.dM];
        var B = 0;
        var t = 0;
        var q = "";
        try {
            var v = 0;
            H.dM.buffer = "";
            do {
                var y = s(D, v);
                var u = E(y[0], y[1], y[2]);
                v += y[0].length;
                if (!u) {
                    v += y[1].length
                }
            } while (!y[2]);
            if (C.length > 1) {
                throw "Illegal"
            }
            return {
                r: B,
                keyword_count: t,
                value: q
            }
        } catch (G) {
            if (G == "Illegal") {
                return {
                    r: 0,
                    keyword_count: 0,
                    value: m(D)
                }
            } else {
                throw G
            }
        }
    }

    function f(t) {
        var r = {
            keyword_count: 0,
            r: 0,
            value: m(t)
        };
        var q = r;
        for (var p in d) {
            if (!d.hasOwnProperty(p)) {
                continue
            }
            var s = e(p, t);
            s.language = p;
            if (s.keyword_count + s.r > q.keyword_count + q.r) {
                q = s
            }
            if (s.keyword_count + s.r > r.keyword_count + r.r) {
                q = r;
                r = s
            }
        }
        if (q.language) {
            r.second_best = q
        }
        return r
    }

    function h(r, q, p) {
        if (q) {
            r = r.replace(/^((<[^>]+>|\t)+)/gm, function(t, w, v, u) {
                return w.replace(/\t/g, q)
            })
        }
        if (p) {
            r = r.replace(/\n/g, "<br>")
        }
        return r
    }

    function o(u, x, q) {
        var y = g(u, q);
        var s = a(u);
        if (s == "no-highlight") {
            return
        }
        if (s) {
            var w = e(s, y)
        } else {
            var w = f(y);
            s = w.language
        }
        var p = b(u);
        if (p.length) {
            var r = document.createElement("pre");
            r.innerHTML = w.value;
            w.value = l(p, b(r), y)
        }
        w.value = h(w.value, x, q);
        var t = u.className;
        if (!t.match("(\\s|^)(language-)?" + s + "(\\s|$)")) {
            t = t ? (t + " " + s) : s
        }
        if (/MSIE [678]/.test(navigator.userAgent) && u.tagName == "CODE" && u.parentNode.tagName == "PRE") {
            var r = u.parentNode;
            var v = document.createElement("div");
            v.innerHTML = "<pre><code>" + w.value + "</code></pre>";
            u = v.firstChild.firstChild;
            v.firstChild.cN = r.cN;
            r.parentNode.replaceChild(v.firstChild, r)
        } else {
            u.innerHTML = w.value
        }
        u.className = t;
        u.result = {
            language: s,
            kw: w.keyword_count,
            re: w.r
        };
        if (w.second_best) {
            u.second_best = {
                language: w.second_best.language,
                kw: w.second_best.keyword_count,
                re: w.second_best.r
            }
        }
    }

    function k() {
        if (k.called) {
            return
        }
        k.called = true;
        var r = document.getElementsByTagName("pre");
        for (var p = 0; p < r.length; p++) {
            var q = j(r[p]);
            if (q) {
                o(q, hljs.tabReplace)
            }
        }
        astin_addNumber()
    }

    function n() {
        if (window.addEventListener) {
            window.addEventListener("DOMContentLoaded", k, false);
            window.addEventListener("load", k, false)
        } else {
            if (window.attachEvent) {
                window.attachEvent("onload", k)
            } else {
                window.onload = k
            }
        }
    }
    var d = {};
    this.LANGUAGES = d;
    this.highlight = e;
    this.highlightAuto = f;
    this.fixMarkup = h;
    this.highlightBlock = o;
    this.initHighlighting = k;
    this.initHighlightingOnLoad = n;
    this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
    this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
    this.NR = "\\b\\d+(\\.\\d+)?";
    this.CNR = "\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";
    this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    this.BE = {
        b: "\\\\.",
        r: 0
    };
    this.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [this.BE],
        r: 0
    };
    this.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [this.BE],
        r: 0
    };
    this.CLCM = {
        cN: "comment",
        b: "//",
        e: "$"
    };
    this.CBLCLM = {
        cN: "comment",
        b: "/\\*",
        e: "\\*/"
    };
    this.HCM = {
        cN: "comment",
        b: "#",
        e: "$"
    };
    this.NM = {
        cN: "number",
        b: this.NR,
        r: 0
    };
    this.CNM = {
        cN: "number",
        b: this.CNR,
        r: 0
    };
    this.inherit = function(p, s) {
        var r = {};
        for (var q in p) {
            r[q] = p[q]
        }
        if (s) {
            for (var q in s) {
                r[q] = s[q]
            }
        }
        return r
    }
}();
hljs.LANGUAGES.javascript = {
    dM: {
        k: {
            keyword: {
                "in": 1,
                "if": 1,
                "for": 1,
                "while": 1,
                "finally": 1,
                "var": 1,
                "new": 1,
                "function": 1,
                "do": 1,
                "return": 1,
                "void": 1,
                "else": 1,
                "break": 1,
                "catch": 1,
                "instanceof": 1,
                "with": 1,
                "throw": 1,
                "case": 1,
                "default": 1,
                "try": 1,
                "this": 1,
                "switch": 1,
                "continue": 1,
                "typeof": 1,
                "delete": 1
            },
            literal: {
                "true": 1,
                "false": 1,
                "null": 1
            }
        },
        c: [hljs.ASM, hljs.QSM, hljs.CLCM, hljs.CBLCLM, hljs.CNM, {
            b: "(" + hljs.RSR + "|case|return|throw)\\s*",
            k: {
                "return": 1,
                "throw": 1,
                "case": 1
            },
            c: [hljs.CLCM, hljs.CBLCLM, {
                cN: "regexp",
                b: "/",
                e: "/[gim]*",
                c: [{
                    b: "\\\\/"
                }]
            }],
            r: 0
        }, {
            cN: "function",
            b: "\\bfunction\\b",
            e: "{",
            k: {
                "function": 1
            },
            c: [{
                cN: "title",
                b: "[A-Za-z$_][0-9A-Za-z$_]*"
            }, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: [hljs.ASM, hljs.QSM, hljs.CLCM, hljs.CBLCLM]
            }]
        }]
    }
};
hljs.LANGUAGES.css = function() {
    var a = {
        cN: "function",
        b: hljs.IR + "\\(",
        e: "\\)",
        c: [{
            eW: true,
            eE: true,
            c: [hljs.NM, hljs.ASM, hljs.QSM]
        }]
    };
    return {
        cI: true,
        dM: {
            i: "[=/|']",
            c: [hljs.CBLCLM, {
                cN: "id",
                b: "\\#[A-Za-z0-9_-]+"
            }, {
                cN: "class",
                b: "\\.[A-Za-z0-9_-]+",
                r: 0
            }, {
                cN: "attr_selector",
                b: "\\[",
                e: "\\]",
                i: "$"
            }, {
                cN: "pseudo",
                b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
            }, {
                cN: "at_rule",
                b: "@(font-face|page)",
                l: "[a-z-]+",
                k: {
                    "font-face": 1,
                    page: 1
                }
            }, {
                cN: "at_rule",
                b: "@",
                e: "[{;]",
                eE: true,
                k: {
                    "import": 1,
                    page: 1,
                    media: 1,
                    charset: 1
                },
                c: [a, hljs.ASM, hljs.QSM, hljs.NM]
            }, {
                cN: "tag",
                b: hljs.IR,
                r: 0
            }, {
                cN: "rules",
                b: "{",
                e: "}",
                i: "[^\\s]",
                r: 0,
                c: [hljs.CBLCLM, {
                    cN: "rule",
                    b: "[^\\s]",
                    rB: true,
                    e: ";",
                    eW: true,
                    c: [{
                        cN: "attribute",
                        b: "[A-Z\\_\\.\\-]+",
                        e: ":",
                        eE: true,
                        i: "[^\\s]",
                        starts: {
                            cN: "value",
                            eW: true,
                            eE: true,
                            c: [a, hljs.NM, hljs.QSM, hljs.ASM, hljs.CBLCLM, {
                                cN: "hexcolor",
                                b: "\\#[0-9A-F]+"
                            }, {
                                cN: "important",
                                b: "!important"
                            }]
                        }
                    }]
                }]
            }]
        }
    }
}();
hljs.LANGUAGES.xml = function() {
    var b = "[A-Za-z0-9\\._:-]+";
    var a = {
        eW: true,
        c: [{
            cN: "attribute",
            b: b,
            r: 0
        }, {
            b: '="',
            rB: true,
            e: '"',
            c: [{
                cN: "value",
                b: '"',
                eW: true
            }]
        }, {
            b: "='",
            rB: true,
            e: "'",
            c: [{
                cN: "value",
                b: "'",
                eW: true
            }]
        }, {
            b: "=",
            c: [{
                cN: "value",
                b: "[^\\s/>]+"
            }]
        }]
    };
    return {
        cI: true,
        dM: {
            c: [{
                cN: "pi",
                b: "<\\?",
                e: "\\?>",
                r: 10
            }, {
                cN: "doctype",
                b: "<!DOCTYPE",
                e: ">",
                r: 10,
                c: [{
                    b: "\\[",
                    e: "\\]"
                }]
            }, {
                cN: "comment",
                b: "<!--",
                e: "-->",
                r: 10
            }, {
                cN: "cdata",
                b: "<\\!\\[CDATA\\[",
                e: "\\]\\]>",
                r: 10
            }, {
                cN: "tag",
                b: "<style",
                e: ">",
                k: {
                    title: {
                        style: 1
                    }
                },
                c: [a],
                starts: {
                    cN: "css",
                    e: "</style>",
                    rE: true,
                    sL: "css"
                }
            }, {
                cN: "tag",
                b: "<script",
                e: ">",
                k: {
                    title: {
                        script: 1
                    }
                },
                c: [a],
                starts: {
                    cN: "javascript",
                    e: "<\/script>",
                    rE: true,
                    sL: "javascript"
                }
            }, {
                cN: "vbscript",
                b: "<%",
                e: "%>",
                sL: "vbscript"
            }, {
                cN: "tag",
                b: "</?",
                e: "/?>",
                c: [{
                    cN: "title",
                    b: "[^ />]+"
                }, a]
            }]
        }
    }
}();
hljs.LANGUAGES.java = {
    dM: {
        k: {
            "false": 1,
            "synchronized": 1,
            "int": 1,
            "abstract": 1,
            "float": 1,
            "private": 1,
            "char": 1,
            "interface": 1,
            "boolean": 1,
            "static": 1,
            "null": 1,
            "if": 1,
            "const": 1,
            "for": 1,
            "true": 1,
            "while": 1,
            "long": 1,
            "throw": 1,
            strictfp: 1,
            "finally": 1,
            "protected": 1,
            "extends": 1,
            "import": 1,
            "native": 1,
            "final": 1,
            "implements": 1,
            "return": 1,
            "void": 1,
            "enum": 1,
            "else": 1,
            "break": 1,
            "transient": 1,
            "new": 1,
            "catch": 1,
            "instanceof": 1,
            "byte": 1,
            "super": 1,
            "class": 1,
            "volatile": 1,
            "case": 1,
            assert: 1,
            "short": 1,
            "package": 1,
            "default": 1,
            "double": 1,
            "public": 1,
            "try": 1,
            "this": 1,
            "switch": 1,
            "continue": 1,
            "throws": 1
        },
        c: [{
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            c: [{
                cN: "javadoctag",
                b: "@[A-Za-z]+"
            }],
            r: 10
        }, hljs.CLCM, hljs.CBLCLM, hljs.ASM, hljs.QSM, {
            cN: "class",
            b: "(class |interface )",
            e: "{",
            k: {
                "class": 1,
                "interface": 1
            },
            i: ":",
            c: [{
                b: "(implements|extends)",
                k: {
                    "extends": 1,
                    "implements": 1
                },
                r: 10
            }, {
                cN: "title",
                b: hljs.UIR
            }]
        }, hljs.CNM, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        }]
    }
};
hljs.LANGUAGES.php = {
    cI: true,
    dM: {
        k: {
            and: 1,
            include_once: 1,
            list: 1,
            "abstract": 1,
            global: 1,
            "private": 1,
            echo: 1,
            "interface": 1,
            as: 1,
            "static": 1,
            endswitch: 1,
            array: 1,
            "null": 1,
            "if": 1,
            endwhile: 1,
            or: 1,
            "const": 1,
            "for": 1,
            endforeach: 1,
            self: 1,
            "var": 1,
            "while": 1,
            isset: 1,
            "public": 1,
            "protected": 1,
            exit: 1,
            foreach: 1,
            "throw": 1,
            elseif: 1,
            "extends": 1,
            include: 1,
            __FILE__: 1,
            empty: 1,
            require_once: 1,
            "function": 1,
            "do": 1,
            xor: 1,
            "return": 1,
            "implements": 1,
            parent: 1,
            clone: 1,
            use: 1,
            __CLASS__: 1,
            __LINE__: 1,
            "else": 1,
            "break": 1,
            print: 1,
            "eval": 1,
            "new": 1,
            "catch": 1,
            __METHOD__: 1,
            "class": 1,
            "case": 1,
            exception: 1,
            php_user_filter: 1,
            "default": 1,
            die: 1,
            require: 1,
            __FUNCTION__: 1,
            enddeclare: 1,
            "final": 1,
            "try": 1,
            "this": 1,
            "switch": 1,
            "continue": 1,
            endfor: 1,
            endif: 1,
            declare: 1,
            unset: 1,
            "true": 1,
            "false": 1,
            namespace: 1
        },
        c: [hljs.CLCM, hljs.HCM, {
            cN: "comment",
            b: "/\\*",
            e: "\\*/",
            c: [{
                cN: "phpdoc",
                b: "\\s@[A-Za-z]+",
                r: 10
            }]
        }, hljs.CNM, hljs.inherit(hljs.ASM, {
            i: null
        }), hljs.inherit(hljs.QSM, {
            i: null
        }), {
            cN: "variable",
            b: "\\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"
        }, {
            cN: "preprocessor",
            b: "<\\?php",
            r: 10
        }, {
            cN: "preprocessor",
            b: "\\?>"
        }]
    }
};
hljs.tabReplace = '    ';
hljs.initHighlighting();

/*! ClickedV1 */
$(function() {
    $(".button-reply").on("click", function() {
        $(".button-reply").removeClass('clicked');
        $(this).addClass('clicked')
    });
    $(".button-cancel").on("click", function() {
        $(".button-reply").removeClass('clicked')
    })
});
