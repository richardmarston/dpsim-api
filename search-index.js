var searchIndex = JSON.parse('{\
"dpsim_api":{"doc":"DPSIM Service Rest API for controlling DPSim analyzer","t":[0,0,0,5,5,0,3,11,11,11,12,11,11,11,11,11,11,12,11,12,5,5,12,11,11,12,12,11,11,11,11,5,5,5,5,5,5,5,5,5,5,5,5,13,13,3,3,3,3,3,6,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,14,11,11,11,11,11,5,5,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,5,5,5,5,5,12,12,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,11,11,11,11,11,11,12,12,12,12,5,5,5,5,5,5,5,12,5,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["amqp","db","file_service","get_docs","main","routes","AMQPSimulation","borrow","borrow_mut","deserialize","error","fmt","from","from_simulation","into","into_collection","json_schema","load_profile_url","mapped","model_url","publish","request_simulation","results_file","schema_name","serialize","simulation_id","simulation_type","try_from","try_into","type_id","vzip","get_connection","get_new_simulation_id","read_simulation","read_string","read_u64","write_simulation","write_string","write_u64","convert_id_to_url","create_results_file","get_data_from_url","post_results_file","Outage","Powerflow","Route","RoutesContext","Simulation","SimulationError","SimulationForm","SimulationResult","SimulationType","__clone_box","__clone_box","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","collapse_id","create_endpoint_with_doc","default","default","deserialize","deserialize","deserialize","document_link","document_link_page","err","error","finalize","finalize","fmt","fmt","fmt","fmt","form_multi_parameter","form_multi_parameter","form_parameter","from","from","from","from","from","from","from","from_value","get_api","get_post_simulation","get_root","get_routes","get_simulation_id","get_simulations","heading_id","http_status_code","incomplete_form","init","init","into","into","into","into","into","into","into_collection","into_collection","into_collection","into_collection","into_collection","into_collection","json_schema","json_schema","json_schema","json_schema","link","load_profile_id","load_profile_id","mapped","mapped","mapped","mapped","mapped","mapped","method","model_id","model_id","name","okapi_add_operation_for_get_api_","okapi_add_operation_for_get_post_simulation_","okapi_add_operation_for_get_root_","okapi_add_operation_for_get_simulation_id_","okapi_add_operation_for_get_simulations_","okapi_add_operation_for_post_simulation_","parse_simulation_form","path","post_simulation","push_data","push_data","push_value","push_value","respond_to","responses","responses","routes","schema_name","schema_name","schema_name","schema_name","serialize","serialize","serialize","serialize","serialize","serialize","simulation_id","simulation_type","simulation_type","to_owned","to_owned","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","vzip","vzip"],"q":["dpsim_api","","","","","","dpsim_api::amqp","","","","","","","","","","","","","","","","","","","","","","","","","dpsim_api::db","","","","","","","","dpsim_api::file_service","","","","dpsim_api::routes","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","","","The main entry point for Rocket","","Struct for encapsulation Simulation details","","","","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","Function for requesting a new Simulation id from the Redis …","Function for reading a Simulation from a Redis DB","Utility function for reading an int value from a key in a …","Utility function for reading an int value from a key in a …","Function for writing a Simulation into a Redis DB","Utility function for writing an int value to a key in a …","Utility function for writing an int value to a key in a …","Function to get a URL from sogno-file-service using a file …","","","","","","A struct used for sharing info about a route with a …","A struct used for sharing info about some routes with a …","Struct for encapsulation Simulation details","","Form for submitting a new Simulation","","Enum for the various Simulation types","","","","","","","","","","","","","","","","","","","","","","","","","","Create a link to the documentation page for the given …","Create an html button linking to the documentation page …","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","","SKIPPING OPENAPI GEN","","Redirects to /api","Returns the list of routes that we have defined","Get a simulation using the ID","Get array of all simulations","","","Handler for when an incomplete form has been submitted","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Create a simulation","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,2,3,4,2,5,6,3,7,4,2,5,6,3,7,2,3,2,3,3,0,2,6,4,2,5,0,0,6,4,2,5,4,2,5,6,2,5,2,4,2,5,6,6,3,7,2,0,0,0,0,0,0,3,6,0,2,5,4,2,5,6,3,7,4,2,5,6,3,7,4,2,5,6,3,4,5,4,2,5,6,3,7,3,4,5,3,0,0,0,0,0,0,0,3,0,2,5,2,5,6,6,6,7,4,2,5,6,4,2,5,6,3,7,4,4,5,2,3,2,4,2,5,6,3,7,4,2,5,6,3,7,4,2,5,6,3,7,4,2,5,6,3,7],"f":[null,null,null,[[],["swaggeruiconfig",3]],[[],["result",4,[["error",3]]]],null,null,[[["",0]],["",0]],[[["",0]],["",0]],[[],["result",4]],null,[[["",0],["formatter",3]],["result",6]],[[]],[[["json",3],["string",3],["string",3],["string",3]],["amqpsimulation",3]],[[]],[[],["smallvec",3]],[[["schemagenerator",3]],["schema",4]],null,[[],["smallvec",3]],null,[[["vec",3,[["u8",0]]]]],[[["amqpsimulation",3]]],null,[[],["string",3]],[[["",0]],["result",4]],null,null,[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[]],[[],["redisresult",6,[["connection",3]]]],[[],["redisresult",6,[["u64",0]]]],[[["u64",0]],["result",4,[["simulation",3],["rediserror",3]]]],[[["string",3]],["redisresult",6,[["string",3]]]],[[["string",3]],["redisresult",6,[["u64",0]]]],[[["string",3],["simulation",3]],["result",4,[["rediserror",3]]]],[[["string",3],["string",3]],["redisresult",6]],[[["string",3],["u64",0]],["redisresult",6]],[[["str",0]]],[[]],[[["str",0]]],[[]],null,null,null,null,null,null,null,null,null,[[["",0],["private",3]]],[[["",0],["private",3]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["simulationtype",4]],[[["",0]],["route",3]],[[["",0],["",0]]],[[["",0],["",0]]],null,null,[[]],[[],["simulationerror",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["str",0]],["string",3]],[[["str",0]],["template",3]],null,null,[[],["result",4,[["errors",3]]]],[[],["result",4,[["errors",3]]]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["openapigenerator",3],["string",3],["bool",0]],["result",4,[["vec",3,[["parameter",3],["global",3]]],["openapierror",3]]]],[[["openapigenerator",3],["string",3],["bool",0]],["result",4,[["vec",3,[["parameter",3],["global",3]]],["openapierror",3]]]],[[["openapigenerator",3],["string",3],["bool",0]],["result",4,[["parameter",3],["openapierror",3]]]],[[]],[[]],[[]],[[]],[[["error",3]]],[[]],[[]],[[["valuefield",3]],["result",4,[["errors",3]]]],[[]],[[]],[[]],[[],["vec",3,[["route",3]]]],[[["u64",0]]],[[]],null,null,[[["request",3]]],[[["options",3]]],[[["options",3]]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[["schemagenerator",3]],["schema",4]],[[["schemagenerator",3]],["schema",4]],[[["schemagenerator",3]],["schema",4]],[[["schemagenerator",3]],["schema",4]],null,null,null,[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],null,null,null,null,[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["json",3,[["simulationform",3]]]]],null,[[["json",3,[["simulationform",3]]]]],[[["fromfieldcontext",3],["datafield",3]],["pin",3,[["box",3,[["future",8],["global",3]]]]]],[[["fromformgeneratedcontext",3],["datafield",3]],["pin",3,[["box",3,[["future",8]]]]]],[[["valuefield",3]]],[[["valuefield",3]]],[[["request",3]],["result",6]],[[["openapigenerator",3]],["result",4,[["responses",3],["openapierror",3]]]],[[["openapigenerator",3]],["result",4,[["responses",3],["openapierror",3]]]],null,[[],["string",3]],[[],["string",3]],[[],["string",3]],[[],["string",3]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[["",0]],["result",4]],[[["",0]],["result",4]],null,null,null,[[["",0]]],[[["",0]]],[[["",0]],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]]],"p":[[3,"AMQPSimulation"],[4,"SimulationType"],[3,"Route"],[3,"Simulation"],[3,"SimulationForm"],[3,"SimulationError"],[3,"RoutesContext"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};