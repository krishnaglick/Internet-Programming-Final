import DS from "ember-data";

var user = DS.Model.extend({
    username: DS.attr("string"),
    password: DS.attr("string"),
    email: DS.attr("string")
});

export default user;
