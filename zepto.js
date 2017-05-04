/*! Zepto 1.1.6 (generated with Zepto Builder) - zepto event ajax form ie fx detect fx_methods touch data assets selector - zeptojs.com/license */
var Zepto = function () {
    function t(t) {
        return null == t ? String(t) : W[Y.call(t)] || "object"
    }

    function e(e) {
        return "function" == t(e)
    }

    function n(t) {
        return null != t && t == t.window
    }

    function i(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }

    function r(e) {
        return "object" == t(e)
    }

    function o(t) {
        return r(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function a(t) {
        return "number" == typeof t.length
    }

    function s(t) {
        return A.call(t, function (t) {
            return null != t
        })
    }

    function u(t) {
        return t.length > 0 ? S.fn.concat.apply([], t) : t
    }

    function c(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function l(t) {
        return t in Z ? Z[t] : Z[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function f(t, e) {
        return "number" != typeof e || L[c(t)] ? e : e + "px"
    }

    function h(t) {
        var e, n;
        return k[t] || (e = D.createElement(t), D.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), k[t] = n), k[t]
    }

    function p(t) {
        return "children" in t ? M.call(t.children) : S.map(t.childNodes, function (t) {
            return 1 == t.nodeType ? t : void 0
        })
    }

    function d(t, e) {
        var n, i = t ? t.length : 0;
        for (n = 0; i > n; n++)this[n] = t[n];
        this.length = i, this.selector = e || ""
    }

    function m(t, e, n) {
        for (E in e)n && (o(e[E]) || Q(e[E])) ? (o(e[E]) && !o(t[E]) && (t[E] = {}), Q(e[E]) && !Q(t[E]) && (t[E] = []), m(t[E], e[E], n)) : e[E] !== T && (t[E] = e[E])
    }

    function v(t, e) {
        return null == e ? S(t) : S(t).filter(e)
    }

    function g(t, n, i, r) {
        return e(n) ? n.call(t, i, r) : n
    }

    function y(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }

    function b(t, e) {
        var n = t.className || "", i = n && n.baseVal !== T;
        return e === T ? i ? n.baseVal : n : void(i ? n.baseVal = e : t.className = e)
    }

    function w(t) {
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? S.parseJSON(t) : t) : t
        } catch (e) {
            return t
        }
    }

    function x(t, e) {
        e(t);
        for (var n = 0, i = t.childNodes.length; i > n; n++)x(t.childNodes[n], e)
    }

    var T, E, S, C, j, P, O = [], N = O.concat, A = O.filter, M = O.slice, D = window.document, k = {}, Z = {}, L = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, $ = /^\s*<(\w+|!)[^>]*>/, R = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, _ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, z = /^(?:body|html)$/i, F = /([A-Z])/g, q = ["val", "css", "html", "text", "data", "width", "height", "offset"], I = ["after", "prepend", "before", "append"], B = D.createElement("table"), V = D.createElement("tr"), H = {
        tr: D.createElement("tbody"),
        tbody: B,
        thead: B,
        tfoot: B,
        td: V,
        th: V,
        "*": D.createElement("div")
    }, U = /complete|loaded|interactive/, X = /^[\w-]*$/, W = {}, Y = W.toString, G = {}, J = D.createElement("div"), K = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    }, Q = Array.isArray || function (t) {
            return t instanceof Array
        };
    return G.matches = function (t, e) {
        if (!e || !t || 1 !== t.nodeType)return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n)return n.call(t, e);
        var i, r = t.parentNode, o = !r;
        return o && (r = J).appendChild(t), i = ~G.qsa(r, e).indexOf(t), o && J.removeChild(t), i
    }, j = function (t) {
        return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, P = function (t) {
        return A.call(t, function (e, n) {
            return t.indexOf(e) == n
        })
    }, G.fragment = function (t, e, n) {
        var i, r, a;
        return R.test(t) && (i = S(D.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(_, "<$1></$2>")), e === T && (e = $.test(t) && RegExp.$1), e in H || (e = "*"), a = H[e], a.innerHTML = "" + t, i = S.each(M.call(a.childNodes), function () {
            a.removeChild(this)
        })), o(n) && (r = S(i), S.each(n, function (t, e) {
            q.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
        })), i
    }, G.Z = function (t, e) {
        return new d(t, e)
    }, G.isZ = function (t) {
        return t instanceof G.Z
    }, G.init = function (t, n) {
        var i;
        if (!t)return G.Z();
        if ("string" == typeof t)if (t = t.trim(), "<" == t[0] && $.test(t))i = G.fragment(t, RegExp.$1, n), t = null; else {
            if (n !== T)return S(n).find(t);
            i = G.qsa(D, t)
        } else {
            if (e(t))return S(D).ready(t);
            if (G.isZ(t))return t;
            if (Q(t))i = s(t); else if (r(t))i = [t], t = null; else if ($.test(t))i = G.fragment(t.trim(), RegExp.$1, n), t = null; else {
                if (n !== T)return S(n).find(t);
                i = G.qsa(D, t)
            }
        }
        return G.Z(i, t)
    }, S = function (t, e) {
        return G.init(t, e)
    }, S.extend = function (t) {
        var e, n = M.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
            m(t, n, e)
        }), t
    }, G.qsa = function (t, e) {
        var n, i = "#" == e[0], r = !i && "." == e[0], o = i || r ? e.slice(1) : e, a = X.test(o);
        return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : M.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, S.contains = D.documentElement.contains ? function (t, e) {
        return t !== e && t.contains(e)
    } : function (t, e) {
        for (; e && (e = e.parentNode);)if (e === t)return !0;
        return !1
    }, S.type = t, S.isFunction = e, S.isWindow = n, S.isArray = Q, S.isPlainObject = o, S.isEmptyObject = function (t) {
        var e;
        for (e in t)return !1;
        return !0
    }, S.inArray = function (t, e, n) {
        return O.indexOf.call(e, t, n)
    }, S.camelCase = j, S.trim = function (t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }, S.uuid = 0, S.support = {}, S.expr = {}, S.noop = function () {
    }, S.map = function (t, e) {
        var n, i, r, o = [];
        if (a(t))for (i = 0; i < t.length; i++)n = e(t[i], i), null != n && o.push(n); else for (r in t)n = e(t[r], r), null != n && o.push(n);
        return u(o)
    }, S.each = function (t, e) {
        var n, i;
        if (a(t)) {
            for (n = 0; n < t.length; n++)if (e.call(t[n], n, t[n]) === !1)return t
        } else for (i in t)if (e.call(t[i], i, t[i]) === !1)return t;
        return t
    }, S.grep = function (t, e) {
        return A.call(t, e)
    }, window.JSON && (S.parseJSON = JSON.parse), S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        W["[object " + e + "]"] = e.toLowerCase()
    }), S.fn = {
        constructor: G.Z,
        length: 0,
        forEach: O.forEach,
        reduce: O.reduce,
        push: O.push,
        sort: O.sort,
        splice: O.splice,
        indexOf: O.indexOf,
        concat: function () {
            var t, e, n = [];
            for (t = 0; t < arguments.length; t++)e = arguments[t], n[t] = G.isZ(e) ? e.toArray() : e;
            return N.apply(G.isZ(this) ? this.toArray() : this, n)
        },
        map: function (t) {
            return S(S.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return S(M.apply(this, arguments))
        },
        ready: function (t) {
            return U.test(D.readyState) && D.body ? t(S) : D.addEventListener("DOMContentLoaded", function () {
                t(S)
            }, !1), this
        },
        get: function (t) {
            return t === T ? M.call(this) : this[t >= 0 ? t : t + this.length]
        },
        toArray: function () {
            return this.get()
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function (t) {
            return O.every.call(this, function (e, n) {
                return t.call(e, n, e) !== !1
            }), this
        },
        filter: function (t) {
            return e(t) ? this.not(this.not(t)) : S(A.call(this, function (e) {
                return G.matches(e, t)
            }))
        },
        add: function (t, e) {
            return S(P(this.concat(S(t, e))))
        },
        is: function (t) {
            return this.length > 0 && G.matches(this[0], t)
        },
        not: function (t) {
            var n = [];
            if (e(t) && t.call !== T)this.each(function (e) {
                t.call(this, e) || n.push(this)
            }); else {
                var i = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? M.call(t) : S(t);
                this.forEach(function (t) {
                    i.indexOf(t) < 0 && n.push(t)
                })
            }
            return S(n)
        },
        has: function (t) {
            return this.filter(function () {
                return r(t) ? S.contains(this, t) : S(this).find(t).size()
            })
        },
        eq: function (t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function () {
            var t = this[0];
            return t && !r(t) ? t : S(t)
        },
        last: function () {
            var t = this[this.length - 1];
            return t && !r(t) ? t : S(t)
        },
        find: function (t) {
            var e, n = this;
            return e = t ? "object" == typeof t ? S(t).filter(function () {
                var t = this;
                return O.some.call(n, function (e) {
                    return S.contains(e, t)
                })
            }) : 1 == this.length ? S(G.qsa(this[0], t)) : this.map(function () {
                return G.qsa(this, t)
            }) : S()
        },
        closest: function (t, e) {
            var n = this[0], r = !1;
            for ("object" == typeof t && (r = S(t)); n && !(r ? r.indexOf(n) >= 0 : G.matches(n, t));)n = n !== e && !i(n) && n.parentNode;
            return S(n)
        },
        parents: function (t) {
            for (var e = [], n = this; n.length > 0;)n = S.map(n, function (t) {
                return (t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
            });
            return v(e, t)
        },
        parent: function (t) {
            return v(P(this.pluck("parentNode")), t)
        },
        children: function (t) {
            return v(this.map(function () {
                return p(this)
            }), t)
        },
        contents: function () {
            return this.map(function () {
                return this.contentDocument || M.call(this.childNodes)
            })
        },
        siblings: function (t) {
            return v(this.map(function (t, e) {
                return A.call(p(e.parentNode), function (t) {
                    return t !== e
                })
            }), t)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (t) {
            return S.map(this, function (e) {
                return e[t]
            })
        },
        show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
            })
        },
        replaceWith: function (t) {
            return this.before(t).remove()
        },
        wrap: function (t) {
            var n = e(t);
            if (this[0] && !n)var i = S(t).get(0), r = i.parentNode || this.length > 1;
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i)
            })
        },
        wrapAll: function (t) {
            if (this[0]) {
                S(this[0]).before(t = S(t));
                for (var e; (e = t.children()).length;)t = e.first();
                S(t).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            var n = e(t);
            return this.each(function (e) {
                var i = S(this), r = i.contents(), o = n ? t.call(this, e) : t;
                r.length ? r.wrapAll(o) : i.append(o)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                S(this).replaceWith(S(this).children())
            }), this
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (t) {
            return this.each(function () {
                var e = S(this);
                (t === T ? "none" == e.css("display") : t) ? e.show() : e.hide()
            })
        },
        prev: function (t) {
            return S(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function (t) {
            return S(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var n = this.innerHTML;
                S(this).empty().append(g(this, t, e, n))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var n = g(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this.pluck("textContent").join("") : null
        },
        attr: function (t, e) {
            var n;
            return "string" != typeof t || 1 in arguments ? this.each(function (n) {
                if (1 === this.nodeType)if (r(t))for (E in t)y(this, E, t[E]); else y(this, t, g(this, e, n, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : T
        },
        removeAttr: function (t) {
            return this.each(function () {
                1 === this.nodeType && t.split(" ").forEach(function (t) {
                    y(this, t)
                }, this)
            })
        },
        prop: function (t, e) {
            return t = K[t] || t, 1 in arguments ? this.each(function (n) {
                this[t] = g(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function (t, e) {
            var n = "data-" + t.replace(F, "-$1").toLowerCase(), i = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== i ? w(i) : T
        },
        val: function (t) {
            return 0 in arguments ? this.each(function (e) {
                this.value = g(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? S(this[0]).find("option").filter(function () {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function (t) {
            if (t)return this.each(function (e) {
                var n = S(this), i = g(this, t, e, n.offset()), r = n.offsetParent().offset(), o = {
                    top: i.top - r.top,
                    left: i.left - r.left
                };
                "static" == n.css("position") && (o.position = "relative"), n.css(o)
            });
            if (!this.length)return null;
            if (!S.contains(D.documentElement, this[0]))return {top: 0, left: 0};
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function (e, n) {
            if (arguments.length < 2) {
                var i, r = this[0];
                if (!r)return;
                if (i = getComputedStyle(r, ""), "string" == typeof e)return r.style[j(e)] || i.getPropertyValue(e);
                if (Q(e)) {
                    var o = {};
                    return S.each(e, function (t, e) {
                        o[e] = r.style[j(e)] || i.getPropertyValue(e)
                    }), o
                }
            }
            var a = "";
            if ("string" == t(e))n || 0 === n ? a = c(e) + ":" + f(e, n) : this.each(function () {
                this.style.removeProperty(c(e))
            }); else for (E in e)e[E] || 0 === e[E] ? a += c(E) + ":" + f(E, e[E]) + ";" : this.each(function () {
                this.style.removeProperty(c(E))
            });
            return this.each(function () {
                this.style.cssText += ";" + a
            })
        },
        index: function (t) {
            return t ? this.indexOf(S(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (t) {
            return t ? O.some.call(this, function (t) {
                return this.test(b(t))
            }, l(t)) : !1
        },
        addClass: function (t) {
            return t ? this.each(function (e) {
                if ("className" in this) {
                    C = [];
                    var n = b(this), i = g(this, t, e, n);
                    i.split(/\s+/g).forEach(function (t) {
                        S(this).hasClass(t) || C.push(t)
                    }, this), C.length && b(this, n + (n ? " " : "") + C.join(" "))
                }
            }) : this
        },
        removeClass: function (t) {
            return this.each(function (e) {
                if ("className" in this) {
                    if (t === T)return b(this, "");
                    C = b(this), g(this, t, e, C).split(/\s+/g).forEach(function (t) {
                        C = C.replace(l(t), " ")
                    }), b(this, C.trim())
                }
            })
        },
        toggleClass: function (t, e) {
            return t ? this.each(function (n) {
                var i = S(this), r = g(this, t, n, b(this));
                r.split(/\s+/g).forEach(function (t) {
                    (e === T ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t)
                })
            }) : this
        },
        scrollTop: function (t) {
            if (this.length) {
                var e = "scrollTop" in this[0];
                return t === T ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
                    this.scrollTop = t
                } : function () {
                    this.scrollTo(this.scrollX, t)
                })
            }
        },
        scrollLeft: function (t) {
            if (this.length) {
                var e = "scrollLeft" in this[0];
                return t === T ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
                    this.scrollLeft = t
                } : function () {
                    this.scrollTo(t, this.scrollY)
                })
            }
        },
        position: function () {
            if (this.length) {
                var t = this[0], e = this.offsetParent(), n = this.offset(), i = z.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : e.offset();
                return n.top -= parseFloat(S(t).css("margin-top")) || 0, n.left -= parseFloat(S(t).css("margin-left")) || 0, i.top += parseFloat(S(e[0]).css("border-top-width")) || 0, i.left += parseFloat(S(e[0]).css("border-left-width")) || 0, {
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || D.body; t && !z.test(t.nodeName) && "static" == S(t).css("position");)t = t.offsetParent;
                return t
            })
        }
    }, S.fn.detach = S.fn.remove, ["width", "height"].forEach(function (t) {
        var e = t.replace(/./, function (t) {
            return t[0].toUpperCase()
        });
        S.fn[t] = function (r) {
            var o, a = this[0];
            return r === T ? n(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function (e) {
                a = S(this), a.css(t, g(this, r, e, a[t]()))
            })
        }
    }), I.forEach(function (e, n) {
        var i = n % 2;
        S.fn[e] = function () {
            var e, r, o = S.map(arguments, function (n) {
                return e = t(n), "object" == e || "array" == e || null == n ? n : G.fragment(n)
            }), a = this.length > 1;
            return o.length < 1 ? this : this.each(function (t, e) {
                r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                var s = S.contains(D.documentElement, r);
                o.forEach(function (t) {
                    if (a)t = t.cloneNode(!0); else if (!r)return S(t).remove();
                    r.insertBefore(t, e), s && x(t, function (t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }, S.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function (t) {
            return S(t)[e](this), this
        }
    }), G.Z.prototype = d.prototype = S.fn, G.uniq = P, G.deserializeValue = w, S.zepto = G, S
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), "function" == typeof define && define.amd && define("zepto", [], function () {
    return Zepto
}), function (t) {
    function e(e, n, i) {
        var r = t.Event(n);
        return t(e).trigger(r, i), !r.isDefaultPrevented()
    }

    function n(t, n, i, r) {
        return t.global ? e(n || y, i, r) : void 0
    }

    function i(e) {
        e.global && 0 === t.active++ && n(e, null, "ajaxStart")
    }

    function r(e) {
        e.global && !--t.active && n(e, null, "ajaxStop")
    }

    function o(t, e) {
        var i = e.context;
        return e.beforeSend.call(i, t, e) === !1 || n(e, i, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void n(e, i, "ajaxSend", [t, e])
    }

    function a(t, e, i, r) {
        var o = i.context, a = "success";
        i.success.call(o, t, a, e), r && r.resolveWith(o, [t, a, e]), n(i, o, "ajaxSuccess", [e, i, t]), u(a, e, i)
    }

    function s(t, e, i, r, o) {
        var a = r.context;
        r.error.call(a, i, e, t), o && o.rejectWith(a, [i, e, t]), n(r, a, "ajaxError", [i, r, t || e]), u(e, i, r)
    }

    function u(t, e, i) {
        var o = i.context;
        i.complete.call(o, e, t), n(i, o, "ajaxComplete", [e, i]), r(i)
    }

    function c() {
    }

    function l(t) {
        return t && (t = t.split(";", 2)[0]), t && (t == E ? "html" : t == T ? "json" : w.test(t) ? "script" : x.test(t) && "xml") || "text"
    }

    function f(t, e) {
        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }

    function h(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
    }

    function p(e, n, i, r) {
        return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
            url: e,
            data: n,
            success: i,
            dataType: r
        }
    }

    function d(e, n, i, r) {
        var o, a = t.isArray(n), s = t.isPlainObject(n);
        t.each(n, function (n, u) {
            o = t.type(u), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !r && a ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? d(e, u, i, n) : e.add(n, u)
        })
    }

    var m, v, g = 0, y = window.document, b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, w = /^(?:text|application)\/javascript/i, x = /^(?:text|application)\/xml/i, T = "application/json", E = "text/html", S = /^\s*$/, C = y.createElement("a");
    C.href = window.location.href, t.active = 0, t.ajaxJSONP = function (e, n) {
        if (!("type" in e))return t.ajax(e);
        var i, r, u = e.jsonpCallback, c = (t.isFunction(u) ? u() : u) || "jsonp" + ++g, l = y.createElement("script"), f = window[c], h = function (e) {
            t(l).triggerHandler("error", e || "abort")
        }, p = {abort: h};
        return n && n.promise(p), t(l).on("load error", function (o, u) {
            clearTimeout(r), t(l).off().remove(), "error" != o.type && i ? a(i[0], p, e, n) : s(null, u || "error", p, e, n), window[c] = f, i && t.isFunction(f) && f(i[0]), f = i = void 0
        }), o(p, e) === !1 ? (h("abort"), p) : (window[c] = function () {
            i = arguments
        }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function () {
            h("timeout")
        }, e.timeout)), p)
    }, t.ajaxSettings = {
        type: "GET",
        beforeSend: c,
        success: c,
        error: c,
        complete: c,
        context: null,
        global: !0,
        xhr: function () {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: T,
            xml: "application/xml, text/xml",
            html: E,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    }, t.ajax = function (e) {
        var n, r, u = t.extend({}, e || {}), p = t.Deferred && t.Deferred();
        for (m in t.ajaxSettings)void 0 === u[m] && (u[m] = t.ajaxSettings[m]);
        i(u), u.crossDomain || (n = y.createElement("a"), n.href = u.url, n.href = n.href, u.crossDomain = C.protocol + "//" + C.host != n.protocol + "//" + n.host), u.url || (u.url = window.location.toString()), (r = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, r)), h(u);
        var d = u.dataType, g = /\?.+=\?/.test(u.url);
        if (g && (d = "jsonp"), u.cache !== !1 && (e && e.cache === !0 || "script" != d && "jsonp" != d) || (u.url = f(u.url, "_=" + Date.now())), "jsonp" == d)return g || (u.url = f(u.url, u.jsonp ? u.jsonp + "=?" : u.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(u, p);
        var b, w = u.accepts[d], x = {}, T = function (t, e) {
            x[t.toLowerCase()] = [t, e]
        }, E = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : window.location.protocol, j = u.xhr(), P = j.setRequestHeader;
        if (p && p.promise(j), u.crossDomain || T("X-Requested-With", "XMLHttpRequest"), T("Accept", w || "*/*"), (w = u.mimeType || w) && (w.indexOf(",") > -1 && (w = w.split(",", 2)[0]), j.overrideMimeType && j.overrideMimeType(w)), (u.contentType || u.contentType !== !1 && u.data && "GET" != u.type.toUpperCase()) && T("Content-Type", u.contentType || "application/x-www-form-urlencoded"), u.headers)for (v in u.headers)T(v, u.headers[v]);
        if (j.setRequestHeader = T, j.onreadystatechange = function () {
                if (4 == j.readyState) {
                    j.onreadystatechange = c, clearTimeout(b);
                    var e, n = !1;
                    if (j.status >= 200 && j.status < 300 || 304 == j.status || 0 == j.status && "file:" == E) {
                        if (d = d || l(u.mimeType || j.getResponseHeader("content-type")), "arraybuffer" == j.responseType || "blob" == j.responseType)e = j.response; else {
                            e = j.responseText;
                            try {
                                "script" == d ? (1, eval)(e) : "xml" == d ? e = j.responseXML : "json" == d && (e = S.test(e) ? null : t.parseJSON(e))
                            } catch (i) {
                                n = i
                            }
                            if (n)return s(n, "parsererror", j, u, p)
                        }
                        a(e, j, u, p)
                    } else s(j.statusText || null, j.status ? "error" : "abort", j, u, p)
                }
            }, o(j, u) === !1)return j.abort(), s(null, "abort", j, u, p), j;
        if (u.xhrFields)for (v in u.xhrFields)j[v] = u.xhrFields[v];
        var O = "async" in u ? u.async : !0;
        j.open(u.type, u.url, O, u.username, u.password);
        for (v in x)P.apply(j, x[v]);
        return u.timeout > 0 && (b = setTimeout(function () {
            j.onreadystatechange = c, j.abort(), s(null, "timeout", j, u, p)
        }, u.timeout)), j.send(u.data ? u.data : null), j
    }, t.get = function () {
        return t.ajax(p.apply(null, arguments))
    }, t.post = function () {
        var e = p.apply(null, arguments);
        return e.type = "POST", t.ajax(e)
    }, t.getJSON = function () {
        var e = p.apply(null, arguments);
        return e.dataType = "json", t.ajax(e)
    }, t.fn.load = function (e, n, i) {
        if (!this.length)return this;
        var r, o = this, a = e.split(/\s/), s = p(e, n, i), u = s.success;
        return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function (e) {
            o.html(r ? t("<div>").html(e.replace(b, "")).find(r) : e), u && u.apply(o, arguments)
        }, t.ajax(s), this
    };
    var j = encodeURIComponent;
    t.param = function (e, n) {
        var i = [];
        return i.add = function (e, n) {
            t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(j(e) + "=" + j(n))
        }, d(i, e, n), i.join("&").replace(/%20/g, "+")
    }
}(Zepto), function (t) {
    var e, n = [];
    t.fn.remove = function () {
        return this.each(function () {
            this.parentNode && ("IMG" === this.tagName && (n.push(this), this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", e && clearTimeout(e), e = setTimeout(function () {
                n = []
            }, 6e4)), this.parentNode.removeChild(this))
        })
    }
}(Zepto), function (t) {
    function e(e, i) {
        var u = e[s], c = u && r[u];
        if (void 0 === i)return c || n(e);
        if (c) {
            if (i in c)return c[i];
            var l = a(i);
            if (l in c)return c[l]
        }
        return o.call(t(e), i)
    }

    function n(e, n, o) {
        var u = e[s] || (e[s] = ++t.uuid), c = r[u] || (r[u] = i(e));
        return void 0 !== n && (c[a(n)] = o), c
    }

    function i(e) {
        var n = {};
        return t.each(e.attributes || u, function (e, i) {
            0 == i.name.indexOf("data-") && (n[a(i.name.replace("data-", ""))] = t.zepto.deserializeValue(i.value))
        }), n
    }

    var r = {}, o = t.fn.data, a = t.camelCase, s = t.expando = "Zepto" + +new Date, u = [];
    t.fn.data = function (i, r) {
        return void 0 === r ? t.isPlainObject(i) ? this.each(function (e, r) {
            t.each(i, function (t, e) {
                n(r, t, e)
            })
        }) : 0 in this ? e(this[0], i) : void 0 : this.each(function () {
            n(this, i, r)
        })
    }, t.fn.removeData = function (e) {
        return "string" == typeof e && (e = e.split(/\s+/)), this.each(function () {
            var n = this[s], i = n && r[n];
            i && t.each(e || i, function (t) {
                delete i[e ? a(this) : t]
            })
        })
    }, ["remove", "empty"].forEach(function (e) {
        var n = t.fn[e];
        t.fn[e] = function () {
            var t = this.find("*");
            return "remove" === e && (t = t.add(this)), t.removeData(), n.call(this)
        }
    })
}(Zepto), function (t) {
    function e(t, e) {
        var n = this.os = {}, i = this.browser = {}, r = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/), o = t.match(/(Android);?[\s\/]+([\d.]+)?/), a = !!t.match(/\(Macintosh\; Intel /), s = t.match(/(iPad).*OS\s([\d_]+)/), u = t.match(/(iPod)(.*OS\s([\d_]+))?/), c = !s && t.match(/(iPhone\sOS)\s([\d_]+)/), l = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), f = /Win\d{2}|Windows/.test(e), h = t.match(/Windows Phone ([\d.]+)/), p = l && t.match(/TouchPad/), d = t.match(/Kindle\/([\d.]+)/), m = t.match(/Silk\/([\d._]+)/), v = t.match(/(BlackBerry).*Version\/([\d.]+)/), g = t.match(/(BB10).*Version\/([\d.]+)/), y = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/), b = t.match(/PlayBook/), w = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/), x = t.match(/Firefox\/([\d.]+)/), T = t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/), E = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/), S = !w && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/), C = S || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
        (i.webkit = !!r) && (i.version = r[1]), o && (n.android = !0, n.version = o[2]), c && !u && (n.ios = n.iphone = !0, n.version = c[2].replace(/_/g, ".")), s && (n.ios = n.ipad = !0, n.version = s[2].replace(/_/g, ".")), u && (n.ios = n.ipod = !0, n.version = u[3] ? u[3].replace(/_/g, ".") : null), h && (n.wp = !0, n.version = h[1]), l && (n.webos = !0, n.version = l[2]), p && (n.touchpad = !0), v && (n.blackberry = !0, n.version = v[2]), g && (n.bb10 = !0, n.version = g[2]), y && (n.rimtabletos = !0, n.version = y[2]), b && (i.playbook = !0), d && (n.kindle = !0, n.version = d[1]), m && (i.silk = !0, i.version = m[1]), !m && n.android && t.match(/Kindle Fire/) && (i.silk = !0), w && (i.chrome = !0, i.version = w[1]), x && (i.firefox = !0, i.version = x[1]), T && (n.firefoxos = !0, n.version = T[1]), E && (i.ie = !0, i.version = E[1]), C && (a || n.ios || f) && (i.safari = !0, n.ios || (i.version = C[1])), S && (i.webview = !0), n.tablet = !!(s || b || o && !t.match(/Mobile/) || x && t.match(/Tablet/) || E && !t.match(/Phone/) && t.match(/Touch/)), n.phone = !(n.tablet || n.ipod || !(o || c || l || v || g || w && t.match(/Android/) || w && t.match(/CriOS\/([\d.]+)/) || x && t.match(/Mobile/) || E && t.match(/Touch/)))
    }

    e.call(t, navigator.userAgent, navigator.platform), t.__detect = e
}(Zepto), function (t) {
    function e(t) {
        return t._zid || (t._zid = h++)
    }

    function n(t, n, o, a) {
        if (n = i(n), n.ns)var s = r(n.ns);
        return (v[e(t)] || []).filter(function (t) {
            return t && (!n.e || t.e == n.e) && (!n.ns || s.test(t.ns)) && (!o || e(t.fn) === e(o)) && (!a || t.sel == a)
        })
    }

    function i(t) {
        var e = ("" + t).split(".");
        return {e: e[0], ns: e.slice(1).sort().join(" ")}
    }

    function r(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }

    function o(t, e) {
        return t.del && !y && t.e in b || !!e
    }

    function a(t) {
        return w[t] || y && b[t] || t
    }

    function s(n, r, s, u, l, h, p) {
        var d = e(n), m = v[d] || (v[d] = []);
        r.split(/\s/).forEach(function (e) {
            if ("ready" == e)return t(document).ready(s);
            var r = i(e);
            r.fn = s, r.sel = l, r.e in w && (s = function (e) {
                var n = e.relatedTarget;
                return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : void 0
            }), r.del = h;
            var d = h || s;
            r.proxy = function (t) {
                if (t = c(t), !t.isImmediatePropagationStopped()) {
                    t.data = u;
                    var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
                    return e === !1 && (t.preventDefault(), t.stopPropagation()), e
                }
            }, r.i = m.length, m.push(r), "addEventListener" in n && n.addEventListener(a(r.e), r.proxy, o(r, p))
        })
    }

    function u(t, i, r, s, u) {
        var c = e(t);
        (i || "").split(/\s/).forEach(function (e) {
            n(t, e, r, s).forEach(function (e) {
                delete v[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
            })
        })
    }

    function c(e, n) {
        return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(S, function (t, i) {
            var r = n[t];
            e[t] = function () {
                return this[i] = x, r && r.apply(n, arguments)
            }, e[i] = T
        }), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = x)), e
    }

    function l(t) {
        var e, n = {originalEvent: t};
        for (e in t)E.test(e) || t[e] === f || (n[e] = t[e]);
        return c(n, t)
    }

    var f, h = 1, p = Array.prototype.slice, d = t.isFunction, m = function (t) {
        return "string" == typeof t
    }, v = {}, g = {}, y = "onfocusin" in window, b = {
        focus: "focusin",
        blur: "focusout"
    }, w = {mouseenter: "mouseover", mouseleave: "mouseout"};
    g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents", t.event = {
        add: s,
        remove: u
    }, t.proxy = function (n, i) {
        var r = 2 in arguments && p.call(arguments, 2);
        if (d(n)) {
            var o = function () {
                return n.apply(i, r ? r.concat(p.call(arguments)) : arguments)
            };
            return o._zid = e(n), o
        }
        if (m(i))return r ? (r.unshift(n[i], n), t.proxy.apply(null, r)) : t.proxy(n[i], n);
        throw new TypeError("expected function")
    }, t.fn.bind = function (t, e, n) {
        return this.on(t, e, n)
    }, t.fn.unbind = function (t, e) {
        return this.off(t, e)
    }, t.fn.one = function (t, e, n, i) {
        return this.on(t, e, n, i, 1)
    };
    var x = function () {
        return !0
    }, T = function () {
        return !1
    }, E = /^([A-Z]|returnValue$|layer[XY]$)/, S = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function (t, e, n) {
        return this.on(e, t, n)
    }, t.fn.undelegate = function (t, e, n) {
        return this.off(e, t, n)
    }, t.fn.live = function (e, n) {
        return t(document.body).delegate(this.selector, e, n), this
    }, t.fn.die = function (e, n) {
        return t(document.body).undelegate(this.selector, e, n), this
    }, t.fn.on = function (e, n, i, r, o) {
        var a, c, h = this;
        return e && !m(e) ? (t.each(e, function (t, e) {
            h.on(t, n, i, e, o)
        }), h) : (m(n) || d(r) || r === !1 || (r = i, i = n, n = f), (r === f || i === !1) && (r = i, i = f), r === !1 && (r = T), h.each(function (f, h) {
            o && (a = function (t) {
                return u(h, t.type, r), r.apply(this, arguments)
            }), n && (c = function (e) {
                var i, o = t(e.target).closest(n, h).get(0);
                return o && o !== h ? (i = t.extend(l(e), {
                    currentTarget: o,
                    liveFired: h
                }), (a || r).apply(o, [i].concat(p.call(arguments, 1)))) : void 0
            }), s(h, e, r, i, n, c || a)
        }))
    }, t.fn.off = function (e, n, i) {
        var r = this;
        return e && !m(e) ? (t.each(e, function (t, e) {
            r.off(t, n, e)
        }), r) : (m(n) || d(i) || i === !1 || (i = n, n = f), i === !1 && (i = T), r.each(function () {
            u(this, e, i, n)
        }))
    }, t.fn.trigger = function (e, n) {
        return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function () {
            e.type in b && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    }, t.fn.triggerHandler = function (e, i) {
        var r, o;
        return this.each(function (a, s) {
            r = l(m(e) ? t.Event(e) : e), r._args = i, r.target = s, t.each(n(s, e.type || e), function (t, e) {
                return o = e.proxy(r), r.isImmediatePropagationStopped() ? !1 : void 0
            })
        }), o
    }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
        t.fn[e] = function (t) {
            return 0 in arguments ? this.bind(e, t) : this.trigger(e)
        }
    }), t.Event = function (t, e) {
        m(t) || (e = t, t = e.type);
        var n = document.createEvent(g[t] || "Events"), i = !0;
        if (e)for (var r in e)"bubbles" == r ? i = !!e[r] : n[r] = e[r];
        return n.initEvent(t, i, !0), c(n)
    }
}(Zepto), function (t) {
    t.fn.serializeArray = function () {
        var e, n, i = [], r = function (t) {
            return t.forEach ? t.forEach(r) : void i.push({name: e, value: t})
        };
        return this[0] && t.each(this[0].elements, function (i, o) {
            n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
        }), i
    }, t.fn.serialize = function () {
        var t = [];
        return this.serializeArray().forEach(function (e) {
            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
        }), t.join("&")
    }, t.fn.submit = function (e) {
        if (0 in arguments)this.bind("submit", e); else if (this.length) {
            var n = t.Event("submit");
            this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
}(Zepto), function (t, e) {
    function n(t) {
        return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
    }

    function i(t) {
        return r ? r + t : t.toLowerCase()
    }

    var r, o, a, s, u, c, l, f, h, p, d = "", m = {
        Webkit: "webkit",
        Moz: "",
        O: "o"
    }, v = document.createElement("div"), g = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, y = {};
    t.each(m, function (t, n) {
        return v.style[t + "TransitionProperty"] !== e ? (d = "-" + t.toLowerCase() + "-", r = n, !1) : void 0
    }), o = d + "transform", y[a = d + "transition-property"] = y[s = d + "transition-duration"] = y[c = d + "transition-delay"] = y[u = d + "transition-timing-function"] = y[l = d + "animation-name"] = y[f = d + "animation-duration"] = y[p = d + "animation-delay"] = y[h = d + "animation-timing-function"] = "", t.fx = {
        off: r === e && v.style.transitionProperty === e,
        speeds: {_default: 400, fast: 200, slow: 600},
        cssPrefix: d,
        transitionEnd: i("TransitionEnd"),
        animationEnd: i("AnimationEnd")
    }, t.fn.animate = function (n, i, r, o, a) {
        return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, a = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, i, r, o, a)
    }, t.fn.anim = function (i, r, d, m, v) {
        var b, w, x, T = {}, E = "", S = this, C = t.fx.transitionEnd, j = !1;
        if (r === e && (r = t.fx.speeds._default / 1e3), v === e && (v = 0), t.fx.off && (r = 0), "string" == typeof i)T[l] = i, T[f] = r + "s", T[p] = v + "s", T[h] = d || "linear", C = t.fx.animationEnd; else {
            w = [];
            for (b in i)g.test(b) ? E += b + "(" + i[b] + ") " : (T[b] = i[b], w.push(n(b)));
            E && (T[o] = E, w.push(o)), r > 0 && "object" == typeof i && (T[a] = w.join(", "), T[s] = r + "s", T[c] = v + "s", T[u] = d || "linear")
        }
        return x = function (e) {
            if ("undefined" != typeof e) {
                if (e.target !== e.currentTarget)return;
                t(e.target).unbind(C, x)
            } else t(this).unbind(C, x);
            j = !0, t(this).css(y), m && m.call(this)
        }, r > 0 && (this.bind(C, x), setTimeout(function () {
            j || x.call(S)
        }, 1e3 * (r + v) + 25)), this.size() && this.get(0).clientLeft, this.css(T), 0 >= r && setTimeout(function () {
            S.each(function () {
                x.call(this)
            })
        }, 0), this
    }, v = null
}(Zepto), function (t, e) {
    function n(n, i, r, o, a) {
        "function" != typeof i || a || (a = i, i = e);
        var s = {opacity: r};
        return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, i, null, a)
    }

    function i(e, i, r, o) {
        return n(e, i, 0, r, function () {
            a.call(t(this)), o && o.call(this)
        })
    }

    var r = window.document, o = (r.documentElement, t.fn.show), a = t.fn.hide, s = t.fn.toggle;
    t.fn.show = function (t, i) {
        return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", i)
    }, t.fn.hide = function (t, n) {
        return t === e ? a.call(this) : i(this, t, "0,0", n)
    }, t.fn.toggle = function (n, i) {
        return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function () {
            var e = t(this);
            e["none" == e.css("display") ? "show" : "hide"](n, i)
        })
    }, t.fn.fadeTo = function (t, e, i) {
        return n(this, t, e, null, i)
    }, t.fn.fadeIn = function (t, e) {
        var n = this.css("opacity");
        return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e)
    }, t.fn.fadeOut = function (t, e) {
        return i(this, t, null, e)
    }, t.fn.fadeToggle = function (e, n) {
        return this.each(function () {
            var i = t(this);
            i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
        })
    }
}(Zepto), function () {
    try {
        getComputedStyle(void 0)
    } catch (t) {
        var e = getComputedStyle;
        window.getComputedStyle = function (t) {
            try {
                return e(t)
            } catch (n) {
                return null
            }
        }
    }
}(), function (t) {
    function e(e) {
        return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display");
    }

    function n(t, e) {
        t = t.replace(/=#\]/g, '="#"]');
        var n, i, r = s.exec(t);
        if (r && r[2] in a && (n = a[r[2]], i = r[3], t = r[1], i)) {
            var o = Number(i);
            i = isNaN(o) ? i.replace(/^["']|["']$/g, "") : o
        }
        return e(t, n, i)
    }

    var i = t.zepto, r = i.qsa, o = i.matches, a = t.expr[":"] = {
        visible: function () {
            return e(this) ? this : void 0
        }, hidden: function () {
            return e(this) ? void 0 : this
        }, selected: function () {
            return this.selected ? this : void 0
        }, checked: function () {
            return this.checked ? this : void 0
        }, parent: function () {
            return this.parentNode
        }, first: function (t) {
            return 0 === t ? this : void 0
        }, last: function (t, e) {
            return t === e.length - 1 ? this : void 0
        }, eq: function (t, e, n) {
            return t === n ? this : void 0
        }, contains: function (e, n, i) {
            return t(this).text().indexOf(i) > -1 ? this : void 0
        }, has: function (t, e, n) {
            return i.qsa(this, n).length ? this : void 0
        }
    }, s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), u = /^\s*>/, c = "Zepto" + +new Date;
    i.qsa = function (e, o) {
        return n(o, function (n, a, s) {
            try {
                var l;
                !n && a ? n = "*" : u.test(n) && (l = t(e).addClass(c), n = "." + c + " " + n);
                var f = r(e, n)
            } catch (h) {
                throw console.error("error performing selector: %o", o), h
            } finally {
                l && l.removeClass(c)
            }
            return a ? i.uniq(t.map(f, function (t, e) {
                return a.call(t, e, f, s)
            })) : f
        })
    }, i.matches = function (t, e) {
        return n(e, function (e, n, i) {
            return (!e || o(t, e)) && (!n || n.call(t, null, i) === t)
        })
    }
}(Zepto), function (t) {
    function e(t, e, n, i) {
        return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
    }

    function n() {
        l = null, h.last && (h.el.trigger("longTap"), h = {})
    }

    function i() {
        l && clearTimeout(l), l = null
    }

    function r() {
        s && clearTimeout(s), u && clearTimeout(u), c && clearTimeout(c), l && clearTimeout(l), s = u = c = l = null, h = {}
    }

    function o(t) {
        return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
    }

    function a(t, e) {
        return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
    }

    var s, u, c, l, f, h = {}, p = 750;
    t(document).ready(function () {
        var d, m, v, g, y = 0, b = 0;
        "MSGesture" in window && (f = new MSGesture, f.target = document.body), t(document).bind("MSGestureEnd", function (t) {
            var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
            e && (h.el.trigger("swipe"), h.el.trigger("swipe" + e))
        }).on("touchstart MSPointerDown pointerdown", function (e) {
            (!(g = a(e, "down")) || o(e)) && (v = g ? e : e.touches[0], e.touches && 1 === e.touches.length && h.x2 && (h.x2 = void 0, h.y2 = void 0), d = Date.now(), m = d - (h.last || d), h.el = t("tagName" in v.target ? v.target : v.target.parentNode), s && clearTimeout(s), h.x1 = v.pageX, h.y1 = v.pageY, m > 0 && 250 >= m && (h.isDoubleTap = !0), h.last = d, l = setTimeout(n, p), f && g && f.addPointer(e.pointerId))
        }).on("touchmove MSPointerMove pointermove", function (t) {
            (!(g = a(t, "move")) || o(t)) && (v = g ? t : t.touches[0], i(), h.x2 = v.pageX, h.y2 = v.pageY, y += Math.abs(h.x1 - h.x2), b += Math.abs(h.y1 - h.y2))
        }).on("touchend MSPointerUp pointerup", function (n) {
            (!(g = a(n, "up")) || o(n)) && (i(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? c = setTimeout(function () {
                h.el.trigger("swipe"), h.el.trigger("swipe" + e(h.x1, h.x2, h.y1, h.y2)), h = {}
            }, 0) : "last" in h && (30 > y && 30 > b ? u = setTimeout(function () {
                var e = t.Event("tap");
                e.cancelTouch = r, h.el.trigger(e), h.isDoubleTap ? (h.el && h.el.trigger("doubleTap"), h = {}) : s = setTimeout(function () {
                    s = null, h.el && h.el.trigger("singleTap"), h = {}
                }, 250)
            }, 0) : h = {}), y = b = 0)
        }).on("touchcancel MSPointerCancel pointercancel", r), t(window).on("scroll", r)
    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (e) {
        t.fn[e] = function (t) {
            return this.on(e, t)
        }
    })
}(Zepto);