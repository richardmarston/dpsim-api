var searchIndex = JSON.parse('{\
"dpsim_api":{"doc":"DPSIM Service Rest API for controlling DPSim analyzer","t":[13,13,3,4,11,0,11,11,11,11,11,11,0,11,11,11,12,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,5,11,11,12,11,11,0,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,5,5,5,5,5,5,5,5,5,5,5,5,3,3,3,3,3,3,6,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,14,11,11,5,5,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,5,5,5,5,5,5,12,12,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,11,11,11,11,11,11,12,12,12,12,12,5,5,5,5,5,5,5,5,5,12,5,11,11,5,11,11,11,12,11,11,11,11,11,11,11,11,12,12,12,12,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Outage","Powerflow","Simulation","SimulationType","__clone_box","amqp","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","db","default","deserialize","deserialize","error","file_service","finalize","fmt","fmt","form_multi_parameter","form_parameter","from","from","from_value","init","into","into","into_collection","into_collection","json_schema","json_schema","load_profile_data","main","mapped","mapped","model_id","push_data","push_value","routes","schema_name","schema_name","serialize","serialize","simulation_id","simulation_type","to_owned","to_string","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip","publish","request_simulation","get_connection","get_new_simulation_id","read_simulation","read_string","read_u64","write_simulation","write_string","write_u64","convert_id_to_url","get_data_from_url","AMQPSimulation","Route","RoutesContext","SimulationError","SimulationFormStruct","SimulationFormStructJsonSchema","SimulationResult","__clone_box","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","collapse_id","create_endpoint_with_doc","default","deserialize","document_link","document_link_page","err","error","finalize","fmt","fmt","fmt","form_multi_parameter","from","from","from","from","from","from","from","from_simulation","get_api","get_post_simulation","get_root","get_routes","get_simulation_id","get_simulations","heading_id","http_status_code","incomplete_form","init","into","into","into","into","into","into","into_collection","into_collection","into_collection","into_collection","into_collection","into_collection","json_schema","json_schema","json_schema","json_schema","link","load_profile_data","load_profile_data","load_profile_data","mapped","mapped","mapped","mapped","mapped","mapped","method","model_id","model_id","model_url","name","okapi_add_operation_for_get_api_","okapi_add_operation_for_get_post_simulation_","okapi_add_operation_for_get_root_","okapi_add_operation_for_get_simulation_id_","okapi_add_operation_for_get_simulations_","okapi_add_operation_for_post_simulation_","okapi_add_operation_for_swagger_endpoint_","osstr_to_string","parse_simulation_form","path","post_simulation","push_data","push_value","read_zip","respond_to","responses","responses","routes","schema_name","schema_name","schema_name","schema_name","serialize","serialize","serialize","serialize","simulation_id","simulation_type","simulation_type","simulation_type","swagger_endpoint","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","vzip","vzip"],"q":["dpsim_api","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","dpsim_api::amqp","","dpsim_api::db","","","","","","","","dpsim_api::file_service","","dpsim_api::routes","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","Struct for encapsulation Simulation details","Enum for the various Simulation types","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","The main entry point for Rocket","","","","","","","","","","","","","","","","","","","","","","","","","","Function for requesting a new Simulation id from the Redis …","Function for reading a Simulation from a Redis DB","Utility function for reading an int value from a key in a …","Utility function for reading an int value from a key in a …","Function for writing a Simulation into a Redis DB","Utility function for writing an int value to a key in a …","Utility function for writing an int value to a key in a …","Function to get a URL from sogno-file-service using a file …","","Struct for encapsulation Simulation details","A struct used for sharing info about a route with a …","A struct used for sharing info about some routes with a …","","Form for submitting a new Simulation","","","","","","","","","","","","","","","","","","","","","","Create a link to the documentation page for the given …","Create an html button linking to the documentation page …","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","SKIPPING OPENAPI GEN","","Redirects to /api","Returns the list of routes that we have defined","Get a simulation using the ID","Get array of all simulations","","","Handler for when an incomplete form has been submitted","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Create a simulation","","","Function to read a zip file","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[1,1,0,0,1,0,2,1,2,1,1,1,0,1,2,1,2,0,1,2,1,1,1,2,1,1,1,2,1,2,1,2,1,2,0,2,1,2,1,1,0,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,5,6,3,7,8,4,5,6,3,7,8,3,3,3,0,6,8,0,0,6,8,4,4,6,8,4,4,5,6,6,3,7,8,8,0,0,0,0,0,0,3,6,0,4,4,5,6,3,7,8,4,5,6,3,7,8,4,5,6,8,3,4,5,8,4,5,6,3,7,8,3,4,5,8,3,0,0,0,0,0,0,0,0,0,3,0,4,4,0,6,6,6,7,4,5,6,8,6,3,7,8,8,4,5,8,0,3,4,5,6,3,7,8,4,5,6,3,7,8,4,5,6,3,7,8,4,5,6,3,7,8],"f":[null,null,null,null,[[["",0],["private",3]]],null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["simulationtype",4]],[[["",0],["",0]]],null,[[]],[[],["result",4]],[[],["result",4]],null,null,[[],["result",4,[["errors",3]]]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["openapigenerator",3],["string",3],["bool",0]],["result",4,[["vec",3,[["parameter",3],["global",3]]],["openapierror",3]]]],[[["openapigenerator",3],["string",3],["bool",0]],["result",4,[["parameter",3],["openapierror",3]]]],[[]],[[]],[[["valuefield",3]],["result",4,[["errors",3]]]],[[["options",3]]],[[]],[[]],[[],["smallvec",3]],[[],["smallvec",3]],[[["schemagenerator",3]],["schema",4]],[[["schemagenerator",3]],["schema",4]],null,[[],["result",4,[["error",3]]]],[[],["smallvec",3]],[[],["smallvec",3]],null,[[["fromfieldcontext",3],["datafield",3]],["pin",3,[["box",3,[["future",8],["global",3]]]]]],[[["valuefield",3]]],null,[[],["string",3]],[[],["string",3]],[[["",0]],["result",4]],[[["",0]],["result",4]],null,null,[[["",0]]],[[["",0]],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[]],[[]],[[["vec",3,[["u8",0]]]]],[[["amqpsimulation",3]]],[[],["redisresult",6,[["connection",3]]]],[[],["redisresult",6,[["u64",0]]]],[[["u64",0]],["result",4,[["simulation",3],["rediserror",3]]]],[[["string",3]],["redisresult",6,[["string",3]]]],[[["string",3]],["redisresult",6,[["u64",0]]]],[[["string",3],["simulation",3]],["result",4,[["rediserror",3]]]],[[["string",3],["string",3]],["redisresult",6]],[[["string",3],["u64",0]],["redisresult",6]],[[["str",0]]],[[["str",0]]],null,null,null,null,null,null,null,[[["",0],["private",3]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["route",3]],[[["",0],["",0]]],null,null,[[],["simulationerror",3]],[[],["result",4]],[[["str",0]],["string",3]],[[["str",0]],["template",3]],null,null,[[],["result",4,[["errors",3]]]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["openapigenerator",3],["string",3],["bool",0]],["result",4,[["vec",3,[["parameter",3],["global",3]]],["openapierror",3]]]],[[]],[[]],[[]],[[["error",3]]],[[]],[[]],[[]],[[["simulation",3]]],[[]],[[]],[[]],[[],["vec",3,[["route",3]]]],[[["u64",0]]],[[]],null,null,[[["request",3]]],[[["options",3]]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[["schemagenerator",3]],["schema",4]],[[["schemagenerator",3]],["schema",4]],[[["schemagenerator",3]],["schema",4]],[[["schemagenerator",3]],["schema",4]],null,null,null,null,[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],null,null,null,null,null,[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["osstr",3]],["string",3]],[[["form",3,[["simulationformstruct",3]]]]],null,[[["form",3,[["simulationformstruct",3]]]]],[[["fromformgeneratedcontext",3],["datafield",3]],["pin",3,[["box",3,[["future",8]]]]]],[[["valuefield",3]]],[[],["zipresult",6,[["vec",3,[["string",3]]]]]],[[["request",3]],["result",6]],[[["openapigenerator",3]],["result",4,[["responses",3],["openapierror",3]]]],[[["openapigenerator",3]],["result",4,[["responses",3],["openapierror",3]]]],null,[[],["string",3]],[[],["string",3]],[[],["string",3]],[[],["string",3]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[["",0]],["result",4]],null,null,null,null,[[]],[[["",0]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]]],"p":[[4,"SimulationType"],[3,"Simulation"],[3,"Route"],[3,"SimulationFormStruct"],[3,"SimulationFormStructJsonSchema"],[3,"SimulationError"],[3,"RoutesContext"],[3,"AMQPSimulation"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};