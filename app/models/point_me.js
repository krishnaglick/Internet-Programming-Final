import DS from "ember-data";
import Ember from "ember";

var PointMe = DS.Model.extend({
   prop: DS.attr("string");
});

//PointMe.FIXTURES

export default PointMe;