(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"], {
	"0e0e": function(t, a, s) {},
	3530 : function(t, a, s) {
		"use strict";
		s.r(a);
		var e = function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("div", {
				staticClass: "admin"
			},
			[s("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.inputCode,
					expression: "inputCode"
				}],
				staticClass: "form-control appended-form-control",
				attrs: {
					name: "address",
					type: "text",
					placeholder: "请输入您的邀请码"
				},
				domProps: {
					value: t.inputCode
				},
				on: {
					input: function(a) {
						a.target.composing || (t.inputCode = a.target.value)
					}
				}
			}), s("div", {
				staticClass: "button-sum"
			},
			[s("button", {
				staticClass: "mb-lg-6 mb-3 mx-1 btn btn-lg btn-primary btn-pill",
				on: {
					click: t.btn1Fun
				}
			},
			[t._v("我的邀请")]), s("button", {
				staticClass: "mb-lg-6 mb-3 mx-1 btn btn-lg btn-secondary btn-pill",
				on: {
					click: t.btn2Fun
				}
			},
			[t._v("未领取收益")]), s("button", {
				staticClass: "mb-lg-6 mb-3 mx-1 btn btn-lg btn-primary btn-pill",
				on: {
					click: t.btn3Fun
				}
			},
			[t._v("我的绩效")])]), 1 == t.btn ? s("table", {
				staticClass: "show-get-received-table",
				staticStyle: {
					width: "100%",
					border: "1px solid #dddddd"
				}
			},
			[t._m(0), t._l(t.records_children, (function(a, e) {
				return s("tr", {
					key: e
				},
				[s("td", [t._v(" " + t._s(a.child) + " ")])])
			}))], 2) : t._e(), 2 == t.btn ? s("table", {
				staticClass: "show-get-received-table",
				staticStyle: {
					width: "100%",
					border: "1px solid #dddddd"
				}
			},
			[t._m(1), t._l(t.records_unclaimed, (function(a, e) {
				return s("tr", {
					key: e
				},
				[s("td", [t._v(" " + t._s(a.address) + " ")]), s("td", [t._v(" " + t._s(a.amount) + " ")]), s("td", [t._v(" " + t._s(a.hash) + " ")]), s("td", [t._v(" " + t._s(a.at) + " ")])])
			}))], 2) : t._e(), 3 == t.btn ? s("table", {
				staticClass: "show-get-received-table",
				staticStyle: {
					width: "100%",
					border: "1px solid #dddddd"
				}
			},
			[s("div", {
				staticStyle: {
					"align-content": "center"
				}
			},
			[s("button", {
				staticClass: "mb-lg-6 mb-3 mx-1 btn btn-lg btn-primary btn-pill",
				on: {
					click: t.btn1Fun
				}
			},
			[t._v("领取")])]), s("div", [t._v(" 地址：" + t._s(t.records_performance.address) + " ")]), s("div", [t._v(" 未领取：" + t._s(t.records_performance.unclaimed) + " ")]), s("div", [t._v(" 已领取：" + t._s(t.records_performance.claimed) + " ")]), s("div", [t._v(" 最近领取：" + t._s(t.records_performance.lastAt) + " ")])]) : t._e()])
		},
		n = [function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("tr", [s("th", [t._v("被邀请人")])])
		},
		function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("tr", [s("th", [t._v("被邀请人")]), s("th", [t._v("交易数量")]), s("th", [t._v("交易Hash")]), s("th", [t._v("交易时间")])])
		}],
		i = (s("b680"), s("8f40"), s("acef"), s("bc3a")),
		r = s.n(i),
		c = s("01ea"),
		o = s("901e"),
		l = s.n(o),
		d = {
			name: "Admin",
			data: function() {
				return {
					btn: 1,
					inputCode: "",
					records_children: [],
					records_unclaimed: [],
					records_performance: {}
				}
			},
			methods: {
				btn1Fun: function() {
					var t = this;
					this.btn = 1,
					null != this.inputCode && "" != this.inputCode ? (console.log(this.inputCode), r.a.get(c["a"].host + "llevel?" + "code=".concat(this.inputCode)).then((function(a) {
						console.log("res:", a.data),
						t.records_children = [];
						for (var s = 0; s < a.data.length; s++) {
							var e = a.data[s];
							t.records_children.push({
								child: e.address
							})
						}
					})).
					catch((function(t) {}))) : alert("邀请码不能为空")
				},
				btn2Fun: function() {
					var t = this;
					if (this.btn = 2, null != this.inputCode && "" != this.inputCode) {
						console.log(this.inputCode);
						var a = c["a"].host + "ltx?" + "code=".concat(this.inputCode);
						console.log("url:", a),
						r.a.get(c["a"].host + "ltx?" + "code=".concat(this.inputCode)).then((function(a) {
							console.log("res:", a.data),
							t.records_unclaimed = [];
							for (var s = 0; s < a.data.length; s++) {
								var e = a.data[s];
								t.records_unclaimed.push({
									address: e.address,
									amount: new l.a(e.amount).div(1e18).toFixed(2),
									hash: e.hash,
									at: e.at
								})
							}
						})).
						catch((function(t) {}))
					} else alert("邀请码不能为空")
				},
				btn3Fun: function() {
					var t = this;
					this.btn = 3,
					null != this.inputCode && "" != this.inputCode ? (console.log(this.inputCode), r.a.get(c["a"].host + "me?" + "code=".concat(this.inputCode)).then((function(a) {
						console.log("res:", a.data);
						var s = a.data;
						t.records_performance = {
							address: s.address,
							unclaimed: new l.a(s.unclaimed).div(1e18).toFixed(2),
							claimed: new l.a(s.claimed).div(1e18).toFixed(2),
							lastAt: s.last_claim_at
						}
					})).
					catch((function(t) {}))) : alert("邀请码不能为空")
				}
			}
		},
		u = d,
		v = (s("e614"), s("2877")),
		p = Object(v["a"])(u, e, n, !1, null, "1cffe415", null);
		a["default"] = p.exports
	},
	"4b54": function(t, a, s) {
		t.exports = s.p + "img/xin.7b378b80.png"
	},
	"92e9": function(t, a, s) {
		"use strict";
		s.r(a);
		var e = function() {
			var t = this,
			a = t.$createElement,
			e = t._self._c || a;
			return e("div", ["EN" === t.$store.getters.language ? e("div", [e("main", {
				staticClass: "cs-page-wrapper position-relative"
			},
			[e("header", {
				staticClass: "cs-header navbar navbar-expand-md navbar-dark navbar-sticky navbar-floating pt-2 pb-1",
				staticStyle: {
					background: "#000000"
				}
			},
			[e("div", {
				staticClass: "container px-0 px-xl-3"
			},
			[e("a", {
				staticClass: "navbar-brand order-md-1 mr-md-5 mr-0 pr-lg-2",
				attrs: {
					href: "#top",
					"data-scroll": ""
				}
			},
			[t._v(" SHIB NFT ")]), e("div", {
				staticClass: "d-flex align-items-center order-md-3"
			},
			[e("div", {
				class: ["choose-lang", t.show_choose_lans ? "show": ""]
			},
			[e("div", {
				staticClass: "title",
				on: {
					click: function(a) {
						t.show_choose_lans = !t.show_choose_lans
					}
				}
			},
			[e("span", [t._v("CN")]), t._v("简体中文")]), e("div", {
				staticClass: "options"
			},
			[e("a", {
				staticClass: "choose-lang-option",
				attrs: {
					href: "javascript:;",
					"data-lang": "zh"
				},
				on: {
					click: function(a) {
						t.$store.commit("SET_LANGUAGE", "CH"),
						t.show_choose_lans = !1
					}
				}
			},
			[e("span", [t._v("CN")]), t._v("简体中文")]), t._m(0)])]), t._m(1)]), e("nav", {
				staticClass: "collapse navbar-collapse order-md-2",
				attrs: {
					id: "navbarCollapse1"
				}
			},
			[e("ul", {
				staticClass: "navbar-nav mr-auto"
			},
			[e("li", {
				staticClass: "nav-item"
			},
			[e("router-link", {
				staticClass: "nav-link",
				attrs: {
					to: "/",
					"data-scroll": ""
				}
			},
			[t._v("Home")])], 1), e("li", {
				staticClass: "nav-item"
			},
			[e("router-link", {
				staticClass: "nav-link",
				attrs: {
					to: "/nft"
				}
			},
			[t._v("NFT Offering ")])], 1), t._m(2)])])])]), e("section", {
				staticClass: "nft-list"
			},
			[t._m(3), t._m(4), e("ul", {
				staticClass: "pro_item_list clearfix"
			},
			t._l(15, (function(a, n) {
				return e("li", {
					key: n,
					staticClass: "each-item"
				},
				[e("div", {
					staticClass: "picture"
				},
				[e("img", {
					attrs: {
						src: s("cbf8")("./" + (a - 1) + ".png"),
						width: "100%"
					}
				})]), e("div", {
					staticClass: "lans"
				},
				[e("div", {
					staticClass: "l1 "
				},
				[t._v("00" + t._s(a))]), e("div", {
					staticClass: "l2 "
				},
				[t._v(t._s(t.getPrice(a)) + " BNB"), e("span", [e("img", {
					attrs: {
						src: s("4b54"),
						width: "15"
					}
				}), t._v(" " + t._s(t.favourite[a - 1]))])]), e("div", {
					staticClass: "l3"
				},
				[e("span", {
					staticClass: "buy",
					on: {
						click: function(a) {
							return t.buyNft(n)
						}
					}
				},
				[t._v("Buy")]), e("span", {
					staticClass: "buy",
					on: {
						click: function(a) {
							return t.exchang_list()
						}
					}
				},
				[t._v("Exchange")])])])])
			})), 0)])])]) : t._e(), "CH" === t.$store.getters.language ? e("div", [e("main", {
				staticClass: "cs-page-wrapper position-relative"
			},
			[e("header", {
				staticClass: "cs-header navbar navbar-expand-md navbar-dark navbar-sticky navbar-floating pt-2 pb-1",
				staticStyle: {
					background: "#000000"
				}
			},
			[e("div", {
				staticClass: "container px-0 px-xl-3"
			},
			[e("a", {
				staticClass: "navbar-brand order-md-1 mr-md-5 mr-0 pr-lg-2",
				attrs: {
					href: "#top",
					"data-scroll": ""
				}
			},
			[t._v(" SHIB NFT ")]), e("div", {
				staticClass: "d-flex align-items-center order-md-3"
			},
			[e("div", {
				class: ["choose-lang", t.show_choose_lans ? "show": ""]
			},
			[e("div", {
				staticClass: "title",
				on: {
					click: function(a) {
						t.show_choose_lans = !t.show_choose_lans
					}
				}
			},
			[e("span", [t._v("EN")]), t._v("ENGLISH")]), e("div", {
				staticClass: "options"
			},
			[e("a", {
				staticClass: "choose-lang-option",
				attrs: {
					href: "javascript:;",
					"data-lang": "en"
				},
				on: {
					click: function(a) {
						t.$store.commit("SET_LANGUAGE", "EN"),
						t.show_choose_lans = !1
					}
				}
			},
			[e("span", [t._v("EN")]), t._v("ENGLISH")]), t._m(5)])]), t._m(6)]), e("nav", {
				staticClass: "collapse navbar-collapse order-md-2",
				attrs: {
					id: "navbarCollapse1"
				}
			},
			[e("ul", {
				staticClass: "navbar-nav mr-auto"
			},
			[e("li", {
				staticClass: "nav-item"
			},
			[e("router-link", {
				staticClass: "nav-link",
				attrs: {
					to: "/"
				}
			},
			[t._v("主页")])], 1), e("li", {
				staticClass: "nav-item"
			},
			[e("router-link", {
				staticClass: "nav-link",
				attrs: {
					to: "/nft",
					target: "_blank"
				}
			},
			[t._v("NFT发售 ")])], 1), t._m(7)])])])]), e("section", {
				staticClass: "nft-list"
			},
			[t._m(8), t._m(9), e("ul", {
				staticClass: "pro_item_list clearfix"
			},
			t._l(15, (function(a, n) {
				return e("li", {
					key: n,
					staticClass: "each-item"
				},
				[e("div", {
					staticClass: "picture"
				},
				[e("img", {
					attrs: {
						src: s("cbf8")("./" + (a - 1) + ".png"),
						width: "100%"
					}
				})]), e("div", {
					staticClass: "lans"
				},
				[e("div", {
					staticClass: "l1 "
				},
				[t._v("00" + t._s(a))]), e("div", {
					staticClass: "l2 "
				},
				[t._v(t._s(t.getPrice(a)) + " BNB "), e("span", [e("img", {
					attrs: {
						src: s("4b54"),
						width: "15"
					}
				}), t._v(" " + t._s(t.favourite[a - 1]))])]), e("div", {
					staticClass: "l3"
				},
				[e("span", {
					staticClass: "buy",
					on: {
						click: function(a) {
							return t.buyNft(n)
						}
					}
				},
				[t._v("购买")]), e("span", {
					staticClass: "buy",
					on: {
						click: function(a) {
							return t.exchang_list()
						}
					}
				},
				[t._v("交易")])])])])
			})), 0)])])]) : t._e(), t.win_pic_open ? e("section", {
				staticClass: "win",
				on: {
					click: function(a) {
						t.win_pic_open = !1
					}
				}
			},
			[e("div", {
				staticClass: "bg"
			}), e("div", {
				staticClass: "content-pic"
			},
			[e("div", {
				staticClass: "close"
			},
			[t._v("X")]), e("img", {
				attrs: {
					src: s("cbf8")("./" + t.get_dogs_id + ".png")
				}
			}), "CH" === t.$store.getters.language ? e("p", [t._v("恭喜获得NFT!")]) : e("p", [t._v("Congratulations on getting NFT!")]), e("a", {
				staticClass: "link",
				attrs: {
					href: t.link,
					target: "_blank"
				}
			},
			[t._v(t._s(t.link.slice(0, 30)))])])]) : t._e(), e("Footer")], 1)
		},
		n = [function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("a", {
				staticClass: "choose-lang-option",
				attrs: {
					href: "javascript:;",
					"data-lang": "en"
				}
			},
			[s("span", [t._v("EN")]), t._v("ENGLISH")])
		},
		function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("button", {
				staticClass: "navbar-toggler ml-1 mr-n3",
				attrs: {
					type: "button",
					"data-toggle": "collapse",
					"data-target": "#navbarCollapse1",
					"aria-expanded": "false"
				}
			},
			[s("span", {
				staticClass: "navbar-toggler-icon"
			})])
		},
		function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("li", {
				staticClass: "nav-item"
			},
			[s("a", {
				staticClass: "nav-link",
				attrs: {
					href: "https://bscscan.com/token/0x9d8f057824fde5b061cb5e6ad90c485b7872ec12",
					target: "_blank"
				}
			},
			[t._v("Contract")])])
		},
		function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("div", {
				staticClass: "row justify-content-center mt-4 airdrop-block"
			},
			[s("div", {
				staticClass: "col-md-9 col-sm-10 col-12"
			},
			[s("div", {
				staticClass: "mb-sm-grid-gutter mb-4 pb-2 pb-lg-grid-gutter"
			},
			[s("div", {
				staticClass: "input-group-overlay"
			},
			[s("form", [s("input", {
				staticClass: "form-control appended-form-control",
				attrs: {
					name: "address",
					type: "text",
					placeholder: "Please search the nft name"
				}
			}), s("input", {
				attrs: {
					name: "ref",
					type: "hidden",
					value: ""
				}
			}), s("div", {
				staticClass: "input-group-append-overlay"
			},
			[s("span", {
				staticClass: "input-group-text"
			},
			[s("button", {
				staticClass: "btn btn-link px-0",
				attrs: {
					type: "submit"
				}
			},
			[s("i", {
				staticClass: "cxi-check mt-n1"
			})])])])])])])])])
		},
		function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("article", {
				staticClass: "desc"
			},
			[t._v("The total SHIB NFT is 8000."), s("br"), t._v(" 60 pieces of No.015, 120 pieces of No.014, "), s("br"), t._v(" 180 pieces of No.013, 240 pieces of No.012,"), s("br"), t._v(" 300 pieces of No.011, 360 pieces of No.010,"), s("br"), t._v(" 420 pieces of No.009, 480 pieces of No.008, "), s("br"), t._v(" 540 pieces of No.007, 600 pieces of No.006,"), s("br"), t._v(" 660 pieces of No.005, 720 pieces of No. 004,"), s("br"), t._v(" 780 pieces of No. 003, 840 pieces of No. 002"), s("br"), t._v(" and 1700 pieces of No. 001 ")])
		},
		function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("a", {
				staticClass: "choose-lang-option",
				attrs: {
					href: "javascript:;",
					"data-lang": "zh"
				}
			},
			[s("span", [t._v("CN")]), t._v("简体中文")])
		},
		function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("button", {
				staticClass: "navbar-toggler ml-1 mr-n3",
				attrs: {
					type: "button",
					"data-toggle": "collapse",
					"data-target": "#navbarCollapse1",
					"aria-expanded": "false"
				}
			},
			[s("span", {
				staticClass: "navbar-toggler-icon"
			})])
		},
		function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("li", {
				staticClass: "nav-item"
			},
			[s("a", {
				staticClass: "nav-link",
				attrs: {
					href: "https://bscscan.com/token/0x9d8f057824fde5b061cb5e6ad90c485b7872ec12",
					target: "_blank"
				}
			},
			[t._v("合约")])])
		},
		function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("div", {
				staticClass: "row justify-content-center mt-4 airdrop-block"
			},
			[s("div", {
				staticClass: "col-md-9 col-sm-10 col-12"
			},
			[s("div", {
				staticClass: "mb-sm-grid-gutter mb-4 pb-2 pb-lg-grid-gutter"
			},
			[s("div", {
				staticClass: "input-group-overlay"
			},
			[s("form", [s("input", {
				staticClass: "form-control appended-form-control",
				attrs: {
					name: "address",
					type: "text",
					placeholder: "请搜索nft名称"
				}
			}), s("input", {
				attrs: {
					name: "ref",
					type: "hidden",
					value: ""
				}
			}), s("div", {
				staticClass: "input-group-append-overlay"
			},
			[s("span", {
				staticClass: "input-group-text"
			},
			[s("button", {
				staticClass: "btn btn-link px-0",
				attrs: {
					type: "submit"
				}
			},
			[s("i", {
				staticClass: "cxi-check mt-n1"
			})])])])])])])])])
		},
		function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("article", {
				staticClass: "desc"
			},
			[t._v("SHIB NFT总量8000。"), s("br"), t._v(" 015号总量60枚，014号总量120枚，"), s("br"), t._v(" 013号总量180枚，012号总量240枚，"), s("br"), t._v(" 011号总量300枚，010号总量360枚，"), s("br"), t._v(" 009号总量420枚，008号总量480枚，"), s("br"), t._v(" 007号总量540枚，006号总量600枚，"), s("br"), t._v(" 005号总量660枚，004号总量720枚，"), s("br"), t._v(" 003号总量780枚，002号总量840枚，"), s("br"), t._v(" 001号总量1700枚 ")])
		}],
		i = s("53ca"),
		r = s("1da1"),
		c = (s("96cf"), s("b680"), s("9911"), s("0a92"), s("fd2d")),
		o = s("901e"),
		l = s.n(o),
		d = s("cf45"),
		u = (s("bc3a"), {
			name: "Nft",
			data: function() {
				return {
					win_pic_open: !1,
					link: "https://bscscan.com/tx/",
					get_dogs_id: 1,
					show_choose_lans: !1,
					priceOfNft: .1,
					address: "",
					favourite: [3087, 1777, 2071, 2387, 3093, 5999, 2223, 1876, 1314, 1458, 2835, 1290, 3210, 2289, 2608]
				}
			},
			components: {
				Footer: c["a"]
			},
			mounted: function() {
				this.checkAddrChange();
				var t = this;
				"EN" === t.$store.getters.language ? document.title = "SHIB NFT Metaverse": document.title = "SHIB NFT 元宇宙"
			},
			methods: {
				exchang_list: function() {
					var t = this;
					"EN" === t.$store.getters.language ? alert("Coming Soon") : alert("即将上线")
				},
				getPrice: function(t) {
					var a = new l.a(t).times(this.priceOfNft).toFixed(1);
					return a
				},
				checkAddrChange: function() {
					var t = this;
					setInterval((function() {
						"undefined" === typeof window.ethereum ? t.address = "": t.address != ethereum.selectedAddress && (t.address = ethereum.selectedAddress)
					}), 3e3)
				},
				buyNft: function(t) {
					var a = this;
					return Object(r["a"])(regeneratorRuntime.mark((function s() {
						var e, n, r;
						return regeneratorRuntime.wrap((function(s) {
							while (1) switch (s.prev = s.next) {
							case 0:
								if (e = a, void 0 !== Object(i["a"])(window.ethereum) && void 0 !== a.address) {
									s.next = 4;
									break
								}
								return "EN" === e.$store.getters.language ? alert("Please access it in the BSC wallet.") : alert("请在BSC钱包中访问。"),
								s.abrupt("return");
							case 4:
								return n = new l.a(t + 1).times(.1).times(1e18).toFixed(0),
								s.next = 7,
								Object(d["a"])().nftContract.methods.buy(t + 1).send({
									from: a.address,
									value: n
								});
							case 7:
								r = s.sent,
								a.link = a.link + r.transactionHash,
								a.get_dogs_id = t - 1,
								a.win_pic_open = !0;
							case 11:
							case "end":
								return s.stop()
							}
						}), s)
					})))()
				}
			},
			updated: function() {}
		}),
		v = u,
		p = (s("e4c6"), s("2877")),
		_ = Object(p["a"])(v, e, n, !1, null, "9765ae00", null);
		a["default"] = _.exports
	},
	e328: function(t, a, s) {},
	e4c6: function(t, a, s) {
		"use strict";
		s("e328")
	},
	e614: function(t, a, s) {
		"use strict";
		s("0e0e")
	},
	f820: function(t, a, s) {
		"use strict";
		s.r(a);
		var e = function() {
			var t = this,
			a = t.$createElement;
			t._self._c;
			return t._m(0)
		},
		n = [function() {
			var t = this,
			a = t.$createElement,
			s = t._self._c || a;
			return s("div", {
				staticClass: "about"
			},
			[s("h1", [t._v("This is an abouffft page")])])
		}],
		i = s("2877"),
		r = {},
		c = Object(i["a"])(r, e, n, !1, null, null, null);
		a["default"] = c.exports
	}
}]);
//# sourceMappingURL=about.d7085d61.js.map
