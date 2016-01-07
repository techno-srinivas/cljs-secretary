// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_secretary.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('bouncer.validators');
goog.require('bouncer.core');
goog.require('goog.events');
var action__6604__auto___6618 = (function (params__6605__auto__){
if(cljs.core.map_QMARK_.call(null,params__6605__auto__)){
var map__6614 = params__6605__auto__;
var map__6614__$1 = ((((!((map__6614 == null)))?((((map__6614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6614):map__6614);
var params = map__6614__$1;
return console.log([cljs.core.str("User: "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__6605__auto__)){
var map__6616 = params__6605__auto__;
var map__6616__$1 = ((((!((map__6616 == null)))?((((map__6616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6616):map__6616);
var params = map__6616__$1;
return console.log([cljs.core.str("User: "),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/users/:id",action__6604__auto___6618);

secretary.core.dispatch_BANG_.call(null,"/users/gf3");

//# sourceMappingURL=core.js.map