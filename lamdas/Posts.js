const responses = require('./Responses');
const tableName = process.env.tableName;
const Db = require('../common/Dynamodb');
module.exports = {
	getPosts: async (event) => {
		console.log(event.pathParameters.ID)
		if(!(event.pathParameters.ID) || !(event.pathParameters)){
			return responses._400(event);
		}
		let data = await Db.get(event.pathParameters.ID,tableName);
		if(!data){
			return responses._404(data);
		}
		return responses._200(data);
	},
	createPost: async (event) => {
		if(!(JSON.parse(event.body))){
			return responses._400(event);
		}
		console.log(event.body);

		let status = await Db.put(event.body,tableName);
		console.log("status is the "+status);
		return responses._200(status);
	}
}