import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
   friendsEmail: DS.attr("string"),
   myEmail: DS.attr("string"),
   address: DS.attr("string"),
   comment: DS.attr("string"),
   image: DS.attr()
});