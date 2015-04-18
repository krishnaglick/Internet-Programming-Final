import DS from "ember-data";

 var point = DS.Model.extend({
   friendsEmail: DS.attr("string"),
   userEmail: DS.attr("string"),
   location: DS.attr("string"),
   comment: DS.attr("string"),
   imgurLink: DS.attr('string'),
   imgurDeleteHash: DS.attr('string')
});

 export default point;
