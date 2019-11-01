function lexer(code){
    tokens=[]
    index = -1

    var lastTokenized = " "; // stores last accepted tokenvalue in case something (negative numbers) depend on it
    
    while (index<code.length-1){
        index +=1
        c = code[index]
		
        if (c == " " || c == "\n"){    
            continue
        }
        
        else if (c == ";"){ 
            tokens.push([c,""])
        }
	    
	else if (c == "#"){ //comments
            while (c != "\n"){
            	index +=1
            	c = code[index]
            }
        }

        else if (c.match(/[0-9]/) || (c == "-" && code[index+1].match(/[0-9]/) && lastTokenized.match(/[\n (+-/*%=]/)) ){ // "||" necessary to prevent mixups between x-1 and print(-1)
            n = c
            index +=1
            c = code[index]
		
            while (c.match(/[0-9\.]/)){
                n += c
                index +=1
                c = code[index]
            }
            tokens.push(["number",n])
            index -= 1 //prevent loosing data
            lastTokenized = code[index]
        }
        
        else if (c == "+" || c== "-" || c == "/" || c=="*"|| c=="%"){
            tokens.push(["operator",c])
            lastTokenized = c
        }
            
        else if (c == "\""){
		
	
            s = ""
            index +=1
            c = code[index]
		
            while (c != "\""){
                s += c
                index +=1
                c = code[index]
		
            }

            tokens.push(["string",s])
            lastTokenized = "string"
        }	
        
        else if(c.match(/[\<\>\(\)\{\}\[\],=]/)) {

            tokens.push([c,""])
            lastTokenized = c
        }
        
        if (c.match(/[a-zA-Z]/)){
            term = c
            index +=1
            c = code[index]
		
            while (c.match(/[a-zA-Z0-9_]/)){
                term += c
                index +=1
                c = code[index]
		
            }

            if (term=="if"||term=="else"||term=="for"||term=="while"){
                tokens.push(["statement",term])
            }
            else{
                tokens.push(["name",term])
            }
            index -= 1 //prevent loosing data
            lastTokenized = "name"
        }

	
    }
    tokens.push(["END","END"])
    return tokens
	
}

function parser(tokens,index,type,returnsymbol){

	var result = []
    var token = tokens[index]
    while (token[0] != returnsymbol){

		if (type == "assignment" && (token[0] == "<" || token[0] == ">")){ // special case used in for loops
			    break
		}

    	else if (type == "operation" && (token[0] == ")" || token[0] == "="|| token[0] == "<"|| token[0] == ">"|| token[0] == ",")){	//special case because multiple things end operations
    		break
    	}
	
		else if (token[0] == "statement"){
			var statement_type = token[1]
			var cond = parser(tokens,index+2,"condition","{")
			var ifTrue = parser(tokens, cond[1]+1, "ifTrue", "}")
			index = ifTrue[1] 
			var ifFalse = []
			if (tokens[ifTrue[1]+1][1] == "else"){
				ifFalse = parser(tokens,ifTrue[1]+2,"ifFalse","}")
			 	index = ifFalse[1]
			}
			result.push(["statement",[statement_type,[["condition",cond[0]], ["ifTrue", ifTrue[0]], ["ifFalse",ifFalse[0]]]]])	
		} 


    	else if (tokens[index+1][0] == "operator" && type != "operation"){
    		data = parser(tokens,index,"operation",";")
    		result.push(["operation", data[0]])
    		index = data[1]-1
    	}

    	
    	else if (token[0] == "operator" && type != "operation"){ // for foo() + value 
    		var operationStart = [result.pop()]
    		var tmp = operationStart.concat([["operator","+"]])
    		data = parser(tokens,index+1,"operation",";")
    		result.push(["operation", tmp.concat(data[0])])
    		index = data[1]-1
    	}
		

    	else if (token[0] == "number" || token[0] == "string" || token[0] == "operator" || token[0]=="="|| token[0]=="<"|| token[0]==">"){
    		result.push(token)
    	}
    	
    	else if(token[0] == "name"){
    		
    		if(token[1] == "var"){
    			data = parser(tokens,index+1,"assignment",";")
    			result.push(["assignment", data[0]])
    			index = data[1]-1
    		}
    		
    		else if (token[1] == "return"){
				data = parser(tokens,index+1,"assignment",";")
				result.push(["return", data[0]])
				index = data[1] - 1
			}

    		else if(token[1] == "func"){
    			var funcName = tokens[index+1][1]
    			var inputVars = parser(tokens,index+3,"input","{")
    			index = inputVars[1]
    			var funcContent = parser(tokens,index+1,"input","}")
    			index = funcContent[1]
    			result.push(["function", [funcName, [["input", inputVars], ["content", funcContent]] ]])
    		}
    		
    		else if (tokens[index+1][0] == "=" && type != "assignment" && type != "comparison"){
    			
    			if (tokens[index+2][0] == "="){
					if (type == "condition"){
						result.push(token)
					}
					else{
						data = parser(tokens,index,"comparison",")")
	    				result.push(["comparison",data[0]])
						index = data[1]
					}
    			}

    			else{

    				data = parser(tokens,index,"assignment",";")
    				result.push(["assignment", data[0]])
    				index = data[1]-1
    			}
    		}

    		else if (tokens[index+1][0] == "("){
    			
    			data = parser(tokens,index+2,"call",")")
    			result.push(["call", [token[1], data[0]]])
    			index = data[1] 
    		}
		
    		else{
    			result.push(token)
    		}
    	}
    	
    	else if (token[0] == "("){
    		data = parser(tokens,index+1,"bracket",")")
    		result.push(["bracket", data[0]])
    		index = data[1]
    	}

    	index+=1
    	token = tokens[index]
    }
    return [result, index]

	
}

function interpreter(exprs){
	
	var index = 0
	
	while (index < exprs.length){

		var expr = exprs[index]
		
		if (functionStack.length > 0){
			if (functionStack[functionStack.length-1][2] != undefined){
				break
			}
		}
		
		if (expr[0] == "number"){
			return parseFloat(expr[1])
		}

		else if (expr[0] == "string"){
			return expr[1]
		}

		else if (expr[0] == "name"){
			if (functionStack.length==0)
				return vars[expr[1]]
			else
				return functionStack[functionStack.length-1][1][expr[1]]
		}

		else if (expr[0] == "assignment"){
			var c = interpreter([expr[1][2]])
			if (functionStack.length == 0)
				vars[expr[1][0][1]] = c;
			else
				functionStack[functionStack.length-1][1][expr[1][0][1]] = c;
		}
		
		else if (expr[0] == "call"){
			
			var content = expr[1]

			if (content[0]+"()" in functions){ // functioncall for selvedefined function
				
				var functionContent = functions[content[0]+"()"]
				var argsNeeded = functionContent[0][1][0]
				var argsGiven = content[1]

				if (argsGiven.length == argsNeeded.length){ 

					var tempFunctionStack = [] // used so that no values get mixed up in for loop below (values would be taken from newest function in stack)

					tempFunctionStack.push([content[0]+"()", {}, undefined]) // undefined will be the returnvalue

					for (var i = 0; i < argsGiven.length; i++){
						tempFunctionStack[tempFunctionStack.length-1][1][argsNeeded[i][1]] = interpreter([argsGiven[i]]) // save function input arguments as variables
					}

					functionStack.push(tempFunctionStack[0])
					
					interpreter(functionContent[1][1][0])
					
					returnValue = functionStack[functionStack.length-1][2]
					
					functionStack.pop()
					
					if (returnValue != undefined)
						return returnValue
					


				}
				
				else{
					if(outputObject == undefined)
						console.log(content[0] + " takes " + argsNeeded.length + " arguments but " + argsGiven.length + " were given!")
					else 
						outputObject.value += content[0] + " takes " + argsNeeded.length + " arguments but " + argsGiven.length + " were given!"
				}
			}
			
			else{ //predefinded function?
				switch(content[0]){ 
					case "print":
						if (outputObject == undefined)
							console.log(interpreter(content[1]))
						else
							outputObject.value += interpreter(content[1]) + "\n"
						break
					
					case "len":
						return interpreter(content[1]).length
					
					default:
						if(outputObject == undefined)
							console.log("function \"" + content[0] + "\" undefined")
						else
							outputObject.value += "function \"" + content[0] + "\" undefined"
				}
			}
		}

		else if(expr[0] == "operation"){
			
			var content = expr[1]
			var res = interpreter([content[0]])
			
			for (var i=1;i<content.length;i+=2){

				switch(content[i][1]){
					case "+":
						res += interpreter([content[i+1]])
						break
					case "-":
						res -= interpreter([content[i+1]])
						break
					case "*":
						res *= interpreter([content[i+1]])
						break
					case "/":
						res /= interpreter([content[i+1]])
						break
					case "%":
						res = res % interpreter([content[i+1]])
						break
				}
			}
			return res
		}

		else if(expr[0] == "statement"){
			
			switch(expr[1][0]){
				
				case "if":
					
					if (interpreter([expr[1][1][0]])){ 	// condition
						interpreter(expr[1][1][1][1]) 	// ifTrue
					}
					
					else{
						if (expr[1][1][2][1] != undefined){
							interpreter(expr[1][1][2][1])	// ifFalse
						}
					}
					break

				case "while":
					while (interpreter([expr[1][1][0]])){
						interpreter(expr[1][1][1][1])
					}

				case "for":

					var condition = expr[1][1][0][1]

					var loopVarExpr = condition[0][1][0]
					var startValue = interpreter([condition[0][1][2]])
					var limit = interpreter([condition[2]])
					var loopCode = expr[1][1][1][1]

					if (condition[1][0] == "<"){
						if(functionStack.length == 0){ // not inside a function
							for (vars[loopVarExpr[1]]=startValue; vars[loopVarExpr[1]] < limit; vars[loopVarExpr[1]]++){
								interpreter(loopCode)
							}
						}
						else{
							for (functionStack[functionStack.length-1][1][loopVarExpr[1]]=startValue; functionStack[functionStack.length-1][1][loopVarExpr[1]] < limit; functionStack[functionStack.length-1][1][loopVarExpr[1]]++){
								interpreter(loopCode)
							}
						}
					}

					else if (condition[1][0] == ">"){
						if(functionStack.length == 0){ // not inside a function
							for (vars[loopVarExpr[1]]=startValue; vars[loopVarExpr[1]] > limit; vars[loopVarExpr[1]]++){
								interpreter(loopCode)
							}
						}
						else{
							for (functionStack[functionStack.length-1][1][loopVarExpr[1]]=startValue; functionStack[functionStack.length-1][1][loopVarExpr[1]] > limit; functionStack[functionStack.length-1][1][loopVarExpr[1]]++){
								interpreter(loopCode)
							}
						}
					}
			}
		}

		else if(expr[0] == "condition" || expr[0] == "comparison"){
			
			var content = expr[1]
			switch(content[1][0]){ // type of comparison
				case "=":

					if (interpreter([content[0]]) == interpreter([content[3]])){
						
						return true
					}

					else{
						return false
					}

				case "<":
					if (interpreter([content[0]]) < interpreter([content[2]])){
						return true
					}

					else{
						return false
					}

				case ">":
					if (interpreter([content[0]]) > interpreter([content[2]])){
						return true
					}

					else{
						return false
					}
			}
		}

		else if(expr[0] == "bracket"){
			return interpreter(expr[1])
		}

		else if(expr[0] == "function"){ // store defined function
			var content = expr[1]
			var functionname = content[0] + "()"
			var functiondata = content[1]
			
			functions[functionname] = functiondata
		}
		
		else if (expr[0] == "return"){
			functionStack[functionStack.length-1][2] = interpreter(expr[1])
			break
		}

		index+=1
	}
}


function interpret(code, output){
	if (code.length>0){
		outputObject = output
		if (outputObject != undefined){
			outputObject.value = ""
		}
		functions = {} // seperate from vars because it doesnt have a local scope
		vars = {}
		functionStack = [] //local variables and return statements dont exist for now
		interpreter(parser(lexer(code),0,"code","END")[0])
	}
}
