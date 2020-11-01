const AWS = require('aws-sdk');

let options = {};

const tableName = process.env.tableName;
console.log(tableName)

if(process.env.IS_OFFLINE){
	options = {
		region: 'ap-south-1',
    	endpoint: 'http://localhost:8000'
    }
	AWS.config.update({
	  region: //region name,
	  accessKeyId: // accesskey,
	  secretAccessKey: // secret access,
	  endpoint: 'http://localhost:3000'
	});
}

let docClient = new AWS.DynamoDB.DocumentClient(options);

module.exports = {
	get(keyname,tableName){
		let params = {
		    TableName: tableName,
		    Key:{
		        "ID": keyname
		    }
		}
		docClient.get(params, function(err, data) {
		    if (err) {
		        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
		    } else {
		        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
		        return data;
		    }
		});
	},
	put(data,tableName){
		data.ID = 4;
		let params = {
		    TableName: tableName,
		    Item: data
		}
		docClient.put(params, function(err, data) {
		    if (err) {
		        console.error("Unable to write item. Error JSON:", JSON.stringify(err, null, 2));
		    } else {
		        console.log("putItem succeeded:", JSON.stringify(data, null, 2));
		        return data;
		    }
		});
	}
}