const EOF = Symbol("EOF");

let currentToken = null;

let currentAttribute = null;

let stack = [{
	type: "document",
	children: []
}];

let currentTextNode = null;

function data(c) {
	if (c == "<") {
		return tagOpen;
	} else if (c == EOF) {
		return;
	} else {
		return data;
	}
}

function tagOpen(c) {
	if (c == "/") {
		return endTagOpen;
	} else if (c.match(/^[a-zA-Z]$/)) {
		return tagName(c);
	} else {
		return;
	}
}

function endTagOpen(c){
	if(c.match(/^[a-zA-Z]$/)){
		currentToken = {
			type:"endTag",
			tagName:""
		}
		return tagName(c);
	}else if(c == ">"){
		
	}else if(c == EOF){
		
	}else {
		
	}
}

function tagName(c) {
	if (c.match(/^[\t\n\f ]$/)) {
		return beforeAttrbuteName;
	} else if (c == "/") {
		return selfClosingStartTag;
	} else if (c.match(/^[a-zA-Z]$/)) {
		return tagName;
	} else if (c == ">") {
		return data;
	} else {
		return tagName;
	}
}

function beforeAttributeName(c) {
	if (c.match(/^[\t\n\f ]$/)) {
		return beforeAttributeName;
	} else if (c == "/" || c == ">" || c == EOF) {
		return afterAttributeName;
	} else if (c == "=") {

	} else {
		currentAttribute = {
			name: "",
			value: ""
		}
		return attributeName(c);
	}
}

function attributeName(c) {
	if (c.match(/^[\t\n\f ]$/) || c == "/" || c == ">" || c == EOF) {
		return afterAttributeName(c);
	} else if (c == "=") {
		return beforeAttributeValue;
	} else if (c == "\u0000") {

	} else if (c == "\"" || c == "'" || c == "<") {

	} else {
		currentAttribute.name += c;
		return attributeName;
	}
}

function beforeAttributeValue(c) {
	if (c.match(/^[\t\n\f ]$/) || c == "/" || c == ">" || c == EOF) {
		return beforeAttributeValue;
	} else if (c == "\"") {
		return doubleQuotedAttributeValue;
	} else if (c == "\'") {
		return singleQuotedAttributeValue;
	} else if (c == ">") {
		return data;
	} else {
		return UnquoteAttributeValue(c);
	}
}

function doubleQuotedAttributeValue(c) {
	if (c == "\"") {
		// return afterQuoted
	}
}

function singleQuotedAttributeValue(c) {
	
}

function selfClosingStartTag(c){
	
}

module.exports.parseHTML = function parseHTML(html) {
	let state = data;
	for (let c of html) {
		state = state(c);
	}
	state = state(EOF);
}
