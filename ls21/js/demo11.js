try{
    console.log("try_statements");
    throw "Some Error";
}
catch(e){
    console.warn("catch_statements",e);
}
finally{
    console.log("finally_statements");
}



try{
	try{
		throw "oops";
	}
	catch(ex){
		console.error("inner",ex);
	}
	finally{
		console.log("finally");
	}
}
catch(ex){
	console.error("outer",ex);
}


