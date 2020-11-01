module.exports = {
	_200(data={}){
		return {
			statusCode : 200,
			headers : {
				'Content-Type':'application/json'	
			},
			body : JSON.stringify(data)
		}

	},
	_400(data={}){
		return {
			statusCode : 400,
			headers : {
				'Content-Type':'application/json'	
			},
			body : JSON.stringify({message:'Invalid request format'})
		}
	},
	_404(data={}){
		return {
			statusCode : 404,
			headers : {
				'Content-Type':'application/json'	
			},
			body : JSON.stringify({message:'Item not found'})
		}
	}
}