import DS from "ember-data";

 var pointMe = DS.Model.extend({
   friendsEmail: DS.attr("string"),
   userEmail: DS.attr("string"),
   location: DS.attr("string"),
   comment: DS.attr("string"),
   imgurID: DS.attr('string'),
   imgurDeleteHash: DS.attr('string')
});

 export default pointMe;