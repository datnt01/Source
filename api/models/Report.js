/**
 * Report.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	id:{
  		type: 'integer',
  		primaryKey: true,
    	autoIncrement: true
  	},
  	content:{
  		type:'text',
  		defaultsTo: ''
  	},
  	resolve:{
  		type:'boolean',
  		defaultsTo: false
  	},
  	questionId:{
  		model:'question'
  	},
  	userId:{
  		model:'user'
  	},

  }
};
