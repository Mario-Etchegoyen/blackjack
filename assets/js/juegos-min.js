const miModulo = (() => { "use strict"; let e = [], t = ["C", "H", "S", "D"], a = ["A", "J", "Q", "K"], r = 0, s = [], n = [], l = document.querySelector("#btnNuevo"), i = document.querySelector("#btnPedir"), c = document.querySelector("#btnDetener"), d = document.querySelectorAll("small"), o = document.querySelector("#jugador-cartas"), $ = document.querySelector("#computadora-cartas"), u = (t = 1) => { e = g(), console.log(e), n = [], r = 0; for (let a = 0; a <= t; a++)n.push[0]; d[0].innerText = 0, d[1].innerText = 0, $.innerHTML = "", o.innerText = "", i.disabled = !1, c.disabled = !1 }, g = () => { for (let r of (e = [], t)) { for (let s = 2; s <= 10; s++)e.push(s + r); for (let n of a) e.push(n + r) } return e = _.shuffle(e) }; u(); let p = () => { if (e.length > 0) return e.pop(); throw "El mazo esta vacio" }, b = e => { let t = e.substring(0, e.length - 1); return isNaN(t) ? "A" === t ? 11 : 10 : 1 * t }, m = (e = 0) => r += e, f = e => { e > 21 && (i.disabled = !0, c.disabled = !0, h(0)) }, h = e => { c.disabled = !0, i.disabled = !0, r = 0; do { let t = p(), a = b(t), n = m(a), l = document.createElement("img"); l.classList.add("carta"), l.src = `./assets/imagenes/cartas/${t}.png`, $.append(l), setTimeout(() => { d[1].innerText = n }, 100) } while (r < e && r <= 21); setTimeout(() => { r === e ? alert("Nadie gana!") : (r <= 21 ? (alert("Gana COMPU"), s[0]++) : alert("Felicitaciones! Ganaste"), s[1]++) }, 200) }; i.addEventListener("click", () => { let e = p(), t = b(e), a = m(t), r = document.createElement("img"); r.src = `./assets/imagenes/cartas/${e}.png`, o.append(r), r.classList.add("carta"), setTimeout(() => { d[0].innerText = a }, 200), f(a) }), l.addEventListener("click", () => { u() }), c.addEventListener("click", () => { h(r) }) })();